/**
 * win32  -> 就是windows平台
 * darwin -> 就是mac平台
 *
 * 实战：有时候需要根据不同平台去做适配处理
 */
const platform = process.platform

/**
 * 用来改变目录的函数
 */
const chdir = process.chdir

/**
 * 当前工作目录：在哪个目录下执行这个文件，这个函数执行的结果就是哪个目录，动态变的
 *
 * 实战：在某个目录下执行webpack的时候，webpack会自动寻找这个执行目录下是否存在webpack.config.js，
 * 在哪个目录执行webpack命令，就会去哪里找webpack.config.js，里头就用了cwd工作目录。
 * 因此工作目录的意思就是执行命令的目录
 */
const cwd = process.cwd

/**
 * 环境变量：执行代码时传入的环境
 *
 * 实战：根据不同的环境变量判断当前不同的环境，进而执行不同的打包操作
 */
const env = process.env

/**
 * 参数：执行代码时传入的参数
 * 值：[
 *  '/Users/jaylen/.nvm/versions/node/v16.13.0/bin/node', // node执行程序
 * '/Users/jaylen/node/process/index.js', // node执行的文件
 * ...其他传入的参数
 * ]
 *
 * 实战： 做脚手架会根据用户传入的参数来生成对应的功能
 */
const argv = process.argv

const nextTick = process.nextTick

const processObj = {
  platform,
  chdir,
  cwd: cwd(),
  env,
  argv,
  nextTick
}
console.log(processObj)
