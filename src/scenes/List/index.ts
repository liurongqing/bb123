export default class ListScene extends Phaser.Scene {
  config: any
  constructor() {
    super('ListScene')
  }

  init() {
    this.config = this.sys.game.config
  }

  create() {
    const bgImage = this.add.image(0, 0, 'bg1').setOrigin(0)

    const frameImage = this.add.image(0, 0, 'list_frame')
    Phaser.Display.Align.In.Center(frameImage, bgImage)

    const prevSprite = this.add.sprite(0, 0, 'list_prev')
    const nextSprite = this.add.sprite(0, 0, 'list_next')
    Phaser.Display.Align.In.LeftCenter(prevSprite, frameImage, 28)
    Phaser.Display.Align.In.RightCenter(nextSprite, frameImage, 20)

    const groupItems = this.add.group({
      key: 'list_item_bg',
      frameQuantity: 8
    } as any)

    const size = 210
    Phaser.Actions.GridAlign(groupItems.getChildren(), {
      width: 4,
      height: 2,
      cellWidth: size,
      cellHeight: size + 10,
      x: this.config.width / 2 - size * 2 + size / 2 + 4,
      y: this.config.height / 2 - size / 2 + 10
    })

    // 循环设置
    let levelText: any,
      pinImage: any,
      starImage: any,
      groupIndex = 1
    Phaser.Actions.Call(
      groupItems.getChildren(),
      function(group: any) {
        group.setName(groupIndex)
        starImage = this.add.image(0, 0, 'star2')
        levelText = this.add.text(0, 0, String(groupIndex), {
          fontFamily: 'riffic',
          fontSize: 70 - (String(groupIndex).length - 1) * 10
        })
        levelText.setShadow(3, 3, '#0395a0', 2, true, true)
        pinImage = this.add.image(
          0,
          0,
          `list_pin_${groupIndex % 4 === 1 ? 'right' : 'left'}`
        )
        groupIndex++
        Phaser.Display.Align.In.Center(starImage, group)
        Phaser.Display.Align.In.Center(levelText, group)
        Phaser.Display.Align.In.TopLeft(
          pinImage,
          group,
          Phaser.Math.Between(-20, -70),
          10
        )
        group.setInteractive()
        group.on('pointerup', () => {
          this.tweens.add({
            targets: group,
            rotation: 1,
            duration: 100,
            yoyo: true,
            onComplete: () => {
              console.log('groupIndex', group.name)
              this.scene.start('MainScene')
            }
          })
        })
      },
      this
    )

    // this.scene.start('MainScene')
  }
}
