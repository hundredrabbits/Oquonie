'use strict'

function Oquonie () {
  this.element = document.createElement('oquonie')
  this.element.style.opacity = 0

  this.acels = new Acels(this)

  this.artbook = new Artbook()
  this.game = new Game()
  this.world = new World()
  this.music = new Music()
  this.dialog = new Dialog()
  this.overlay = new Overlay()
  this.interface = new Interface()
  this.stage = new Stage()
  this.player = new Player()
  this.spellbook = new Spellbook()
  this.walkthrough = new Walkthrough()
  this.animation_timer = null
  this.started = false

  this.install = function () {
    document.body.appendChild(this.element)

    this.acels.set('File', 'Move', 'ArrowUp', () => { oquonie.player.try_move(0, 1) })
    this.acels.set('File', 'Move', 'ArrowRight', () => { oquonie.player.try_move(1, 0) })
    this.acels.set('File', 'Move', 'ArrowDown', () => { oquonie.player.try_move(0, -1) })
    this.acels.set('File', 'Move', 'ArrowLeft', () => { oquonie.player.try_move(-1, 0) })
    this.acels.install(window)

    this.world.install()
    this.dialog.install()
    this.overlay.install()
    this.interface.install()
    this.stage.install()
    this.spellbook.install()
  }

  this.start = function () {
    console.info('Starting Oquonie')

    this.element.style.opacity = 1
    this.walkthrough.start()
    this.spellbook.hide()
    animate()
    this.started = true
  }

  this.reset = function () {
    oquonie.game.new()
    oquonie.stage.enter_room(25, 0, 0)
  }

  this.mousedown = function (e) {
    if (!this.started) {
      return
    }

    if (oquonie.player.locks.length > 0) { console.warn('Keyboard has locks: ', oquonie.player.locks); return }

    const ratio_x = e.clientX / window.innerWidth
    const ratio_y = e.clientY / window.innerHeight

    if (ratio_y < 0.5 && ratio_x < 0.5) {
      oquonie.player.try_move(0, 1)
    } else if (ratio_y < 0.5 && ratio_x > 0.5) {
      oquonie.player.try_move(1, 0)
    } else if (ratio_y > 0.5 && ratio_x < 0.5) {
      oquonie.player.try_move(-1, 0)
    } else if (ratio_y > 0.5 && ratio_x > 0.5) {
      oquonie.player.try_move(0, -1)
    }
  }

  function animate () {
    oquonie.animation_timer = setTimeout(function () { animate() }, 200)

    oquonie.player.animator.animate()

    for (let i = 0; i < oquonie.stage.room.events.length; i++) {
      oquonie.stage.room.events[i].animator.animate()
    }
  }

  function stop_animation () {
    clearTimeout(this.animation_timer)
  }
}
