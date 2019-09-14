'use strict'

function Overlay () {
  this.element = this.element = document.createElement('overlay')

  this.content = null

  this.install = function () {
    oquonie.element.appendChild(this.element)
  }

  this.show = function (message) {
    oquonie.artbook.set_art(this.element, 'media/graphics/plan/' + message + '.png')
    $(this.element).animate({ opacity: 1 }, oquonie.speed)

    this.content = message
  }

  this.hide = function () {
    $(this.element).animate({ opacity: 0 }, oquonie.speed)
    this.content = null
  }
}
