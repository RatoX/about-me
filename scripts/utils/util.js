export function getLanguageFromHash(){
  let language = "pt-BR"
  if(window.location.hash){
    language =  window.location.hash.substring(1)
  }

  if(language === "en"){
		return "en"
  }
  return "pt-BR"
}

export function toKey(query = ''){
  return query.replace(/^\.|\#|\s*/g,'')
}

export function $(el){
  return document.querySelector(el);
}

export function $$(el){
  return document.querySelectorAll(el);
}

export function resolveObjectByPath(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
}

export function removeClass(query, cssClass){
  let elements = $$(query)
  Array.prototype.forEach.call(elements, (element)=>{
    element.classList.remove(cssClass)
  })
}
