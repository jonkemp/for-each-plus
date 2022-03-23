# for-each-plus ![Build Status](https://github.com/jonkemp/for-each-plus/actions/workflows/main.yml/badge.svg?branch=master)

> A better forEach.

Iterates over a list of elements, yielding each in turn to an iteratee function.

Inspired by `_.forEach`. 😄


## Install

Install with [npm](https://npmjs.org/package/for-each-plus)

```
$ npm install for-each-plus
```

Or [unpkg](https://unpkg.com/for-each-plus/)

```
<script src="https://unpkg.com/for-each-plus@1.0.6/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/jOPebYO).

## Usage

Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: `(element, index, list)`. If list is a JavaScript object, iteratee's arguments will be `(value, key, list)`. Returns the list for chaining.

```js
const forEach = require('for-each-plus');

forEach([1, 2], value => console.log(value));
// => Logs `1` then `2`.
 
forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key));
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/for-each-plus)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/for-each-plus) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### forEach(list, iteratee, [context])

#### list

Type: `array` or `object`  
Default: `none`

The collection of elements to iterate over.

#### iteratee

Type: `function`  
Default: `none`

Function to apply.

## License

MIT
