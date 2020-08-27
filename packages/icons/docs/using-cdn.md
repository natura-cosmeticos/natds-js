# Using `natds-icons` via CDN

You can start using `natds-icons` with minimal Front-end infrastructure, which is great for prototyping.

Currently, natds-icons are available in CSS, JSON and fonts:

- [Font Icon CSS](#font-icon-css)
- [Font Icon TTF](#font-icon-ttf)
- [Font Icon JSON](#font-icon-json)

We plan to provide SVGs for direct use in the future.

⚠️ Using this approach in **production** is **discouraged** though.

---

## Font Icon CSS

In order to use the font icon, you must add the `natds-icons` font. So you could use it like this:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons/dist/natds-icons.css" />
```

⚠️ This link is using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions.

Check out this [example of using icons via CDN hosted on JSFiddle](https://jsfiddle.net/z4qtvgu7/).

## Font Icon TTF

The TTF (True Type Format) file also is provided:

https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons/dist/fonts/natds-icons.ttf

⚠️ This link is using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions.

## Font Icon JSON

The JSON (JavaScript Object Notation) file is provided only with only the character codes for each icon.

https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons/dist/natds-icons.json

⚠️ This link is using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions.

---

## Where do I find the available icons?

The icons in filled and outlined variations can be found on the [Design System web Storybook](http://storybook-web.natura.com.br/).

Remember that whenever an update is released, new icons can be added.
