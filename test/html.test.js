import {expect} from 'chai'
import {stripTags, nl2br} from '../src/modules/html'

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

    describe('nl2br()', () => {
        it("normal use", () => {
            const res = nl2br('ayo lari \n pagi ini')
            expect(res).to.deep.equal('ayo lari </br> pagi ini')
        })
        it("using bad argument", () => {
            const res = nl2br(12)
            expect(res).to.deep.equal(12)
        })
    })
})