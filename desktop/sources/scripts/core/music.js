'use strict'

/* global oquonie */
/* global Audio */

function Music () {
  this.track_ambient = new Audio()
  this.track_effect = new Audio()
  this.track_interface = new Audio()
  this.track_dialog = new Audio()

  this.audio_catalog = {}

  this.isMuted = false
  this.track_ambient.volume = 0

  this.play_effect = function (name) {
    console.log('Effect: ', name)
    this.track_effect = this.fetch_audio(name, 'effect', 'media/audio/effect/' + name + '.ogg')
    this.track_effect.play()
  }

  this.playInterface = function (name) {
    console.log('Interface: ', name)
    this.track_interface = this.fetch_audio(name, 'interface', 'media/audio/interface/' + name + '.ogg')
    this.track_interface.play()
  }

  this.playDialog = function (name) {
    console.log('Dialog: ', name)
    this.track_dialog = this.fetch_audio(name, 'dialog', 'media/audio/dialog/' + name + '.ogg')
    this.track_dialog.play()
  }

  this.playAmbient = function (name) {
    if (this.track_ambient.name === name) { return }
    if (!this.track_ambient.name) { this.introduce(name); return }

    // Fadeout
    $(this.track_ambient).animate({ volume: 0 }, 1000, function () {
      console.log('Music: ', name)

      oquonie.music.track_ambient.pause()
      oquonie.music.track_ambient = oquonie.music.fetch_audio(name, 'ambient', 'media/audio/ambient/' + name + '.mp3', true)
      if (oquonie.music.isMuted === false) { oquonie.music.track_ambient.play() }
      $(oquonie.music.track_ambient).animate({ volume: 1 }, 1000)
    })
  }

  this.introduce = function (name) {
    oquonie.music.track_ambient.pause()
    oquonie.music.track_ambient = oquonie.music.fetch_audio(name, 'ambient', 'media/audio/ambient/' + name + '.mp3', true)
    this.track_ambient.volume = 0
    if (oquonie.music.isMuted === false) { oquonie.music.track_ambient.play() }
    $(oquonie.music.track_ambient).animate({ volume: 1 }, 1000)
  }

  this.fetch_audio = function (name, role, src, loop = false) {
    const id = role + '_' + name
    if (!(id in this.audio_catalog)) {
      const audio = new Audio()
      audio.name = name
      audio.src = src
      audio.loop = loop
      this.audio_catalog[id] = audio
    }
    this.audio_catalog[id].currentTime = 0
    return this.audio_catalog[id]
  }

  this.pause_ambience = function () {
    this.isMuted = true

    $(this.track_ambient).animate({ volume: 0 }, 1000, function () {
      oquonie.music.track_ambient.pause()
    })
  }

  this.resume_ambience = function () {
    this.track_ambient.play()
    this.track_ambient.volume = 0
    $(this.track_ambient).animate({ volume: 1 }, 1000)
    this.isMuted = false
  }

  this.toggle_ambience = function () {
    console.log('Music', 'Toggle Ambience')
    if (this.track_ambient.volume === 1) {
      this.pause_ambience()
    } else {
      this.resume_ambience()
    }
  }
}
