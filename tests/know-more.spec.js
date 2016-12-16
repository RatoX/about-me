import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import KnowMore from '../scripts/views/know-more'

describe('Know More view', ()=>{

  it('should have a init method', ()=>{
    expect(KnowMore.init).to.exist
  })

  context('actions', ()=>{

    jsdom()

    beforeEach(()=>{
       document.body.innerHTML = `
         <main class="main profile">
           <div class="two hidden">
             <span class="action back">
             </span>
           </div>
         </main>
       `
       KnowMore.init('.main')
    })

    it('should add a action on init', ()=>{
       expect(document.querySelector('.main > span.action')).to.exist
    })

    it('should display knowledge', ()=>{
       let button = document.body.querySelector('.main > .action')
       button.click()

       let twoSection = document.querySelector('.main.profile > .two')

       expect(twoSection.classList.contains('fade-in')).to.true
       expect(twoSection.classList.contains('hidden')).to.false
    })

  })

})
