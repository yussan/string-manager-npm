import { expect } from 'chai'
import StringManager from '../src/index'
import {toCamelCase} from '../src/modules/camelcase'
import {truncate} from '../src/modules/truncate'
import {stripTags} from '../src/modules/html'
import {objToQuery, queryToObj} from '../src/modules/httpquery'
import {toSingleSpace} from '../src/modules/spaces'

describe("Global", () => {
    describe('StringManager()', () => {
        it("returns manager string instance", () => {
            const res = StringManager('masakan saya')
            expect(res.constructor.name).to.deep.equal('ManagerString')
        })
        it("is chainable", () => {
            const res = StringManager('masakan saya')
            expect(res.toCamelCase().truncate(5).data).to.equal('Masakan Saya')
        })
    })
})
