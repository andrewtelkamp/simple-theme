import {error, isValidThemeObject, warn} from './utils';

export class theme {
  static _activeName = '';
  static _defaultName = '';
  static _themeKeys = []; // TODO: "themeKeys" deprecated as of v0.8
  static _themeNames = [];
  static _themes = {};
  static _themeChangeLisener = undefined;

  static set defaults(def = {}) {
    if (isValidThemeObject(def)) {
      this._activeName = def.name;
      this._defaultName = def.name;
      this._themeKeys.push(def.name);
      this._themeNames.push(def.name);
      this._themes[def.name] = def.styles;
    } else {
      error(
        'defaultTheme property (required) must be an object with "name" and "styles" properties',
      );
    }
  }

  static set additionalThemes(themes) {
    if (themes && themes.length && themes instanceof Array) {
      themes.forEach(t => this.appendTheme(t));
    }
  }

  static get active() {
    return this._themes[this._activeName];
  }

  static setActiveTheme(name) {
    if (name !== this._activeName && this._themes[name]) {
      this._activeName = name;
      this._themeChangeListener();
    } else {
      warn('setActiveTheme() - no associated style found with provided name');
    }
  }

  static getActiveThemeName() {
    return this._activeName;
  }

  static getAllThemes() {
    return this._themes;
  }

  // TODO: "themeKeys" deprecated as of v0.8
  static getThemeKeys() {
    return this._themeKeys;
  }

  static getThemeNames() {
    return this._themeNames;
  }

  static appendTheme(newTheme) {
    if (isValidThemeObject(newTheme)) {
      this._themeKeys.push(newTheme.name); // TODO: "themeKeys" deprecated as of v0.8
      this._themeNames.push(newTheme.name);
      this._themes[newTheme.name] = newTheme.styles;
    } else {
      warn(
        'One or more "additionalThemes" missing either a "name" or "styles" property',
      );
    }
  }

  static addThemeChangeListener(cb) {
    if (cb) {
      this._themeChangeListener = cb;
    } else {
      error('theme._themeChangeListener callback missing');
    }
  }

  static removeThemeChangeListener() {
    this._themeChangeListener = null;
  }
}
