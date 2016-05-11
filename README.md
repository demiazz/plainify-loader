# plainify-loader

Convert JSON to plain object.

<a href="https://evilmartians.com/?utm_source=postcss">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Why?

Plugin developed for usage with `react-intl` which can use only
plain objects as messages object.

But I like structure used in `counterpart.js` or `Rails I18n`, where locales
represents as nested object, but ids used by library for traversing over
the locales.

## Example

### in

```json
{
  "key": "value",
  "nested": {
    "other_key": "other_value"
  }
}
```

### out

```json
{
  "key": "value",
  "nested.other_key": "other_value"
}
```

## Installation

```sh
npm install plainify-loader
```

## Usage

```js
var json = require('json!plainify!./file.json');
// => returns file.json content as JSON parsed and plainified object
```

or you can use it with `yaml-loader`

```js
var json = require('json!plainify!yaml!./file.yml')
// => returns file.yml content as YAML parsed and plainified object
```
