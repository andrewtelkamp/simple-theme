# simple-theme

A lightweight and flexible theming package for your React Native applications. Theme updates are applied without restarting your app. For flexibility-sake, theming structure is left entirely up to you. Simple-Theme simply tracks your active theme and provides a means to update said active theme from anywhere at any given time.

![](https://gph.is/g/ajjbWG8)


## Installation

```npm install simple-theme``` or ```yarn add simple-theme```


# Docs

[`<SimpleTheme />` Component API](docs/SimpleTheme.md)
[`theme` API](docs/theme.md)



# Structuring Your Themes

Simple-Theme accepts your theming structure as is, and returns only the theme object which is active. This provides flexibility for each unique use-case. Be warned, at this time, because of this flexibility, simple-theme expects all provided objects to utilize identical shapes. As of this time, SimpleTheme also provides no means of protecting against an undefined style properties. While it's encouraged you use a structure fitting for yourself, provided [here](docs/exampleThemes) is an example of one possible approach.


# Setup & Usage

## SimpleTheme

```js import { SimpleTheme } from 'simple-theme'```

### App.js

```jsx
import React from 'react'
import AppMain from './AppMain'
import SimpleTheme from 'react-native-simple-theme'
import {
  darkTheme,
  grayTheme,
  pastelTheme,
  standardTheme,
} from './themes'

export const App = () => {
  return (
    <SimpleTheme
      additionalThemes={[darkTheme, grayTheme, pastelTheme]}
      defaultTheme={standardTheme}>
      <AppMain />
    </SimpleTheme>
  );
};
```

Wrap your app root with the ```<SimpleTheme />``` component. SimpleTheme handles the app's initial themes setup as well as refreshing of your app with theme updates. Provide your default theme object, as well additional theme objects for any additional themes you will offer.


## Consuming The Theme

### Button.styles.js

```js import theme from 'simple-theme'```

```jsx
import theme from 'simple-theme'

const themedStyles = () => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.active.colors.background.button,
    borderRadius: theme.active.borders.button,
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%',
  },
  text: {
    color: theme.active.colors.text.button,
    fontSize: theme.active.fontSizes.button,
    fontStyle: theme.active.fontStyles.button,
    fontWeight: theme.active.fontWeights.button,
  },
});
```

The active style object is accessible via the `active` property of SimpleTheme's theme object. Styles will need to be written as a function.
Unlike Context, the style property is imported directly into your style file. This keep your components clean as they don't have to know anything
about your style, and a change in a theming aside from an active style will never trigger a re-render.

### Button.js

```jsx
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';


export const Button = ({onPress, title}) => {
  const styles = themedStyles();

  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
};
```

Because styles will have to be updated via a theme change, `const styles = themedStyles()` or whatever you have decided to name your style function will need to be defined within either your functional component or your classes `render()` method.


## Toggling/Updating The Active Theme

To change the active theme, call theme's setActiveTheme method with the name of the theme being set.

```js
import React from 'react'
import { View } from 'react-native'
import { theme } from 'react-native-simple-theme'
import { THEME_NAMES } from './models'
import { Button } from './Button'

export default AppMain = () => {
  return (
    <View>
      <Button
        title="Default Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.STANDARD) }
      />

      <Button
        title="Dark Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.DARK) }
      />

      <Button
        title="Gray Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.GRAY) }
      />

      <Button
        title="Pastel Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.PASTEL) }
      />
    </View>
  )
}
```

## Authors

* Andrew Telkamp - @andrewtelkamp


## Contributing

Pull Requests are welcome







License
--------

Copyright (c) 2019 Andrew Telkamp

Licensed under the The MIT License (MIT) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

https://raw.githubusercontent.com/airbnb/react-native-maps/master/LICENSE

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

