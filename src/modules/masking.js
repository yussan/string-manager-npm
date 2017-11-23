export function toMask(str, start=0, end=str.length )
{
   try{
        if(typeof(str) != 'string') return str
        let result = []
        for (let i = 0; i < str.length; i++) {
            if(i >= start && i <=end && str[i] !== ' ') {
                result.push('*')
            }
            else {
                result.push(str[i])
            }
        }
        return result.join('')
    }catch(e)
    {
        console.error(e)
    }
}