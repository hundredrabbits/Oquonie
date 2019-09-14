'use strict'

function HiversairesGate (x, y, room, to_x, to_y) {
  Event.call(this, 'hiversaires_gate')

  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y

  this.is_collider = function () {
    return true
  }

  this.on_collision = function () {
    if (oquonie.player.id != 'nastazie') {
      oquonie.dialog.show('owl', ['hiversaires1', 'hiversaires2', 'hiversaires3'])
      return
    }
    oquonie.stage.enter_room(this.room, this.to_x, this.to_y)
    oquonie.music.play_effect('bump.2')
  }

  this.on_sight = function () {
    let wall_id = oquonie.stage.wall_at(this.x, this.y)
    if (wall_id != null) {
      oquonie.artbook.set_art('#wall_' + wall_id, 'media/graphics/wall/gate.hiversaires.' + (oquonie.player.id == 'nastazie' ? 'open' : 'close') + '.png')
    }
  }
}

function HiversairesSauvegarde (x, y) {
  Event.call(this, 'hiversaires')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.is_collider = function () {
    return true
  }

  this.on_collision = function () {
    oquonie.dialog.show(this.name, ['lo', 'ki', 'va'])
  }

  this.update(20)
}
