// const ScaleManager = require('scale/ScaleManager')
// const CONST = require('scale/const/index')

// Object.assign(ScaleManager.prototype, {
//   updateCenter: function() {
//     var autoCenter = this.autoCenter

//     if (autoCenter === CONST.CENTER.NO_CENTER) {
//       return
//     }

//     var style = this.gameContainer.style
//     style.position = 'absolute'
//     style.transformOrigin = '0 0'

//     var offsetX
//     var offsetY
//     var rotation

//     var scale = this.scaledSize.width / this.gameSize.width

//     var _offsetX = Math.floor(
//       (this.parentSize.width - this.scaledSize.width) / 2
//     )
//     var _offsetY = Math.floor(
//       (this.parentSize.height - this.scaledSize.height) / 2
//     )

//     if (autoCenter === CONST.CENTER.CENTER_VERTICALLY) {
//       _offsetX = 0
//     } else if (autoCenter === CONST.CENTER.CENTER_HORIZONTALLY) {
//       _offsetY = 0
//     }

//     if (this.shouldRotate) {
//       var baseOffsetX = 0
//       var baseOffsetY = this.parentSize.height
//       offsetX = baseOffsetY - _offsetY
//       offsetY = baseOffsetX + _offsetX

//       rotation = 90
//     } else {
//       offsetX = _offsetX
//       offsetY = _offsetY

//       rotation = 0
//     }

//     /* eslint-disable-next-line */
//     style.transform = `matrix(${scale}, 0, 0, ${scale}, ${offsetX}, ${offsetY}) rotate(${rotation}deg)`
//   },
//   updateViewport: function() {
//     var width
//     var height

//     if (this.shouldRotate) {
//       width = document.documentElement.clientHeight
//       height = document.documentElement.clientWidth
//     } else {
//       width = document.documentElement.clientWidth
//       height = document.documentElement.clientHeight
//     }

//     this.viewportSize.setSize(width, height)
//   },
//   shouldRotate: {
//     get: function() {
//       var isOrientationNotMatched =
//         this.isScreenLandscape !== this.isGameLandscape
//       return isOrientationNotMatched
//     }
//   }
// })
