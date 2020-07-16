# Roadmap

The roadmap is a living document, and it is likely that priorities will change,
but the following list should give some indication of our plans for the next releases and for the future.

## Technical Priorities

1. **Better DX**: remove any errors and warnings when installing or using libraries that generate friction in the developer experience;
2. **Better CX**: always help to validate and integrate contributions from components and icons of contributors;
3. **Better Storybook**: improve Storybook performance and current components documentation;
4. **Better icons**: migrate `<Icon />` strategy to use SVG instead of current icon font (adding alias and keeping a font icon alternative);
5. **Better MFe compatibility**: ensure that Design System libraries will work fine with [`LitElement`](https://github.com/PolymerLabs/lit-element-starter-ts/), `single-spa` (WebFV) and TypeScript;
6. **Better styling strategy**: gradually adopt JSS-based Material UI instead of current `styled-components`;
7. **Better autocompletion experience**: gradually add `prop-types` for all components for better developer experience;
8. **Better snapshot testing**: gradually adopt `react-test-renderer` instead of current `enzyme` for snapshot testing;
9. **Better code examples**: mantain boilerplates and code snippets showing how implement Design System in web projects.

## Elements Priorities

This is a list of elements (components and tokens) organized from the most essential to the least essential.

Think of it as a driver for us to be able to prioritize mainly the refinement activity.

### Level 0

#### Tokens

- Grid;
- Radius;
- Size;
- Spacing;
- Typography;
- Color;
- Elevation;
- Opacity;
- Overlay;
- States;

#### Patterns

- Logo;
- Illustration;

### Level 1

1. IconButton;
2. Badge;
3. Button;
4. Divider;
5. FAB;
6. Iconography;

### Level 2

1. SelectControl
2. ProgressIndicator
3. Avatar
4. Chip
5. Slider
6. Tooltip

### Level 3

1. Shortcut
2. Image
3. ProductEmpty
4. Counter
5. ContextualBadge
6. Link

### Level 4

1. Card
2. Skeleton
3. Breadcrumb
4. Intro
5. Pin
6. ButtonGroup

### Level 5

1. List
2. TextField
3. Dialog
4. Menu
5. Select
6. Tab

### Level 6

1. Carousel
2. DataTable
3. Banner
4. NavigationDrawer
5. Picker
6. Snackbar

### Level 7

1. ExpansionPanel (Accordion)
2. Alert
3. ImageList
4. Popover
5. Pagination
6. Rating

### Level 8

1. AppBar top
2. BottomSheet
3. BottomNavigation
4. Sheet: Side
5. AppBar bottom
6. Backdrop

### Level 9

1. ValueTextHighlight

### No level defined

* ActionButton
* ScoreBar
* ScoreNumber
* SegmentedControl
* Stepper
