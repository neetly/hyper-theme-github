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

const getThemeConfig = (theme) => {
  const colors = getThemeColors(theme);

  return {
    foregroundColor: colors.fg.muted,
    backgroundColor: colors.canvas.inset,
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
  };
};

exports.decorateConfig = (config) => {
  return {
    ...config,
    ...getThemeConfig(config.theme ?? "light"),
  };
};
