import { expect } from 'chai'
import { stripTags, nl2br } from '../src/index'

describe('HTML Modules', () => {
  describe('stripTags()', () => {
    it('normal use', () => {
      const res = stripTags('ayo makan <strong>sepatu</strong>')
      expect(res).to.deep.equal('ayo makan sepatu')
    })
    it('using bad argument', () => {
      const res = stripTags(12)
      expect(res).to.deep.equal(12)
    })
  })

  describe('nl2br()', () => {
    it('normal use', () => {
      const res = nl2br('masa sih\noke juga')
      expect(res).to.deep.equal('masa sih<br/>oke juga')
    })
  })
})
