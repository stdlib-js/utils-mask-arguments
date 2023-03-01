/*
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Collection } from '@stdlib/types/object';

/**
* Returns a function that applies arguments to a provided function according to a specified mask.
*
* ## Notes
*
* -   Only those arguments having a truthy mask value are applied to a provided function.
*
* @param fcn - input function
* @param mask - argument mask
* @param thisArg - function context
* @returns function wrapper
*
* @example
* function foo( a, b ) {
*     return [ a, b ];
* }
*
* var bar = maskArguments( foo, [ 1, 0, 1 ] );
*
* var out = bar( 1, 2, 3 );
* // returns [ 1, 3 ]
*/
declare function maskArguments( fcn: Function, mask: Collection, thisArg?: any ): Function; // tslint-disable-line max-line-length


// EXPORTS //

export = maskArguments;