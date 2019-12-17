# theme


## Properties

| Property | Note |
|---|---|
| `active` | the active theme object


## Methods

| Method Name | Arguments | Returns | Note |
|---|---|---|--|
| `setActiveTheme` | `name: String` | | sets the active theme |
| `getActiveThemeName` | | the active theme name | |
| `getAllThemes` | | all theme objects | | 
| `getThemeKeys` _(deprecated)_ | | all theme keys (names) | **Deprecated**. use `getThemeNames` instead |
| `getThemeNames` | | all theme names | |


```js
type themeShape = {
  name: String,
  styles: Object,
}
```

[One example themes structure can be found here](exampleThemes.md). Feel free to build your styles object structures however you desire.
