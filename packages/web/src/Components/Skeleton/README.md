## Usage

```jsx
{item ? (
  <img alt={item.title} height= src={item.src} />
) : (
  <Skeleton variant={"rect"} />
)}
```

## Inferring dimensions

In addition to accepting `height` and `width` props, the component can also infer the dimensions.

It works well when it comes to typography as its height is set using `em` units.

<Preview>
  <Story name="Skeleton with Typography">
    <ComponentWithLabel componentList={forTypography} headingText={"With Typography"} />
  </Story>
</Preview>

```jsx
import React from "React";
import Typography from "@naturacosmeticos/natds-web/dist/Typography";

export const SkeletonTypography = () => {

  const loading = false;

  return (
    <div>
      <Typography variant={"h1"}>
        { loading ? <Skeleton /> : "h1" }
      </Typography>
    </div>
  );
}
```

```jsx
import React from "react";
import Avatar from "@naturacosmeticos/natds-web/dist/Avatar";
import Skeleton from "@naturacosmeticos/natds-web/dist/Skeleton";

export const SkeletonChildrenDemo = () => {

  const loading = false;

  return (
    <div>
      { loading ? (
        <Skeleton variant={"circle"}>
          <Avatar />
        </Skeleton>
      ) : (
        <Avatar src={"https://"} />
      )}
    </div>
  );

}
```

## Accessibility

Skeleton screens provide an alternative to the traditional spinner methods.

Rather than showing an abstract widget, skeleton screens create anticipation of what is to come and reduce cognitive load.

## Skeleton API

The API documentation of the Skeleton component. Learn more about the props.

The `ref` is forwarded to the root element.

Any other props supplied will be provided to the root element.
