'use strict'

function Room (id) {
  this.element = document.createElement('room')

  this.id = id

  this.floors = []
  this.walls = []
  this.steps = []
  this.audio = null
  this.theme = null
  this.events = []

  this.add_event = function (event, is_mirrored = false) {
    if (is_mirrored == true) { event.mirror() }
    event.location = this.id

    this.events.push(event)
  }

  this.remove_event = function (id) {
    let new_events = []
    for (event_id in this.events) {
      let event = this.events[event_id]
      if (event.id == id) { console.log(event.id, id); continue }
      new_events.push(event)
    }
    this.events = new_events
  }

  this.refresh = function () {
    this.element.innerHTML = ''

    // Floor
    for (let i = 0; i < this.floors.length; i++) {
      let tile = new Floor(i, this.floors[i], 'floor')
      tile.element.setAttribute('id', 'floor_' + i)
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Wall
    for (let i = 0; i < this.walls.length; i++) {
      let tile = new Wall(i, this.walls[i], 'wall')
      tile.element.setAttribute('id', 'wall_' + i)
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Steps
    for (let i = 0; i < this.steps.length; i++) {
      let tile = new Step(i, this.steps[i], 'step')
      this.element.appendChild(tile.element)
      // tile.animate();
    }

    // Events
    for (let i = 0; i < this.events.length; i++) {
      let event = this.events[i]
      event.animator.animate()
      this.element.appendChild(event.element)
      // tile.animate();
    }

    this.element.appendChild(oquonie.player.element)
  }

  this.show = function () {
    // Floor
    for (let i = 0; i < this.floors.length; i++) {
      let tile = new Floor(i, this.floors[i], 'floor')
      tile.element.setAttribute('id', 'floor_' + i)
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Wall
    for (let i = 0; i < this.walls.length; i++) {
      let tile = new Wall(i, this.walls[i], 'wall')
      tile.element.setAttribute('id', 'wall_' + i)
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Steps
    for (let i = 0; i < this.steps.length; i++) {
      let tile = new Step(i, this.steps[i], 'step')
      this.element.appendChild(tile.element)
      tile.animate()
    }

    // Events
    for (let i = 0; i < this.events.length; i++) {
      let event = this.events[i]
      event.animator.animate()
      this.element.appendChild(event.element)
      event.animate()
    }

    this.element.appendChild(oquonie.player.element)
  }
}
