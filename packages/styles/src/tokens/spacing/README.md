# Spacing tokens

## Usage

### With `makeStyles`

```js
import React from "react"
import { Provider } from "@naturacosmeticos/natds-web"
import { tokens } from "@naturacosmeticos/natds-styles"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  spacedBox: {
    margin: tokens.spacing.spacingTiny
  }
})

export const App = () => (
    <Provider>
        <div className={classes.spacedBox}>
            Box with tiny spacing for margin
        </div>
    </Provider>
)
```

### Quick styling

```js
import React from "react"
import { Provider } from "@naturacosmeticos/natds-web"
import { tokens } from "@naturacosmeticos/natds-styles"

export const App = () => (
    <Provider>
        <div style={{ margin: tokens.spacing.spacingTiny }}>
            Box with tiny spacing for margin
        </div>
    </Provider>
)
```
