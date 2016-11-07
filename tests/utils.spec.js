import jsdom from 'mocha-jsdom'
import { expect } from 'chai'
import { toKey, getLanguageFromHash, resolveObjectByPath } from '../scripts/utils/util'

describe('Utils function', ()=>{
  context("toKey", ()=>{

    it("should convert a query with class selector string in a key", ()=>{
      let query  = '.that.is.mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

    it("should convert a query with id selector string in a key", ()=>{
      let query  = '#that.is.mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

    it("should convert a query with children class selector string in a key", ()=>{
      let query  = '.that .is .mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

  })

  context("hash", ()=>{

    jsdom()

    it("should be translated using location hash", ()=>{
      window.location.hash = "#en"
      expect(getLanguageFromHash()).to.equal("en")
    })

    it("should be translated using pt-BR as default", ()=>{
      window.location.hash = ""
      expect(getLanguageFromHash()).to.equal("pt-BR")
    })

    it("should be always return pt for invalid languages", ()=>{
      window.location.hash = "#not"
      expect(getLanguageFromHash()).to.equal("pt-BR")
    })

  })

  context("resolveObjectByPath", ()=>{

    it("should return a value from nested objects using a path", ()=>{
      let obj = {
        a: {
          b: {
            c:12
          }
        }
      }

      expect(resolveObjectByPath(obj, "a.b.c")).to.equal(12)
    })

  })
})
