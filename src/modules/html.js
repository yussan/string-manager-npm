export function stripTags(str)
{
    try
    {
        if(!str || typeof str != 'string') return str
        return str.replace(/(<([^>]+)>)/ig,'')
    }catch(e)
    {
        console.error(e)
    }
}

export function nl2br(str)
{
    try
    {
        if(!str || typeof str != 'string') return str
        return str.replace(/\n/ig,'</br>')
    }catch(e)
    {
        console.error(e)
    }
}