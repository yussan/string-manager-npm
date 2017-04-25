export function toCamelCase(str = '')
{
    if(!str || typeof str != 'string') return ''
  	return str.split(' ').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join(' ')
}