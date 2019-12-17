import React from 'react';
import {theme} from '../../theme';
import {shallow} from 'enzyme';
import {SimpleTheme} from '../../SimpleTheme';
import {defaultTheme, theme1, theme2} from '../../../fixtures';

const additionalThemes = [theme1, theme2];

describe('SimpleTheme', () => {
  describe('constructor', () => {
    const component = new SimpleTheme({defaultTheme, additionalThemes});
    component.constructor({defaultTheme, additionalThemes});

    it("sets the provided themes within SimpleTheme's theme property", () => {
      expect(theme._themes).toEqual({
        [defaultTheme.name]: defaultTheme.styles,
        [theme1.name]: theme1.styles,
        [theme2.name]: theme2.styles,
      });
    });

    it('instantiates state with the proper key', () => {
      expect(component.state.key).toEqual(1);
    });
  });

  describe('lifecycle methods', () => {
    describe('componentDidMount', () => {
      it('should create listener for active theme changes', () => {
        const component = shallow(<SimpleTheme />);
        const spyListener = jest.spyOn(theme, 'addThemeChangeListener');
        const instance = component.instance();
        instance.componentDidMount();

        expect(spyListener).toHaveBeenCalledWith(instance.forceRefresh);
      });
    });

    describe('componentDidUnmount', () => {
      it('should cleanup listener for activeThemeChanges', () => {
        const component = shallow(<SimpleTheme />);
        const spyRemove = jest.spyOn(theme, 'removeThemeChangeListener');
        const instance = component.instance();
        instance.componentWillUnmount();

        expect(spyRemove).toHaveBeenCalled();
      });
    });
  });

  describe('class methods', () => {
    describe('forceRefresh', () => {
      const component = shallow(<SimpleTheme />);
      const instance = component.instance();

      it("increments state.key by 1 each time it's invoked", () => {
        instance.forceRefresh();
        expect(instance.state.key).toBe(2);
      });
    });
  });
});
