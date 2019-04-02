import { action, observable } from 'mobx'

class LanguageStore {
  @observable
  lang = 1

  @action
  setLang = async language => {
    this.lang = language
  }
}

export default new LanguageStore()
