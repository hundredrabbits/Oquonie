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
  this.stage = new Stage()
  this.player = new Player()
  this.spellbook = new Spellbook()
  this.walkthrough = new Walkthrough()
  this.animation_timer = null
  this.started = false

  this.install = () => {
    document.body.appendChild(this.element)

    this.acels.set('File', 'Move', 'ArrowUp', () => { this.player.try_move(0, 1) })
    this.acels.set('File', 'Move', 'ArrowRight', () => { this.player.try_move(1, 0) })
    this.acels.set('File', 'Move', 'ArrowDown', () => { this.player.try_move(0, -1) })
    this.acels.set('File', 'Move', 'ArrowLeft', () => { this.player.try_move(-1, 0) })
    this.acels.install(window)

    this.world.install()
    this.dialog.install()
    this.overlay.install()
    this.stage.install()
    this.spellbook.install()
  }

  this.start = function () {
    console.info('Starting Oquonie')

    this.element.style.opacity = 1
    this.walkthrough.start()
    this.spellbook.hide()
    this.animate()
    this.started = true
  }

  this.reset = () => {
    this.game.new()
    this.stage.enterRoom(25, 0, 0)
  }

  this.mousedown = (e) => {
    if (!this.started) {
      return
    }

    if (this.player.locks.length > 0) { console.warn('Keyboard has locks: ', this.player.locks); return }

    const ratio_x = e.clientX / window.innerWidth
    const ratio_y = e.clientY / window.innerHeight

    if (ratio_y < 0.5 && ratio_x < 0.5) {
      this.player.try_move(0, 1)
    } else if (ratio_y < 0.5 && ratio_x > 0.5) {
      this.player.try_move(1, 0)
    } else if (ratio_y > 0.5 && ratio_x < 0.5) {
      this.player.try_move(-1, 0)
    } else if (ratio_y > 0.5 && ratio_x > 0.5) {
      this.player.try_move(0, -1)
    }
  }

  this.animate = () => {
    this.animation_timer = setTimeout(() => { this.animate() }, 200)

    this.player.animator.animate()

    for (let i = 0; i < this.stage.room.events.length; i++) {
      this.stage.room.events[i].animator.animate()
    }
  }
}
