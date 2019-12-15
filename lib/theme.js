import {error, isValidThemeObject, warn} from './utils';

export class theme {
  static _activeName = '';
  static _defaultName = '';
  static _themeKeys = {};
  static _themes = {};

  static set defaults(def = {}) {
    if (isValidThemeObject(def)) {
      this._activeName = def.name;
      this._defaultName = def.name;
      this._themeKeys[def.name] = def.name;
      this._themes[def.name] = def.styles;
    } else {
      error(
        'defaultTheme property (required) must be an object with "name" and "styles" properties',
      );
    }
  }

  static set additionalThemes(themes) {
    if (themes && themes.length) {
      themes.forEach(t => this.appendTheme(t));
    }
  }

  static get() {
    return this._themes[this._activeName];
  }

  static get active() {
    return this._themes[this._activeName];
  }

  static setActiveTheme(name) {
    if (!this._themes[name]) {
      warn('setActiveTheme() - no associated style found with provided name');
    } else if (name !== this._activeName && this._themes[name]) {
      this._activeName = name;
      this._themeChangeListener();
    }
  }

  static getActiveThemeName() {
    return this._activeName;
  }

  static getAllThemes() {
    return this._themes;
  }

  static getThemeKeys() {
    return this._themeKeys;
  }

  static appendTheme(newTheme) {
    if (isValidThemeObject(newTheme)) {
      this._themeKeys[newTheme.name] = newTheme.name;
      this._themes[newTheme.name] = newTheme.styles;
    } else {
      error(
        'One or more "additionalThemes" missing either a "name" or "styles" property',
      );
    }
  }

  static changeListener(cb) {
    if (cb) {
      this._themeChangeListener = cb;
    } else {
      this._themeChangeListener = null;
    }
  }
}
