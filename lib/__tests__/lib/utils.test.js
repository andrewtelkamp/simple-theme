import {isValidThemeObject} from '../../utils';
import {
  themeMissingName,
  themeMissingStyles,
  defaultTheme,
} from '../../../fixtures';

describe('utils', () => {
  describe('isValidThemeObject', () => {
    it('returns false if passed a string', () => {
      const result = isValidThemeObject('test string');
      expect(result).toBe(false);
    });

    it('returns false if passed an empty object', () => {
      const result = isValidThemeObject({});
      expect(result).toBe(false);
    });

    it('returns false if passed an array', () => {
      const result = isValidThemeObject([]);
      expect(result).toBe(false);
    });

    it('returns false if theme object missing name property', () => {
      const result = isValidThemeObject(themeMissingName);
      expect(result).toBe(false);
    });

    it('returns false if theme object missing styles property', () => {
      const result = isValidThemeObject(themeMissingStyles);
      expect(result).toBe(false);
    });

    it('returns true if provided a valid theme object', () => {
      const result = isValidThemeObject(defaultTheme);
      expect(result).toBe(true);
    });
  });
});
