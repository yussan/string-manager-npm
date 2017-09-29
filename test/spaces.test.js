import {expect} from 'chai'
import {toSingleSpace} from '../src/modules/spaces'

describe("Spaces Module", () => {
    describe('toSingleSpace()', () => {
        it("normal use", () => {
            const res = toSingleSpace('lorem ipsum  semi    dollor hokya')
            expect(res).to.deep.equal('lorem ipsum semi dollor hokya')
        })
        it("using bad argument", () => {
            const res = toSingleSpace(12)
            expect(res).to.deep.equal(12)
        })
        it("using bad string, space in first and last string", () => {
            const res = toSingleSpace(' space  everywhere ')
            expect(res).to.deep.equal('space everywhere')
        })
    })
})