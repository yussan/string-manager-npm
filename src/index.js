import {objToQuery, queryToObj} from './modules/httpquery'
import {toCamelCase} from './modules/camelcase'
import {stripTags} from './modules/html'
<<<<<<< HEAD
import {trim, toSingleSpace} from './modules/spaces'
import {smartSubString} from './modules/substring'
=======
import {toSingleSpace} from './modules/spaces'
import {truncate} from './modules/truncate'
>>>>>>> c29aaa2ef3b1a01b1ad95449e56b8f5856a7ef7b

export {
    objToQuery,
    queryToObj,
    toCamelCase,
    stripTags,
<<<<<<< HEAD
    trim, 
    toSingleSpace,
    smartSubString
=======
    toSingleSpace,
    truncate
>>>>>>> c29aaa2ef3b1a01b1ad95449e56b8f5856a7ef7b
}