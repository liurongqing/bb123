import { BASE_URL, PATH_URL } from '@/const'

export default class PreloaderScene extends Phaser.Scene {
  config: any
  constructor() {
    super('PreloaderScene')
  }

  init() {
    this.config = this.sys.game.config
    this.add.image(
      this.config.width / 2,
      this.config.height / 2,
      'loading_logo'
    )
  }

  preload() {
    this.createPreloader()
    this.loadAssets()
  }

  createPreloader() {
    const progressBox = this.add.graphics()
    const progressBar = this.add.graphics()
    const size = {
      width: 200,
      height: 20
    }
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(
      this.config.width / 2 - size.width / 2,
      this.config.height / 2 + size.height + 30,
      size.width,
      size.height
    )

    this.load.on('progress', (value: number) => {
      progressBar.clear()
      progressBar.fillStyle(0x66aaff, 0.9)
      progressBar.fillRect(
        this.config.width / 2 - size.width / 2,
        this.config.height / 2 + size.height + 30,
        size.width * value,
        size.height
      )
    })

    this.load.on('complete', () => {
      this.scene.start('HomeScene')
    })
  }

  loadAssets() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('test', 'images/test.jpg')
    this.load.image('bg1', 'images/bg1.jpg')
    this.load.image('bg2', 'images/bg2.jpg')
    this.load.image('bg3', 'images/bg3.jpg')
    this.load.image('orange_button', 'images/orange_button.png')
    this.load.image('star1', 'images/star1.png')
    this.load.image('star2', 'images/star2.png')
    this.load.image('back', 'images/back.png')
    this.load.image('home_frame', 'images/home_frame.png')
    this.load.image('home_start_button', 'images/home_start_button.png')
    this.load.image('home_title', 'images/home_title.png')
    this.load.image('list_frame', 'images/list_frame.png')
    this.load.image('list_prev', 'images/list_prev.png')
    this.load.image('list_next', 'images/list_next.png')
    this.load.image('list_item_bg', 'images/list_item_bg.png')
    this.load.image('list_pin_left', 'images/list_pin_left.png')
    this.load.image('list_pin_right', 'images/list_pin_right.png')
    this.load.image('main_frame', 'images/main_frame.png')
    this.load.image('main_time_progress_bg', 'images/main_time_progress_bg.png')
    this.load.image(
      'main_time_progress_active',
      'images/main_time_progress_active.png'
    )
    this.load.image('main_clock', 'images/main_clock.png')
  }
}
