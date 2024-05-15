#!/usr/bin/node
import { args } from './helpers/args.js'
import { error, success, help } from './services/log.service.js'
import { save } from './services/storage.service.js'

(async () => {
  const ar = args()

  if (ar.h) {
    help()
  }

  if (ar.s) {
    // save city
  }

  if (ar.t) {
    // save token
    await save('token', ar.t)
  }
})()
