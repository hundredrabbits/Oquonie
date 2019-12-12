'use strict'

/* global oquonie */

function Stage () {
  this.el = document.createElement('div')
  this.el.id = 'stage'
  this.parallax_over = document.createElement('parallax')
  this.parallax_under = document.createElement('parallax')

  this.room = null

  this.install = function (host) {
    this.el.appendChild(this.parallax_over)
    this.el.appendChild(this.parallax_under)
    this.parallax_over.setAttribute('class', 'over')
    this.parallax_under.setAttribute('class', 'under')
    host.appendChild(this.el)
  }

  this.leaveRoom = (roomId, x = 0, y = 0) => {
    console.log('Leaving Room: ' + this.room.id)
    this.clearRoom()
    this.room = null
    this.el.style.opacity = 0
    setTimeout(() => {
      this.enterRoom(roomId, x, y)
    }, oquonie.speed * 0.5)
  }

  this.enterRoom = function (roomId, x = 0, y = 0) {
    if (this.room) {
      this.leaveRoom(roomId, x, y)
      return
    }

    if (!oquonie.world.rooms[roomId]) {
      console.warn('Missing room:(' + roomId + ')')
      return
    }

    console.log('Entering Room: ' + roomId)

    oquonie.player.standByDoor(x, y)

    this.room = oquonie.world.rooms[roomId]
    this.el.appendChild(this.room.element)
    this.room.show()
    this.room.isKnown = true

    oquonie.player.moveIn(roomId)
    oquonie.player.moveAt(x, y)
    oquonie.animate()

    // Theme
    const numPillars = oquonie.spellbook.pillars.length
    const theme = (numPillars >= 5 && this.room.theme !== 'pillars') ? 'black' : this.room.theme
    this.setTheme(theme)

    this.look()
    this.center(oquonie.player.x, oquonie.player.y)

    this.el.style.opacity = 1

    oquonie.music.playAmbient(this.room.audio === 'lobby' && numPillars >= 5 ? 'lobby.3' : this.room.audio === 'lobby' && numPillars > 0 ? 'lobby.2' : this.room.audio)
  }

  this.clearRoom = () => {
    if (!this.room) { return }
    $(this.room.element).empty()
    $(this.room.element).remove()
  }

  this.loadRoom = function (roomId, x, y) {
    if (this.room) {
      this.leaveRoom(roomId, x, y)
      return
    }

    if (!oquonie.world.rooms[roomId]) {
      console.warn('Missing room:(' + roomId + ')')
      return
    }

    console.log('Entering Room: ' + roomId)

    this.room = oquonie.world.rooms[roomId]
    this.el.appendChild(this.room.element)
    this.room.show()
    this.room.isKnown = true

    oquonie.player.moveAt(x, y)

    const numPillars = oquonie.spellbook.pillars.length
    const theme = (numPillars >= 5 && this.room.theme !== 'pillars') ? 'black' : this.room.theme
    oquonie.stage.setTheme(theme)

    this.look()
    this.center(oquonie.player.x, oquonie.player.y)

    this.el.style.opacity = 1
  }

  this.look = function () {
    for (let i = 0; i < this.room.events.length; i++) {
      this.room.events[i].onSight()
    }
  }

  this.tilesAt = function (x, y) {
    const tiles = []
    for (let i = 0; i < this.room.events.length; i++) {
      const tile = this.room.events[i]
      if (tile.x === x && tile.y === y) { tiles.push(tile) }
    }
    return tiles
  }

  this.animate = function (x, y) {
    this.center(x, y)
  }

  this.center = function (x, y) {
    const xSlant = x - y
    const ySlant = -x - y
    this.moveParallax(this.el, 0.5, xSlant, ySlant)
    this.moveParallax(this.parallax_over, 1.0, xSlant, ySlant)
    this.moveParallax(this.parallax_under, 0.125, xSlant, ySlant)
  }

  this.moveParallax = function (e, mult, x, y) {
    // $(e).css({
    //   transition: 'transform ' + (oquonie.speed / 1000) + 's',
    //   '-webkit-transition': '-webkit-transform ' + (oquonie.speed / 1000) + 's',
    //   transform: 'translate(' + (mult * x) + '%,' + (mult * y) + '%)',
    //   '-webkit-transform': 'translate(' + (mult * x) + '%,' + (mult * y) + '%)'
    // })
  }

  this.setTheme = function (theme) {
    oquonie.element.setAttribute('class', theme)
    this.room.element.style.zIndex = theme === 'pillars' ? 1000 : 3000
  }

  //

  this.warpTo = function (room, x, y) {
    console.log('Teleporting to: ' + room)
    this.panUp()

    oquonie.music.play_effect('teleport')
    setTimeout(function () { oquonie.stage.loadRoom(room, x, y) }, (oquonie.speed * 10))
    setTimeout(function () { oquonie.stage.panDown() }, (oquonie.speed * 10) + 400)
  }

  this.panUp = function (speed = oquonie.speed * 10) {
    console.log('pan up')
    oquonie.player.lift(speed)
    this.el.style.transform = 'translate(0,100vh)'
  }

  this.panDown = function () {
    console.log('pan down')
    oquonie.player.land()

    this.el.style.transition = 'opacity 0.4s, transform 0s'
    this.el.style.transform = 'translate(0,-100vh)'

    setTimeout(() => {
      this.el.style.transition = 'opacity 0.4s, transform 3s'
      this.el.style.transform = 'translate(0,0)'
    }, 100)

    oquonie.player.unlock('teleport')
  }

  // Shake event

  this.shake = function (radius, time) {
    if (time < 1) { return }

    const r1 = Math.random() * 6
    const r2 = Math.random() * 6

    $(this.el).css('margin-top', r2).css('margin-left', r1)
    setTimeout(function () { oquonie.stage.shake(radius, time - 1) }, 50)
  }

  this.destroy = function (step = 6) {
    if (step < 1) { return }

    if (step === 6) { oquonie.artbook.setArt(document.getElementById('wall_1'), 'media/graphics/wall/19.png') }
    if (step === 5) { oquonie.artbook.setArt(document.getElementById('wall_5'), 'media/graphics/wall/15.png') }
    if (step === 4) { oquonie.artbook.setArt(document.getElementById('wall_3'), 'media/graphics/wall/25.png') }
    if (step === 3) { oquonie.artbook.setArt(document.getElementById('wall_0'), 'media/graphics/wall/26.png') }
    // if(step === 2){ oquonie.artbook.setArt("#wall_4","media/graphics/wall/gate.necomedre.open.png"); }
    if (step === 2) { oquonie.artbook.setArt(document.getElementById('wall_4'), 'media/graphics/wall/40.png') }
    if (step === 1) { oquonie.artbook.setArt(document.getElementById('wall_2'), 'media/graphics/wall/15.png') }

    setTimeout(function () { oquonie.stage.destroy(step - 1) }, 50)
  }

  this.floorAt = function (x, y) {
    if (x === -1 && y === 1) { return this.room.floors[0] }
    if (x === 0 && y === 1) { return this.room.floors[1] }
    if (x === 1 && y === 1) { return this.room.floors[2] }

    if (x === -1 && y === 0) { return this.room.floors[3] }
    if (x === 0 && y === 0) { return this.room.floors[4] }
    if (x === 1 && y === 0) { return this.room.floors[5] }

    if (x === -1 && y === -1) { return this.room.floors[6] }
    if (x === 0 && y === -1) { return this.room.floors[7] }
    if (x === 1 && y === -1) { return this.room.floors[8] }

    return null
  }

  this.wallAt = function (x, y) {
    if (x === -1 && y === 2) { return 0 }
    if (x === 0 && y === 2) { return 1 }
    if (x === 1 && y === 2) { return 2 }

    if (x === 2 && y === 1) { return 3 }
    if (x === 2 && y === 0) { return 4 }
    if (x === 2 && y === -1) { return 5 }
  }
}
