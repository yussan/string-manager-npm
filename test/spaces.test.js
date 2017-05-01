import {expect} from 'chai'
import {trim, toSingleSpace} from '../src/modules/spaces'

describe("Camel Case Module", () => {
    describe('toSingleSpace()', () => {
        it("normal use", () => {
            const res = toSingleSpace('lorem ipsum  semi    dollor hokya')
            expect(res).to.deep.equal('lorem ipsum semi dollor hokya')
        })
        it("using bad argument", () => {
            const res = toSingleSpace(12)
            expect(res).to.deep.equal(12)
        })
    })
    describe('trim()', () => {
        it("normal use", () => {
            const res = trim(' lorem ipsum semi dollor hokya ')
            expect(res).to.deep.equal('lorem ipsum semi dollor hokya')
        })
        it("using bad argument", () => {
            const res = trim(12)
            expect(res).to.deep.equal(12)
        })
    })
})