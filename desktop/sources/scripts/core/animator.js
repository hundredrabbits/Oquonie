'use strict'

/* global oquonie */
/* global Image */

function Animator (host) {
  this.host = host
  this.animations = {}
  this.state = 'idle'
  this.orientation = null
  this.last = null
  this.loader = document.createElement('preload')

  this.add = (animation) => {
    this.animations[animation.name] = animation
    this.animations[animation.name].host = this.host
  }

  this.animate = () => {
    if (!this.animations[this.state]) { return }

    const anim = this.animations[this.state]
    const width = this.host.element.offsetWidth
    const frames = uniq(this.animations[this.state].frames).length
    const artId = `media/graphics/${this.host.name}/${(this.host.id ? this.host.id + '.' : '') + this.state}.png`

    if (this.last !== artId) {
      this.last = artId
      oquonie.artbook.setArt(this.host.element, artId)
    }

    this.host.element.style.backgroundSize = `${width * frames}px ${width * 1.5}px`
    this.host.element.style.backgroundPosition = `${anim.run() * -width + width}px center`
  }

  this.preload = () => {
    this.loader.style.display = 'none'
    oquonie.element.appendChild(this.loader)

    while (this.loader.lastChild !== null) {
      this.loader.removeChild(this.loader.lastChild)
    }

    for (const animName in this.animations) {
      const artId = 'media/graphics/' + this.host.name + '/' + (this.host.id ? this.host.id + '.' : '') + animName + '.png'
      const image = new Image()
      image.src = artId
      this.loader.appendChild(image)
    }
  }

  this.setState = (newState, force = true) => {
    this.state = newState
    if (force) {
      this.animate()
    }
  }

  function uniq (arr) {
    return arr.filter((value, index, self) => { return self.indexOf(value) === index })
  }
}

function Animation (name, frames) {
  this.name = name
  this.frames = frames
  this.frame = 0

  this.run = () => {
    this.frame += 1
    return this.frames[this.frame % this.frames.length]
  }
}
