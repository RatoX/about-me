import I18n from "~/utils/translations"
import { $ } from "~/utils/util"

function KnowMore(){}

KnowMore.prototype.createAction = function(){
  let button = document.createElement('span')
  let buttonText = document.createTextNode(I18n.t('myself.know-more.action'))

  button.classList.add('action')
  button.appendChild(buttonText)
  return button
}

KnowMore.prototype.init = function(mainClass = ''){
  let knowMoreSection = $(`${mainClass}`)
  let button = this.createAction()
  let sectionTwo = $('.profile .two')

  button.addEventListener('click', ()=>{
    sectionTwo.classList.remove('hidden')
    sectionTwo.classList.add('fade-in')
  })

  sectionTwo
  .querySelector('.action.back')
  .addEventListener('click', ()=>{
    sectionTwo.classList.remove('fade-in')
    sectionTwo.classList.add('hidden')
  })

  knowMoreSection.appendChild(button)
}

export default Object.create(KnowMore.prototype)
