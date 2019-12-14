'use strict'

/* global oquonie */
/* global Audio */

function Music () {
  this.trackAmbient = new Audio()
  this.track_effect = new Audio()
  this.track_interface = new Audio()
  this.track_dialog = new Audio()

  const rate = 0.05
  const speed = 100

  this.audio_catalog = {}

  this.trackAmbient.volume = 0
  this.targetVolume = 0

  this.start = () => {
    setInterval(this.update, speed)
  }

  this.update = () => {
    if (this.targetVolume > 1) { this.trackAmbient.volume = 1 }
    if (this.targetVolume < 0) { this.trackAmbient.volume = 0 }
    if (this.trackAmbient.volume === this.targetVolume) { return }
    if (this.trackAmbient.volume > this.targetVolume) { this.trackAmbient.volume = clamp(this.trackAmbient.volume - rate, 0, 1) }
    if (this.trackAmbient.volume < this.targetVolume) { this.trackAmbient.volume = clamp(this.trackAmbient.volume + rate, 0, 1) }
    // console.log(this.trackAmbient.volume)
  }

  this.playEffect = function (name) {
    console.log('Effect: ', name)
    this.track_effect = this.fetchAudio(name, 'effect', 'media/audio/effect/' + name + '.ogg')
    this.track_effect.play()
  }

  this.playInterface = function (name) {
    console.log('Interface: ', name)
    this.track_interface = this.fetchAudio(name, 'interface', 'media/audio/interface/' + name + '.ogg')
    this.track_interface.play()
  }

  this.playDialog = function (name) {
    console.log('Dialog: ', name)
    this.track_dialog = this.fetchAudio(name, 'dialog', 'media/audio/dialog/' + name + '.ogg')
    this.track_dialog.play()
  }

  this.playAmbient = function (name) {
    if (this.trackAmbient.name === name) { return }

    this.trackAmbient.pause()
    this.trackAmbient = this.fetchAudio(name, 'ambient', `media/audio/ambient/${name}.mp3`, true)
    this.trackAmbient.name = name
    this.trackAmbient.play()
  }

  // Deadcode, keep/trash?

  this.fadeIn = (name) => {
    console.log('Ambient', 'Fade In')
    this.targetVolume = 1
    this.trackAmbient.pause()
    this.trackAmbient = this.fetchAudio(name, 'ambient', `media/audio/ambient/${name}.mp3`, true)
    this.trackAmbient.name = name
    this.trackAmbient.play()
  }

  this.fadeOut = (name) => {
    console.log('Ambient', 'Fading Out..')
    this.targetVolume = 0
    setTimeout(() => {
      console.log('Ambient', 'Fade Out Complete')
      this.trackAmbient.name = null
      this.fadeIn(name)
    }, 3000)
  }

  this.fetchAudio = function (name, role, src, loop = false) {
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

  this.toggleAmbience = function () {
    this.targetVolume = this.targetVolume === 1 ? 0 : 1
    console.log('Music', 'Toggle Ambience', this.targetVolume)
  }

  this.isPlaying = () => {
    return this.trackAmbient.volume > 0
  }

  function clamp (val, min, max) {
    return Math.min(Math.max(val, min), max)
  }
}
