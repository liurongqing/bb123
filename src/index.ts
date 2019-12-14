import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  // forceOrientation: true,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    // mode: Phaser.Scale.NONE,
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // width: 667,
    // height: 375,
    width: 1334,
    height: 750
    // orientation: Phaser.Scale.Orientation.LANDSCAPE
    // orientation: Phaser.Scale.Orientation.PORTRAIT
    // orientation: 'landscape'
    // min: {
    //   width: 1334,
    //   height: 750
    // },
    // max: {
    //   width: 1334,
    //   height: 750
    // }
  },
  scene
}

new Phaser.Game(config)

// window.game.scale.setGameSize(1334, 750)
// window.game.scale.setGameSize(750, 1334)
