import { $, $$, toKey, getLanguageFromHash } from "~/utils/util"

const stringsToTranslate = [
  '.myself .about',
]

let translate = function(language=getLanguageFromHash()){
  I18n.locale = language

  stringsToTranslate.forEach((queryElement)=>{
    let element        = $(queryElement)
    let keyTranslation = toKey(queryElement)

    element.innerHTML = I18n.t(keyTranslation)
  })
}

let linksToTranslate = $$(".myself a.language")

Array.prototype.forEach.call(linksToTranslate, (element)=>{
  element.onclick = function(event){
    let language = event.target.hash.substring(1)
    translate(language)
  }
})

translate()
