import { action, observable } from 'mobx'

class LanguageStore {
  @observable
  lang = 0

  @action
  setLang = language => {
    this.lang = language
  }
}

export default new LanguageStore()
