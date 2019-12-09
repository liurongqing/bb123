import { BASE_URL, PATH_URL } from '@/const'
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene')
  }

  preload() {
    console.log('PreloaderScene preload...')
  }

  create() {}
}
