import { expect } from 'chai'
import { objToQuery, queryToObj } from '../src/index'

describe('HttpQuery', () => {
  describe('objToQuery()', () => {
    it('normal use', () => {
      const res = objToQuery({ id: 1, page: 2 })
      expect(res).to.deep.equal('id=1&page=2')
    })
    it('using bad argument', () => {
      const res = objToQuery([{ id: 1 }, { id: 2 }])
      expect(res).to.deep.equal(
        '0=%5Bobject%20Object%5D&1=%5Bobject%20Object%5D'
      )
    })
  })

  describe('queryToObj()', () => {
    it('normal use', () => {
      const res = queryToObj('orderby=age&show=true')
      expect(res).to.deep.equal({ orderby: 'age', show: 'true' })
    })

    it('normal use with ?', () => {
      const res = queryToObj('?orderby=age&show=true')
      expect(res).to.deep.equal({ orderby: 'age', show: 'true' })
    })

    it('normal use expert', () => {
      const res = queryToObj(
        'q=https://play.google.com/store/apps/details?id=com.lesgood.guru'
      )
      expect(res).to.deep.equal({
        q: 'https://play.google.com/store/apps/details?id=com.lesgood.guru'
      })
    })
  })
})
