function Artbook()
{
  this.asset_catalog = {};
  this.selector_registry = {};
  this.selector_registry_unique_id = 0;
  this.class_unique_id = 0;

  var stylesheet_element = document.createElement("style");
  stylesheet_element.type = "text/css";
  stylesheet_element.title = "artbook";
  stylesheet_element.appendChild(document.createTextNode(""));
  document.head.appendChild(stylesheet_element);
  for (var i = 0; i < document.styleSheets.length; i++)
  {
    if (document.styleSheets[i].title == stylesheet_element.title)
    {
      this.stylesheet = document.styleSheets[i];
      break;
    }
  }

  this.set_art = function(selector, asset_url)
  {
    if (!(asset_url in this.asset_catalog))
    {
      var className = "artbook_" + this.class_unique_id;
      this.class_unique_id++;
      
      this.stylesheet.insertRule("." + className + "{background-image:url("+asset_url+")}");
      this.asset_catalog[asset_url] = className;
    }

    var id = this.get_selector_id(selector);
    if (id in this.selector_registry)
    {
      if (this.selector_registry[id] == asset_url)
      {
        return;
      }
      this.remove_art(selector);
    }
    this.selector_registry[id] = asset_url;
    $(selector).addClass(this.asset_catalog[asset_url]);
  }

  this.remove_art = function(selector)
  {
    var id = this.get_selector_id(selector);
    if (id in this.selector_registry)
    {
      var asset_url = this.selector_registry[id];
      if (asset_url in this.asset_catalog) {
        $(selector).removeClass(this.asset_catalog[asset_url]);
      }
      delete this.selector_registry[id];
    }
  }

  this.get_selector_id = function(selector)
  {
    var id = selector.toString();
    if (typeof(selector) == "object")
    {
      if (!selector.hasOwnProperty("artbook_id"))
      {
        selector.artbook_id = "artbook_id_" + this.selector_registry_unique_id;
        this.selector_registry_unique_id++;
      }
      id = selector.artbook_id;
    }

    return id;
  }
}
