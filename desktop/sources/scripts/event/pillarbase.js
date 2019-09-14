'use strict'

function PillarBase (x, y, character) {
  Event.call(this, 'pillarbase')

  this.x = x
  this.y = y
  this.id = 'base'
  this.character = character

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.is_collider = function () {
    return true
  }

  this.on_collision = function () {
    if (oquonie.spellbook.has_pillar(this.character) == true) {
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.dialog.show('owl', ['pillar', 'foe', this.character])
    }
    oquonie.music.play_effect('bump.1')
  }

  this.on_sight = function () {
    if (oquonie.spellbook.has_pillar(this.character)) {
      this.id = 'complete'
    } else {
      this.id = 'base'
    }
  }

  this.update(20)
}
