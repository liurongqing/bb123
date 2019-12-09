import { BASE_URL, PATH_URL } from '@/const'
export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('HomeScene')
  }

  create() {
    const bg = this.add.image(0, 0, 'bg1').setOrigin(0)
    const homeFrame = this.add.image(0, 0, 'home_frame')
    const homeTitle = this.add.image(0, 0, 'home_title')
    const homeStartButton = this.add
      .image(0, 0, 'home_start_button')
      .setInteractive()
    Phaser.Display.Align.In.Center(homeFrame, bg)
    Phaser.Display.Align.In.TopCenter(homeTitle, homeFrame, 0, -60)
    Phaser.Display.Align.In.BottomCenter(homeStartButton, homeFrame, 0, -65)

    homeStartButton.on('pointerdown', () => {
      this.scene.start('ListScene')
    })
    // this.scene.start('ListScene')
  }
}
