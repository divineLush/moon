import http from 'http'
import { get } from './storage.service.js'
import { error, success, info } from './log.service.js'

const url = async (city) => {
  if (!city) {
    throw new Error('no city provided')
  }

  const apikey = await get('apikey')
  if (!apikey) {
    throw new Error('no api key provided')
  }

  const apiUrl = new URL('http://api.weatherapi.com/v1/astronomy.json')
  apiUrl.searchParams.append('key', apikey)
  apiUrl.searchParams.append('q', city)
  apiUrl.searchParams.append('dt', '')

  return apiUrl
}

export const moon = async (city) => {
  try {
    const endpoint = await url(city)
    let data = {}

    http.get(endpoint, (res) => {
      res.on('data', (chunk) => {
        data = {...data, ...JSON.parse(chunk)}
      })

      res.on('end', () => {
        success('there you go...')

        const { astro } = data?.astronomy
        if (astro) {
          info('RISE', astro.moonrise)
          info('SET', astro.moonset)
          info('PHASE', astro.moon_phase)
          info('ILLUMINATION', astro.moon_illumination)
        }
      })

    }).on('error', error)
  } catch (e) {
    error(e.message)
  }
}
