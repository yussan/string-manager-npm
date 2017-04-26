export function toCamelCase(str)
{
    try{
      if(!str || typeof str != 'string') return str
  	  return str.split(' ').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join(' ')
    }catch(e){
      console.error(e)
    }
}