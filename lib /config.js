
import {
  error,
  isValidThemeObject,
  warn,
} from './utils'

export class theme {
  static _activeName = ''
  static _defaultName = ''
  static _themeKeys = {}
  static _themes = {}

  static set defaults(def = {}) {
    if (isValidThemeObject(def)) {
      this._activeName = def.name
      this._defaultName = def.name
      this._themeKeys[def.name] = def.name
      this._themes[def.name] = def.styles
    } else {
      error(`defaultTheme property (required) must be an object with 'name' and 'styles' properties`)
    }
  }

  static set additionalThemes(themes) {
    if (themes && themes.length) {
      themes.forEach(t => this.appendTheme(t))
    }
  }

  static get active() {
    return this._themes[this._activeName]
  }

  static setActiveTheme(name) {
    if (!this._themes[name]) {
      warn('setActiveTheme() - no associated style found with provided name')
    } else if (name !== this._activeName && this._themes[name]) {
      this._activeName = name
      this._themeChangeListener()
    }
  }

  static getActiveThemeName() {
    return this._activeName
  }

  static getAllThemes() {
    return this._themes
  }

  static getThemeKeys() {
    return this._themeKeys
  }

  static appendTheme(theme) {
    if (isValidThemeObject(theme)) {
      this._themeKeys[theme.name] = theme.name
      this._themes[theme.name] = theme.styles
    } else {
      error(`One or more 'additionalThemes' missing either a 'name' or 'styles' property`)
    }
  }

  static changeListener(cb) {
    if (cb) {
      this._themeChangeListener = cb
    } else {
      this._themeChangeListener = null
    }
  }
}


// export const theme = {
//   activeName: 'default',
//   defaultName: 'default',
//   themeKeys: {},
//   themes: {},

//   set defaults(def = {}) {
//     if (isValidThemeObject(def)) {
//       this.themeKeys.DEFAULT = def.name
//       this.themes[def.name] = def.styles
//       this.activeTheme = def.styles
//     } else {
//       error(`defaultTheme property (required) must be an object with 'name' and 'styles' properties`)
//     }
//   },

//   set additionalThemes(themes) {
//     if (themes && themes.length) {
//       themes.forEach(t => this.appendTheme(t))
//     }
//   },

//   get activeThemeName() {
//     return this.activeName
//   },

//   get keys() { // TODO:
//     return this.themeKeys
//   },

//   setActiveTheme(name) {
//     if (!this.themes[name]) {
//       warn('setActiveTheme() - no associated style found with provided name')
//     } else if (name !== this.activeName && this.themes[name]) {
//       this.activeName = name
//       this.activeTheme = this.themes[name]
//       this.themeChangeListener()
//     }
//   },

//   getAllThemes() {
//     return this.themes
//   },

//   appendTheme(theme) {
//     if (isValidThemeObject(theme)) {
//       this.themeKeys[theme.name] = theme.name
//       this.themes[theme.name] = theme.styles
//     } else if (!theme.styles) {
//       error(`One or more 'additionalThemes' missing either a 'name' or 'styles' property`)
//     }
//   },

//   changeListener(cb) {
//     if (cb) {
//       this.themeChangeListener = cb
//     } else {
//       this.themeChangeListener = null
//     }
//   },
// }
