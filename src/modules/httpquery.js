export function objToQuery(obj={})
{
    let str = []
    for(let p in obj)
    {
      if(obj.hasOwnProperty(p)) str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
    return str.join('&')
}

export function queryToObj(str='')
{
    let obj = {}
    if(str[0] != '?') str[0] = '?'
    str = str.slice(1).split('&')
    str.map(n => {
      n = n.split('=')
      obj[n[0]] = n[1]
    }) 
    return obj
}