'use strict'

function Ghost (x, y) {
  Event.call(this, 'ghost')

  this.x = x
  this.y = y

  this.animator.add(new Animation('idle', [1, 1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

  this.is_collider = function () {
    return false
  }

  this.on_sight = function () {
    $(this.element).delay(oquonie.speed * 5).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 10, function () {
      this.is_known = true
    })
  }

  this.on_step = function () {
    $(this.element).animate({ marginTop: -35 + '%', opacity: 0 }, oquonie.speed * 5, function () {
      this.is_known = true
    })
  }

  this.update(20)
}
