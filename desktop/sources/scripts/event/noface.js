'use strict'

function Noface (x, y) {
  Event.call(this, 'noface')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.is_collider = function () {
    return true
  }

  this.on_collision = function () {
    console.log(oquonie.player.id)
    if (oquonie.player.id == 'catfishbird') {
      keyboard.lock('teleport')
      setTimeout(function () { oquonie.stage.warp_to(130, 0, 0) }, 500)
      oquonie.dialog.show('noface', ['help', 'friend', 'pillar'])
    } else if (oquonie.spellbook.pillars.length < 5) {
      oquonie.dialog.show('noface', ['confusion1', 'confusion3', 'pillar'])
    } else {
      oquonie.dialog.show('noface', ['confusion1', 'confusion3', 'confusion2'])
    }
  }

  this.update(20)
}
