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

    this.acels.set('File', 'Restart Game', 'CmdOrCtrl+Backspace', () => { this.reset() })
    this.acels.set('Move', 'Move Up', 'ArrowUp', () => { this.player.try_move(0, 1) })
    this.acels.set('Move', 'Move Right', 'ArrowRight', () => { this.player.try_move(1, 0) })
    this.acels.set('Move', 'Move Down', 'ArrowDown', () => { this.player.try_move(0, -1) })
    this.acels.set('Move', 'Move Left', 'ArrowLeft', () => { this.player.try_move(-1, 0) })
    this.acels.set('Audio', 'Toggle Ambience', 'M', () => { this.music.toggle_ambience() })
    this.acels.install(window)

    document.onmousedown = this.onMouseDown
    document.onmouseup = this.onMouseUp
    document.onmousemove = this.onMouseMove

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

  this.animate = () => {
    this.animation_timer = setTimeout(() => { this.animate() }, 200)

    this.player.animator.animate()

    for (let i = 0; i < this.stage.room.events.length; i++) {
      this.stage.room.events[i].animator.animate()
    }
  }

  // Mouse Controls

  this.mouseTimer = null
  this.mouseFrom = null
  this.mouseTo = null

  this.onMouseDown = (e) => {
    this.mouseFrom = { x: e.clientX, y: e.clientY }
    this.mouseTimer = setInterval(this.drag, 300)
  }

  this.onMouseMove = (e) => {
    this.mouseTo = { x: e.clientX, y: e.clientY }
  }

  this.onMouseUp = (e) => {
    clearInterval(this.mouseTimer)
    this.mouseTo = { x: e.clientX, y: e.clientY }
    if (makeDistance(this.mouseFrom, this.mouseTo) < 20) {
      this.poke()
    } else {
      this.drag()
    }
  }

  this.poke = () => {
    const ratio = { x: this.mouseTo.x / window.innerWidth, y: this.mouseTo.y / window.innerHeight }
    if (ratio.y < 0.5 && ratio.x < 0.5) {
      this.player.try_move(0, 1)
    } else if (ratio.y < 0.5 && ratio.x > 0.5) {
      this.player.try_move(1, 0)
    } else if (ratio.y > 0.5 && ratio.x < 0.5) {
      this.player.try_move(-1, 0)
    } else if (ratio.y > 0.5 && ratio.x > 0.5) {
      this.player.try_move(0, -1)
    }
  }

  this.drag = () => {
    const offset = { x: this.mouseFrom.x - this.mouseTo.x, y: this.mouseFrom.y - this.mouseTo.y }
    console.log(offset)
    if (offset.x > 0 && offset.y > 0) {
      this.player.try_move(0, 1)
    } else if (offset.x < 0 && offset.y < 0) {
      this.player.try_move(0, -1)
    } else if (offset.x < 0 && offset.y > 0) {
      this.player.try_move(1, 0)
    } else if (offset.x > 0 && offset.y < 0) {
      this.player.try_move(-1, 0)
    }
  }

  function makeOffset (a, b) {
    return { x: a.x - b.x, y: a.y - b.y }
  }

  function makeDistance (a, b) {
    const aa = a.x - b.x
    const bb = a.y - b.y
    return Math.sqrt(aa * aa + bb * bb)
  }
}
