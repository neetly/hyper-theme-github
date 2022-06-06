# [GitHub Theme](https://github.com/primer/github-vscode-theme) for [Hyper](https://hyper.is/)

[![CI](https://github.com/neetly/hyper-theme-github/actions/workflows/ci.yml/badge.svg)](https://github.com/neetly/hyper-theme-github/actions/workflows/ci.yml)

| Light Theme                                  | Dark Theme                                  |
| -------------------------------------------- | ------------------------------------------- |
| ![Screenshot](./assets/screenshot-light.png) | ![Screenshot](./assets/screenshot-dark.png) |

```js
module.exports = {
  config: {
    theme:
      "light" |
      "light-high-contrast" |
      "light-colorblind" |
      "light-tritanopia" |
      "dark" |
      "dark-high-contrast" |
      "dark-colorblind" |
      "dark-tritanopia" |
      "dark-dimmed",
  },
  plugins: ["hyper-theme-github"],
};
```
