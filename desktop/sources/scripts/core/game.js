'use strict'

function Game () {
  this.clear = function () {
    document.cookie.split(';').forEach(function (c) { document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/') })
  }

  this.save = function () {
    this.clear()

    console.info('Saving..')

    localStorage.character = oquonie.player.id
    localStorage.room = oquonie.stage.room.id

    localStorage.ramen_necomedre = oquonie.spellbook.has_ramen('necomedre')
    localStorage.ramen_nephtaline = oquonie.spellbook.has_ramen('nephtaline')
    localStorage.ramen_neomine = oquonie.spellbook.has_ramen('neomine')
    localStorage.ramen_nestorine = oquonie.spellbook.has_ramen('nestorine')
    localStorage.ramen_nemedique = oquonie.spellbook.has_ramen('nemedique')
    localStorage.ramen_nastazie = oquonie.spellbook.has_ramen('nastazie')

    localStorage.pillar_necomedre = oquonie.spellbook.has_pillar('necomedre')
    localStorage.pillar_nephtaline = oquonie.spellbook.has_pillar('nephtaline')
    localStorage.pillar_neomine = oquonie.spellbook.has_pillar('neomine')
    localStorage.pillar_nestorine = oquonie.spellbook.has_pillar('nestorine')
    localStorage.pillar_nemedique = oquonie.spellbook.has_pillar('nemedique')
    localStorage.pillar_nastazie = oquonie.spellbook.has_pillar('nastazie')

    localStorage.is_muted = oquonie.music.is_muted
  }

  this.load = function () {
    console.info('Loading..')

    oquonie.player.set_id(localStorage.character)
    oquonie.player.location = parseInt(localStorage.room)

    if (localStorage.ramen_necomedre == 'true') { oquonie.spellbook.add_ramen('necomedre') }
    if (localStorage.ramen_nephtaline == 'true') { oquonie.spellbook.add_ramen('nephtaline') }
    if (localStorage.ramen_neomine == 'true') { oquonie.spellbook.add_ramen('neomine') }
    if (localStorage.ramen_nestorine == 'true') { oquonie.spellbook.add_ramen('nestorine') }
    if (localStorage.ramen_nemedique == 'true') { oquonie.spellbook.add_ramen('nemedique') }
    if (localStorage.ramen_nastazie == 'true') { oquonie.spellbook.add_ramen('nastazie') }

    if (localStorage.pillar_necomedre == 'true') { oquonie.spellbook.add_pillar('necomedre') }
    if (localStorage.pillar_nephtaline == 'true') { oquonie.spellbook.add_pillar('nephtaline') }
    if (localStorage.pillar_neomine == 'true') { oquonie.spellbook.add_pillar('neomine') }
    if (localStorage.pillar_nestorine == 'true') { oquonie.spellbook.add_pillar('nestorine') }
    if (localStorage.pillar_nemedique == 'true') { oquonie.spellbook.add_pillar('nemedique') }
    if (localStorage.pillar_nastazie == 'true') { oquonie.spellbook.add_pillar('nastazie') }

    const is_muted = localStorage.is_muted == 'true'
    if (is_muted != oquonie.music.is_muted) {
      if (is_muted) {
        oquonie.music.pause_ambience()
      } else {
        oquonie.music.resume_ambience()
      }
    }
  }

  this.is_found = function () {
    if (localStorage.character && parseInt(localStorage.room) > 0) {
      return true
    }
    return false
  }

  this.new = function () {
    console.info('New Game..')
    localStorage.clear()

    oquonie.spellbook.reset()

    oquonie.player.location = 29
    oquonie.player.set_id('necomedre')

    return 'Created a new game.'
  }
}
