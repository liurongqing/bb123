import { BASE_URL, PATH_URL } from '@/const'
import { CANVAS } from 'phaser'
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene')
  }

  init() {
    // this.scale.orientation()
    // window.game.scale.setGameSize(750, 1334)
    // window.game.scale.setGameSize(1334, 750)
    // this.cameras.main.setRotation(90)
    // this.cameras.main.setSize(1334, 750);
    // this.cameras.main.setSize(750, 1334);
    // if()
    // console.log(
    //   'this.scale.isGameLandscape %o, this.scale.isLandscape %o',
    //   this.scale.isGameLandscape,
    //   this.scale.isLandscape
    // )
    // console.log('canvas', docu)
    // if (this.scale.isGameLandscape != this.scale.isLandscape) {
    //   // document.querySelector('canvas').style.transformOrigin = '0 0 0';
    //   // document.querySelector('canvas').style.transform = 'rotate(90deg)'
    // }
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('bg1', 'images/bg1.jpg')
    this.load.image('bg2', 'images/bg2.jpg')
    this.load.image('bg3', 'images/bg3.jpg')
    this.load.image('back', 'images/back.png')
    this.load.image('home_frame', 'images/home_frame.png')
    this.load.image('home_start_button', 'images/home_start_button.png')
    this.load.image('home_title', 'images/home_title.png')
    this.load.image('list_frame', 'images/list_frame.png')
  }

  create() {
    this.scene.start('HomeScene')
  }
}
