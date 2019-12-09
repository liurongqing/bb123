import { BASE_URL, PATH_URL } from '@/const'
export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('HomeScene')
  }

  preload() {
    console.log('homescene preload...')
  }

  create() {}
}
