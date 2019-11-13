'use strict'

function Pillar (x, y, character, warp = 1) {
  Event.call(this, 'pillar')

  this.x = x
  this.y = y
  this.id = 'full'
  this.warp = warp
  this.character = character
  this.animator.add(new Animation('idle', [1]))

  this.is_collider = function () {
    return !oquonie.spellbook.has_pillar(this.character)
  }

  this.on_collision = function () {

  }

  this.on_step = function () {
    if (this.is_collider()) {
      oquonie.spellbook.add_pillar(this.character)
      this.on_sight()
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.player.lock('teleport')
      const w = this.warp
      setTimeout(function () { oquonie.stage.warp_to(w, 0, 0) }, 500)
    }
  }

  this.on_sight = function () {
    if (oquonie.spellbook.has_pillar(this.character)) {
      this.id = 'gone'
    } else {
      this.id = 'full'
    }
  }

  this.update(20)
}
