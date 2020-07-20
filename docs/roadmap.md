# Tech Roadmap

The roadmap is a living document, and it is likely that priorities will change,
but the following list should give some indication of our plans for the next releases and for the future.

## Assumptions

- `natds-styles` is based on Material UI styling strategy and we don't have plans to change it for now.
- Developers should not have direct access to single source of truth implementations.

## Priorities

1. **Better DX**: remove any errors and warnings when installing or using libraries that generate friction in the developer experience;
2. **Better CX**: always help to validate and integrate contributions from components and icons of contributors;
3. **Better Storybook**: improve Storybook performance and current components documentation;
4. **Better icons**: migrate `<Icon />` strategy to use SVG instead of current icon font (adding alias and keeping a font icon alternative);
5. **Better MFe compatibility**: ensure that Design System libraries will work fine with [`LitElement`](https://github.com/PolymerLabs/lit-element-starter-ts/), `single-spa` (WebFV) and TypeScript;
6. **Better styling strategy**: gradually adopt JSS-based Material UI instead of current `styled-components`;
7. **Better autocompletion experience**: gradually add `prop-types` for all components for better developer experience;
8. **Better snapshot testing**: gradually adopt `react-test-renderer` instead of current `enzyme` for snapshot testing;
9. **Better code examples**: mantain boilerplates and code snippets showing how implement Design System in web projects.

## Next release plans

- Gradually adopt `rollup` instead of `tsc` for building `natds-web`;
- Add single source of truth (`natds-commons`) as dependency;
- Create a mapper from `natds-commons` to current `natds-styles` code structure (is not a breaking change);
- Create a new structure for `natds-commons` and adopt tokens from the new single source of truth;
- Publish `natds-styles` library version with two strategies (legacy and `natds-commons`) living together;
- Start to emit warnings for developers that are using current versions, talking about the coming changes and asking them to adopt the new structure ASAP;
- Gradually remove harcoded and direct token use from components;
- Increase obsolete warnings.

## What do we expect for 1.0?

- Only `rollup` will be used for building files;
- Break with old `natds-styles` contract;
- All components and tokens codes will follow `natds-commons` contracts - the single source of truth CTI structure - with multibrand, dark/light support.
