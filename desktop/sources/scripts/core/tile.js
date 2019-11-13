'use strict'

function Tile (type = 'unknown') {
  this.element = document.createElement('tile')
  this.element.className = type
  this.x = 0
  this.y = 0

  this.update = function (depth_offset = 0) {
    const p = this.position_at(this.x, this.y)
    const top = p[0]
    const left = p[1]

    $(this.element).css('top', p[0]).css('left', p[1]).css('z-index', this.depth(depth_offset))
  }

  this.position_at = function (x, y) {
    let top = '0px'
    let left = '0px'

    if (x == 1 && y == 1) { top = '40%'; left = '50%' }
    if (x == 1 && y == 0) { top = '45%'; left = '60%' }
    if (x == 1 && y == -1) { top = '50%'; left = '70%' }

    if (x == 0 && y == 1) { top = '45%'; left = '40%' }
    if (x == 0 && y == 0) { top = '50%'; left = '50%' }
    if (x == 0 && y == -1) { top = '55%'; left = '60%' }

    if (x == -1 && y == 1) { top = '50%'; left = '30%' }
    if (x == -1 && y == 0) { top = '55%'; left = '40%' }
    if (x == -1 && y == -1) { top = '60%'; left = '50%' }

    // Wall
    if (x == -1 && y == 2) { top = '48%'; left = '20%' }
    if (x == 0 && y == 2) { top = '43%'; left = '30%' }
    if (x == 1 && y == 2) { top = '38%'; left = '40%' }
    if (x == 2 && y == 1) { top = '38%'; left = '60%' }
    if (x == 2 && y == 0) { top = '43%'; left = '70%' }
    if (x == 2 && y == -1) { top = '48%'; left = '80%' }

    // Step
    if (x == -2 && y == 1) { top = '55%'; left = '20%' }
    if (x == -2 && y == 0) { top = '60%'; left = '30%' }
    if (x == -2 && y == -1) { top = '65%'; left = '40%' }
    if (x == -1 && y == -2) { top = '65%'; left = '60%' }
    if (x == 0 && y == -2) { top = '60%'; left = '70%' }
    if (x == 1 && y == -2) { top = '55%'; left = '80%' }

    return [top, left]
  }

  this.depth = function (offset = 0) {
    let zIndex = offset

    if (this.x == 1 && this.y == 1) { zIndex += 1 }
    if (this.x == 1 && this.y == 0) { zIndex += 2 }
    if (this.x == 1 && this.y == -1) { zIndex += 3 }
    if (this.x == 0 && this.y == 1) { zIndex += 2 }
    if (this.x == 0 && this.y == 0) { zIndex += 3 }
    if (this.x == 0 && this.y == -1) { zIndex += 4 }
    if (this.x == -1 && this.y == 1) { zIndex += 3 }
    if (this.x == -1 && this.y == 0) { zIndex += 4 }
    if (this.x == -1 && this.y == -1) { zIndex += 5 }
    // Wall
    if (this.x == -1 && this.y == 2) { zIndex += 3 }
    if (this.x == 0 && this.y == 2) { zIndex += 2 }
    if (this.x == 1 && this.y == 2) { zIndex += 1 }
    if (this.x == 2 && this.y == 1) { zIndex += 1 }
    if (this.x == 2 && this.y == 0) { zIndex += 2 }
    if (this.x == 2 && this.y == -1) { zIndex += 3 }
    // Step
    if (this.x == -2 && this.y == 1) { zIndex += 1 }
    if (this.x == -2 && this.y == 0) { zIndex += 2 }
    if (this.x == -2 && this.y == -1) { zIndex += 3 }
    if (this.x == -1 && this.y == -2) { zIndex += 3 }
    if (this.x == 0 && this.y == -2) { zIndex += 2 }
    if (this.x == 1 && this.y == -2) { zIndex += 1 }
    return zIndex
  }

  this.animate = function () {
    const origin = parseInt(this.position_at(this.x, this.y)[0])
    const offset = (origin * (1 + (Math.random() / 20)))
    $(this.element).css('opacity', 0).css('top', offset + '%').animate({ opacity: 1, top: origin + '%' }, oquonie.speed)
  }
}
