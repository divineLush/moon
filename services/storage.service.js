import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const path = join(homedir(), './.config/weather/data.json')

const get = async (key) => {
  if (await exists(path)) {
    const file = await promises.readFile(path)
    const data = JSON.parse(file)

    return data[key]
  }

  return null
}

const save = async (key, value) => {
  try {
    const parsedFile = JSON.parse(await promises.readFile(path, { encoding: 'utf8' }))
    parsedFile[key] = value
    await promises.writeFile(path, JSON.stringify(parsedFile))
  } catch (error) {
    await promises.appendFile(path, JSON.stringify({ [key]: value }))
  }
}

const exists = async (filepath) => {
  try {
    await promises.stat(filepath)
    return true
  } catch (error) {
    return false
  }
}

export { get, save }
