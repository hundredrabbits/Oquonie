'use strict'

/* global oquonie */

function Player () {
  Event.call(this, 'player')

  this.id = ''
  this.orientation = 'front'

  this.animator.add(new Animation('idle.front', [1, 1, 1, 1, 1, 2, 3, 2]))
  this.animator.add(new Animation('idle.back', [1]))
  this.animator.add(new Animation('walk.front', [1, 2]))
  this.animator.add(new Animation('walk.back', [1, 2]))
  this.animator.add(new Animation('warp', [1]))

  this.animator.state = 'idle.front'
  this.shadow = new Shadow()

  this.element.appendChild(this.shadow.element)

  this.locks = []

  this.isLocked = () => {
    return this.locks.length > 0
  }

  this.lock = (id) => {
    console.log('Added lock: ', id)
    this.locks.push(id)
  }

  this.unlock = (id) => {
    const target = this.locks.indexOf(id)
    if (target > -1) {
      this.locks.splice(target, 1)
      console.info('Unlocked: ', id)
    } else {
      console.warn('No lock named: ', id)
    }
  }

  this.setId = function (new_id) {
    if (this.id !== new_id) {
      this.id = new_id
      this.animator.preload()
    }
  }

  this.try_move = function (x, y) {
    if (oquonie.dialog.isVisible) {
      oquonie.dialog.hide()
      return
    }
    if (oquonie.overlay.content) {
      oquonie.overlay.hide()
      return
    }
    if (this.isLocked()) {
      console.warn('Is locked!!')
      return
    }

    const destination = [this.x + x, this.y + y]
    const target_tiles = oquonie.stage.tilesAt(this.x + x, this.y + y)
    const target_floor = oquonie.stage.floorAt(this.x + x, this.y + y)

    let elicits_collision_bump = target_tiles.length === 0
    const colliders = []
    for (let i = 0; i < target_tiles.length; i++) {
      elicits_collision_bump = elicits_collision_bump || target_tiles[i].elicits_collision_bump()
      if (target_tiles[i].isCollider()) {
        colliders.push(target_tiles[i])
      }
    }

    if (elicits_collision_bump) {
      if (x === 0 && y === -1) { $(this.element).attr('orientation', 'front').attr('direction', 'right') }
      if (x === -1 && y === 0) { $(this.element).attr('orientation', 'front').attr('direction', 'left') }
      if (x === 0 && y === 1) { $(this.element).attr('orientation', 'back').attr('direction', 'left') }
      if (x === 1 && y === 0) { $(this.element).attr('orientation', 'back').attr('direction', 'right') }
    }

    const mid_walk = this.animator.state.indexOf('walk') !== -1

    if (colliders.length > 0) {
      if (elicits_collision_bump) {
        this.bumpAgainst(x, y)
        for (let i = 0; i < colliders.length; i++) {
          console.log('Blocked by: ' + colliders[i].constructor.name)
          if (colliders[i].elicits_collision_bump() === true) {
            colliders[i].receive_bump()
          }
          colliders[i].onCollision()
        }
      }
    } else if (destination[0] > 1 || destination[0] < -1 || destination[1] > 1 || destination[1] < -1) {
      console.log('Blocked by: Edge')
      if (!mid_walk) {
        this.bumpUp(x, y)
        oquonie.music.play_effect('bump.2')
      }
    } else if (target_floor === 0) {
      console.log('Blocked by: Floor(' + target_floor + ')')
      if (!mid_walk) {
        this.bumpUp(x, y)
        oquonie.music.play_effect('bump.3')
      }
    } else {
      this.move_by(x, y)
      console.log('Moved to: Floor(' + this.x + ',' + this.y + ')')
      oquonie.music.play_effect('walk')
    }

    for (let i = 0; i < target_tiles.length; i++) {
      target_tiles[i].onStep()
    }

    this.update(20)
  }

  this.update = function () {
    this.orientation = $(this.element).attr('orientation')
    this.direction = $(this.element).attr('direction')
    this.animation_frame = 1

    if (this.direction === 'right') {
      $(this.element).addClass('mirror')
    } else {
      $(this.element).removeClass('mirror')
    }
    $(this.element).css('z-index', this.depth(20))
  }

  this.lift = function (speed) {
    this.animator.set_state('warp')

    $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.9) + '%' }, speed)
    $(oquonie.player.shadow.element).delay(300).animate({ top: 10 + '%', opacity: 0 }, speed / 2)
  }

  this.land = function () {
    $(oquonie.player.element).css('top', (parseInt(this.positionAt(this.x, this.y)[0]) * 0.6) + '%').delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0])) + '%' }, oquonie.speed * 10, function () { oquonie.player.animator.set_state('idle.front') })
    $(oquonie.player.shadow.element).css('top', (parseInt(this.positionAt(this.x, this.y)[0]) * 1.4) + '%').delay(300).animate({ top: 0 + '%', opacity: 1 }, oquonie.speed * 10)
  }

  // Transform

  this.transform = function (spell) {
    console.log('Transform(init): ' + spell)
    oquonie.player.lock('transform')

    if (spell === 'catfishbird') {
      oquonie.game.save()
    }

    this.animator.set_state('warp')

    oquonie.music.play_effect('transform')

    $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.9) + '%' }, oquonie.speed * 2, function () {
      oquonie.player.transform_lift(spell)
    })
    $(oquonie.player.shadow.element).delay(300).animate({ top: 10 + '%', opacity: 0 }, oquonie.speed * 2)
  }

  this.transform_lift = function (spell) {
    console.log('Transform(lift): ' + spell)

    $(oquonie.player.element).animate({ opacity: 0, top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.85) + '%' }, oquonie.speed * 4, function () {
      oquonie.player.transform_character(spell)
    })
  }

  this.transform_character = function (spell) {
    console.log('Transform(char): ' + spell)

    oquonie.player.setId(spell)
    oquonie.stage.look()

    $(oquonie.player.element).animate({ opacity: 1 }, oquonie.speed * 2).delay(1000).animate({ top: oquonie.player.positionAt(oquonie.player.x, oquonie.player.y)[0] }, oquonie.speed * 8, function () {
      oquonie.player.transform_done()
    })
    $(oquonie.player.shadow.element).delay(1300).animate({ top: 0 + '%', opacity: 1 }, oquonie.speed * 8)
  }

  this.transform_done = function () {
    console.log('Transform(done)')
    oquonie.player.unlock('transform')
    oquonie.player.animator.set_state('idle.front')
  }

  this.update(20)
}

function Blocker (x, y, id) {
  Event.call(this, 'blocker')

  this.x = x
  this.y = y
  this.id = id

  this.isCollider = function () {
    return true
  }

  this.elicits_collision_bump = function () {
    return this.id !== 0
  }

  this.onCollision = function () {
    if (this.id !== 0) { oquonie.music.play_effect('bump.1') }
    if (oquonie.player.location === 43) { this.rez_easteregg() }
  }

  this.rez_easteregg = function () {
    if (oquonie.player.id !== 'nastazie') { return }

    oquonie.world.rooms[43].remove_event(10)
    oquonie.world.rooms[43].add_event(new Cameo('rez', 1, 1, ['help', 'unlocked', 'door']), true)
    oquonie.world.rooms[43].refresh()
  }

  this.update(20)

  if (this.id !== 0) { oquonie.artbook.setArt(this.element, 'media/graphics/blocker/' + this.id + '.png') }
}

function Boss (x, y, reset) {
  Event.call(this, 'boss')

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
  this.animator.add(new Animation('ghost', [1, 1, 1, 1, 1, 2, 3, 2]))

  this.x = x
  this.y = y
  this.reset = reset

  this.is_gone = false

  this.isCollider = function () {
    return this.is_gone !== true
  }

  this.onCollision = function () {
    if (this.reset) {
      oquonie.dialog.show('boss', ['teleport', 'incorrect', 'document'])
      return
    }

    if (this.is_gone === true) { return }

    oquonie.player.lock('boss')

    setTimeout(function () { oquonie.stage.shake(5, 80) }, 1500)
    setTimeout(function () { oquonie.stage.destroy() }, 2000)
    setTimeout(function () { oquonie.player.transform('necomedre') }, 2300)
    setTimeout(function () { oquonie.stage.setTheme('black') }, 2300)
    setTimeout(function () { oquonie.player.unlock('boss') }, 7000)

    this.animator.set_state('ghost')

    $(this.element).delay(oquonie.speed * 8).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 2)
    this.is_gone = true
    oquonie.music.play_effect('teleport')
    oquonie.dialog.show('boss', ['document', 'teleport', 'guide'])
  }

  this.update(20)
}

function Broken (x, y, id, room, to_x, to_y) {
  Event.call(this, 'broken')

  this.x = x
  this.y = y
  this.id = id
  this.room = room
  this.to_x = to_x
  this.to_y = to_y

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.spellbook.pillars < 5) { return }
    oquonie.stage.enterRoom(this.room, this.to_x, this.to_y)
  }

  this.onSight = function () {
    if (oquonie.spellbook.pillars.length < 5) { return }
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    oquonie.artbook.setArt('#wall_' + wall_id, 'media/graphics/broken/' + this.id + '.png')
  }
}

function Cameo (id, x, y, dialog) {
  Event.call(this, 'cameo')

  this.id = id
  this.x = x
  this.y = y
  this.dialog = dialog

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show('cameo/' + this.id, this.dialog, null, 'daniel')
  }

  this.update(20)
}

function Credit (x, y, id) {
  Event.call(this, 'credit')

  this.x = x
  this.y = y
  this.id = id

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.id, ['confusion1', 'confusion3', 'confusion2'])
  }

  this.update(20)
}

function Door (x, y, room, to_x, to_y) {
  Event.call(this, 'door')

  this.x = x
  this.y = y

  this.destinations = []

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    for (let i = 0; i < this.destinations.length; i++) {
      if (this.destinations[i].fn()) {
        oquonie.stage.enterRoom(this.destinations[i].room, this.destinations[i].to_x, this.destinations[i].to_y)
        break
      }
    }
    oquonie.music.play_effect('bump.2')
  }

  this.add_destination = function (conditionFn, room, to_x, to_y) {
    this.destinations.unshift({ fn: conditionFn, room: room, to_x: to_x, to_y: to_y })
  }

  this.add_destination(function () { return true }, room, to_x, to_y)
}

function Gate (requirement, x, y, room, to_x, to_y) {
  Event.call(this, 'gate')

  this.requirement = requirement
  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (this.requirement !== oquonie.player.id && oquonie.player.id !== 'nastazie') {
      console.warn('Gate requires: ' + this.requirement + ', is ' + oquonie.player.id)
      oquonie.dialog.show('owl', ['door', 'locked', this.requirement])
      return
    }
    oquonie.stage.enterRoom(this.room, this.to_x, this.to_y)
    oquonie.music.play_effect('bump.2')
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    if (wall_id !== null) {
      oquonie.artbook.setArt('#wall_' + wall_id, 'media/graphics/wall/gate.' + this.requirement + '.' + (this.requirement === oquonie.player.id || oquonie.player.id === 'nastazie' ? 'open' : 'close') + '.png')
    }
  }
}

function Ghost (x, y) {
  Event.call(this, 'ghost')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return false
  }

  this.onSight = function () {
    $(this.element).delay(oquonie.speed * 5).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 10, function () {
      this.is_known = true
    })
  }

  this.onStep = function () {
    $(this.element).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 5, function () {
      this.is_known = true
    })
  }

  this.update(20)
}

function HiversairesGate (x, y, room, to_x, to_y) {
  Event.call(this, 'hiversaires_gate')

  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.player.id !== 'nastazie') {
      oquonie.dialog.show('owl', ['hiversaires1', 'hiversaires2', 'hiversaires3'])
      return
    }
    oquonie.stage.enterRoom(this.room, this.to_x, this.to_y)
    oquonie.music.play_effect('bump.2')
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    if (wall_id !== null) {
      oquonie.artbook.setArt('#wall_' + wall_id, 'media/graphics/wall/gate.hiversaires.' + (oquonie.player.id === 'nastazie' ? 'open' : 'close') + '.png')
    }
  }
}

function HiversairesSauvegarde (x, y) {
  Event.call(this, 'hiversaires')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['lo', 'ki', 'va'])
  }

  this.update(20)
}

function Noface (x, y) {
  Event.call(this, 'noface')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    console.log(oquonie.player.id)
    if (oquonie.player.id === 'catfishbird') {
      oquonie.player.lock('teleport')
      setTimeout(function () { oquonie.stage.warpTo(130, 0, 0) }, 500)
      oquonie.dialog.show('noface', ['help', 'friend', 'pillar'])
    } else if (oquonie.spellbook.pillars.length < 5) {
      oquonie.dialog.show('noface', ['confusion1', 'confusion3', 'pillar'])
    } else {
      oquonie.dialog.show('noface', ['confusion1', 'confusion3', 'confusion2'])
    }
  }

  this.update(20)
}

function Owl (x, y) {
  Event.call(this, 'owl')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.spellbook.pillars.length > 0) {
      oquonie.dialog.show(this.name, ['guide', 'locked', 'pillar'])
    } else {
      oquonie.dialog.show(this.name, ['door', 'guide', 'friend'])
    }
  }

  this.onSight = function () {
    oquonie.game.save()
  }

  this.update(20)
}

function Petunia (x, y) {
  Event.call(this, 'petunia')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show('petunia', ['confusion1', 'confusion3', 'confusion2'])

    oquonie.artbook.setArt('#wall_0', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt('#wall_1', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt('#wall_2', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt('#wall_3', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt('#wall_4', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt('#wall_5', 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    // oquonie.artbook.setArt("#wall_6","media/graphics/wall/"+parseInt(Math.random() * 37)+".png");

    oquonie.artbook.setArt('#floor_0', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_1', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_2', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_3', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_4', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_5', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_6', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_7', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt('#floor_8', 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    // oquonie.artbook.setArt("#floor_9","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
  }

  this.update(20)
}

function Pillar (x, y, character, warp = 1) {
  Event.call(this, 'pillar')

  this.x = x
  this.y = y
  this.id = 'full'
  this.warp = warp
  this.character = character
  this.animator.add(new Animation('idle', [1]))

  this.isCollider = function () {
    return !oquonie.spellbook.has_pillar(this.character)
  }

  this.onCollision = function () {

  }

  this.onStep = function () {
    if (this.isCollider()) {
      oquonie.spellbook.add_pillar(this.character)
      this.onSight()
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.player.lock('teleport')
      const w = this.warp
      setTimeout(function () { oquonie.stage.warpTo(w, 0, 0) }, 500)
    }
  }

  this.onSight = function () {
    if (oquonie.spellbook.has_pillar(this.character)) {
      this.id = 'gone'
    } else {
      this.id = 'full'
    }
  }

  this.update(20)
}

function PillarBase (x, y, character) {
  Event.call(this, 'pillarbase')

  this.x = x
  this.y = y
  this.id = 'base'
  this.character = character

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.spellbook.has_pillar(this.character) === true) {
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.dialog.show('owl', ['pillar', 'foe', this.character])
    }
    oquonie.music.play_effect('bump.1')
  }

  this.onSight = function () {
    if (oquonie.spellbook.has_pillar(this.character)) {
      this.id = 'complete'
    } else {
      this.id = 'base'
    }
  }

  this.update(20)
}

function PillarGate (x, y, room, to_x, to_y) {
  Event.call(this, 'gate')

  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (this.missing_pillar()) {
      oquonie.dialog.show('owl', ['pillar', 'foe', this.missing_pillar()])
      return
    }
    oquonie.stage.enterRoom(this.room, this.to_x, this.to_y)
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    const src = !this.missing_pillar() ? 'media/graphics/wall/gate.red.open.png' : 'media/graphics/wall/gate.red.close.png'
    oquonie.artbook.setArt('#wall_' + wall_id, src)
  }

  this.missing_pillar = function () {
    if (!oquonie.spellbook.has_pillar('necomedre')) { return 'necomedre' }
    if (!oquonie.spellbook.has_pillar('nephtaline')) { return 'nephtaline' }
    if (!oquonie.spellbook.has_pillar('neomine')) { return 'neomine' }
    if (!oquonie.spellbook.has_pillar('nestorine')) { return 'nestorine' }
    if (!oquonie.spellbook.has_pillar('nemedique')) { return 'nemedique' }
    if (!oquonie.spellbook.has_pillar('nastazie')) { return 'nastazie' }

    return null
  }
}

function Plan (x, y, id) {
  Event.call(this, 'door')

  this.x = x
  this.y = y
  this.id = id

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.overlay.show(this.id)
    oquonie.dialog.show('owl', ['help', 'guide', 'friend'])
    oquonie.music.play_effect('bump.2')
  }
}

function Ramen (x, y, character = null) {
  Event.call(this, 'ramen')

  this.x = x
  this.y = y
  this.character = character
  this.id = 'active'
  this.first_sight = false

  this.mat = new RamenMat(x, y)

  this.notification = document.createElement('notification')
  this.element.appendChild(this.notification)

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    if (this.character) { return !oquonie.spellbook.has_ramen(this.character) }
    if (this.location === 2) { return true }
  }

  this.lobby_spell = function () {
    if (oquonie.player.id === 'necomedre') { return 'nestorine' } else if (oquonie.player.id === 'nestorine') { return 'nephtaline' } else if (oquonie.player.id === 'neomine') { return 'necomedre' } else { return 'nemedique' }
  }

  // On Collision

  this.onCollision = function () {
    oquonie.music.play_effect('bump.1')

    if (this.character) { this.onCollision_world() }
    if (this.location === 2) { this.onCollision_lobby() }
    this.update_state()
  }

  this.onCollision_lobby = function () {
    if (oquonie.spellbook.has_ramen(oquonie.player.id) !== true) {
      console.warn('Ramen for ' + oquonie.player.id + ' is unfound.')
      // oquonie.dialog.show(this.name,["help","foe",oquonie.player.id]);
      return
    }
    oquonie.spellbook.toggle_spell(this.spell_name())
    oquonie.dialog.show(this.name, ['help', 'friend', oquonie.player.id])
  }

  this.onCollision_world = function () {
    if (oquonie.spellbook.has_ramen(this.character) === true) {
      console.warn('Ramen for ' + oquonie.player.id + ' was already found.')
      return
    }
    oquonie.spellbook.add_ramen(this.character)
    oquonie.dialog.show(this.name, ['help', 'friend', oquonie.player.id])
  }

  // On Sight

  this.onSight = function () {
    this.first_sight = true
    this.update_state()
    this.animator.animate()
  }

  this.update_state = function () {
    if (this.character) { this.onSight_world() }
    if (this.location === 2) { this.onSight_lobby() }
    this.update_notification()
  }

  this.onSight_lobby = function () {
    if (oquonie.spellbook.has_ramen(oquonie.player.id)) {
      this.id = 'active'
      this.element.style.display = 'block'
    } else {
      this.id = 'away'
      this.element.style.display = 'none'
      this.mat.show()
    }
  }

  this.onSight_world = function () {
    if (oquonie.spellbook.has_ramen(this.character)) {
      if (!this.first_sight) {
        $(this.element).animate({ opacity: 0 }, oquonie.speed * 3)
      } else {
        this.element.style.display = 'none'
      }
      this.mat.show()
    }
    this.first_sight = false
  }

  this.hide_notification = function () {
    this.notification.style.display = 'none'
  }

  this.show_notification = function () {
    this.notification.style.display = 'block'
    oquonie.artbook.setArt(this.notification, 'media/graphics/notification/' + this.lobby_spell() + '.png')
  }

  this.update_notification = function () {
    if (this.character) {
      this.hide_notification()
    } else if (oquonie.spellbook.has_ramen(oquonie.player.id) !== true) {
      this.hide_notification()
    } else if (oquonie.spellbook.has_spell(this.spell_name()) !== true) {
      this.show_notification()
    } else {
      this.hide_notification()
    }
  }

  this.spell_name = function () {
    return this.lobby_spell() + '_' + this.location
  }

  this.update(20)
}

function RamenMat (x, y) {
  Event.call(this, 'ramen_mat')

  this.x = x
  this.y = y
  this.blocking = false

  this.isCollider = function () {
    return this.blocking
  }

  this.onCollision = function () {
    oquonie.music.play_effect('bump.1')
  }

  this.onSight = function () {
    const width = $(this.element).width()
    this.element.style.backgroundSize = `${width}px ${width * 1.5}px`
    this.element.style.backgroundPosition = '0px center'
    this.element.style.display = 'none'
    oquonie.artbook.setArt(this.element, 'media/graphics/ramen/mat.png')
  }

  this.show = function () {
    this.blocking = true
    this.element.style.display = 'block'
  }

  this.update(20)
}

function Red (x, y, return_room) {
  Event.call(this, 'red')

  this.x = x
  this.y = y
  this.return_room = return_room

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['foe', 'pillar', 'friend'])
    oquonie.player.lock('red_end')
    const return_room = this.return_room
    setTimeout(function () {
      oquonie.player.lock('teleport')
      oquonie.stage.warpTo(return_room, 0, 0)
    }, 1500)
    setTimeout(function () {
      oquonie.dialog.hide()
      oquonie.player.unlock('red_end')
    }, 7000)
  }

  this.onSight = function () {
    oquonie.player.lock('red_delay')
    setTimeout(function () { oquonie.player.unlock('red_delay') }, 1000)
  }

  this.update(20)
}

function Shadow (x, y) {
  Tile.call(this, 'shadow')

  this.x = x
  this.y = y
}

function Shark (x, y, is_transformer = true) {
  Event.call(this, 'shark')

  this.x = x
  this.y = y
  this.is_transformer = is_transformer

  this.animator.add(new Animation('active', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
  this.animator.add(new Animation('away', [1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    // Failsafe
    if (oquonie.player.id === 'document') {
      oquonie.player.transform('necomedre')
    } else if (oquonie.player.id === 'catfishbird') {
      oquonie.player.lock('teleport')
      const w = this.warp
      setTimeout(function () { oquonie.stage.warpTo(9, 0, 0) }, 500)
    } else if (this.is_transformer === true && oquonie.player.id !== 'necomedre') {
      oquonie.player.transform('necomedre')
      oquonie.dialog.show('shark', ['guide', 'friend', 'necomedre'])
    } else if (oquonie.spellbook.spells.length > 0) {
      oquonie.spellbook.remove_spells()
      oquonie.dialog.show('shark', ['guide', 'friend', 'teleport'])
    }
    this.onSight()
  }

  this.onSight = function () {
    let animation_state = 'away'

    if (this.is_transformer === true && oquonie.player.id !== 'necomedre') {
      animation_state = 'active'
    } else if (oquonie.spellbook.spells.length > 0) {
      animation_state = 'active'
    }
    this.animator.set_state(animation_state)
  }

  this.update(20)
}

function Speaker (x, y, id = 'disc') {
  Event.call(this, id)

  this.animator.add(new Animation('on', [1, 2, 3, 2]))
  this.animator.add(new Animation('off', [1]))

  this.x = x
  this.y = y
  this.id = id
  this.animator.state = 'on'
  this.is_playing = true

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    this.toggle()
    oquonie.dialog.show(
      this.id,
      ['outside', this.is_playing ? 'correct' : 'incorrect', 'sound'],
      null,
      this.id + '_' + (this.is_playing ? 'off' : 'on'))
  }

  this.toggle = function () {
    if (this.is_playing === true) {
      this.stop()
    } else {
      this.play()
    }
    console.log('Speaker', this.is_playing)
  }

  this.play = function () {
    this.is_playing = true
    this.animator.set_state('on')
    oquonie.music.resume_ambience()
  }

  this.stop = function () {
    this.is_playing = false
    this.animator.set_state('off')
    oquonie.music.pause_ambience()
  }

  this.onSight = function () {
    if (oquonie.music.is_muted === this.is_playing) {
      this.toggle()
    }
  }

  this.update(20)
}

function Teleport (x, y, room, to_x = 0, to_y = 0, reset = false) {
  Event.call(this, 'teleport')

  this.x = x
  this.y = y
  this.room = room
  this.to_x = to_x
  this.to_y = to_y
  this.reset = reset

  this.isCollider = function () {
    return false
  }

  this.onStep = function () {
    oquonie.player.lock('teleport')
    const r = this.room
    const to_x = this.to_x
    const to_y = this.to_y
    setTimeout(function () { oquonie.stage.warpTo(r, to_x, to_y) }, 500)

    if (this.reset) {
      oquonie.spellbook.reset()
    }
  }
}

function Tree (x, y) {
  Event.call(this, 'tree')

  this.x = x
  this.y = y
  this.id = 2

  this.animator.add(new Animation('idle', [1]))

  this.isCollider = function () {
    return true
  }

  this.onSight = function () {
    if (oquonie.spellbook.pillars.length < 1) {
      this.id = 1
    } else if (oquonie.spellbook.pillars.length > 4) {
      this.id = 5
    } else {
      this.id = oquonie.spellbook.pillars.length
    }
  }

  this.onCollision = function () {
    if (oquonie.spellbook.pillars.length > 4) {
      oquonie.dialog.show('noface', ['confusion1', 'friend', 'pillar'])
    } else {
      oquonie.dialog.show('noface', ['confusion1', 'confusion3', 'pillar'])
    }
  }

  this.update(20)
}

function Wizard (x, y, id) {
  Event.call(this, 'wizard')

  this.x = x
  this.y = y
  this.id = id

  this.notification = document.createElement('notification')
  this.element.appendChild(this.notification)
  oquonie.artbook.setArt(this.notification, 'media/graphics/notification/' + this.id + '.png')

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.spell_name = function () {
    return this.id + '_' + this.location
  }

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    const path = 'media/graphics/wizard/' + this.id + '.portrait.png'
    if (oquonie.player.id === this.id) {
      oquonie.dialog.show(this.id, ['friend', 'unlocked', this.id], path)
      console.warn('Already is ' + this.id)
      return
    }
    oquonie.spellbook.toggle_spell(this.spell_name())
    this.update_notification()
    oquonie.dialog.show(this.id, ['friend', 'locked', this.id], path)
  }

  this.onSight = function () {
    console.log('Sighted Wizard: ' + this.id)
    this.update_notification()
  }

  this.hide_notification = function () {
    this.notification.style.display = 'none'
  }

  this.show_notification = function () {
    this.notification.style.display = 'block'
  }

  this.update_notification = function () {
    if (oquonie.spellbook.has_spell(this.spell_name()) === true || oquonie.player.id === this.id) {
      this.hide_notification()
    } else {
      this.show_notification()
    }
  }

  this.update(20)
}

function Ninj (x, y) {
  Event.call(this, 'ninj')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['confusion1', 'confusion2', 'confusion3'])
  }

  this.update(20)
}

function Toy (x, y) {
  Event.call(this, 'toy')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['friend', 'locked', this.id])
  }

  this.update(20)
}

function Rek (x, y) {
  Event.call(this, 'rek')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['friend', 'locked', this.id])
  }

  this.update(20)
}

function Tip (x, y) {
  Event.call(this, 'tip')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.dialog.show(this.name, ['friend', 'locked', this.id])
  }

  this.update(20)
}
