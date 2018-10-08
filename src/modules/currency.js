export function currencyFormat(number, symbol = '', delimeter = '.') {
  try {
    // convert number to string
    number = number.toString()
    return `${symbol ? `${symbol} ` : ''}${number.replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      '$1' + delimeter
    )}`
  } catch (e) {
    console.error(e)
  }
}
