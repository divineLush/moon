#!/usr/bin/node
import { args } from './helpers/args.js'
import { help, info } from './services/log.service.js'
import { get, save } from './services/storage.service.js'
import { moon } from './services/api.service.js'

const CITY = 'city'
const API_KEY = 'apikey';

(async () => {
  const ar = args()

  if (ar.help) {
    help()

    return
  }

  if (ar.key) {
    // save api key
    await save(API_KEY, ar.key)
  }

  if (ar.city) {
    // save city
    await save(CITY, ar.city)
    moon(ar.city)
  }

  if (!ar.city && !ar.key) {
    const city = await get(CITY)
    const key = await get(API_KEY)

    if (city && key) {
      info('CITY', city)
      moon(city)
    } else {
      help()
    }
  }
})()
