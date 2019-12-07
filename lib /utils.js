
export const error = message => console.error(`SimpleTheme: ${message}`)

export const isValidThemeObject = val => typeof(val) === 'object' 
  && val.hasOwnProperty('name') && val.hasOwnProperty('styles')

export const warn = message => console.warn(`SimpleTheme: ${message}`)
