const args = () => {
  const res = {}
  const [executer, file, ...rest] = process.argv

  rest.forEach((value, index, array) => {
    if (value.charAt(0) !== '-') {
      return
    }

    if (index === array.length - 1) {
      res[value.substring(1)] = true
      return
    }

    if (array[index + 1].charAt(0) !== '-') {
      res[value.substring(1)] = array[index + 1]
      return
    }

    res[value.substring(1)] = true
  })

  return res
}

export { args }
