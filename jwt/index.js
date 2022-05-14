const crypto = require('crypto')

class JWT {
  toBase64Escape(base64) {
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  }

  base64URLUnEscape(data) {
    data += new Array(5 - (data.length % 4)).join('=')
    return data.replace(/\-/g, '+').replace(/_/g, '/')
  }

  toBase64(data) {
    return this.toBase64Escape(Buffer.from(JSON.stringify(data)).toString('base64'))
  }

  sign(data, secret) {
    return this.toBase64Escape(
      crypto.createHmac('sha256', secret).update(data).digest('base64')
    )
  }

  encode(content, secret) {
    const line1 = this.toBase64({ typ: 'JWT', alg: 'HS256' })
    const line2 = this.toBase64(content)
    const line3 = this.sign(`${line1}.${line2}`, secret)
    return `${line1}.${line2}.${line3}`
  }

  decode(token, secret) {
    const [line1, line2, line3] = token.split('.')
    if (this.sign(`${line1}.${line2}`, secret) === line3) {
      const content = Buffer.from(this.base64URLUnEscape(line2), 'base64').toString()
      return content
    } else {
      throw new Error('内容已被篡改！')
    }
  }
}

const jwt = new JWT()

const token = jwt.encode('jaylen', 'chan')
const content = jwt.decode(token, 'chan')

console.log('token =>', token)
console.log('content =>', content)
