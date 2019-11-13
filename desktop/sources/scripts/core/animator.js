'use strict'

function Animator (host) {
  this.host = host
  this.animations = {}
  this.state = 'idle'
  this.orientation = null
  this.last_art_id = null
  this.preload_container = document.createElement('preload')

  this.add = function (animation) {
    this.animations[animation.name] = animation
    this.animations[animation.name].host = this.host
  }

  this.animate = function () {
    if (!this.animations[this.state]) { return }

    const anim = this.animations[this.state]
    const width = $(this.host.element).width()
    const height = $(this.host.element).height()
    const frames = unique(this.animations[this.state].frames).length

    const art_id = `media/graphics/${this.host.name}/${(this.host.id ? this.host.id + '.' : '') + this.state}.png`

    if (this.last_art_id != art_id) {
      this.last_art_id = art_id
      oquonie.artbook.set_art(this.host.element, art_id)
    }

    this.host.element.style.backgroundSize = `${width * frames}px ${width * 1.5}px`
    this.host.element.style.backgroundPosition = `${anim.run() * -width + width}px center`
  }

  this.preload = function () {
    this.preload_container.style.display = 'none'
    oquonie.element.appendChild(this.preload_container)
    while (this.preload_container.lastChild != null) {
      this.preload_container.removeChild(this.preload_container.lastChild)
    }

    for (const animName in this.animations) {
      const art_id = 'media/graphics/' + this.host.name + '/' + (this.host.id ? this.host.id + '.' : '') + animName + '.png'
      const image = new Image()
      image.src = art_id
      this.preload_container.appendChild(image)
    }
  }

  this.set_state = function (new_state, update_immediately = true) {
    this.state = new_state
    if (update_immediately) {
      this.animate()
    }
  }
}

function unique (list) {
  const result = []
  $.each(list, function (i, e) {
    if ($.inArray(e, result) == -1) result.push(e)
  })
  return result
}
