import {expect} from 'chai'
import {objToQuery, queryToObj} from '../src/modules/httpquery'

describe("Camel Case Module", () => {
    describe('objToQuery()', () => {
        it("normal use", () => {
            const res = objToQuery({id:1,page:2})
            expect(res).to.deep.equal('id=1&page=2')
        })
        it("using bad argument", () => {
            const res = objToQuery([{id:1}, {id:2}])
            expect(res).to.deep.equal('0=%5Bobject%20Object%5D&1=%5Bobject%20Object%5D')
        })
    })
})