import { expect } from 'chai'
import I18n from '../scripts/utils/translations'

describe('Translations', ()=>{

  context('keys', ()=>{
    it('should have english', ()=>{
      const en = I18n.translations["en"]
      expect(en).to.exist
    })

    it('should have portuguese', ()=>{
      const en = I18n.translations["pt-BR"]
      expect(en).to.exist
    })
  })

  it('should translate by locale', ()=>{
    I18n.locale = "zl"
    const zl = {
      myself:{
        about: "my test"
      }
    }
    I18n.translations["zl"] = zl

    let resultExpected = "my test"
    expect(I18n.t("myself.about")).to.equal(resultExpected)
  })

})
