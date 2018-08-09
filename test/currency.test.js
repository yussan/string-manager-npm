import { expect } from 'chai'
import { currencyFormat } from '../src/index'

describe('Currency Module', () => {
  describe('currencyFormat()', () => {
    it('normal use', () => {
      const res = currencyFormat(456679, 'Rp')
      expect(res).to.deep.equal('Rp 456.679')
    })
    it('format not number', () => {
      const res = currencyFormat('string', '')
      expect(res).to.deep.equal('string')
    })
  })
})
// })
