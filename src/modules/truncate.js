export function truncate(str, limit = 10, suffix='')
{
   try{
        if(typeof(str) != 'string') return str
        const { length } = str
        if(limit < length) {
            let tmp_str = str.substring(0, limit)
            // alfanumeric character
            str = tmp_str.substr(0, Math.min(tmp_str.length, tmp_str.lastIndexOf(' ')))
        }
        return str.trim() + ( length > limit ? suffix : '' )
    }catch(e)
    {
        console.error(e)
    }
}