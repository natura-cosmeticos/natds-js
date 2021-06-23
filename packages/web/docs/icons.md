# Using NatDS Icons

We use the icons package `@naturacosmeticos/natds-icons` as a dependency of this library, so you'll have the icon font files available in your `node_modules` folder after installation.

You need to load the font icons from the package using the stylesheet inside your `.html` file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">
```

or load it from `node_modules` with a module bundler like *Webpack* or *Rollup*:

*main.js*
```shell
import React from 'react';
import 'node_modules/@naturacosmeticos/natds-icons/natds-icons.css';
```

*webpack.config.js*
```shell
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  }
};
```

### Usage

After this, you can use the `Icon` component to display the icons. It receives `color`, `name` and `size` as props, using our Size and Color tokens, and the icon names provided.

To find out more about those you can check:
- [Color tokens](https://xd.adobe.com/view/f66ea4ed-358a-4d49-9276-2b813655253f-a33d/screen/2a6fb13c-32e0-4f4c-8fe5-dc2ef0d0fe72/)
- [Size tokens](https://xd.adobe.com/view/f66ea4ed-358a-4d49-9276-2b813655253f-a33d/screen/564b2a42-e8e1-4c70-825c-1b8cd3b99dfc/)
- [Icons](https://zeroheight.com/28db352be/p/94367e-icon-library/b/6154b9) and [Icon Names](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json)

Here is a quick example to get you started:
```javascript
import React from 'react';
import { Icon } from '@naturacosmeticos/natds-web';

export default Component = () => (
  <Icon
    name="outlined-content-handcare"
    size="standard"
    color="default"
  />
);
```

> For component detailed API and usage examples, check out the [docs](http://storybook-web.natura.com.br/) of the component you are using.

---

### Not a React-based project?

You can also install icons separately. Please check `natds-icons` [docs](https://github.com/natura-cosmeticos/natds-commons/tree/master/packages/natds-icons) for more info.
