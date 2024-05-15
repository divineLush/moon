#!/usr/bin/node
import { args } from './helpers/args.js'
import { error, success, help } from './services/log.service.js'

(() => {
  const arg = args()

  error('err')
  success('succ')

  if (arg.h) {
    help()
  }

  if (arg.s) {
    // save city
  }

  if (arg.t) {
    // save token
  }
})()
