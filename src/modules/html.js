/**
 * @description function to strip html tags from a string
 * @param {string} str 
 * @returns {string}
 */
export function stripTags(str = '') {
  try {
    if (!str || typeof str != 'string') return str
    return str.replace(/(<([^>]+)>)/gi, '')
  } catch (e) {
    console.error(e)
  }
}

/**
 * @description function to create a plain text excerpt from html
 * @param {string} html , html string
 * @param {number} limit , maximum characters of the plain text excerpt
 */
export function htmlExcerpt(html = '', limit = 100) {
  try {
    if (!html || typeof html != 'string') return html
    const text = stripTags(html).trim()
    if (typeof limit != 'number' || limit < 0) return text
    if (text.length <= limit) return text
    if (limit === 0) return '...'

    let end = text.indexOf(' ', limit)

    // when the limit is inside the last word, fall back to the previous space
    if (end === -1) {
      end = text.lastIndexOf(' ', limit)
      if (end === -1) end = limit
    }

    return text.substring(0, end).trim() + '...'
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
