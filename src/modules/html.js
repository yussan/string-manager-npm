export function stripTags(str = '') {
  try {
    if (!str || typeof str != 'string') return str
    return str.replace(/(<([^>]+)>)/gi, '')
  } catch (e) {
    console.error(e)
  }
}

/**
 * @description function to convert html \n to <br/>
 * @param {string} str , default is empty string / ''
 */
export function nl2br(str = '') {
  try {
    if (!str || typeof str != 'string') return str
    return str.replace(/\n/gi, '<br/>')
  } catch (e) {
    console.error(e)
  }
}
