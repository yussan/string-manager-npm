import {expect} from 'chai'
import {toSlug} from '../src/modules/slug'

describe("Slug Module", () => {
    describe('toSlug()', () => {
        it("normal use", () => {
            const res = toSlug('masakan saya punya 2')
            expect(res).to.deep.equal('masakan-saya-punya-2')
        })
        it("using url character", () => {
            const res = toSlug('masakan( saya punya 2')
            expect(res).to.deep.equal('masakan-saya-punya-2')
        })
        it("using aliens character", () => {
            const res = toSlug('this is it あなたはスラム街で犬を飼う you')
            expect(res).to.deep.equal('this-is-it-あなたはスラム街で犬を飼う-you')
        })
    })
})