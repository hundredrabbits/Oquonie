'use strict'

function Red (x, y, return_room) {
  Event.call(this, 'red')

  this.x = x
  this.y = y
  this.return_room = return_room

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.is_collider = function () {
    return true
  }

  this.on_collision = function () {
    oquonie.dialog.show(this.name, ['foe', 'pillar', 'friend'])
    oquonie.player.lock('red_end')
    const return_room = this.return_room
    setTimeout(function () {
      oquonie.player.lock('teleport')
      oquonie.stage.warp_to(return_room, 0, 0)
    }, 1500)
    setTimeout(function () {
      oquonie.dialog.hide()
      oquonie.player.unlock('red_end')
    }, 7000)
  }

  this.on_sight = function () {
    oquonie.player.lock('red_delay')
    setTimeout(function () { oquonie.player.unlock('red_delay') }, 1000)
  }

  this.update(20)
}
