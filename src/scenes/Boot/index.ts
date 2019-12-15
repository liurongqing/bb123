import { BASE_URL, PATH_URL } from '@/const'
import * as Webfont from 'webfontloader'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('loading_logo', 'images/loading_logo.png')
    Webfont.load({
      custom: {
        families: ['riffic', 'trashhand'],
        urls: [BASE_URL + PATH_URL + 'fonts/fonts.css']
      }
    })
  }

  create() {
    this.scene.start('PreloaderScene')
  }
}
