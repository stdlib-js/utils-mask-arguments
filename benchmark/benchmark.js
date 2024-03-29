/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isFunction = require( '@stdlib/assert-is-function' );
var isArray = require( '@stdlib/assert-is-array' );
var pkg = require( './../package.json' ).name;
var maskArguments = require( './../lib' );


// FUNCTIONS //

function foo( a, b ) {
	return [ a, b ];
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var mask;
	var out;
	var tmp;
	var i;

	mask = [ 1, 1, 0 ];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		tmp = mask[ 2 ];
		mask[ 0 ] = mask[ 2 ];
		mask[ 2 ] = tmp;
		out = maskArguments( foo, mask );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::returned_function', function benchmark( b ) {
	var bar;
	var out;
	var i;

	bar = maskArguments( foo, [ 1, 0, 1 ] );
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = bar( i, i+1, i+2 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
