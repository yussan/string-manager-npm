export function toSingleSpace(str)
{
    try{
      if(!str || typeof str != 'string') return str
      return str.replace(/\s\s+/g, ' ')
    }catch(e){
      console.error(e)
    }
}

export function trim(str)
{
    try{
      if(!str || typeof str != 'string') return str
      return str.replace(/(^\s*)|(\s*$)/gi, ''). //removes leading and trailing spaces
        replace (/\n +/,"\n");
    }catch(e){
      console.error(e)
    }
}