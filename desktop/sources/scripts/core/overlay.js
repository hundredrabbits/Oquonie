'use strict'

/* global oquonie */
/* global setClass */

function Overlay () {
  this.el = document.createElement('div')
  this.el.id = 'overlay'
  this.isVisible = false

  this.install = function (host) {
    host.appendChild(this.el)
  }

  this.show = function (message) {
    oquonie.artbook.setArt(this.el, `media/graphics/plan/${message}.png`)
    replaceClass(this.el, 'invisible', 'visible')
    this.isVisible = true
  }

  this.hide = function () {
    replaceClass(this.el, 'visible', 'invisible')
    this.isVisible = false
  }
}
