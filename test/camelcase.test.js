import {expect} from 'chai'
// import {toCamelCase} from '../src/modules/camelcase'
import {toCamelCase} from '../dist/index'

describe("Camel Case Module", () => {
    describe('toCamelCase()', () => {
        it("normal use", () => {
            const res = toCamelCase('masakan saya')
            expect(res).to.deep.equal('Masakan Saya')
        })
        it("camel case a bad string", () => {
            const res = toCamelCase('masakan  luar saya ')
            expect(res).to.deep.equal('Masakan Luar Saya')
        })
        it("camel case a number", () => {
            const res = toCamelCase(12)
            expect(res).to.deep.equal(12)
        })
        it("camel case a object", () => {
            const res = toCamelCase({id:1})
            expect(res).to.deep.equal({id:1})
        })
        it("camel case a boolean", () => {
            const res = toCamelCase(false)
            expect(res).to.deep.equal(false)
        })
    })
})