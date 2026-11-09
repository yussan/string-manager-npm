import { expect } from 'chai'
import { stripTags, nl2br, htmlExcerpt } from '../src/index'

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

  describe('htmlExcerpt()', () => {
    it('normal use', () => {
      const res = htmlExcerpt(
        '<p>hi this is long words from here</p>',
        6
      )
      expect(res).to.deep.equal('hi this...')
    })
    it('must keep the whole word', () => {
      const res = htmlExcerpt('<p>hi this is long words from here</p>', 8)
      expect(res).to.deep.equal('hi this is...')
    })
    it('must be no excerpt when text is within limit', () => {
      const res = htmlExcerpt('<p>hi this</p>', 7)
      expect(res).to.deep.equal('hi this')
    })
    it('using bad argument', () => {
      const res = htmlExcerpt(12, 6)
      expect(res).to.deep.equal(12)
    })
  })
})
