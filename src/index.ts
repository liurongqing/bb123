import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1334,
    height: 750,
    orientation: 'landscape'
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

window.game = new Phaser.Game(config)
