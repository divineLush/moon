import chalk from 'chalk'

const error = (msg) =>
  console.log(`${chalk.black.bgRed('ERROR')} ${chalk.red(msg)}`)

const success = (msg) =>
  console.log(`${chalk.black.bgGreen('SUCCESS')} ${chalk.green(msg)}`)

const info = (key, value) =>
  console.log(`${chalk.blue(key)} ${value}`)

const help = () =>
  console.log(`${chalk.black.bgCyan('HELP')}\n-c [CITY] set city\n-h help\n-k [API_KEY] save api key`)

export { error, success, info, help }
