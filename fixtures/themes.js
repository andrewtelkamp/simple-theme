export const initValues = {
  activeName: '',
  defaultName: '',
  themeKeys: [],
  themeNames: [],
  themes: {},
};

export const defaultTheme = {
  name: 'default',
  styles: {
    backgroundColor: 'blue',
  },
};

export const theme1 = {
  name: 'theme1',
  styles: {
    backgroundColor: 'green',
  },
};

export const theme2 = {
  name: 'theme2',
  styles: {
    backgroundColor: 'orange',
  },
};

export const themeMissingName = {
  styles: {
    backgroundColor: 'purple',
  },
};

export const themeMissingStyles = {name: 'missingStyles'};

export const additionalThemes = [theme1, theme2];
