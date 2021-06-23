# Using natds-icons

We use the icons package `@naturacosmeticos/natds-icons` as a dependency of this library, so you'll have the icon font files available in your `node_modules` folder after installation.

You need to load the font icons from the package using the stylesheet inside your `.html` file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">
```

or load it from `node_modules` with a module bundler like *Webpack*:

*main.js*
```shell
import React from 'react';
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';
```

> **Check your module bundler official documentation to do the setup**

### Usage

After this, you can use the `Icon` component to display the icons. It receives `color`, `name` and `size` as props, using our Size and Color tokens, and the icon names provided.

To find out more about:
- [Tokens](https://ds.natura.design/28db352be/p/3880eb-search)
- [Icons](https://ds.natura.design/28db352be/p/94367e-icon-library/b/756de8)

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

> For component detailed API and usage examples, check out the [docs](https://natds-web.natura.design/) of the component you are using.

---

### Not a React-based project?

You can also install icons separately. Please check `natds-icons` [docs](https://github.com/natura-cosmeticos/natds-commons/tree/master/packages/natds-icons) for more info.

