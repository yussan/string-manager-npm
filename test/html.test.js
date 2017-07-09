import {expect} from 'chai'
import {stripTags} from '../src/modules/html'

describe("HTML Modules", () => {
    describe('stripTags()', () => {
        it("normal use", () => {
            const res = stripTags('ayo makan <strong>sepatu</strong>')
            expect(res).to.deep.equal('ayo makan sepatu')
        })
        it("using bad argument", () => {
            const res = stripTags(12)
            expect(res).to.deep.equal(12)
        })
    })
})