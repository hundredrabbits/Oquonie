'use strict'

/* global oquonie */
/* global localStorage */

function Game () {
  const characters = ['necomedre', 'nephtaline', 'neomine', 'nestorine', 'nemedique', 'nastazie']
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

    oquonie.player.setId(data.character)
    oquonie.player.moveIn(data.room)

    for (const name of characters) {
      if (data.ramen[name] === true) { oquonie.spellbook.addRamen(name) }
      if (data.pillar[name] === true) { oquonie.spellbook.addPillar(name) }
    }

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
