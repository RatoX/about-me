import jsdom from 'mocha-jsdom'
import { expect } from 'chai'
import { toKey, getLanguageFromHash, resolveObjectByPath, removeClass } from '../scripts/utils/util'

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

  context("removeClass", ()=>{

    jsdom()

    it("should remove some class from a query selector", ()=>{
      document.body.innerHTML = "<h1 class='opa'>1</h1><h2 class='opa'>2</h2>"
      removeClass('h1','opa')
      let h1 = document.querySelector('h1')
      let h2 = document.querySelector('h2')

      expect(h1.classList.contains('opa')).to.be.false
      expect(h2.classList.contains('opa')).to.be.true
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
