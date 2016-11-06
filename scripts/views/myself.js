import { $, $$, toKey, getLanguageFromHash } from "~/utils/util"

const stringsToTranslate = [
  '.myself .about',
]

let translate = function(){
  I18n.locale = getLanguageFromHash()

  stringsToTranslate.forEach((queryElement)=>{
    let element        = $(queryElement)
    let keyTranslation = toKey(queryElement)

    element.innerHTML = I18n.t(keyTranslation)
  })
}

let linksToTranslate = $$(".myself a")

Array.prototype.forEach.call(linksToTranslate, (element)=>{
  element.onclick = function(evento){
    translate()
  }
})

translate()
