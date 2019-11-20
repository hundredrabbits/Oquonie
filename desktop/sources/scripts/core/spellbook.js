'use strict'

/* global oquonie */

function Spellbook () {
  this.element = document.createElement('spellbook')
  this.spell1 = document.createElement('spell')
  this.spell2 = document.createElement('spell')
  this.spell3 = document.createElement('spell')

  this.spells = []
  this.pillars = []
  this.ramens = []

  this.autohide_timer = null

  this.install = function () {
    oquonie.element.appendChild(this.element)
    this.element.appendChild(this.spell1)
    this.element.appendChild(this.spell2)
    this.element.appendChild(this.spell3)
  }

  // Spells

  this.toggle_spell = function (spell_name) {
    if (this.has_spell(spell_name)) {
      this.remove_spell(spell_name)
    } else {
      this.add_spell(spell_name)
    }
    this.autohide_timer = setTimeout(function () { oquonie.spellbook.check_autohide() }, 2000)
  }

  this.add_spell = function (spell_name) {
    if (this.spells.length > 2) {
      console.warn('Spellbook is full.')
      oquonie.music.play_interface('interface.spellbook.full')
      return
    }

    this.show()
    console.log('Add spell: ' + spell_name)
    this.spells.push(spell_name)
    oquonie.music.play_interface('interface.spellbook.add')
    this.try_transform()
    this.update()
  }

  this.remove_spell = function (spell_name) {
    console.log('Removed spell: ' + spell_name)
    const index = this.spells.indexOf(spell_name)
    this.spells.splice(index, 1)
    oquonie.music.play_interface('interface.spellbook.remove')
    this.update()
  }

  this.remove_spells = function () {
    this.spells = []
    this.update()
  }

  this.has_spell = function (spell_name) {
    return this.spells.indexOf(spell_name) > -1
  }

  // Pillars

  this.add_pillar = function (pillar_character) {
    this.pillars.push(pillar_character)
  }

  this.has_pillar = function (pillar_character) {
    return this.pillars.indexOf(pillar_character) > -1
  }

  // Ramen

  this.add_ramen = function (ramen_character) {
    console.log('Add Ramen: ' + ramen_character)
    this.ramens.push(ramen_character)
  }

  this.has_ramen = function (ramen_character) {
    return this.ramens.indexOf(ramen_character) > -1
  }

  // Etc..

  this.try_transform = function () {
    if (this.spells.length < 3) { return }
    if (this.id == 'nastazie') { return }

    const target_spell = this.spells[0].split('_')[0]

    const a = {}
    for (let i = 0; i < this.spells.length; i++) {
      a[this.spells[i].split('_')[0]] = a[this.spells[i].split('_')[0]] ? a[this.spells[i].split('_')[0]] + 1 : 1
    }

    if (a[target_spell] == 3) {
      oquonie.player.transform(target_spell)
      this.spells = []
      this.update()
    } else {
      console.warn('Not sequence')
    }
  }

  this.clear = function () {
    oquonie.artbook.remove_art(this.spell1)
    oquonie.artbook.remove_art(this.spell2)
    oquonie.artbook.remove_art(this.spell3)
  }

  this.update = function () {
    this.clear()

    for (let i = 0; i < this.spells.length; i++) {
      const spell_name = this.spells[i].split('_')[0]
      if (i == 0) { oquonie.artbook.setArt(this.spell1, 'media/graphics/spellbook/' + spell_name + '.png') }
      if (i == 1) { oquonie.artbook.setArt(this.spell2, 'media/graphics/spellbook/' + spell_name + '.png') }
      if (i == 2) { oquonie.artbook.setArt(this.spell3, 'media/graphics/spellbook/' + spell_name + '.png') }
    }
  }

  this.show = function () {
    $(this.spell1).delay(0).animate({ marginTop: 0, opacity: 1 }, oquonie.speed / 2)
    $(this.spell2).delay(100).animate({ marginTop: 0, opacity: 1 }, oquonie.speed / 2)
    $(this.spell3).delay(200).animate({ marginTop: 0, opacity: 1 }, oquonie.speed / 2)
  }

  this.hide = function () {
    $(this.spell1).delay(0).animate({ marginTop: -5, opacity: 0 }, oquonie.speed / 2)
    $(this.spell2).delay(100).animate({ marginTop: -5, opacity: 0 }, oquonie.speed / 2)
    $(this.spell3).delay(200).animate({ marginTop: -5, opacity: 0 }, oquonie.speed / 2)
  }

  this.check_autohide = function () {
    clearTimeout(this.autohide_timer)

    if (this.spells.length == 0) {
      this.hide()
    }
  }

  this.reset = function () {
    this.spells = []
    this.pillars = []
    this.ramens = []
    this.update()
  }
}
