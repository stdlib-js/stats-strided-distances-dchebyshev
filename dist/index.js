"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=y(function(F,x){
var d=require('@stdlib/math-base-special-abs/dist');function E(e,r,a,n,i,s,o){var t,v,u,q,c;if(e<=0)return NaN;for(v=n,u=o,t=d(r[v]-i[u]),v+=a,u+=s,q=1;q<e;q++)c=d(r[v]-i[u]),c>t&&(t=c),v+=a,u+=s;return t}x.exports=E
});var m=y(function(G,p){
var b=require('@stdlib/strided-base-stride2offset/dist'),O=f();function g(e,r,a,n,i){var s=b(e,a),o=b(e,i);return O(e,r,a,s,n,i,o)}p.exports=g
});var R=y(function(H,l){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),w=f();k(j,"ndarray",w);l.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),h,_=A(z(__dirname,"./native.js"));B(_)?h=C:h=_;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
