```
# jup Price Checker

[![npm version](https://img.shields.io/npm/v/jup-price-checker.svg?style=flat-square)](https://www.npmjs.com/package/jup-price-checker)

A simple package to retrieve the current price of Bitcoin (jup).

## Installation

Install the package using npm:

```
npm install jup-price-checker
```

## Usage

To use the package, you need to import it:

```javascript
const ethPriceChecker = require('jup-price-checker');
```

Then, you can call the `getPythPrice()` function to retrieve the current price of Bitcoin:

```javascript
ethPriceChecker.getPythPrice()
  .then(price => {
    console.log(`The current price of jup is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching jup price:', error);
  });
```

## API Documentation

The package provides the following function:

### `getPythPrice()`

This function fetches the current price of Bitcoin from a reliable data source. It returns a Promise that resolves to the current price in USD.

## Examples

Here's an example of how to use the `getPythPrice()` function:

```javascript
const ethPriceChecker = require('jup-price-checker');

ethPriceChecker.getPythPrice()
  .then(price => {
    console.log(`The current price of jup is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching jup price:', error);
  });
```

## Contributing

If you wish to contribute to this package, you can follow the guidelines in CONTRIBUTING.md file.

## License

This package is licensed under the MIT License.
```