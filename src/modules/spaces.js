export function toSingleSpace(str)
{
    try
    {
      if(!str || typeof str != 'string') return str
      str = str.trim()
      return str.replace(/\s\s+/g, ' ')
    }catch(e)
    {
      console.error(e)
    }
}