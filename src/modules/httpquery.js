export function objToQuery(obj)
{
    try
    {
      let str = []
      for(let p in obj)
      {
        if(obj.hasOwnProperty(p)) str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
      return str.join('&')
    }catch(e)
    {
      console.error(e)
    }
}

export function queryToObj(str)
{
    try
    {
      let obj = {}
      str.split('&').map(n => {
        n = n.split('=')
        obj[n[0]] = n[1]
      }) 
      return obj
    }catch(e)
    {
      console.error(e)
    }
}