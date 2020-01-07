export function scaleNumber(number) {
  try {
    const num = parseInt(number)
    if (isNaN(num)) return number

    if (number === 0) return '0'
    const k = 1000
    const decimals = 2
    // source formating https://minershaven.fandom.com/wiki/Cash_Suffixes
    const sizes = [
      '',
      'K',
      'M',
      'B',
      'T',
      'qd',
      'Qn',
      'sx',
      'Sp',
      'O',
      'N',
      'de',
      'Ud',
      'DD',
      'tdD',
      'qdD',
      'QnD',
      'sxD',
      'SpD',
      'OcD',
      'NvD',
      'Vgn',
      'UVg',
      'DVg',
      'TVg',
      'qtV',
      'QnV',
      'SeV',
      'SPG',
      'OVG',
      'NVG'
    ]
    const i = Math.floor(Math.log(Math.abs(number)) / Math.log(k))
    return (
      parseFloat((number / Math.pow(k, i)).toFixed(decimals)) + '' + sizes[i]
    )
  } catch (e) {
    console.error(e)
  }
}
