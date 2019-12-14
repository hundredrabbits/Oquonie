'use strict'

/* global oquonie Animation Animator */
/* global setClass */

function Tile (type = 'unknown') {
  this.element = document.createElement('tile')
  this.x = 0
  this.y = 0

  this.update = function (depth_offset = 0) {
    const posName = `pos${this.x === -2 ? 'f' : this.x === -1 ? 'e' : this.x}${this.y === -2 ? 'f' : this.y === -1 ? 'e' : this.y}`
    setClass(this.element, `tile ${type} ${posName}`)

    this.element.style.zIndex = this.depth(depth_offset)
  }

  this.positionAt = function (x, y) {
    let top = '0px'
    let left = '0px'

    if (x === 1 && y === 1) { top = '40%'; left = '50%' }
    if (x === 1 && y === 0) { top = '45%'; left = '60%' }
    if (x === 1 && y === -1) { top = '50%'; left = '70%' }

    if (x === 0 && y === 1) { top = '45%'; left = '40%' }
    if (x === 0 && y === 0) { top = '50%'; left = '50%' }
    if (x === 0 && y === -1) { top = '55%'; left = '60%' }

    if (x === -1 && y === 1) { top = '50%'; left = '30%' }
    if (x === -1 && y === 0) { top = '55%'; left = '40%' }
    if (x === -1 && y === -1) { top = '60%'; left = '50%' }

    // Wall
    if (x === -1 && y === 2) { top = '48%'; left = '20%' }
    if (x === 0 && y === 2) { top = '43%'; left = '30%' }
    if (x === 1 && y === 2) { top = '38%'; left = '40%' }
    if (x === 2 && y === 1) { top = '38%'; left = '60%' }
    if (x === 2 && y === 0) { top = '43%'; left = '70%' }
    if (x === 2 && y === -1) { top = '48%'; left = '80%' }

    // Step
    if (x === -2 && y === 1) { top = '55%'; left = '20%' }
    if (x === -2 && y === 0) { top = '60%'; left = '30%' }
    if (x === -2 && y === -1) { top = '65%'; left = '40%' }
    if (x === -1 && y === -2) { top = '65%'; left = '60%' }
    if (x === 0 && y === -2) { top = '60%'; left = '70%' }
    if (x === 1 && y === -2) { top = '55%'; left = '80%' }

    return [top, left]
  }

  this.depth = function (offset = 0) {
    let zIndex = offset

    if (this.x === 1 && this.y === 1) { zIndex += 1 }
    if (this.x === 1 && this.y === 0) { zIndex += 2 }
    if (this.x === 1 && this.y === -1) { zIndex += 3 }
    if (this.x === 0 && this.y === 1) { zIndex += 2 }
    if (this.x === 0 && this.y === 0) { zIndex += 3 }
    if (this.x === 0 && this.y === -1) { zIndex += 4 }
    if (this.x === -1 && this.y === 1) { zIndex += 3 }
    if (this.x === -1 && this.y === 0) { zIndex += 4 }
    if (this.x === -1 && this.y === -1) { zIndex += 5 }
    // Wall
    if (this.x === -1 && this.y === 2) { zIndex += 3 }
    if (this.x === 0 && this.y === 2) { zIndex += 2 }
    if (this.x === 1 && this.y === 2) { zIndex += 1 }
    if (this.x === 2 && this.y === 1) { zIndex += 1 }
    if (this.x === 2 && this.y === 0) { zIndex += 2 }
    if (this.x === 2 && this.y === -1) { zIndex += 3 }
    // Step
    if (this.x === -2 && this.y === 1) { zIndex += 1 }
    if (this.x === -2 && this.y === 0) { zIndex += 2 }
    if (this.x === -2 && this.y === -1) { zIndex += 3 }
    if (this.x === -1 && this.y === -2) { zIndex += 3 }
    if (this.x === 0 && this.y === -2) { zIndex += 2 }
    if (this.x === 1 && this.y === -2) { zIndex += 1 }
    return zIndex
  }

  this.animate = function () {
    this.element.style.opacity = 1
  }
}

function Wall (pos, id, type) {
  Tile.call(this, 'wall ' + (pos < 3 ? 'left' : 'right'))

  const t = [[-1, 2], [0, 2], [1, 2], [2, 1], [2, 0], [2, -1]]
  this.x = t[pos][0]
  this.y = t[pos][1]
  this.id = id

  this.update()

  this.element.style.backgroundImage = this.id !== 0 ? `url(media/graphics/wall/${this.id}.png)` : ''
}

function Step (pos, id, type) {
  Tile.call(this, 'step ' + (pos < 3 ? 'left' : 'right'))

  const t = [[-2, 1], [-2, 0], [-2, -1], [-1, -2], [0, -2], [1, -2]]
  this.x = t[pos][0]
  this.y = t[pos][1]
  this.id = id

  this.update(100)

  this.element.style.backgroundImage = this.id !== 0 ? `url(media/graphics/step/${this.id}.png)` : ''
}

function Floor (pos, id, type) {
  Tile.call(this, 'floor')

  const t = [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [1, 0], [-1, -1], [0, -1], [1, -1]]
  this.x = t[pos][0]
  this.y = t[pos][1]
  this.id = id

  this.update(5)

  this.element.style.backgroundImage = this.id !== 0 ? `url(media/graphics/floor/${this.id}.png)` : ''
}

function Event (type) {
  Tile.call(this, 'event')

  this.location = 0
  this.name = type
  this.state = 'idle'
  this.orientation = 'front'
  this.direction = 'left'
  this.animator = new Animator(this)
  this.isMirrored = false

  this.element.style.backgroundImage = this.id !== 0 ? `url(media/graphics/${type}/${this.state}.png)` : ''

  this.update = function (depth_offset = 0) {
    const posName = `pos${this.x === -2 ? 'f' : this.x === -1 ? 'e' : this.x}${this.y === -2 ? 'f' : this.y === -1 ? 'e' : this.y}`
    const mirror = this.orientation === 'right' ? 'mirror' : ''
    setClass(this.element, `event ${type} ${posName} ${mirror}`)

    this.element.style.zIndex = this.depth(depth_offset)
  }

  this.isCollider = function () {
    return false
  }

  this.receiveBump = function () {
    console.log('Bumped!')
    // const origin_pos_y = parseInt(this.element.style.top)
    // $(this.element).css('top', (origin_pos_y - 0.5) + '%').animate({ top: origin_pos_y + '%' }, oquonie.speed / 2)
  }

  this.onCollision = function () {
    // console.log("On collision, no effect");
  }

  this.onStep = function () {
    // console.log("On step, no effect");
  }

  this.onSight = function () {
    // console.log("On sight, no effect");
  }
}

function Player () {
  Event.call(this, 'player')

  this.id = ''
  this.orientation = ''

  this.animator.add(new Animation('idle.front', [1, 1, 1, 1, 1, 2, 3, 2]))
  this.animator.add(new Animation('idle.back', [1]))
  this.animator.add(new Animation('walk.front', [1, 2]))
  this.animator.add(new Animation('walk.back', [1, 2]))
  this.animator.add(new Animation('warp', [1]))

  this.animator.state = 'idle.front'
  this.shadow = new Shadow()

  this.element.appendChild(this.shadow.element)

  this.locks = []

  this.update = function (depth_offset = 0) {
    const posName = `pos${this.x === -2 ? 'f' : this.x === -1 ? 'e' : this.x}${this.y === -2 ? 'f' : this.y === -1 ? 'e' : this.y}`
    const mirror = this.orientation === 'right' ? 'mirror' : ''
    setClass(this.element, `event player ${this.state} ${this.direction} ${posName} ${mirror}`)

    this.element.style.zIndex = this.depth(20)
    this.element.style.backgroundImage = `url(media/graphics/player/${this.id}.${this.state}.${this.direction}.png)`
  }

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

  this.setId = function (id) {
    if (this.id === id) { return }
    this.id = id
    this.animator.preload()
  }

  this.moveAt = function (x, y) {
    this.x = x
    this.y = y
  }

  this.moveIn = (room) => {
    this.location = room
  }

  this.enter = (room, x, y) => {
    this.location = room
    this.x = x
    this.y = y
    this.update()
  }

  this.standByDoor = (x, y) => {
    const vec = new Pos(-x, -y)
    this.animator.setState('idle.' + vec.dir())
    this.animator.animate()
  }

  this.tryMove = (x, y) => {
    if (oquonie.dialog.isVisible) {
      oquonie.dialog.hide()
      return
    }
    if (oquonie.overlay.isVisible) {
      oquonie.overlay.hide()
      return
    }
    if (this.isLocked()) {
      console.warn('Is locked!!')
      return
    }

    const pos = { x: this.x + x, y: this.y + y }
    const tiles = oquonie.stage.tilesAt(pos.x, pos.y)
    const colliders = tiles.filter((item) => { return item.isCollider() })

    for (const collider of colliders) {
      console.log('Blocked by: ' + collider.name)
      this.bumpAgainst(x, y)
      collider.receiveBump()
      collider.onCollision()
      return
    }

    if (oquonie.stage.floorAt(pos.x, pos.y) === 0) {
      console.log('Blocked by: Floor')
      this.bumpUp(x, y)
      return
    }

    if (pos.x > 1 || pos.x < -1 || pos.y > 1 || pos.y < -1) {
      console.log('Blocked by: Edge')
      this.bumpUp(x, y)
      return
    }

    this.moveBy(x, y)
  }

  this.moveBy = (x, y) => {
    const pos = new Pos(this.x + x, this.y + y)
    const vec = new Pos(x, y)
    console.log('Player', `Moving to ${pos}`)
    oquonie.player.lock('moving')
    this.direction = vec.dir()
    this.orientation = vec.ori()
    this.state = 'walk'
    this.setPos(pos)
    oquonie.stage.center(pos.x, pos.y)

    setTimeout(() => {
      oquonie.player.unlock('moving')
      this.state = 'idle'
      this.update()
    }, oquonie.speed * 0.5)

    this.update()
  }

  this.bumpUp = function (x, y) {
    const animator = this.animator
    if (x === 0 && y === -1 || x === -1 && y === 0) { animator.setState('idle.front') }
    if (x === 0 && y === 1 || x === 1 && y === 0) { animator.setState('idle.back') }

    // const origin_pos_y = parseInt(this.element.style.top)
    // oquonie.music.playEffect('bump.2')
    // console.log('d')
    // this.element.style.top = (origin_pos_y - 0.5) + '%'
    // this.element.style.top = (origin_pos_y - 0.5) + '%'
    // $(this.element).css('top', ).animate({ top: origin_pos_y + '%' }, oquonie.speed / 2)
  }

  this.bumpAgainst = function (x, y) {
    const animator = this.animator
    if (x === 0 && y === -1 || x === -1 && y === 0) { animator.setState('idle.front') }
    if (x === 0 && y === 1 || x === 1 && y === 0) { animator.setState('idle.back') }

    const xSlant = x - y
    const ySlant = (-x - y) * 0.5

    const origin_pos_x = parseInt(this.element.style.left)
    const origin_pos_y = parseInt(this.element.style.top)

    console.log('e')
    // $(this.element).css('top', origin_pos_y + 0.5 * ySlant + '%').css('left', origin_pos_x + 0.5 * xSlant + '%')
    // $(this.element).animate({ top: origin_pos_y + '%', left: origin_pos_x + '%' }, oquonie.speed / 2)
  }

  this.setPos = (pos) => {
    this.x = pos.x
    this.y = pos.y
    const p = this.positionAt(pos.x, pos.y)
    // this.element.style.top = p[0]
    // this.element.style.left = p[1]
    this.element.style.zIndex = this.depth(20)
    this.update()
  }

  this.lift = function (speed) {
    this.animator.setState('warp')

    // $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.9) + '%' }, speed)
    // $(oquonie.player.shadow.element).delay(300).animate({ top: 10 + '%', opacity: 0 }, speed / 2)
  }

  this.land = function () {
    // $(oquonie.player.element).css('top', (parseInt(this.positionAt(this.x, this.y)[0]) * 0.6) + '%').delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0])) + '%' }, oquonie.speed * 10, function () { oquonie.player.animator.setState('idle.front') })
    // $(oquonie.player.shadow.element).css('top', (parseInt(this.positionAt(this.x, this.y)[0]) * 1.4) + '%').delay(300).animate({ top: 0 + '%', opacity: 1 }, oquonie.speed * 10)
  }

  // Transform

  this.transform = function (spell) {
    console.log('Transform(init): ' + spell)
    oquonie.player.lock('transform')

    if (spell === 'catfishbird') {
      oquonie.game.save()
    }

    this.animator.setState('warp')

    oquonie.music.playEffect('transform')

    // $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.9) + '%' }, oquonie.speed * 2, function () {
    //   oquonie.player.transform_lift(spell)
    // })
    // $(oquonie.player.shadow.element).delay(300).animate({ top: 10 + '%', opacity: 0 }, oquonie.speed * 2)
  }

  this.transform_lift = function (spell) {
    console.log('Transform(lift): ' + spell)

    // $(oquonie.player.element).animate({ opacity: 0, top: (parseInt(this.positionAt(this.x, this.y)[0]) * 0.85) + '%' }, oquonie.speed * 4, function () {
    //   oquonie.player.transform_character(spell)
    // })
  }

  this.transform_character = function (spell) {
    console.log('Transform(char): ' + spell)

    oquonie.player.setId(spell)
    oquonie.stage.look()

    // $(oquonie.player.element).animate({ opacity: 1 }, oquonie.speed * 2).delay(1000).animate({ top: oquonie.player.positionAt(oquonie.player.x, oquonie.player.y)[0] }, oquonie.speed * 8, function () {
    //   oquonie.player.transform_done()
    // })
    // $(oquonie.player.shadow.element).delay(1300).animate({ top: 0 + '%', opacity: 1 }, oquonie.speed * 8)
  }

  this.transform_done = function () {
    console.log('Transform(done)')
    oquonie.player.unlock('transform')
    oquonie.player.animator.setState('idle.front')
  }

  this.update(20)
}

function Blocker (x, y, id) {
  Event.call(this, 'blocker')

  this.x = x
  this.y = y
  this.id = id

  this.element.style.backgroundImage = this.id !== 0 ? `url(media/graphics/blocker/${id}.png)` : ''

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (this.id !== 0) { oquonie.music.playEffect('bump.1') }
    if (oquonie.player.location === 43) { this.rez_easteregg() }
  }

  this.rez_easteregg = function () {
    if (oquonie.player.id !== 'nastazie') { return }

    oquonie.world.rooms[43].removeEvent(10)
    oquonie.world.rooms[43].addEvent(new Cameo('rez', 1, 1, ['help', 'unlocked', 'door']), true)
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

    this.animator.setState('ghost')

    // $(this.element).delay(oquonie.speed * 8).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 2)
    this.is_gone = true
    oquonie.music.playEffect('teleport')
    oquonie.dialog.show('boss', ['document', 'teleport', 'guide'])
  }

  this.update(20)
}

function Broken (x, y, id, room, toX, toY) {
  Event.call(this, 'broken')

  this.x = x
  this.y = y
  this.id = id
  this.room = room
  this.toX = toX
  this.toY = toY

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.spellbook.pillars < 5) { return }
    oquonie.stage.enterRoom(this.room, this.toX, this.toY)
  }

  this.onSight = function () {
    if (oquonie.spellbook.pillars.length < 5) { return }
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    oquonie.artbook.setArt(document.getElementById('wall_' + wall_id), 'media/graphics/broken/' + this.id + '.png')
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

function Door (x, y, room, toX, toY) {
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
        oquonie.stage.enterRoom(this.destinations[i].room, this.destinations[i].toX, this.destinations[i].toY)
        break
      }
    }
    oquonie.music.playEffect('bump.2')
  }

  this.add_destination = function (conditionFn, room, toX, toY) {
    this.destinations.unshift({ fn: conditionFn, room: room, toX: toX, toY: toY })
  }

  this.add_destination(function () { return true }, room, toX, toY)
}

function Gate (requirement, x, y, room, toX, toY) {
  Event.call(this, 'gate')

  this.requirement = requirement
  this.x = x
  this.y = y
  this.room = room
  this.toX = toX
  this.toY = toY

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (this.requirement !== oquonie.player.id && oquonie.player.id !== 'nastazie') {
      console.warn('Gate requires: ' + this.requirement + ', is ' + oquonie.player.id)
      oquonie.dialog.show('owl', ['door', 'locked', this.requirement])
      return
    }
    oquonie.stage.enterRoom(this.room, this.toX, this.toY)
    oquonie.music.playEffect('bump.2')
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    if (wall_id !== null) {
      oquonie.artbook.setArt(document.getElementById('wall_' + wall_id), 'media/graphics/wall/gate.' + this.requirement + '.' + (this.requirement === oquonie.player.id || oquonie.player.id === 'nastazie' ? 'open' : 'close') + '.png')
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
    // $(this.element).delay(oquonie.speed * 5).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 10, function () {
    //   this.isKnown = true
    // })
  }

  this.onStep = function () {
    // $(this.element).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 5, function () {
    //   this.isKnown = true
    // })
  }

  this.update(20)
}

function HiversairesGate (x, y, room, toX, toY) {
  Event.call(this, 'hiversaires_gate')

  this.x = x
  this.y = y
  this.room = room
  this.toX = toX
  this.toY = toY

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.player.id !== 'nastazie') {
      oquonie.dialog.show('owl', ['hiversaires1', 'hiversaires2', 'hiversaires3'])
      return
    }
    oquonie.stage.enterRoom(this.room, this.toX, this.toY)
    oquonie.music.playEffect('bump.2')
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    if (wall_id !== null) {
      oquonie.artbook.setArt(document.getElementById('wall_' + wall_id), 'media/graphics/wall/gate.hiversaires.' + (oquonie.player.id === 'nastazie' ? 'open' : 'close') + '.png')
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

    oquonie.artbook.setArt(document.getElementById('wall_0'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('wall_1'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('wall_2'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('wall_3'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('wall_4'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('wall_5'), 'media/graphics/wall/' + parseInt(Math.random() * 37) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_0'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_1'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_2'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_3'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_4'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_5'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_6'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_7'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
    oquonie.artbook.setArt(document.getElementById('floor_8'), 'media/graphics/floor/' + parseInt(Math.random() * 40) + '.png')
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
    return !oquonie.spellbook.hasPillar(this.character)
  }

  this.onCollision = function () {

  }

  this.onStep = function () {
    if (this.isCollider()) {
      oquonie.spellbook.addPillar(this.character)
      this.onSight()
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.player.lock('teleport')
      const w = this.warp
      setTimeout(function () { oquonie.stage.warpTo(w, 0, 0) }, 500)
    }
  }

  this.onSight = function () {
    if (oquonie.spellbook.hasPillar(this.character)) {
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

  this.update = function (depth_offset = 0) {
    const posName = `pos${this.x === -2 ? 'f' : this.x === -1 ? 'e' : this.x}${this.y === -2 ? 'f' : this.y === -1 ? 'e' : this.y}`
    setClass(this.element, `event ${this.name} ${posName}`)

    this.element.style.zIndex = this.depth(depth_offset)
    this.element.style.backgroundImage = `url(media/graphics/pillarbase/${oquonie.spellbook.hasPillar(this.character) ? 'complete' : 'base'}.idle.png)`
  }

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (oquonie.spellbook.hasPillar(this.character)) {
      oquonie.dialog.show('owl', ['pillar', 'friend', this.character])
    } else {
      oquonie.dialog.show('owl', ['pillar', 'foe', this.character])
    }
    oquonie.music.playEffect('bump.1')
  }

  this.onSight = function () {
    if (oquonie.spellbook.hasPillar(this.character)) {
      this.id = 'complete'
    } else {
      this.id = 'base'
    }
  }

  this.update(20)
}

function PillarGate (x, y, room, toX, toY) {
  Event.call(this, 'gate')

  this.x = x
  this.y = y
  this.room = room
  this.toX = toX
  this.toY = toY

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    if (this.missing_pillar()) {
      oquonie.dialog.show('owl', ['pillar', 'foe', this.missing_pillar()])
      return
    }
    oquonie.stage.enterRoom(this.room, this.toX, this.toY)
  }

  this.onSight = function () {
    const wall_id = oquonie.stage.wallAt(this.x, this.y)
    const src = !this.missing_pillar() ? 'media/graphics/wall/gate.red.open.png' : 'media/graphics/wall/gate.red.close.png'
    oquonie.artbook.setArt(document.getElementById('wall_' + wall_id), src)
  }

  this.missing_pillar = function () {
    if (!oquonie.spellbook.hasPillar('necomedre')) { return 'necomedre' }
    if (!oquonie.spellbook.hasPillar('nephtaline')) { return 'nephtaline' }
    if (!oquonie.spellbook.hasPillar('neomine')) { return 'neomine' }
    if (!oquonie.spellbook.hasPillar('nestorine')) { return 'nestorine' }
    if (!oquonie.spellbook.hasPillar('nemedique')) { return 'nemedique' }
    if (!oquonie.spellbook.hasPillar('nastazie')) { return 'nastazie' }

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
    oquonie.music.playEffect('bump.2')
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
    if (this.character) { return !oquonie.spellbook.hasRamen(this.character) }
    if (this.location === 2) { return true }
  }

  this.lobby_spell = function () {
    if (oquonie.player.id === 'necomedre') { return 'nestorine' } else if (oquonie.player.id === 'nestorine') { return 'nephtaline' } else if (oquonie.player.id === 'neomine') { return 'necomedre' } else { return 'nemedique' }
  }

  // On Collision

  this.onCollision = function () {
    oquonie.music.playEffect('bump.1')

    if (this.character) { this.onCollision_world() }
    if (this.location === 2) { this.onCollision_lobby() }
    this.update_state()
  }

  this.onCollision_lobby = function () {
    if (oquonie.spellbook.hasRamen(oquonie.player.id) !== true) {
      console.warn('Ramen for ' + oquonie.player.id + ' is unfound.')
      // oquonie.dialog.show(this.name,["help","foe",oquonie.player.id]);
      return
    }
    oquonie.spellbook.toggleSpell(this.spellName())
    oquonie.dialog.show(this.name, ['help', 'friend', oquonie.player.id])
  }

  this.onCollision_world = function () {
    if (oquonie.spellbook.hasRamen(this.character) === true) {
      console.warn('Ramen for ' + oquonie.player.id + ' was already found.')
      return
    }
    oquonie.spellbook.addRamen(this.character)
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
    this.updateNotification()
  }

  this.onSight_lobby = function () {
    if (oquonie.spellbook.hasRamen(oquonie.player.id)) {
      this.id = 'active'
      this.element.style.display = 'block'
    } else {
      this.id = 'away'
      this.element.style.display = 'none'
      this.mat.show()
    }
  }

  this.onSight_world = function () {
    if (oquonie.spellbook.hasRamen(this.character)) {
      if (!this.first_sight) {
        console.log('f')
        this.element.style.opacity = 0
      } else {
        this.element.style.display = 'none'
      }
      this.mat.show()
    }
    this.first_sight = false
  }

  this.hideNotification = function () {
    this.notification.style.display = 'none'
  }

  this.showNotification = function () {
    this.notification.style.display = 'block'
    oquonie.artbook.setArt(this.notification, 'media/graphics/notification/' + this.lobby_spell() + '.png')
  }

  this.updateNotification = function () {
    if (this.character) {
      this.hideNotification()
    } else if (oquonie.spellbook.hasRamen(oquonie.player.id) !== true) {
      this.hideNotification()
    } else if (oquonie.spellbook.hasSpell(this.spellName()) !== true) {
      this.showNotification()
    } else {
      this.hideNotification()
    }
  }

  this.spellName = function () {
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
    oquonie.music.playEffect('bump.1')
  }

  this.onSight = function () {
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
      oquonie.spellbook.removeSpells()
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
    this.animator.setState(animation_state)
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

  this.isCollider = function () {
    return true
  }

  this.onCollision = function () {
    oquonie.music.toggleAmbience()
    oquonie.dialog.show(
      this.id,
      ['outside', oquonie.music.isPlaying() ? 'correct' : 'incorrect', 'sound'],
      null,
      this.id + '_' + (oquonie.music.isPlaying() ? 'off' : 'on'))

    setTimeout(() => { this.animator.setState(oquonie.music.isPlaying() ? 'on' : 'off') }, 350)
  }

  this.onSight = function () {
    console.log('music', oquonie.music.isMuted)
    this.animator.setState(oquonie.music.isPlaying() ? 'on' : 'off')
  }

  this.update(20)
}

function Teleport (x, y, room, toX = 0, toY = 0, reset = false) {
  Event.call(this, 'teleport')

  this.x = x
  this.y = y
  this.room = room
  this.toX = toX
  this.toY = toY
  this.reset = reset

  this.isCollider = function () {
    return false
  }

  this.onStep = function () {
    oquonie.player.lock('teleport')
    const r = this.room
    const toX = this.toX
    const toY = this.toY
    setTimeout(function () { oquonie.stage.warpTo(r, toX, toY) }, 500)

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

  this.spellName = function () {
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
    oquonie.spellbook.toggleSpell(this.spellName())
    this.updateNotification()
    oquonie.dialog.show(this.id, ['friend', 'locked', this.id], path)
  }

  this.onSight = function () {
    console.log('Sighted Wizard: ' + this.id)
    this.updateNotification()
  }

  this.hideNotification = function () {
    this.notification.style.display = 'none'
  }

  this.showNotification = function () {
    this.notification.style.display = 'block'
  }

  this.updateNotification = function () {
    if (oquonie.spellbook.hasSpell(this.spellName()) === true || oquonie.player.id === this.id) {
      this.hideNotification()
    } else {
      this.showNotification()
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

function Pos (x, y) {
  this.x = x
  this.y = y

  this.eq = (x, y) => {
    return this.x === x && this.y === y
  }

  this.dir = () => {
    return this.x > 0 || this.y > 0 ? 'back' : 'front'
  }

  this.ori = () => {
    return (this.x === -1 && this.y === 0) || (this.x === 0 && this.y === 1) ? 'left' : 'right'
  }

  this.vec = (pos) => {
    return new Pos(this.x - pos.x, this.y - pos.y)
  }

  this.toString = () => {
    return `${this.x},${this.y}`
  }
}
