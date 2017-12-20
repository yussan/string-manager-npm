import StringManager from '../src/index'
import {expect} from 'chai'
import {toCamelCase} from '../src/modules/camelcase'
import {truncate} from '../src/modules/truncate'
import {stripTags} from '../src/modules/html'
import {objToQuery, queryToObj} from '../src/modules/httpquery'
import {toSingleSpace} from '../src/modules/spaces'

describe("Global", () => {
    describe('StringManager()', () => {
        it("returns manager string instance", () => {
            const res = StringManager('masakan saya')
            expect(res.constructor.name).to.deep.equal('StringManager')
        })
        it("StringManager('masakan saya').toCamelCase()", () => {
            const res = StringManager('masakan saya').toCamelCase().data
            const exp = toCamelCase('masakan saya')
            expect(res).to.equal(exp)
        })
    })
})
