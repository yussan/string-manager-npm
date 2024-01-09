import { toSingleSpace } from './spaces'

export function toSlug(str) {
  try {
    if (!str || typeof str != 'string') return str
    // normalize str
    str = toSingleSpace(
      str
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .toLowerCase()
        .trim()
    )
    return str
      .split(' ')
      .join('-')
      .replace(/[/.,(){}]/g, '')
  } catch (e) {
    console.error(e)
  }
}
