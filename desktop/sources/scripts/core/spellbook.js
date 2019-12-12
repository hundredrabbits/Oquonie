'use strict'

/* global oquonie */
/* global setClass */

function Spellbook () {
  this.el = document.createElement('div')
  this.el.id = 'spellbook'
  this.spell1 = document.createElement('spell')
  this.spell2 = document.createElement('spell')
  this.spell3 = document.createElement('spell')

  this.spells = []
  this.pillars = []
  this.ramens = []

  this.timer = null

  this.install = function (host) {
    this.el.appendChild(this.spell1)
    this.el.appendChild(this.spell2)
    this.el.appendChild(this.spell3)
    host.appendChild(this.el)
  }

  // Spells

  this.toggleSpell = function (spellName) {
    if (this.hasSpell(spellName)) {
      this.removeSpell(spellName)
    } else {
      this.addSpell(spellName)
    }

    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.spells.length === 0) { this.hide() }
    }, 2000)
  }

  this.addSpell = function (spellName) {
    if (this.spells.length > 2) {
      console.warn('Spellbook', 'Is full.')
      oquonie.music.playInterface('interface.spellbook.full')
      return
    }

    this.show()
    console.log('Spellbook', 'Add spell: ' + spellName)
    this.spells.push(spellName)
    oquonie.music.playInterface('interface.spellbook.add')
    this.try_transform()
    this.update()
  }

  this.removeSpell = function (spellName) {
    console.log('Spellbook', 'Removed spell: ' + spellName)
    const index = this.spells.indexOf(spellName)
    this.spells.splice(index, 1)
    oquonie.music.playInterface('interface.spellbook.remove')
    this.update()
  }

  this.removeSpells = function () {
    this.spells = []
    this.update()
  }

  this.hasSpell = function (spellName) {
    return this.spells.indexOf(spellName) > -1
  }

  // Pillars

  this.add_pillar = function (pillarCharacter) {
    this.pillars.push(pillarCharacter)
  }

  this.has_pillar = function (pillarCharacter) {
    return this.pillars.indexOf(pillarCharacter) > -1
  }

  // Ramen

  this.add_ramen = function (ramenCharacter) {
    console.log('Spellbook', 'Add Ramen: ' + ramenCharacter)
    this.ramens.push(ramenCharacter)
  }

  this.has_ramen = function (ramenCharacter) {
    return this.ramens.indexOf(ramenCharacter) > -1
  }

  // Etc..

  this.try_transform = function () {
    if (this.spells.length < 3) { return }
    if (this.id === 'nastazie') { return }

    const targetSpell = this.spells[0].split('_')[0]

    const a = {}
    for (let i = 0; i < this.spells.length; i++) {
      a[this.spells[i].split('_')[0]] = a[this.spells[i].split('_')[0]] ? a[this.spells[i].split('_')[0]] + 1 : 1
    }

    if (a[targetSpell] === 3) {
      oquonie.player.transform(targetSpell)
      this.spells = []
      this.update()
    } else {
      console.warn('Spellbook', 'Not sequence')
    }
  }

  this.clear = function () {
    oquonie.artbook.unsetArt(this.spell1)
    oquonie.artbook.unsetArt(this.spell2)
    oquonie.artbook.unsetArt(this.spell3)
  }

  this.update = function () {
    this.clear()

    for (let i = 0; i < this.spells.length; i++) {
      const spellName = this.spells[i].split('_')[0]
      if (i === 0) { oquonie.artbook.setArt(this.spell1, 'media/graphics/spellbook/' + spellName + '.png') }
      if (i === 1) { oquonie.artbook.setArt(this.spell2, 'media/graphics/spellbook/' + spellName + '.png') }
      if (i === 2) { oquonie.artbook.setArt(this.spell3, 'media/graphics/spellbook/' + spellName + '.png') }
    }
  }

  this.show = function () {
    setClass(this.el, 'visible')
  }

  this.hide = function () {
    setClass(this.el, 'invisible')
  }

  this.reset = function () {
    this.spells = []
    this.pillars = []
    this.ramens = []
    this.update()
  }
}
