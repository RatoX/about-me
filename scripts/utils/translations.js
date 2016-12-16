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
    about: "I am a FullStack developer with focus on FrontEnd.",
    contact: {
      fingerprint: {
        pgp: "Do you want to talk to me using cryptography?",
      }
    },
    profile: {
      skills: "Skills",
      back: "< Back",
    },
    'know-more': {
      action: "See my skills >>",
    },
  }
}

const ptBR = {
  myself: {
    about: "Desenvolvedor FullStack com foco em FrontEnd.",
    contact: {
      fingerprint: {
        pgp: "Quer me entrar em contato comigo de forma segura?",
      }
    },
    profile: {
      skills: "Habilidades",
      back: "<< Voltar",
    },
    'know-more': {
      action: "Minhas habilidades >>",
    },
  }
}

I18n.translations["en"] = en
I18n.translations["pt-BR"] = ptBR

export default I18n
