#!/usr/bin/node
import { args } from './helpers/args.js'
import { help } from './services/log.service.js'
import { save } from './services/storage.service.js'
import { moon } from './services/api.service.js'

(async () => {
  const ar = args()

  if (ar.help || (!ar.city && !ar.key)) {
    help()
  }

  if (ar.key) {
    // save api key
    await save('apikey', ar.key)
  }

  if (ar.city) {
    // save city
    moon(ar.city)
  }
})()
