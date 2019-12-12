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
    setClass(this.el, 'visible')
  }

  this.hide = function () {
    setClass(this.el, 'invisible')
  }
}
