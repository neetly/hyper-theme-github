const chroma = require("chroma-js");
const { colors } = require("@primer/primitives").default;

const getThemeColors = (theme) => {
  switch (theme) {
    case "light":
      return colors.light;
    case "light-high-contrast":
      return colors.light_high_contrast;
    case "light-colorblind":
      return colors.light_colorblind;
    case "light-tritanopia":
      return colors.light_tritanopia;
    case "dark":
      return colors.dark;
    case "dark-high-contrast":
      return colors.dark_high_contrast;
    case "dark-colorblind":
      return colors.dark_colorblind;
    case "dark-tritanopia":
      return colors.dark_tritanopia;
    case "dark-dimmed":
      return colors.dark_dimmed;
  }
};

const getThemeConfig = (config, theme) => {
  const colors = getThemeColors(theme);

  return {
    foregroundColor: colors.fg.muted,
    backgroundColor: colors.canvas.default,
    borderColor: colors.border.default,
    cursorColor: colors.accent.fg,
    cursorAccentColor: colors.canvas.default,
    selectionColor: chroma(colors.accent.fg).alpha(0.2).css(),

    colors: {
      black: colors.ansi.black,
      red: colors.ansi.red,
      green: colors.ansi.green,
      yellow: colors.ansi.yellow,
      blue: colors.ansi.blue,
      magenta: colors.ansi.magenta,
      cyan: colors.ansi.cyan,
      white: colors.ansi.white,
      lightBlack: colors.ansi.blackBright,
      lightRed: colors.ansi.redBright,
      lightGreen: colors.ansi.greenBright,
      lightYellow: colors.ansi.yellowBright,
      lightBlue: colors.ansi.blueBright,
      lightMagenta: colors.ansi.magentaBright,
      lightCyan: colors.ansi.cyanBright,
      lightWhite: colors.ansi.whiteBright,
    },

    css: `
      .header_appTitle {
        color: ${colors.fg.default};
      }

      .header_shape {
        color: ${colors.fg.default};
      }

      .tab_tab {
        color: ${colors.fg.muted};
        background-color: ${colors.canvas.inset};
      }

      .tab_active {
        color: ${colors.fg.default};
        background-color: ${colors.canvas.default};
      }

      .tab_active::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        border-top: 1px solid ${colors.primer.border.active};
      }

      .tab_icon {
        color: ${colors.fg.default};
      }

      ${config.css ?? ""}
    `,
  };
};

exports.decorateConfig = (config) => {
  return {
    ...config,
    ...getThemeConfig(config, config.theme ?? "light"),
  };
};

// FIXME: https://github.com/vercel/hyper/pull/6538
exports.getTermGroupProps = (uid, parentProps, props) => {
  return {
    ...props,
    cursorAccentColor: parentProps.cursorAccentColor,
  };
};
