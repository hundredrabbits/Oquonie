'use strict'

/* global oquonie Floor Wall Step */

function Room (id) {
  this.element = document.createElement('div')
  this.element.id = 'room'

  this.id = id

  this.floors = []
  this.walls = []
  this.steps = []
  this.audio = null
  this.theme = null
  this.events = []

  this.addEvent = function (event, isMirrored = false) {
    if (isMirrored === true) { event.mirror() }
    event.location = this.id

    this.events.push(event)
  }

  this.removeEvent = function (id) {
    const arr = []
    for (const eventId in this.events) {
      const event = this.events[eventId]
      if (event.id === id) { continue }
      arr.push(event)
    }
    this.events = arr
  }

  this.refresh = function () {
    console.log('Room', 'Refreshing..')
    this.element.innerHTML = ''

    // Floor
    for (let i = 0; i < this.floors.length; i++) {
      const tile = new Floor(i, this.floors[i], 'floor')
      tile.element.setAttribute('id', 'floor_' + i)
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Wall
    for (let i = 0; i < this.walls.length; i++) {
      const tile = new Wall(i, this.walls[i], 'wall')
      tile.element.setAttribute('id', 'wall_' + i)
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Steps
    for (let i = 0; i < this.steps.length; i++) {
      const tile = new Step(i, this.steps[i], 'step')
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Events
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i]
      event.animator.animate()
      this.element.appendChild(event.element)
      // tile.animate();
    }

    this.element.appendChild(oquonie.player.element)
  }

  this.show = function () {
    // Floor
    for (let i = 0; i < this.floors.length; i++) {
      const tile = new Floor(i, this.floors[i], 'floor')
      tile.element.setAttribute('id', 'floor_' + i)
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Wall
    for (let i = 0; i < this.walls.length; i++) {
      const tile = new Wall(i, this.walls[i], 'wall')
      tile.element.setAttribute('id', 'wall_' + i)
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Steps
    for (let i = 0; i < this.steps.length; i++) {
      const tile = new Step(i, this.steps[i], 'step')
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Events
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i]
      event.animator.animate()
      this.element.appendChild(event.element)
      event.animate()
    }

    this.element.appendChild(oquonie.player.element)
  }
}
