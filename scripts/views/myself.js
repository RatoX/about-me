import I18n from "~/utils/translations"
import { $, $$, toKey, getLanguageFromHash } from "~/utils/util"

const stringsToTranslate = [
  '.myself .about',
  '.myself .contact .fingerprint .pgp',
]

let translate = function(language=getLanguageFromHash()){
  I18n.locale = language

  stringsToTranslate.forEach((queryElement)=>{
    let element        = $(queryElement)
    let keyTranslation = toKey(queryElement)

    element.innerHTML = I18n.t(keyTranslation)
  })
}

let removeClass = function(query, cssClass){
  let elements = $$(query)
  Array.prototype.forEach.call(elements, (element)=>{
    element.classList.remove(cssClass)
  })
}

let linksToTranslate = $$(".myself a.language")

Array.prototype.forEach.call(linksToTranslate, (element)=>{
  element.onclick = function(event){
    event.preventDefault()
    removeClass(".myself a.language", "active")

    let element  = event.target
    let language = element.hash.substring(1)
    element.classList.toggle("active");
    translate(language)
  }
})

translate()
