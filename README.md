<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# maskArguments

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function that invokes a provided function according to an argument mask.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import maskArguments from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-mask-arguments@deno/mod.js';
```

#### maskArguments( fcn, mask\[, thisArg] )

Returns a `function` that invokes a provided function according to an argument `mask`.

```javascript
function foo( a, b ) {
    return [ a, b ];
}

var bar = maskArguments( foo, [ 1, 0, 1 ] );

var out = bar( 1, 2, 3 );
// returns [ 1, 3 ]
```

To set the `this` context when invoking the provided function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = maskArguments( foo.scale, [ 1, 0, 1 ], ctx );

var out = bar( 1, 2, 3 );
// returns [ 10, 60 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Only those arguments having a truthy mask value are applied to a provided function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import maskArguments from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-mask-arguments@deno/mod.js';

function fill( i ) {
    return i;
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Create a mask array:
var mask = new Uint8Array( x.length );

// "Unmask" the first element:
mask[ 0 ] = 1;

// Compute the sum of consecutive elements...
var f;
var i;
for ( i = 1; i < x.length; i++ ) {
    // "Unmask" the next element:
    mask[ i ] = 1;

    // Compute the sum:
    f = maskArguments( add, mask );
    console.log( 'sum(x_%d, x_%d) = %d', i-1, i, f.apply( null, x ) );

    // Update the mask:
    mask[ i-1 ] = 0;
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-mask-arguments.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-mask-arguments

[test-image]: https://github.com/stdlib-js/utils-mask-arguments/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-mask-arguments/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-mask-arguments/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-mask-arguments?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-mask-arguments.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-mask-arguments/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-mask-arguments/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-mask-arguments/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-mask-arguments/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-mask-arguments/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-mask-arguments/main/LICENSE

</section>

<!-- /.links -->
