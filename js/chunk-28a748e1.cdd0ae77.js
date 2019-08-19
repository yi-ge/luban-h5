(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a748e1"],{"0196":function(t,e,r){var n=r("5a88"),o=r("bbf0");function i(t){this.mode=o.BYTE,this.data=new n(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},"0425":function(t,e){var r="[0-9]+",n="[A-Z $%*+\\-./:]+",o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");var i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(r,"g"),e.ALPHANUMERIC=new RegExp(n,"g");var a=new RegExp("^"+o+"$"),u=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return a.test(t)},e.testNumeric=function(t){return u.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},"10b0":function(t,e,r){"use strict";var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a,u,s,f,c,l,h,d,g,p=n.PriorityQueue.make();p.push(e,0);while(!p.empty())for(s in a=p.pop(),u=a.value,f=a.cost,c=t[u]||{},c)c.hasOwnProperty(s)&&(l=c[s],h=f+l,d=i[s],g="undefined"===typeof i[s],(g||d>h)&&(i[s]=h,p.push(s,h),o[s]=u));if("undefined"!==typeof r&&"undefined"===typeof i[r]){var v=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(v)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var r=[],n=e;while(n)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},2732:function(t,e,r){var n=r("5a88"),o=r("699e");e.mul=function(t,e){var r=new n(t.length+e.length-1);r.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<e.length;a++)r[i+a]^=o.mul(t[i],e[a]);return r},e.mod=function(t,e){var r=new n(t);while(r.length-e.length>=0){for(var i=r[0],a=0;a<e.length;a++)r[a]^=o.mul(e[a],i);var u=0;while(u<r.length&&0===r[u])u++;r=r.slice(u)}return r},e.generateECPolynomial=function(t){for(var r=new n([1]),i=0;i<t;i++)r=e.mul(r,[1,o.exp(i)]);return r}},"27a3":function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},"2f3a":function(t,e,r){var n=r("bbf0"),o=r("7bf0");function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},"34fc":function(t,e,r){var n=r("7a43"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},4006:function(t,e,r){var n=r("45be");function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return"undefined"!==typeof r&&(n+=" "+r),n}function a(t,e,r){for(var n="",o=0,a=!1,u=0,s=0;s<t.length;s++){var f=Math.floor(s%e),c=Math.floor(s/e);f||a||(a=!0),t[s]?(u++,s>0&&f>0&&t[s-1]||(n+=a?i("M",f+r,.5+c+r):i("m",o,0),o=0,a=!1),f+1<e&&t[s+1]||(n+=i("h",u),u=0)):o++}return n}e.render=function(t,e,r){var i=n.getOptions(e),u=t.modules.size,s=t.modules.data,f=u+2*i.margin,c=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",l="<path "+o(i.color.dark,"stroke")+' d="'+a(s,u,i.margin)+'"/>',h='viewBox="0 0 '+f+" "+f+'"',d=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+d+h+' shape-rendering="crispEdges">'+c+l+"</svg>\n";return"function"===typeof r&&r(null,g),g}},4146:function(t,e,r){var n=r("45be");function o(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,r){var a=r,u=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(u=i()),a=n.getOptions(a);var s=n.getImageWidth(t.modules.size,a),f=u.getContext("2d"),c=f.createImageData(s,s);return n.qrToImageData(c.data,t,a),o(f,u,s),f.putImageData(c,0,0),u},e.renderToDataURL=function(t,r,n){var o=n;"undefined"!==typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}},"45be":function(t,e){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var l=0;l<u;l++){var h=4*(c*u+l),d=n.color.light;if(c>=s&&l>=s&&c<u-s&&l<u-s){var g=Math.floor((c-s)/a),p=Math.floor((l-s)/a);d=f[i[g*o+p]?1:0]}t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},"577e":function(t,e,r){var n=r("5a88");function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new n(t*t),this.data.fill(0),this.reservedBit=new n(t*t),this.reservedBit.fill(0)}o.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,e){return this.data[t*this.size+e]},o.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=o},"5a88":function(t,e,r){"use strict";var n=r("eee5");function o(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(e){return!1}}a.TYPED_ARRAY_SUPPORT=o();var i=a.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function a(t,e,r){return a.TYPED_ARRAY_SUPPORT||this instanceof a?"number"===typeof t?c(this,t):m(this,t,e,r):new a(t,e,r)}function u(t){if(t>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return 0|t}function s(t){return t!==t}function f(t,e){var r;return a.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e),r.__proto__=a.prototype):(r=t,null===r&&(r=new a(e)),r.length=e),r}function c(t,e){var r=f(t,e<0?0:0|u(e));if(!a.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)r[n]=0;return r}function l(t,e){var r=0|v(e),n=f(t,r),o=n.write(e);return o!==r&&(n=n.slice(0,o)),n}function h(t,e){for(var r=e.length<0?0:0|u(e.length),n=f(t,r),o=0;o<r;o+=1)n[o]=255&e[o];return n}function d(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),a.TYPED_ARRAY_SUPPORT?o.__proto__=a.prototype:o=h(t,o),o}function g(t,e){if(a.isBuffer(e)){var r=0|u(e.length),n=f(t,r);return 0===n.length?n:(e.copy(n,0,0,r),n)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||s(e.length)?f(t,0):h(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function v(t){if(a.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var e=t.length;return 0===e?0:p(t).length}function w(t,e,r,n){for(var o=0;o<n;++o){if(o+r>=e.length||o>=t.length)break;e[o+r]=t[o]}return o}function y(t,e,r,n){return w(p(e,t.length-r),t,r,n)}function m(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?d(t,e,r,n):"string"===typeof e?l(t,e,r):g(t,e)}a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),a.prototype.write=function(t,e,r){void 0===e?(r=this.length,e=0):void 0===r&&"string"===typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return y(this,t,e,r)},a.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t),a.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=a.prototype;else{var o=e-t;r=new a(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},a.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!a.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},a.prototype.fill=function(t,e,r){if("string"===typeof t){if("string"===typeof e?(e=0,r=this.length):"string"===typeof r&&(r=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var i=a.isBuffer(t)?t:new a(t),u=i.length;for(o=0;o<r-e;++o)this[o+e]=i[o%u]}return this},a.concat=function(t,e){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=c(null,e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!a.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(o,i),i+=u.length}return o},a.byteLength=v,a.prototype._isBuffer=!0,a.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports=a},"67dd":function(t,e){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},"699e":function(t,e,r){var n,o,i=r("5a88");i.alloc?(n=i.alloc(512),o=i.alloc(256)):(n=new i(512),o=new i(256)),function(){for(var t=1,e=0;e<255;e++)n[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(e=255;e<512;e++)n[e]=n[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[o[t]+o[e]]}},"78c4":function(t,e,r){"use strict";var n=r("e6c4"),o=r.n(n);o.a},7903:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r={N1:3,N2:3,N3:40,N4:10};function n(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=c,o=1),c=t.get(f,s),c===u?i++:(i>=5&&(n+=r.N1+(i-5)),u=c,i=1)}o>=5&&(n+=r.N1+(o-5)),i>=5&&(n+=r.N1+(i-5))}return n},e.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r.N2},e.getPenaltyN3=function(t){for(var e=t.size,n=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&n++}return n*r.N3},e.getPenaltyN4=function(t){for(var e=0,n=t.data.length,o=0;o<n;o++)e+=t.data[o];var i=Math.abs(Math.ceil(100*e/n/5)-10);return i*r.N4},e.applyMask=function(t,e){for(var r=e.size,o=0;o<r;o++)for(var i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,n(t,i,o))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}},"7a43":function(t,e){function r(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch(o){return n}}},"7ba0":function(t,e){function r(){this.buffer=[],this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1===(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},"7bf0":function(t,e){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){var e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof r},e.toSJIS=function(t){return r(t)}},"8d23":function(t,e,r){var n=r("5a88"),o=r("2732");function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new n(this.degree);e.fill(0);var r=n.concat([t,e],t.length+this.degree),i=o.mod(r,this.genPoly),a=this.degree-i.length;if(a>0){var u=new n(this.degree);return u.fill(0),i.copy(u,a),u}return i},t.exports=i},"924f":function(t,e,r){var n=r("7bf0").getSymbolSize,o=7;e.getPositions=function(t){var e=n(t);return[[0,0],[e-o,0],[0,e-o]]}},9582:function(t,e,r){var n=r("7bf0"),o=1335,i=21522,a=n.getBCHDigit(o);e.getEncodedBits=function(t,e){var r=t.bit<<3|e,u=r<<10;while(n.getBCHDigit(u)-a>=0)u^=o<<n.getBCHDigit(u)-a;return(r<<10|u)^i}},"9d94":function(t,e,r){var n=r("bbf0"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},aa63:function(t,e,r){var n=r("5a88"),o=r("7bf0"),i=r("7a43"),a=r("7ba0"),u=r("577e"),s=r("d6c0"),f=r("924f"),c=r("7903"),l=r("34fc"),h=r("8d23"),d=r("c8aa"),g=r("9582"),p=r("bbf0"),v=r("befa"),w=r("eee5");function y(t,e){for(var r=t.size,n=f.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}function m(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function b(t,e){for(var r=s.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}function E(t,e){for(var r,n,o,i=t.size,a=d.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1===(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}function A(t,e,r){var n,o,i=t.size,a=g.getEncodedBits(e,r);for(n=0;n<15;n++)o=1===(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function B(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2){6===u&&u--;while(1){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1===(e[a]>>>i&1)),t.set(o,u-s,f),i--,-1===i&&(a++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}}function R(t,e,r){var n=new a;r.forEach(function(e){n.put(e.mode.bit,4),n.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(n)});var i=o.getSymbolTotalCodewords(t),u=l.getTotalCodewordsCount(t,e),s=8*(i-u);n.getLengthInBits()+4<=s&&n.put(0,4);while(n.getLengthInBits()%8!==0)n.putBit(0);for(var f=(s-n.getLengthInBits())/8,c=0;c<f;c++)n.put(c%2?17:236,8);return P(n,t,e)}function P(t,e,r){for(var i=o.getSymbolTotalCodewords(e),a=l.getTotalCodewordsCount(e,r),u=i-a,s=l.getBlocksCount(e,r),f=i%s,c=s-f,d=Math.floor(i/s),g=Math.floor(u/s),p=g+1,v=d-g,w=new h(v),y=0,m=new Array(s),b=new Array(s),E=0,A=new n(t.buffer),B=0;B<s;B++){var R=B<c?g:p;m[B]=A.slice(y,y+R),b[B]=w.encode(m[B]),y+=R,E=Math.max(E,R)}var P,T,C=new n(i),N=0;for(P=0;P<E;P++)for(T=0;T<s;T++)P<m[T].length&&(C[N++]=m[T][P]);for(P=0;P<v;P++)for(T=0;T<s;T++)C[N++]=b[T][P];return C}function T(t,e,r,n){var i;if(w(t))i=v.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");var a=e;if(!a){var s=v.rawSplit(t);a=d.getBestVersionForData(s,r)}i=v.fromString(t,a||40)}var f=d.getBestVersionForData(i,r);if(!f)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<f)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+f+".\n")}else e=f;var l=R(e,r,i),h=o.getSymbolSize(e),g=new u(h);return y(g,e),m(g),b(g,e),A(g,r,0),e>=7&&E(g,e),B(g,l),isNaN(n)&&(n=c.getBestMask(g,A.bind(null,g,r))),c.applyMask(n,g),A(g,r,n),{modules:g,version:e,errorCorrectionLevel:r,maskPattern:n,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");var r,n,a=i.M;return"undefined"!==typeof e&&(a=i.from(e.errorCorrectionLevel,i.M),r=d.from(e.version),n=c.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),T(t,r,a,n)}},bbf0:function(t,e,r){var n=r("27a3"),o=r("0425");function i(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return i(t)}catch(n){return r}}},befa:function(t,e,r){var n=r("bbf0"),o=r("dd7e"),i=r("9d94"),a=r("0196"),u=r("2f3a"),s=r("0425"),f=r("7bf0"),c=r("10b0");function l(t){return unescape(encodeURIComponent(t)).length}function h(t,e,r){var n,o=[];while(null!==(n=t.exec(r)))o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function d(t){var e,r,o=h(s.NUMERIC,n.NUMERIC,t),i=h(s.ALPHANUMERIC,n.ALPHANUMERIC,t);f.isKanjiModeEnabled()?(e=h(s.BYTE,n.BYTE,t),r=h(s.KANJI,n.KANJI,t)):(e=h(s.BYTE_KANJI,n.BYTE,t),r=[]);var a=o.concat(i,e,r);return a.sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return u.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t){return t.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function v(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:l(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:l(o.data)}])}}return e}function w(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var c=u[f],l=""+a+f;s.push(l),r[l]={node:c,lastCount:0},o[l]={};for(var h=0;h<i.length;h++){var d=i[h];r[d]&&r[d].node.mode===c.mode?(o[d][l]=g(r[d].lastCount+c.length,c.mode)-g(r[d].lastCount,c.mode),r[d].lastCount+=c.length):(r[d]&&(r[d].lastCount=c.length),o[d][l]=g(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,e))}}i=s}for(h=0;h<i.length;h++)o[i[h]]["end"]=0;return{map:o,table:r}}function y(t,e){var r,s=n.getBestModeForData(t);if(r=n.from(e,s),r!==n.BYTE&&r.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(s));switch(r!==n.KANJI||f.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new u(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"===typeof e?t.push(y(e,null)):e.data&&t.push(y(e.data,e.mode)),t},[])},e.fromString=function(t,r){for(var n=d(t,f.isKanjiModeEnabled()),o=v(n),i=w(o,r),a=c.find_path(i.map,"start","end"),u=[],s=1;s<a.length-1;s++)u.push(i.table[a[s]].node);return e.fromArray(p(u))},e.rawSplit=function(t){return e.fromArray(d(t,f.isKanjiModeEnabled()))}},c8aa:function(t,e,r){var n=r("7bf0"),o=r("34fc"),i=r("7a43"),a=r("bbf0"),u=r("27a3"),s=r("eee5"),f=7973,c=n.getBCHDigit(f);function l(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}function h(t,e){return a.getCharCountIndicator(t,e)+4}function d(t,e){var r=0;return t.forEach(function(t){var n=h(t.mode,e);r+=n+t.getBitsLength()}),r}function g(t,r){for(var n=1;n<=40;n++){var o=d(t,n);if(o<=e.getCapacity(n,r,a.MIXED))return n}}e.from=function(t,e){return u.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!u.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=a.BYTE);var i=n.getSymbolTotalCodewords(t),s=o.getTotalCodewordsCount(t,e),f=8*(i-s);if(r===a.MIXED)return f;var c=f-h(r,t);switch(r){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,e){var r,n=i.from(e,i.M);if(s(t)){if(t.length>1)return g(t,n);if(0===t.length)return 1;r=t[0]}else r=t;return l(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!u.isValid(t)||t<7)throw new Error("Invalid QR Code version");var e=t<<12;while(n.getBCHDigit(e)-c>=0)e^=f<<n.getBCHDigit(e)-c;return t<<12|e}},d055:function(t,e,r){var n=r("67dd"),o=r("aa63"),i=r("4146"),a=r("4006");function u(t,e,r,i,a){var u=[].slice.call(arguments,1),s=u.length,f="function"===typeof u[s-1];if(!f&&!n())throw new Error("Callback required as last argument");if(!f){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e,e=i=void 0):2!==s||e.getContext||(i=r,r=e,e=void 0),new Promise(function(n,a){try{var u=o.create(r,i);n(t(u,e,i))}catch(s){a(s)}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r,r=e,e=i=void 0):3===s&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var c=o.create(r,i);a(null,t(c,e,i))}catch(l){a(l)}}e.create=o.create,e.toCanvas=u.bind(null,i.render),e.toDataURL=u.bind(null,i.renderToDataURL),e.toString=u.bind(null,function(t,e,r){return a.render(t,r)})},d3b5:function(t,e,r){"use strict";var n,o,i=r("cebc"),a=r("2f62"),u=r("d055"),s=r.n(u),f=r("c927"),c={props:{visible:{type:Boolean,default:!1},handleClose:{type:Function,default:function(){}},work:{type:Object,default:function(){}}},computed:{releaseUrl:function(){return"".concat(f["a"],"/works/preview/").concat(this.work.id)}},data:function(){return{confirmLoading:!1,qrcodeSize:500}},watch:{visible:function(t){var e=this;t&&this.$nextTick(function(){return e.drawQRcode()})}},methods:Object(i["a"])({},Object(a["b"])("editor",["saveWork","updateWork"]),{handleOk:function(t){var e=this;this.confirmLoading=!0,this.saveWork().then(function(t){e.handleClose(),e.confirmLoading=!1})},handleCancel:function(t){console.log("Clicked cancel button"),this.handleClose()},drawQRcode:function(){var t=document.getElementById("qrcode-container");s.a.toCanvas(t,this.releaseUrl,{scale:4},function(t){console.log(t)})},postMessage2Iframe:function(t){var e=document.getElementById("iframe-for-preview").contentWindow;e.postMessage(t,f["a"])},openNewTab:function(){window.open(this.releaseUrl)}}),render:function(t){var e=this;return t("a-modal",{attrs:{visible:this.visible,confirmLoading:this.confirmLoading,width:"70%",okText:"保存"},on:{ok:this.handleOk,cancel:this.handleCancel}},[t("div",{class:"preview-wrapper"},[t("a-row",{attrs:{gutter:20}},[t("a-col",{attrs:{span:8}},[t("div",{class:"phone-wrapper",style:{transform:"scale(0.8)"}},[t("div",{class:"phone"},[t("div",{class:"float-ctrl-panel"},[t("a",{class:"page-controller",on:{click:function(t){e.postMessage2Iframe("prev")}}},["上一页"]),t("a",{class:"page-controller",on:{click:function(t){e.postMessage2Iframe("next")}}},["下一页"])]),t("iframe",{attrs:{id:"iframe-for-preview",src:this.releaseUrl,frameborder:"0"},style:"height: 100%;width: 100%;"})])])]),t("a-col",{attrs:{span:12,offset:4}},[t("div",{class:"setting"},[t("div",{class:"info"},[t("h4",{class:"label"},["设置作品信息"]),t("a-input",{class:"input",attrs:{value:this.work.title,placeholder:"请输入标题"},on:{change:function(t){return e.updateWork({title:t.target.value})}}}),t("a-input",{class:"input",attrs:{value:this.work.description,placeholder:"请输入描述",type:"textarea"},on:{change:function(t){return e.updateWork({description:t.target.value})}}})]),t("div",{class:"qrcode my-4"},[t("div",{class:"label"},["手机扫码分享给好友"]),t("div",{class:"code"},[t("canvas",{style:"float: left",attrs:{id:"qrcode-container"}}),t("div",[t("a-button",{attrs:{type:"dashed"},on:{click:function(){return e.openNewTab()}}},["打开预览 URL "])])])])])])])])])},mounted:function(){}},l=c,h=(r("78c4"),r("2877")),d=Object(h["a"])(l,n,o,!1,null,null,null);e["a"]=d.exports},d6c0:function(t,e,r){var n=r("7bf0").getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},dd7e:function(t,e,r){var n=r("bbf0");function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},e6c4:function(t,e,r){},eee5:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}}}]);