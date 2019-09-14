'use strict'

// Drool.

function Logo (is_looping = false) {
  this.el = document.createElement('canvas')
  this.el.style.display = 'block'

  this.tiles = []

  this.size = null
  this.is_playing = true
  this.fps = 60
  this.frame = 0

  this.install = function (host) {
    host.appendChild(this.el)
  }

  this.start = function (size) {
    this.size = size

    this.el.width = 600
    this.el.height = 600
    this.el.style.width = '300px'
    this.el.style.height = '300px'
    this.el.style.display = 'block'

    this.create_tiles()
    this.scare_tiles(6)
    this.return_tiles_to(6)

    this.animate()

    this.redraw()
    setTimeout(() => { this.is_playing = false }, 5000)
  }

  // Options

  this.remove = function () {
    this.stop()

    setTimeout(() => { this.el.style.opacity = 0 }, 500)
    setTimeout(() => { document.body.removeChild(this.el) }, 1500)
  }

  this.stop = function () {
    if (this.is_playing == false) { return }

    setTimeout(() => { this.draw(true) }, 50)
    this.is_playing = false
    this.el.style.opacity = 0
  }

  //

  this.clear = function () {
    this.context().clearRect(0, 0, this.el.width, this.el.height)
  }

  this.context = function () {
    return this.el.getContext('2d')
  }

  this.redraw = function () {
    if (!logo.is_playing) { return }
    console.log('!')
    setTimeout(() => { logo.draw(); requestAnimationFrame(logo.redraw) }, 1000 / logo.fps)
  }

  this.draw = function (override = false) {
    this.clear()

    for (let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i]
      tile.draw(this.context())
      this.frame += 1
    }
  }

  this.tile_at = function (target_pos) {
    for (let id in this.tiles) {
      let tile = this.tiles[id]
      if (tile.pos.x != target_pos.x) { continue }
      if (tile.pos.y != target_pos.y) { continue }
      return tile
    }
    return null
  }

  this.create_tiles = function () {
    let id = 0
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        let pos = { x: x, y: y }
        this.tiles.push(new Rabbit(id, pos, this.size / 5))
        id += 1
      }
    }
  }

  this.scare_tiles = function (steps) {
    for (let s = 0; s < steps; s++) {
      for (let t = 0; t < this.tiles.length; t++) {
        this.tiles[t].flee()
      }
    }
  }

  this.return_tiles_to = function (step) {
    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].move_to(this.tiles[i].history[step])
      this.tiles[i].update()
    }
  }

  this.animate_return_to = function (step, id) {
    if (id == -1) { return }
    this.tiles[id].animate_until(this.tiles[id].history[step])
    setTimeout(() => { this.animate_return_to(step, id - 1) }, 10)
  }

  this.animate_to = function (step, id) {
    if (id == 100) { return }
    this.tiles[id].animate_until(this.tiles[id].history[step])
    setTimeout(() => { this.animate_to(step, id + 1) }, 10)
  }

  this.animate = function (speed = 300) {
    setTimeout(() => { this.animate_return_to(9, 99) }, 0)
    setTimeout(() => { this.animate_return_to(8, 99) }, 1 * speed)
    setTimeout(() => { this.animate_return_to(7, 99) }, 2 * speed)
    setTimeout(() => { this.animate_return_to(6, 99) }, 3 * speed)
    setTimeout(() => { this.animate_return_to(5, 99) }, 4 * speed)
    setTimeout(() => { this.animate_return_to(4, 99) }, 5 * speed)
    setTimeout(() => { this.animate_return_to(3, 99) }, 6 * speed)
    setTimeout(() => { this.animate_return_to(2, 99) }, 7 * speed)
    setTimeout(() => { this.animate_return_to(1, 99) }, 8 * speed)
  }

  // RABBIT

  function Rabbit (id, pos, size) {
    this.id = id
    this.pos = pos
    this.size = size
    this.el_pos = { x: this.pos.x * this.size, y: this.pos.y * this.size }
    this.origin = { x: this.pos.x * this.size, y: this.pos.y * this.size }
    this.history = []
    this.history.push({ x: this.pos.x, y: this.pos.y })

    const LEFT = { x: this.pos.x - 1, y: this.pos.y }
    const RIGHT = { x: this.pos.x + 1, y: this.pos.y }
    const UP = { x: this.pos.x, y: this.pos.y + 1 }
    const DOWN = { x: this.pos.x, y: this.pos.y - 1 }

    this.update = function () {
      this.el_pos = { x: this.pos.x * this.size, y: this.pos.y * this.size }
    }

    this.draw = function (context, offset = 200) {
      context.beginPath()
      context.arc(this.el_pos.x + offset, this.el_pos.y + offset, (this.size / 2) - 2, 0, 2 * Math.PI, false)
      context.fillStyle = 'white'
      context.fill()
      context.closePath()
    }

    this.move_to = function (target_pos) {
      this.pos.x = target_pos.x
      this.pos.y = target_pos.y
    }

    this.animate_until = function (target_pos) {
      if (!target_pos) { return }

      this.target_pos = target_pos

      let target_el_pos = { x: target_pos.x * this.size, y: target_pos.y * this.size }

      let to_move = { x: target_el_pos.x - this.el_pos.x, y: target_el_pos.y - this.el_pos.y }

      if (to_move.x > 0) { this.el_pos.x += 1 } else if (to_move.x < 0) { this.el_pos.x -= 1 }
      if (to_move.y > 0) { this.el_pos.y += 1 } else if (to_move.y < 0) { this.el_pos.y -= 1 }

      if (parseInt(target_el_pos.x) != parseInt(this.el_pos.x) || parseInt(target_el_pos.y) != parseInt(this.el_pos.y)) {
        setTimeout(() => { this.animate_until(target_pos) }, 5)
      }
    }

    // Logic

    this.is_known = function (target) {
      for (let id in this.history) {
        let pos = this.history[id]
        if (pos.x == target.x && pos.y == target.y) {
          return true
        }
      }
      return false
    }

    this.is_free = function (target) {
      return !this.is_known(target) && !logo.tile_at(target)
    }

    this.free_ns = function () {
      let a = []

      if (this.is_free({ x: this.pos.x - 1, y: this.pos.y })) { a.push({ x: this.pos.x - 1, y: this.pos.y }) }
      if (this.is_free({ x: this.pos.x + 1, y: this.pos.y })) { a.push({ x: this.pos.x + 1, y: this.pos.y }) }
      if (this.is_free({ x: this.pos.x, y: this.pos.y + 1 })) { a.push({ x: this.pos.x, y: this.pos.y + 1 }) }
      if (this.is_free({ x: this.pos.x, y: this.pos.y - 1 })) { a.push({ x: this.pos.x, y: this.pos.y - 1 }) }

      return a
    }

    this.flee = function () {
      let random = Math.random()

      this.history.push({ x: this.pos.x, y: this.pos.y })

      let ns = this.free_ns()

      let target = ns[Math.floor(Math.random() * ns.length)]

      if (target) {
        this.pos.x = target.x
        this.pos.y = target.y
      }
    }

    function clamp (v, min, max) { return v < min ? min : v > max ? max : v }
  }
  function clamp (v, min, max) { return v < min ? min : v > max ? max : v }
}
