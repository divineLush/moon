const args = () => {
  const [executer, file, ...rest] = process.argv

  const getArgValue = (fullArgName, shortArgName) => {
    const idx = rest.findIndex(ar => ar === fullArgName || ar === shortArgName)
    if (idx === -1) {
      return null
    }

    return rest[idx + 1]
  }

  const city = getArgValue('--city', '-c')
  const key = getArgValue('--key', '-k')
  const help = rest.find(ar => ar === '--help' || ar === '-h')

  return { city, key, help }
}

export { args }
