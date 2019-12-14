'use strict'

/* global oquonie */
/* global setClass */

function Dialog () {
  this.el = document.createElement('div')
  this.el.id = 'dialog'

  this.portrait = document.createElement('portrait')
  this.bubble = document.createElement('bubble')
  this.letter1 = document.createElement('letter')
  this.letter2 = document.createElement('letter')
  this.letter3 = document.createElement('letter')

  this.isVisible = false

  this.install = (host) => {
    this.el.appendChild(this.portrait)
    this.el.appendChild(this.bubble)
    this.bubble.appendChild(this.letter1)
    this.bubble.appendChild(this.letter2)
    this.bubble.appendChild(this.letter3)
    host.appendChild(this.el)
  }

  this.show = (host, message, path) => {
    console.log('Dialog', host, path)
    this.portrait.style.backgroundImage = 'url(' + (path || `media/graphics/${host}/portrait.png`) + ')'
    this.letter1.style.backgroundImage = 'url(media/graphics/camilare/' + message[0] + '.png)'
    this.letter2.style.backgroundImage = 'url(media/graphics/camilare/' + message[1] + '.png)'
    this.letter3.style.backgroundImage = 'url(media/graphics/camilare/' + message[2] + '.png)'
    setClass(this.el, 'visible')
    oquonie.music.playDialog(host)
    oquonie.music.playInterface('interface.dialog.open')
    this.isVisible = true
  }

  this.hide = () => {
    setClass(this.el, 'invisible')
    oquonie.music.playInterface('interface.dialog.close')
    this.isVisible = false
  }
}
