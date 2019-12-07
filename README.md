# simple-theme

A lightweight and flexible theming package for your React Native applications. Theme updates are applied without restarting your app. For flexibility-sake, theming structure is left entirely up to you. Simple-Theme simply tracks your active theme and provides the means to update said theme at any given time.


## Installation

```npm install simple-theme``` or ```yarn add simple-theme```

## Docs

[`<SimpleTheme />` Component API](docs/SimpleTheme.md)
[`theme` API](docs/theme.md)


## Setup And Usage

### SimpleTheme

```js import { SimpleTheme } from 'simple-theme'```

**`App.js`**

```jsx
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

### theme

**Button.styles.js**

```js import theme from 'simple-theme'```

```jsx
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

The active style object is accessible via the `active` property of SimpleTheme's theme object. Styles will need to function as they'll need to update 



**Button.js**

```jsx
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from 'react-native-simple-theme';

export const Button = ({onPress, title}) => {
  const styles = themedStyles();

  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
};
```

Because styles will have to be updated via when a theme change forces a re-render, `const styles = themedStyles()` will have to be define






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

