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
