import {trim, toSingleSpace} from './spaces'

export function toCamelCase(str)
{
    try{
      if(!str || typeof str != 'string') return str
      str = trim(str)
      str = toSingleSpace(str)
  	  return str.split(' ').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join(' ')
    }catch(e){
      console.error(e)
    }
}