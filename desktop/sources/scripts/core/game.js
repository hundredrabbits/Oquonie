'use strict'

/* global oquonie */
/* global localStorage */

function Game () {
  this.reset = function () {
    console.info('Game', 'New Game..')
    localStorage.clear()
    oquonie.spellbook.reset()
    oquonie.player.moveIn(29)
    oquonie.player.setId('necomedre')
  }

  this.save = function () {
    console.info('Game', 'Saving..')
    localStorage.setItem('save', JSON.stringify(this.serialize()))
    console.log(localStorage.getItem('save'))
  }

  this.load = function () {
    console.info('Game', 'Loading..')

    const data = JSON.parse(localStorage.getItem('save'))

    console.log(data)

    oquonie.player.setId(data.character)
    oquonie.player.moveIn(data.room)

    if (data.ramen.necomedre === true) { oquonie.spellbook.addRamen('necomedre') }
    if (data.ramen.nephtaline === true) { oquonie.spellbook.addRamen('nephtaline') }
    if (data.ramen.neomine === true) { oquonie.spellbook.addRamen('neomine') }
    if (data.ramen.nestorine === true) { oquonie.spellbook.addRamen('nestorine') }
    if (data.ramen.nemedique === true) { oquonie.spellbook.addRamen('nemedique') }
    if (data.ramen.nastazie === true) { oquonie.spellbook.addRamen('nastazie') }

    if (data.pillar.necomedre === true) { oquonie.spellbook.addPillar('necomedre') }
    if (data.pillar.nephtaline === true) { oquonie.spellbook.addPillar('nephtaline') }
    if (data.pillar.neomine === true) { oquonie.spellbook.addPillar('neomine') }
    if (data.pillar.nestorine === true) { oquonie.spellbook.addPillar('nestorine') }
    if (data.pillar.nemedique === true) { oquonie.spellbook.addPillar('nemedique') }
    if (data.pillar.nastazie === true) { oquonie.spellbook.addPillar('nastazie') }

    oquonie.music.isMuted = data.mute
    if (data.mute) {
      oquonie.music.pause_ambience()
    } else {
      oquonie.music.resume_ambience()
    }
  }

  this.isFound = function () {
    return !!localStorage.getItem('save')
  }

  this.serialize = () => {
    return {
      room: oquonie.stage.room.id,
      character: oquonie.player.id,
      ramen: {
        necomedre: oquonie.spellbook.hasRamen('necomedre'),
        nephtaline: oquonie.spellbook.hasRamen('nephtaline'),
        neomine: oquonie.spellbook.hasRamen('neomine'),
        nestorine: oquonie.spellbook.hasRamen('nestorine'),
        nemedique: oquonie.spellbook.hasRamen('nemedique'),
        nastazie: oquonie.spellbook.hasRamen('nastazie')
      },
      pillar: {
        necomedre: oquonie.spellbook.hasPillar('necomedre'),
        nephtaline: oquonie.spellbook.hasPillar('nephtaline'),
        neomine: oquonie.spellbook.hasPillar('neomine'),
        nestorine: oquonie.spellbook.hasPillar('nestorine'),
        nemedique: oquonie.spellbook.hasPillar('nemedique'),
        nastazie: oquonie.spellbook.hasPillar('nastazie')
      },
      mute: oquonie.music.isMuted
    }
  }
}
