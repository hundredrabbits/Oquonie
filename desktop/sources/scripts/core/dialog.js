'use strict'

/* global oquonie */

function Dialog () {
  this.element = this.element = document.createElement('dialog')

  this.content = null

  this.portrait = document.createElement('portrait')
  this.bubble = document.createElement('bubble')
  this.letter1 = document.createElement('letter')
  this.letter2 = document.createElement('letter')
  this.letter3 = document.createElement('letter')

  this.install = function () {
    oquonie.element.appendChild(this.element)
    this.element.appendChild(this.portrait)
    this.element.appendChild(this.bubble)
    this.bubble.appendChild(this.letter1)
    this.bubble.appendChild(this.letter2)
    this.bubble.appendChild(this.letter3)
  }

  this.show = function (hostName, message, path = null, audio_name = null) {
    console.log('Dialog with: ' + hostName)

    if (!path) { path = 'media/graphics/' + hostName + '/' }
    if (audio_name == null) { audio_name = hostName }

    oquonie.artbook.setArt(this.portrait, path + 'portrait.png')
    $(this.element).animate({ opacity: 1 }, oquonie.speed, function () {})

    oquonie.artbook.setArt(this.letter1, 'media/graphics/camilare/' + message[0] + '.png')
    oquonie.artbook.setArt(this.letter2, 'media/graphics/camilare/' + message[1] + '.png')
    oquonie.artbook.setArt(this.letter3, 'media/graphics/camilare/' + message[2] + '.png')

    this.content = message

    oquonie.music.play_dialog(audio_name)
    oquonie.music.play_interface('interface.dialog.open')
  }

  this.hide = function () {
    $(this.element).animate({ opacity: 0 }, oquonie.speed, function () {})
    this.content = null
    oquonie.music.play_interface('interface.dialog.close')
  }
}
