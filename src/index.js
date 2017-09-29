import {objToQuery, queryToObj} from './modules/httpquery'
import {toCamelCase} from './modules/camelcase'
import {stripTags} from './modules/html'
import {toSingleSpace} from './modules/spaces'
import {truncate} from './modules/truncate'
import {toSlug} from './modules/slug'

function ManagerString(str) {
    this.data = str
    return this.data
}

function prototypeBuilder(module) {
    return function(...args) {
        return new ManagerString(toCamelCase(this.data, ...args))
    }
}

ManagerString.prototype.toString = function(...args) {
    return this.data
};

ManagerString.prototype.objToQuery = prototypeBuilder(objToQuery)
ManagerString.prototype.queryToObj = prototypeBuilder(queryToObj)
ManagerString.prototype.toCamelCase = prototypeBuilder(toCamelCase)
ManagerString.prototype.stripTags = prototypeBuilder(stripTags)
ManagerString.prototype.toSingleSpace = prototypeBuilder(toSingleSpace)
ManagerString.prototype.truncate = prototypeBuilder(truncate)

export {
    objToQuery,
    queryToObj,
    toCamelCase,
    stripTags,
    toSingleSpace,
    truncate,
    toSlug
}

export default (str) => {
    return new ManagerString(str);
}

    
}
