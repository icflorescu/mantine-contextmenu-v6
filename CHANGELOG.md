# Changelog

The following is a list of notable changes to the Mantine ContextMenu component.  
Minor versions that are not listed in the changelog are minor bug fixes and small internal improvements or refactorings.

## 6.1.0 (2023-11-03)

- Allow imperative hiding by using the `hideContextMenu` function that is exposed via `useContextMenu()`.
- `useContextMenu()` is now also an object that can be destructured into 3 properties: `showContextMenu`, `hideContextMenu`, and `isContextMenuVisible `.

## 6.0.0 (2023-10-01)

- Bump version to `6.0.0` to match the compatible versions of `@mantine/hooks` and `@mantine/core`. From now on, we'll make sure to keep the major version of `mantine-contextmenu` in sync with the major version of Mantine core
- Implement submenus (nested context menus) support (see [#68](https://github.com/icflorescu/mantine-contextmenu/issues/68)), many thanks to @Corvimia for her contribution 🙏 (see [#69](https://github.com/icflorescu/mantine-contextmenu/pull/69))

## 1.3.14 (2023-08-11)

- Switch to `useResizeObserver` instead of `useElementSize` to properly take into account the padding and border when calculating the menu position

## 1.3.13 (2023-08-10)

- Lock `@mantine/core` and `@mantine/hooks` peer dependencies to `>=6 <=6.0.17 || >=6.0.19`, to avoid a [bug introduced in `6.0.18` and fixed in `6.0.19`](https://github.com/mantinedev/mantine/pull/4512)

## 1.3.3 (2023-06-30)

- Fix positioning regression introduced by using a Portal

## 1.3.2 (2023-06-29)

- Use a Portal to render the context menu

## 1.3.1 (2023-06-28)

- Relax peer dependencies (to Mantine 6.x)

## 1.3.0 (2023-06-23)

- Expose `ContextMenu`, `ContextMenuItem` and `ContextMenuDivider` components

## 1.2.3 (2023-04-29)

- Stop event propagation (fix issue #18)

## 1.1.0 (2023-04-11)

- Add custom content support

## 1.0.0 (2023-04-11)

- Initial release
