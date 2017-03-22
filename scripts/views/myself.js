import I18n from "~/utils/translations"
import KnowMore from "./know-more"
import { $, $$, toKey, getLanguageFromHash, removeClass } from "~/utils/util"

const stringsToTranslate = [
  '.myself .about',
  '.myself .contact .fingerprint .pgp',
  '.myself .know-more .action',
  '.myself .profile .back',
]

let translate = function(language=getLanguageFromHash()){
  I18n.locale = language

  stringsToTranslate.forEach((queryElement)=>{
    let element        = $(queryElement)

    if(element){
      let keyTranslation = toKey(queryElement)
      element.innerHTML = I18n.t(keyTranslation)
    }
  })
}

let initTranslate = function(){
  Array.prototype.forEach.call($$(".myself a.language"), (element)=>{
    element.addEventListener('click', (event)=>{
      event.preventDefault()
      removeClass(".myself a.language", "active")

      let element  = event.target
      let language = element.hash.substring(1)
      element.classList.toggle("active");
      translate(language)
    })
  })

  translate()
}


document.addEventListener('DOMContentLoaded', function() {
  initTranslate()
  KnowMore.init('.know-more')
})
