export function currencyFormat(number, symbol ='') {
  try {
    // convert number to string
    number = number.toString()
    return `${symbol ? `${symbol} ` : ''}${number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`
  } catch(e) {
    console.error(e)
  }
}