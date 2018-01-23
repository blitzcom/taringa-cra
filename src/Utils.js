export const humanizeNum = (number, decimals = 1) => {
  let original = number
  number = Math.abs(number)
  decimals = Math.pow(10, decimals)

  const abbreviations = ['k', 'm', 'b', 't']

  for(let i = abbreviations.length - 1; i >= 0; i--) {
    const size  = Math.pow(10, (i + 1) * 3)

    if (size <= number) {
      number = Math.round(number * decimals / size) / decimals

      if ((number === 1000) && (i < abbreviations.length - 1)) {
        number = 1;
        i++
      }

      number += abbreviations[i]

      break
    }
  }

  if (original < 0) {
    return `-${number.toString()}`
  }

  return number.toString()
}
