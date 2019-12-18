
# Example Themes

While not required, it's recommended to use a model to protect your
theme names across multiple use cases.

## themesConfig.js

```js
export const THEME_NAMES = {
  DARK: 'dark',
  GRAY: 'gray',
  STANDARD: 'standard',
  PASTEL: 'pastel',
}

export const COLORS = {
  BLACK: '#000',
  DARK_GRAY: '#ccc',
  GRAY: '#222',
  PURPLE: '#5959ff',
  RED: '#f76c5e',
  WHITE: '#fff',
  YELLOW: '#f5dd90',
}

export const baseStyles = {
    borders: {
      button: 0,
    },
    colors: {
      background: {
        button: COLORS.PURPLE,
        screen: COLORS.WHITE,
      },
      text: {
        default: COLORS.BLACK,
        button: COLORS.WHITE,
      },
    },
    fontSizes: {
      button: 16,
      title: 30,
    },
    fontStyles: {
      button: 'normal',
      title: 'normal',
    },
    fontWeights: {
      button: '400',
      title: '800'
    }
}
```


## standardTheme.js

```js
import { baseStyles, COLORS, THEME_NAMES } from './themesConfig'

export const standardTheme = {
  name: THEME_NAMES.STANDARD,
  styles: { ...baseStyles },
}
```


## darkTheme.js

```js
import { baseStyles, COLORS, THEME_NAMES } from './themesConfig'

export const darkTheme = {
  name: THEME_NAMES.DARK,
  styles: {
    ...baseStyles,
    colors: {
      background: {
        ...baseStyles.colors.background,
        screen: COLORS.BLACK,
      },
      text: {
        ...baseStyles.colors.text,
        default: COLORS.WHITE,
      },
    },
  },
}
```


## grayTheme.js

```js
import { baseStyles, COLORS, THEME_NAMES } from './themesConfig'


export const grayTheme = {
  name: THEME_NAMES.GRAY,
  styles: {
    ...baseStyles,
    borders: {
      button: 8,
    },
    colors: {
      background: {
        button: COLORS.GRAY,
        screen: COLORS.DARK_GRAY,
      },
      text: {
        default: COLORS.GRAY,
        button: COLORS.DARK_GRAY,
      },
    },
    fontSizes: {
      button: 12,
      title: 18,
    },
    fontWeights: {
      button: '800',
      title: '300'
    }
  },
}

```


## PastelTheme.js

```js
import { baseStyles, COLORS, THEME_NAMES } from './themesConfig'

export const pastelTheme = {
  name: THEME_NAMES.PASTEL,
  styles: {
    ...baseStyles,
    borders: {
      button: 25,
    },
    colors: {
      background: {
        button: COLORS.YELLOW,
        screen: COLORS.RED,
      },
      text: {
        default: COLORS.WHITE,
        button: COLORS.PURPLE,
      },
    },
    fontSizes: {
      button: 12,
      title: 23,
    },
    fontStyles: {
      button: 'italic',
      title: 'italic',
    },
    fontWeights: {
      button: '500',
      title: '700'
    }
  },
}
```