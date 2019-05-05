import { action, observable } from 'mobx'

class LanguageStore {
  @observable
  lang = 0

  @action
  setLang = () => {
    this.lang = localStorage.getItem('language')
  }
}

export default new LanguageStore()
