"use strict";function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}!function(t){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?exports.POWERMODE=t():(void 0).POWERMODE=t()}(function(){return r={},e.m=n=[function(t,o,y){var r=document.createElement("canvas");r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){r.width=window.innerWidth,r.height=window.innerHeight}),document.body.appendChild(r);var i=r.getContext("2d"),f=[],p=0,u=!1;function e(t,o){return Math.random()*(o-t)+t}function l(t){if(c.colorful){var o=e(0,360);return"hsla("+e(o-10,o+10)+", 100%, "+e(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function c(){for(var t,o,e,n=function(){var t=document.activeElement;if("TEXTAREA"===t.tagName||"INPUT"===t.tagName&&"text"===t.getAttribute("type")){var o=y(1)(t,t.selectionEnd),e=t.getBoundingClientRect();return{x:o.left+e.left,y:o.top+e.top,color:l(t)}}var n=window.getSelection();if(n.rangeCount){var r=n.getRangeAt(0),i=r.startContainer;return i.nodeType===document.TEXT_NODE&&(i=i.parentNode),{x:(e=r.getBoundingClientRect()).left,y:e.top,color:l(i)}}return{x:0,y:0,color:"transparent"}}(),r=5+Math.round(10*Math.random());r--;)f[p]={x:n.x,y:n.y,alpha:1,color:n.color,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}},p=(p+1)%500;c.shake&&(o=(t=1+2*Math.random())*(.5<Math.random()?-1:1),e=t*(.5<Math.random()?-1:1),document.body.style.marginLeft=o+"px",document.body.style.marginTop=e+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)),u||requestAnimationFrame(d)}function d(){u=!0,i.clearRect(0,0,r.width,r.height);for(var t=!1,o=r.getBoundingClientRect(),e=0;e<f.length;++e){var n=f[e];n.alpha<=.1||(n.velocity.y+=.075,n.x+=n.velocity.x,n.y+=n.velocity.y,n.alpha*=.96,i.globalAlpha=n.alpha,i.fillStyle=n.color,i.fillRect(Math.round(n.x-1.5)-o.left,Math.round(n.y-1.5)-o.top,3,3),t=!0)}t?requestAnimationFrame(d):u=!1}c.shake=!0,c.colorful=!1,t.exports=c},function(t,o){function e(t,o,e){var n,r=e&&e.debug||!1;!r||(n=document.querySelector("#input-textarea-caret-position-mirror-div"))&&n.parentNode.removeChild(n);var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var y=i.style,f=window.getComputedStyle?getComputedStyle(t):t.currentStyle;y.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(y.wordWrap="break-word"),y.position="absolute",r||(y.visibility="hidden"),l.forEach(function(t){y[t]=f[t]}),c?t.scrollHeight>parseInt(f.height)&&(y.overflowY="scroll"):y.overflow="hidden",i.textContent=t.value.substring(0,o),"INPUT"===t.nodeName&&(i.textContent=i.textContent.replace(/\s/g," "));var p=document.createElement("span");p.textContent=t.value.substring(o)||".",i.appendChild(p);var u={top:p.offsetTop+parseInt(f.borderTopWidth),left:p.offsetLeft+parseInt(f.borderLeftWidth)};return r?p.style.backgroundColor="#aaa":document.body.removeChild(i),u}var l=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],c=null!=window.mozInnerScreenX;void 0!==t&&void 0!==t.exports?t.exports=e:window.getCaretCoordinates=e}],e.c=r,e.p="",e(0);function e(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return n[t].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n,r});