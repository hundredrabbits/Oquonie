'use strict'

/* global oquonie */
/* global setClass */

function Dialog () {
  this.element = this.element = document.createElement('dialog')

  this.portrait = document.createElement('portrait')
  this.bubble = document.createElement('bubble')
  this.letter1 = document.createElement('letter')
  this.letter2 = document.createElement('letter')
  this.letter3 = document.createElement('letter')

  this.isVisible = false

  this.install = () => {
    oquonie.element.appendChild(this.element)
    this.element.appendChild(this.portrait)
    this.element.appendChild(this.bubble)
    this.bubble.appendChild(this.letter1)
    this.bubble.appendChild(this.letter2)
    this.bubble.appendChild(this.letter3)
  }

  this.show = (host, message, path) => {
    console.log('Dialog', host, path)
    oquonie.artbook.setArt(this.portrait, path || `media/graphics/${host}/portrait.png`)
    setClass(this.element, 'visible')
    oquonie.artbook.setArt(this.letter1, 'media/graphics/camilare/' + message[0] + '.png')
    oquonie.artbook.setArt(this.letter2, 'media/graphics/camilare/' + message[1] + '.png')
    oquonie.artbook.setArt(this.letter3, 'media/graphics/camilare/' + message[2] + '.png')
    oquonie.music.playDialog(host)
    oquonie.music.playInterface('interface.dialog.open')
    this.isVisible = true
  }

  this.hide = () => {
    setClass(this.element, 'invisible')
    oquonie.music.playInterface('interface.dialog.close')
    this.isVisible = false
  }
}
