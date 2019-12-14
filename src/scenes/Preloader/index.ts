import { BASE_URL, PATH_URL } from '@/const'
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('bg1', 'images/bg1.jpg')
    this.load.image('bg2', 'images/bg2.jpg')
    this.load.image('bg3', 'images/bg3.jpg')
    this.load.image('orange_button', 'images/orange_button.png')
    // this.load.image('back', 'images/back.png')
    this.load.image('home_frame', 'images/home_frame.png')
    this.load.image('home_start_button', 'images/home_start_button.png')
    this.load.image('home_title', 'images/home_title.png')
    this.load.image('list_frame', 'images/list_frame.png')
    this.load.image('list_prev', 'images/list_prev.png')
    this.load.image('list_next', 'images/list_next.png')
    this.load.image('list_item_bg', 'images/list_item_bg.png')
    this.load.image('main_frame', 'images/main_frame.png')
    this.load.image('main_time_progress_bg', 'images/main_time_progress_bg.png')
    this.load.image('main_time_progress_active', 'images/main_time_progress_active.png')
    this.load.image('main_clock', 'images/main_clock.png')
  }

  create() {
    this.scene.start('HomeScene')
  }
}
