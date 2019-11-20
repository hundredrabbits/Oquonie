'use strict'

/* global oquonie */

function Step (pos, id, type) {
  Tile.call(this, 'step ' + (pos < 3 ? 'left' : 'right'))

  const t = [[-2, 1], [-2, 0], [-2, -1], [-1, -2], [0, -2], [1, -2]]
  const x = t[pos][0]
  const y = t[pos][1]

  this.x = t[pos][0]
  this.y = t[pos][1]
  this.id = id

  this.element.setAttribute('pos', this.x + ',' + this.y)

  this.update(100)
  if (this.id != 0) { oquonie.artbook.setArt(this.element, 'media/graphics/step/' + this.id + '.png') }
}
