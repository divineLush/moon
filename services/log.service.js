import chalk from 'chalk'

export const error = (msg) =>
  console.log(`${chalk.black.bgRed('ERROR')} ${chalk.red(msg)}`)

export const success = (msg) =>
  console.log(`${chalk.black.bgGreen('SUCCESS')} ${chalk.green(msg)}`)

export const info = (key, value) =>
  console.log(`${chalk.blue(key)} ${value}`)

export const help = () =>
  console.log(`${chalk.black.bgCyan('HELP')}\n-c [CITY] set city\n-h help\n-k [API_KEY] save api key`)
