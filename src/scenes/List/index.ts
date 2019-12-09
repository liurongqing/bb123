import { BASE_URL, PATH_URL } from '@/const'
export default class ListScene extends Phaser.Scene {
  constructor() {
    super('ListScene')
  }

  create() {
    const bg = this.add.image(0, 0, 'bg1').setOrigin(0)
    const listFrame = this.add.image(0, 0, 'list_frame')
    Phaser.Display.Align.In.Center(listFrame, bg)

    const backSprite = this.add.sprite(100, 100, 'back').setInteractive()
    backSprite.on('pointerdown', () => {
      this.scene.start('HomeScene')
    })
  }
}
