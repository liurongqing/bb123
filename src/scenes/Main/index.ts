import { BASE_URL, PATH_URL } from '@/const'
export default class MainScene extends Phaser.Scene {
  config: any
  constructor() {
    super('MainScene')
  }

  init() {
    this.config = this.sys.game.config
  }

  create() {
    const bgImage = this.add.image(0, 0, 'bg2').setOrigin(0)

    const frameImage = this.add.image(0, 0, 'main_frame')
    Phaser.Display.Align.In.Center(frameImage, bgImage)

    // 返回
    const backSprite = this.add.sprite(80, 80, 'back').setScale(0.7)
    backSprite.setInteractive()
    backSprite.on('pointerup', () => {
      this.tweens.add({
        targets: backSprite,
        scale: 0.9,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          // console.log('complete...', this.scene)
          this.scene.start('ListScene')
        }
      })
    })

    // 标题
    const text = this.add.text(0, 0, 'Question 15', {
      font: '58px riffic'
    })
    Phaser.Display.Align.In.TopLeft(text, frameImage, -130, -18)

    // 时间
    const progressBgImage = this.add.image(0, 0, 'main_time_progress_bg')
    const progressActiveImage = this.add.image(
      0,
      0,
      'main_time_progress_active'
    )
    Phaser.Display.Align.In.Center(progressBgImage, frameImage, 20, -156)
    Phaser.Display.Align.In.LeftCenter(
      progressActiveImage,
      progressBgImage,
      -14,
      2
    )
    const mainClockImage = this.add.image(0, 0, 'main_clock')
    Phaser.Display.Align.In.LeftCenter(mainClockImage, progressBgImage, 20)

    // 进度条
    const mask = progressBgImage.createBitmapMask()
    progressActiveImage.setMask(mask)
    const lastWidth = progressActiveImage.x - progressBgImage.width
    this.tweens.add({
      targets: progressActiveImage,
      x: lastWidth,
      duration: 3000,
      callbackScope: this,
      onComplete: function() {
        console.log('00000')
        // calling "gameOver" method. "?" is the string to display
        // this.gameOver('?')
      }
    })

    // 题目
    const TopicText = this.add.text(0, 0, '1+1+2+3=?', {
      font: '100px riffic',
      fill: '#dca348'
    })
    Phaser.Display.Align.In.Center(TopicText, frameImage, 0, -20)

    // 答案
    const groupItems = this.add.group({
      key: 'orange_button',
      frameQuantity: 4
    } as any)

    const size = 360
    Phaser.Actions.GridAlign(groupItems.getChildren(), {
      width: 2,
      height: 2,
      cellWidth: size,
      cellHeight: 100,
      position: Phaser.Display.Align.CENTER,
      x: this.config.width / 2 - size / 2 + 20,
      y: this.config.height / 2 + 90
    })

    let answerText: any,
      groupIndex = 1

    Phaser.Actions.Call(
      groupItems.getChildren(),
      (group: any) => {
        group.setName(groupIndex)
        answerText = this.add.text(0, 0, String(groupIndex), {
          font: '50px riffic',
          fill: '#ffffff'
        })
        answerText.setShadow(3, 3, '#b66217', 2, true, true)
        groupIndex++
        Phaser.Display.Align.In.Center(answerText, group)
        group.setInteractive()

        group.on('pointerup', (gameObject: any) => {
          this.tweens.add({
            targets: group,
            scale: 1.2,
            duration: 100,
            yoyo: true,
            onComplete: () => {
              console.log('group.name', group.name)
              // this.scene.start('MainScene')
            }
          })
          // console.log(gameObject)
          // console.log(group.name)
        })
      },
      this
    )
  }
}
