# jQuery plugin template

Template that features public and private methods and overridable/extensible defaults.

# Requirements

* [:link: jQuery](https://jquery.com/) ver. 3.6.0+

# Table of contents

1. [Installation](#installation)
2. [Instance](#instance)
3. [Overriding defaults](#overriding-defaults)

# Installation

Load the JS file at the bottom of the document.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <!-- jQuery -->
    <script src="/js/jquery.min.js"></script>
    <!-- jQuery plugin JS -->
    <script src="/js/jquery.plugin.template.js"></script>
  </body>
</html>
```

<div align="right"><a href="#jquery-plugin-template">&#8593; Back to top</a></div>

# Instance

To create an instance on a specific target:

```js
$(element).jQueryPluginTemplate(options);
```

To use an utility on a specific target:

```js
$(element).jQueryPluginTemplate(method);
```

```js
$(element).jQueryPluginTemplate(method, options);
```

<div align="right"><a href="#jquery-plugin-template">&#8593; Back to top</a></div>

# Overriding defaults

To override this plugin's default settings and making them work across all the instances:

```js
$.fn.jQueryPluginTemplate.defaults.property = value;
```

Works for adding custom properties too.

<div align="right"><a href="#jquery-plugin-template">&#8593; Back to top</a></div>
