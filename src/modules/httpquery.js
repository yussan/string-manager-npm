export function objToQuery(obj) {
  try {
    let str = []
    for (let p in obj) {
      if (obj.hasOwnProperty(p))
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
    return str.join('&')
  } catch (e) {
    console.error(e)
  }
}

export function queryToObj(str) {
  try {
    let b = {}
    if (str[0] === '?') str = str.replace('?', '')
    // ref:https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character/36263419?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    return (
      str.split('&').map(function(a) {
        ;(a = a.split(/=(.+)/)), (b[a[0]] = a[1])
      }),
      b
    )
  } catch (a) {
    console.error(a)
  }
}
