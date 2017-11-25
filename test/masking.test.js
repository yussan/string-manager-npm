import {expect} from 'chai'
import {toMask} from '../src/modules/masking'

describe("Masking Module", () => {
    describe('toMask()', () => {
        it("normal use", () => {
            const res = toMask('testdrive@gmail.com', 0, 8)
            expect(res).to.deep.equal('*********@gmail.com')
        })
        it("normal use", () => {
            const res = toMask('this is text', 5, 11)
            expect(res).to.deep.equal('this ** ****')
        })
    })
})