import {expect} from 'chai'
import {stripTags} from '../src/modules/html'
import * as StringManager from '../dist'

describe("[dev] HTML Modules", () => {
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

describe("[prod] HTML Modules", () => {
    describe('stripTags()', () => {
        it("normal use", () => {
            const res = StringManager.stripTags('ayo makan <strong>sepatu</strong>')
            expect(res).to.deep.equal('ayo makan sepatu')
        })
        it("using bad argument", () => {
            const res = StringManager.stripTags(12)
            expect(res).to.deep.equal(12)
        })
    })
})