'use strict'

/* global oquonie */

function Animator (host) {
  this.host = host
  this.animations = {}
  this.state = 'idle'
  this.orientation = null
  this.last_artId = null
  this.preload_container = document.createElement('preload')

  this.add = function (animation) {
    this.animations[animation.name] = animation
    this.animations[animation.name].host = this.host
  }

  this.animate = function () {
    if (!this.animations[this.state]) { return }

    const anim = this.animations[this.state]
    const width = this.host.element.offsetWidth

    const frames = uniq(this.animations[this.state].frames).length

    const artId = `media/graphics/${this.host.name}/${(this.host.id ? this.host.id + '.' : '') + this.state}.png`

    if (this.last_artId !== artId) {
      this.last_artId = artId
      oquonie.artbook.setArt(this.host.element, artId)
    }

    this.host.element.style.backgroundSize = `${width * frames}px ${width * 1.5}px`
    this.host.element.style.backgroundPosition = `${anim.run() * -width + width}px center`
  }

  this.preload = function () {
    this.preload_container.style.display = 'none'
    oquonie.element.appendChild(this.preload_container)
    while (this.preload_container.lastChild !== null) {
      this.preload_container.removeChild(this.preload_container.lastChild)
    }

    for (const animName in this.animations) {
      const artId = 'media/graphics/' + this.host.name + '/' + (this.host.id ? this.host.id + '.' : '') + animName + '.png'
      const image = new Image()
      image.src = artId
      this.preload_container.appendChild(image)
    }
  }

  this.set_state = function (newState, update_immediately = true) {
    this.state = newState
    if (update_immediately) {
      this.animate()
    }
  }
}

function Animation (name, frames) {
  this.name = name
  this.frames = frames
  this.frame = 0

  this.run = function () {
    this.frame += 1
    return this.frames[this.frame % this.frames.length]
  }
}
