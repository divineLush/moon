#!/usr/bin/node
import { args } from './helpers/args.js'

(() => {
  console.log('init')
  const arg = args()

  if (arg.h) {
    // render help
  }

  if (arg.s) {
    // save city
  }

  if (arg.t) {
    // save token
  }
  console.log(args())
})()
