// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function e(e,s,l){var o,i,c;if(!t(e))throw new TypeError(n("1Vh3c,J9",e));if(!r(s))throw new TypeError(n("1Vh2y,Ix",s));for(i=[],c=0;c<s.length;c++)s[c]&&i.push(c);return o=[function(){return e.call(l)},function(){return e.call(l,arguments[i[0]])},function(){return e.call(l,arguments[i[0]],arguments[i[1]])},function(){return e.call(l,arguments[i[0]],arguments[i[1]],arguments[i[2]])},function(){return e.call(l,arguments[i[0]],arguments[i[1]],arguments[i[2]],arguments[i[3]])},function(){return e.call(l,arguments[i[0]],arguments[i[1]],arguments[i[2]],arguments[i[3]],arguments[i[4]])}],i.length<o.length?o[i.length]:function(){var t,r;for(t=[],r=0;r<arguments.length;r++)t.push(arguments[i[r]]);return e.apply(l,t)}}export{e as default};
//# sourceMappingURL=index.mjs.map