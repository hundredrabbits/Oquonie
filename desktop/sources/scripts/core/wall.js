'use strict'

/* global oquonie */

function Wall (pos, id, type) {
  Tile.call(this, 'wall ' + (pos < 3 ? 'left' : 'right'))

  const t = [[-1, 2], [0, 2], [1, 2], [2, 1], [2, 0], [2, -1]]
  this.x = t[pos][0]
  this.y = t[pos][1]
  this.id = id

  this.element.setAttribute('pos', this.x + ',' + this.y)

  this.update()

  if (this.id != 0) { oquonie.artbook.set_art(this.element, 'media/graphics/wall/' + this.id + '.png') }
}
