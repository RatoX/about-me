import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import KnowMore from '../scripts/views/know-more'

describe('Know More view', ()=>{

  it('should have a init method', ()=>{
    expect(KnowMore.init).to.exist
  })

  context('actions', ()=>{

    jsdom()

    it('should add a action on init', ()=>{
       document.body.innerHTML = '<main class="opa"></main>'
       KnowMore.init('.opa')
       expect(document.querySelector('.opa > span.action')).to.exist
    })

    it('should display knowledge', ()=>{
       document.body.innerHTML = '<main class="opa"></main>'
       KnowMore.init('.opa')

       let button = document.body.querySelector('.opa > span.action')

       button.click()

       expect(document.querySelector('.opa > section.knowledge')).to.exist
    })

  })

})
