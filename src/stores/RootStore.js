import RoomStore from './RoomStoreRoomStore'
import LanguageStore from './LanguageStore'

class RootStore {
  constructor() {
    this.room = new RoomStore(this)
    this.language = new LanguageStore(this)
  }
}

export default new RootStore()
