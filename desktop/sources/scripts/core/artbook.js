'use strict'

/* global addClass removeClass */

function Artbook () {
  this.asset_catalog = {}
  this.element_registry = {}
  this.element_registry_unique_id = 0
  this.class_unique_id = 0

  const _style = document.createElement('style')
  _style.type = 'text/css'
  _style.title = 'artbook'
  _style.appendChild(document.createTextNode(''))

  document.head.appendChild(_style)

  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].title === _style.title) {
      this.stylesheet = document.styleSheets[i]
      break
    }
  }

  this.setArt = function (el, assetUrl) {
    if (!el) { console.warn('Artbook', 'Cannot set art to', assetUrl); return }

    if (!(assetUrl in this.asset_catalog)) {
      const className = 'artbook_' + this.class_unique_id
      this.class_unique_id++

      this.stylesheet.insertRule('.' + className + '{background-image:url(' + assetUrl + ') !important}', 0)
      this.asset_catalog[assetUrl] = className
    }

    const id = this.get_element_id(el)

    if (id === null) {
      console.warn('no element for selector ' + el)
    }

    if (id in this.element_registry) {
      if (this.element_registry[id] === assetUrl) {
        return
      }
      this.unsetArt(el)
    }
    this.element_registry[id] = assetUrl

    addClass(el, this.asset_catalog[assetUrl])
  }

  this.unsetArt = function (el) {
    if (!el) { console.warn('Artbook', 'Cannot unset art'); return }

    const id = this.get_element_id(el)
    if (id in this.element_registry) {
      const assetUrl = this.element_registry[id]
      if (assetUrl in this.asset_catalog) {
        removeClass(el, this.asset_catalog[assetUrl])
      }
      delete this.element_registry[id]
    }
  }

  this.get_element_id = function (el) {
    if (!el) { return null }

    if (!el.hasOwnProperty('artbook_id')) {
      if (el.hasOwnProperty('id')) {
        el.artbook_id = el.id
      } else {
        el.artbook_id = 'artbook_id_' + this.element_registry_unique_id
        this.element_registry_unique_id++
      }
    }
    return el.artbook_id
  }
}
