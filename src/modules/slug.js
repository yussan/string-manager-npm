import {toSingleSpace} from './spaces'

export function toSlug(str)
{
    try
    {
      if(!str || typeof str != 'string') return str
      str = toSingleSpace(str.trim())
  	  return str.split(' ').join('-').replace(/[/.,(){}]/g, '')
    }catch(e)
    {
      console.error(e)
    }
}