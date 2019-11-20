'use strict'

/* global oquonie */

function Event (subtype) {
  Tile.call(this, 'event')

  this.location = 0
  this.name = subtype
  this.state = 'idle'
  this.animator = new Animator(this)
  this.is_mirrored = false

  $(this.element).addClass(subtype)

  this.move_by = function (x, y) {
    this.x += x
    this.y += y

    const p = this.position_at(this.x, this.y, 200)
    const _y = p[0]
    const _x = p[1]
    const _z = p[2]

    $(this.element).finish()

    const target = this.animator
    target.set_state('walk.front')

    if (x == 0 && y == -1 || x == -1 && y == 0) { target.set_state('walk.front') }
    if (x == 0 && y == 1 || x == 1 && y == 0) { target.set_state('walk.back') }

    oquonie.player.lock('moving')
    setTimeout(function () { oquonie.player.unlock('moving') }, oquonie.speed * 0.5)

    $(this.element).animate({ left: _x, top: _y }, oquonie.speed, function () {
      if (x == 0 && y == -1 || x == -1 && y == 0) { target.set_state('idle.front') }
      if (x == 0 && y == 1 || x == 1 && y == 0) { target.set_state('idle.back') }
    })

    oquonie.stage.animate(this.x, this.y)
  }

  this.moveAt = function (x, y) {
    this.x = x
    this.y = y

    const p = this.position_at(this.x, this.y, 200)
    const _y = p[0]
    const _x = p[1]

    $(this.element).css('top', _y).css('left', _x)
  }

  this.stand_by_door = function (x, y) {
    $(this.element).finish()
    const target = this.animator
    x = -x
    y = -y
    if (x == 0 && y == -1 || x == -1 && y == 0) { target.set_state('idle.front') }
    if (x == 0 && y == 1 || x == 1 && y == 0) { target.set_state('idle.back') }
    target.animate()
  }

  this.isCollider = function () {
    return false
  }

  this.elicits_collision_bump = function () {
    return true
  }

  this.mirror = function () {
    this.is_mirrored = true
    $(this.element).addClass('mirror')
  }

  this.bumpUp = function (x, y) {
    const animator = this.animator
    if (x == 0 && y == -1 || x == -1 && y == 0) { animator.set_state('idle.front') }
    if (x == 0 && y == 1 || x == 1 && y == 0) { animator.set_state('idle.back') }

    $(this.element).finish()
    const origin_pos_y = parseInt(this.element.style.top)
    $(this.element).css('top', (origin_pos_y - 0.5) + '%').animate({ top: origin_pos_y + '%' }, oquonie.speed / 2)
  }

  this.bumpAgainst = function (x, y) {
    const animator = this.animator
    if (x == 0 && y == -1 || x == -1 && y == 0) { animator.set_state('idle.front') }
    if (x == 0 && y == 1 || x == 1 && y == 0) { animator.set_state('idle.back') }

    const xSlant = x - y
    const ySlant = (-x - y) * 0.5

    $(this.element).finish()
    const origin_pos_x = parseInt(this.element.style.left)
    const origin_pos_y = parseInt(this.element.style.top)

    $(this.element).css('top', origin_pos_y + 0.5 * ySlant + '%').css('left', origin_pos_x + 0.5 * xSlant + '%')
    $(this.element).animate({ top: origin_pos_y + '%', left: origin_pos_x + '%' }, oquonie.speed / 2)
  }

  this.receive_bump = function () {
    $(this.element).finish()
    const origin_pos_y = parseInt(this.element.style.top)
    $(this.element).css('top', (origin_pos_y - 0.5) + '%').animate({ top: origin_pos_y + '%' }, oquonie.speed / 2)
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
