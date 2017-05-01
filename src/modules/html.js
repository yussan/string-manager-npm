export function stripTags(str)
{
    try{
        if(!str || typeof str != 'string') return str
        return str.replace(/(<([^>]+)>)/ig,'')
    }catch(e)
    {
        console.error(e)
    }
}