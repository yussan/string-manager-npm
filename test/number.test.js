import { scaleNumber } from '../src/index'
import { expect } from 'chai'

describe('Number Module', () => {
  describe('scaleNumber', () => {
    it('normal use', () => {
      const res = scaleNumber(1000)
      expect(res).to.deep.equal('1K')
    })
    it('using string', () => {
      const res = scaleNumber('mau makan')
      expect(res).to.deep.equal('mau makan')
    })
    it('using minus number', () => {
      const res = scaleNumber(-1200)
      expect(res).to.deep.equal('-1.2K')
    })
  })
})
