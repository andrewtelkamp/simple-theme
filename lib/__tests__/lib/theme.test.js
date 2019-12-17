import {theme} from '../../theme';
import {
  initValues,
  defaultTheme,
  theme1,
  theme2,
  themeMissingName,
  themeMissingStyles,
} from '../../../fixtures';

const spyAppendTheme = jest.spyOn(theme, 'appendTheme');

beforeEach(() => {
  theme._activeName = '';
  theme._defaultName = '';
  theme._themeKeys = [];
  theme._themeNames = [];
  theme._themes = {};
  theme._themeChangeListener = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('theme', () => {
  describe('setters', () => {
    describe('defaults', () => {
      describe('if provided a theme missing a "styles" property', () => {
        theme.defaults = themeMissingStyles;

        it('does not set activeTheme', () => {
          expect(theme._activeName).toBe(initValues.activeName);
        });

        it('does not set defaultName', () => {
          expect(theme._defaultName).toBe(initValues.defaultName);
        });

        // TODO: Deprecated as of v0.8
        it('does not set themeKeys', () => {
          expect(theme._themeKeys).toEqual(initValues.themeKeys);
        });

        it('does not set themeNames', () => {
          expect(theme._themeNames).toEqual(initValues.themeNames);
        });

        it('does not set themes', () => {
          expect(theme._themes).toEqual(initValues.themes);
        });
      });

      describe('if provided a theme missing a "name" property', () => {
        it('does not set activeTheme', () => {
          expect(theme._activeName).toBe(initValues.activeName);
        });

        it('does not set defaultName', () => {
          expect(theme._defaultName).toBe(initValues.defaultName);
        });

        // TODO: Deprecated as of v0.8
        it('does not set themeKeys', () => {
          expect(theme._themeKeys).toEqual(initValues.themeKeys);
        });

        it('does not set themeNames', () => {
          expect(theme._themeNames).toEqual(initValues.themeNames);
        });

        it('does not set themes', () => {
          expect(theme._themes).toEqual(initValues.themes);
        });
      });

      describe('if provided a valid theme', () => {
        it('sets the proper corresponding default values', () => {
          theme.defaults = defaultTheme;

          expect(theme._activeName).toBe(defaultTheme.name);
          expect(theme._defaultName).toBe(defaultTheme.name);
          expect(theme._themeKeys).toEqual([defaultTheme.name]); // TODO: Deprecated as of v0.8
          expect(theme._themeNames).toEqual([defaultTheme.name]);
          expect(theme._themes).toEqual({
            [defaultTheme.name]: defaultTheme.styles,
          });
        });
      });
    });

    describe('set additionalThemes', () => {
      describe('if additionalThemes is an array with length', () => {
        it('calls appendTheme the appropriate number of times with the proper args', () => {
          theme.additionalThemes = [theme1, theme2];

          expect(spyAppendTheme).toHaveBeenCalledTimes(2);
          expect(spyAppendTheme).toHaveBeenCalledWith(theme1);
          expect(spyAppendTheme).toHaveBeenCalledWith(theme2);
        });
      });

      describe('if provided invalid args', () => {
        it('is not called if passed an empty array', () => {
          theme.additionalThemes = [];
          expect(spyAppendTheme).not.toHaveBeenCalled();
        });

        it('is not called if passed an empty object', () => {
          theme.additionalThemes = {};
          expect(spyAppendTheme).not.toHaveBeenCalled();
        });

        it('is not called if passed a valid string', () => {
          theme.additionalThemes = 'test';
          expect(spyAppendTheme).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('getters', () => {
    describe('active', () => {
      it('returns the active theme if set', () => {
        theme.defaults = defaultTheme;
        expect(theme.active).toBe(defaultTheme.styles);
      });

      it('does not return active theme if not set', () => {
        theme.defaults = [];
        expect(theme.active).toBe(undefined);
      });
    });
  });

  describe('class methods', () => {
    describe('setActiveTheme', () => {
      it('does not set ._activeName or invoke changeListener() if provided name does not exist on .themes object', () => {
        theme.defaults = defaultTheme;
        theme.setActiveTheme(theme1.name);

        expect(theme._activeName).toEqual(defaultTheme.name);
        expect(theme._themeChangeListener).not.toHaveBeenCalled();
      });

      it('does not set ._activeName or invoke changeListener() if provided name matches current ._activeName', () => {
        theme.defaults = defaultTheme;
        theme.setActiveTheme(defaultTheme.name);

        expect(theme._activeName).toEqual(defaultTheme.name);
        expect(theme._themeChangeListener).not.toHaveBeenCalled();
      });

      it('sets ._activeName and invokes .changeListener() if provided name exists on .themes object', () => {
        theme.defaults = defaultTheme;
        theme.appendTheme(theme1);
        theme.setActiveTheme(theme1.name);

        expect(theme._activeName).toEqual(theme1.name);
        expect(theme._themeChangeListener).toHaveBeenCalledTimes(1);
      });
    });

    describe('getActiveThemeName', () => {
      it('returns initial value if ._activeName has not yet been defined', () => {
        expect(theme.getActiveThemeName()).toEqual(initValues.activeName);
      });

      it('returns the name if ._activeName exists', () => {
        theme._activeName = 'grapefruit';
        expect(theme.getActiveThemeName()).toEqual('grapefruit');
      });
    });

    // Deprecated as of v0.8
    describe('getThemeKeys', () => {
      it('returns initial value if ._themeKeys has not yet been defined', () => {
        expect(theme.getThemeKeys()).toEqual(initValues.themeKeys);
      });

      it('returns keys if ._themeKeys exist', () => {
        const testKeys = ['key1', 'key2', 'key3'];
        theme._themeKeys = testKeys;
        expect(theme.getThemeKeys()).toEqual(testKeys);
      });
    });

    describe('getThemeNames', () => {
      it('returns initial value if ._themeKeys has not yet been defined', () => {
        expect(theme.getThemeNames()).toEqual(initValues.themeNames);
      });

      it('returns keys if ._themeKeys exist', () => {
        const testNames = ['name1', 'name2', 'name3'];
        theme._themeNames = testNames;
        expect(theme.getThemeNames()).toEqual(testNames);
      });
    });

    describe('appendTheme', () => {
      it('will not append a theme if an object missing name property', () => {
        theme.appendTheme(themeMissingName);
        expect(theme._themes).toEqual(initValues.themes);
      });

      it('will not append a theme if provided object missing styles property', () => {
        theme.appendTheme(themeMissingStyles);
        expect(theme._themes).toEqual(initValues.themes);
      });

      it('will append a theme if object is of the proper object shape', () => {
        theme.appendTheme(theme1);
        expect(theme._themes[theme1.name]).toEqual(theme1.styles);
      });
    });
  });

  describe('listeners', () => {
    describe('addThemeChangeListener', () => {
      it('will set the provided function as the callback for theme changes', () => {
        const testVal = 'test function';
        theme.addThemeChangeListener(testVal);
        expect(theme._themeChangeListener).toBe(testVal);
      });
    });

    describe('removeThemeChangeListener', () => {
      it('removes and cleans up active listeners', () => {
        theme._themeChangeListener = 'function to remove';
        theme.removeThemeChangeListener();

        expect(theme._themeChangeListener).toBe(null);
      });
    });
  });
});
