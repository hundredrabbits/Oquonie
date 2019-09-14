'use strict'

function Teleport (x, y, room, to_x = 0, to_y = 0, reset = false) {
  Event.call(this, 'teleport')

  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y
  this.reset = reset

  this.is_collider = function () {
    return false
  }

  this.on_step = function () {
    keyboard.lock('teleport')
    let r = this.room
    let to_x = this.to_x
    let to_y = this.to_y
    setTimeout(function () { oquonie.stage.warp_to(r, to_x, to_y) }, 500)

    if (this.reset) {
      oquonie.spellbook.reset()
    }
  }
}
