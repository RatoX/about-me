import { resolveObjectByPath } from './util'

var I18n = {
  translations: {
  },
  locale: 'pt-BR',
  t: function translate(key){
    let result = "not found"
    let translation = this.translations[this.locale]
    if(translation){
      result = resolveObjectByPath(translation, key)
    }

    return result
  },
}

const en = {
  myself: {
    about: "I am a FullStack developer",
    contact: {
      fingerprint: {
        pgp: "Do you want to talk to me using cryptography?",
      }
    },
  }
}

const ptBR = {
  myself: {
    about: "Desenvolvedor FullStack",
    contact: {
      fingerprint: {
        pgp: "Quer entrar em contato comigo de forma segura?",
      }
    },
  }
}

I18n.translations["en"] = en
I18n.translations["pt-BR"] = ptBR

export default I18n
