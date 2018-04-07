import {expect} from 'chai'
import {truncate} from '../src/modules/truncate'

describe("Truncate Module", () => {
    describe('truncate()', () => {
        it("normal use", () => {
            const res = truncate('lorem ipsum  semi    dollor hokya ', 13, '...')
            expect(res).to.deep.equal('lorem ipsum...')
        })
        it("using bad argument", () => {
            const res =truncate(12, 10, '...')
            expect(res).to.deep.equal(12)
        })
        it("must be no truncate", () => {
            const res =truncate('haha', 4, '...')
            expect(res).to.deep.equal('haha')
        })
    })
})