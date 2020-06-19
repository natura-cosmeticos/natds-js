# Spacing tokens

## Usage

### Quick styling

```js
import React from 'react'
import { Provider } from "@naturacosmeticos/natds-web";
import { tokens } from "@naturacosmeticos/natds-styles"

export const App = () => (
    <Provider>
        <div style={{ margin: tokens.spacing.spacingTiny }}>
            Box with tiny margin
        </div>
    </Provider>
)
```
