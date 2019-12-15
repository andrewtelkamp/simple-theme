// const config = require('../../config');
import {theme} from '../../theme';
import {error} from '../../utils';

const initValues = {
  activeName: '',
  defaultName: '',
  themeKeys: {},
  themes: {},
};

const firstTheme = {
  name: 'first',
  styles: {
    backgroundColor: 'blue',
  },
};

describe('theme', () => {
  describe('setters', () => {
    describe('defaults', () => {
      describe('if provided an invalid theme', () => {
        theme.defaults = {name: 'invalidTheme'};
        it('does not set activeTheme', () => {
          expect(theme._activeName).toBe(initValues.activeName);
        });

        it('does not set defaultName', () => {
          expect(theme.defaultName).toBe(initValues.defaultName);
        });

        it('does not set themeKeys', () => {
          expect(theme._themeKeys).toEqual(initValues.themeKeys);
        });

        it('does not set themes', () => {
          expect(theme._themes).toEqual(initValues.themes);
        });
      });

      describe('if provided a valid theme', () => {
        theme.defaults = firstTheme;
        it('sets activeTheme', () => {
          expect(theme._activeName).toBe(firstTheme.name);
        });

        it('sets defaultName', () => {
          expect(theme._defaultName).toBe(firstTheme.name);
        });

        it('does not set themeKeys', () => {
          expect(theme._themeKeys).toEqual([firstTheme.name]);
        });

        it('does not set themes', () => {
          expect(theme._themes).toEqual({[firstTheme.name]:{firstTheme}});
        });
      });

    });
  });
});
