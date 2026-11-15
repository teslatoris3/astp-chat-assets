/* Minification failed. Returning unminified contents.
(13209,7540-7541): run-time error JS1010: Expected identifier: .
(13209,7540-7541): run-time error JS1195: Expected expression: .
 */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
;
//version  3.0.1.0

//Add Script for Multilanguage in javascript
{
    try {

        if (typeof window.slang == "undefined") {
            var __scripts = document.getElementsByTagName('script'),
                saaedcompatscript = __scripts[__scripts.length - 1],
                _version = "131",
                _lang = $("html").attr("lang");

            if (_lang)
                $(saaedcompatscript).before("<script type='text/javascript' src='Scripts/slang." + $("html").attr("lang") + ".js?v=" + _version + "'></script>");
            else
                $(saaedcompatscript).before("<script type='text/javascript' src='Scripts/slang.fa.js?v=" + _version + "'></script>");
        }
    } catch (e) {
        $(saaedcompatscript).before("<script type='text/javascript' src='Scripts/slang.fa.js?v=" + _version + "'></script>");
    }
}


//Tests of support
try {
    $.hasLocalStorage = window.localStorage ? true : false;
} catch (e) {
    $.hasLocalStorage = false;
}

//is Browser mobile?
var userAgent = navigator.userAgent.toLowerCase();
$.mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
$.isChrome = userAgent.indexOf("chrome") > -1 && userAgent.indexOf("edg") === -1;
$.isFirefox = userAgent.indexOf('firefox') > -1;

if ($.mobile)
    $('html').addClass("mobile");

//test for placeholder support
$.hasPlaceholder = (function () {
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

//Ajax Loading
if (!$("body").hasClass("no-loading")) {
    var ajaxtimeout;
    $(document).ajaxStart(function () {
        var $loading = $("html").data("ajax-loading");
        if ($loading && $loading.length) {
            $loading.addClass("show");
        }

        $("html").data("ajax-loading", $("#loading"));
    }).ajaxStop(function () {
        ajaxtimeout && clearTimeout(ajaxtimeout), ajaxtimeout = setTimeout(function () {
            var $loading = $("html").data("ajax-loading");
            if ($loading && $loading.length && $.active === 0) {
                $loading.removeClass("show");
            }
        }, 3e2);
    });
}

function fixChar(value) {
    if (!value) {
        return value;
    }
    for (var i = 0; i < 10; i++) {
        value = value.replace([/۰|٠/g, /١|۱/g, /۲|٢/g, /۳|٣/g, /۴|٤/g, /۵|٥/g, /۶|٦/g, /۷|٧/g, /۸|٨/g, /۹|٩/g][i], i);
    }

    for (i = 0; i < 2; i++) {
        value = value.replace([/ي/g, /ك/g][i], ["ی", "ک"][i]);
    }

    return value;
}

function toEnglishNumber(value) {
    if (!value) {
        return value;
    }
    var englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        persianArabicNumbers = [/١|۱/g, /۲|٢/g, /۳|٣/g, /۴|٤/g, /۵|٥/g, /۶|٦/g, /۷|٧/g, /۸|٨/g, /۹|٩/g, /۰|٠/g];

    for (var i = englishNumbers.length - 1; i >= 0; i--) {
        value = value.replace(persianArabicNumbers[i], englishNumbers[i]);
    }
    return value;
}

function getMessageCode(httpstatus) {
    httpstatus = httpstatus + "";
    if (slang["httpstatus"][httpstatus]) {
        return slang["httpstatus"][httpstatus];
    } else {
        return slang["error"] + " (" + httpstatus + ")";
    }
}

function setOnClient(key, value, days) {
    if ($.hasLocalStorage) {
        if (value)
            localStorage.setItem(key, value);
        else
            localStorage.removeItem(key);
    }
    else {
        if (value) {
            createCookie(key, value, days);
        } else {
            eraseCookie(key);
        }
    }
}

function disableFormInputs(formselector) {
    var __$inputs = $("input[type=text][name]:not(.slov-input),textarea[name]", formselector);
    for (var i = __$inputs.length - 1; i >= 0; i--) {
        __$inputs.eq(i).prop("readonly", true);
    }

    __$inputs = $(":input[name]:not([type=text],textarea,.wizard-prev,.wizard-next,.more-fields-btn)", formselector)
    for (i = __$inputs.length - 1; i >= 0; i--) {
        __$inputs.eq(i).prop("disabled", true);
    }

    __$inputs = $(".slov-input", formselector);
    for (i = __$inputs.length - 1; i >= 0; i--) {
        var __lovobj = __$inputs.eq(i).sListOfValue();

        if (__lovobj !== null) {
            __lovobj.disable();
        }
    }
}

function getFromClient(key) {
    if ($.hasLocalStorage)
        return localStorage.getItem(key);
    else
        return readCookie(key);
}

if (!Object.keys) {
    Object.keys = function (obj) {
        var keys = [],
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
}

var isEmptyObj = function (obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

if (!Array.prototype.map)
    Array.prototype.map = function (f) {
        var r = []; for (var i = 0, len = this.length; i < len; i++)r.push(f(this[i]));
        return r;
    };

//get value of key in querystring
function getParameterByName(key, url) {
    if (!url) url = window.location.href;
    key = key.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//update, remove , add querystring
function setParameterByName(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}

function toAbsoluteUrl(relative) {
    var a = document.createElement('a');
    a.href = relative;
    return a.href;
}

function stableSort(v, f) {
    if (f === undefined) {
        f = function (a, b) {
            a = "" + a; b = "" + b;
            return a < b ? -1 : (a > b ? 1 : 0);
        };
    }

    var dv = [];

    for (var i = 0, len = v.length; i < len; i++) {
        dv[i] = [v[i], i];
    }

    dv.sort(function (a, b) {
        return f(a[0], b[0]) || (a[1] - b[1]);
    });

    for (var i = 0, len = v.length; i < len; i++) {
        v[i] = dv[i][0];
    }
}

function renderMenu(menu) {
    var $menu = $("<ul class='menu-items'></ul>");
    for (var i = 0, _len = menu.length; i < _len; i++) {
        var _item = menu[i],
            _$menuitem;

        if (_item["url"])
            _$menuitem = $("<li class='item'><a href='" + _item.url + "'>" + _item.caption + "</a></li>").attr("id", _item["id"]);
        else
            _$menuitem = $("<li class='item'><div class='caption'>" + _item.caption + "</div></li>").attr("id", _item["id"]);

        if (_item["onClick"]) {
            _$menuitem.on("click", _item.onClick);
        }

        if (_item["attr"]) {
            _$menuitem.attr(_item.attr);
        }

        if (_item["children"]) {
            _$menuitem.append(renderMenu(_item["children"]));
        }

        $menu.append(_$menuitem);
        if (i + 1 !== _len)
            $("<div class='splitter'></div>").appendTo($menu);
    }

    return $menu;
}

//IE Detecting
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}

function _slice(items, start) {
    var len = items.length, newArray = new Array(len - start);
    for (var i = start; i < len; i++) {
        newArray[i - start] = items[i];
    }
    return newArray;
}

if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (_match, number) {
            return typeof args[number] != 'undefined' ? args[number] : "";
        });
    };
}

function notifyMe(message, onClick) {

    var hasDesktopNotification = true;
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        hasDesktopNotification = false;
    }

    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("", {
            body: message
        });

        if (onClick) {
            notification.onclick = function (event) {
                onClick.call(this, event);
            };
        }
    }

    // Otherwise, we need to ask the user for permission
    // Note, Chrome does not implement the permission static property
    // So we have to check for NOT 'denied' instead of 'default'
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            // Whatever the user answers, we make sure we store the information
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }

            // If the user is okay, let's create a notification
            if (permission === "granted") {
                var notification = new Notification('', {
                    //icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
                    body: message
                });

                if (onClick) {
                    notification.onclick = function (event) {
                        onClick.call(this, event);
                    };
                }

                //notification.onclick = function () {
                //    window.open("http://stackoverflow.com/a/13328397/1269037");
                //};
            } else {
                hasDesktopNotification = false;
            }
        });
    } else {
        hasDesktopNotification = false;
    }

    if (!hasDesktopNotification) {
        if (onClick)
            $.sAlert('#AjaxLog').message({ content: message, closebutton: true, timeout: -1, "onClick": onClick });
        else
            $.sAlert('#AjaxLog').message({ content: message, closebutton: true, timeout: -1 });
    }


    // At last, if the user already denied any notification, and you 
    // want to be respectful there is no need to bother him any more.
}


// Cookies Function
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else expires = "";

    //var fixedName = '<%= Request["formName"] %>';
    //name = fixedName + name;

    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = ca.length; i >= 0; i--) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


function caretPosition(input, start, end) {
    var range,
        $input = $(input);

    if ($input.length === 0 || $input.is(":hidden") || input !== document.activeElement) {
        return;
    }

    if (typeof start == 'number') {
        end = (typeof end === 'number') ? end : start;
        return $input.each(function () {
            if (this.setSelectionRange) {
                this.setSelectionRange(start, end);
            } else if (this.createTextRange) {
                range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', start);
                range.select();
            }
        });
    } else {
        if (input.setSelectionRange) {
            start = input.selectionStart;
            end = input.selectionEnd;
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            start = 0 - range.duplicate().moveStart('character', -100000);
            end = start + range.text.length;
        }
        return { start: start, end: end };
    }
}

function getDoc(frame) {
    var doc = null;

    // IE8 cascading access check
    try {
        if (frame.contentWindow) {
            doc = frame.contentWindow.document;
        }
    } catch (err) {
    }

    if (doc) { // successful getting content
        return doc;
    }

    try { // simply checking may throw in ie8 under ssl or mismatched protocol
        doc = frame.contentDocument ? frame.contentDocument : frame.document;
    } catch (err) {
        // last attempt
        doc = frame.document;
    }
    return doc;
}

function jsonToHTML(data) {
    var keys = Object.keys(data),
        _html = "";

    for (var i = 0, len = keys.length; i < len; i++) {
        var name = keys[i],
            value = data[name];

        if (name === "__Display")
            continue;

        if (value !== null && typeof value === 'object') {
            if (Object.prototype.toString.call(value) === '[object Array]') {
                for (var k = 0, _len = value.length; k < _len; k++) {
                    _html += "<div class=\"sgroup\" data-sform-name=\"" + name + "\">";
                    _html += jsonToHTML(value[k]);
                    _html += "</div>";
                }
            } else {
                _html += "<div class=\"sgroup non-array\" data-sform-name=\"" + name + "\">";
                _html += jsonToHTML(value);
                _html += "</div>";
            }

        } else {
            _html += "<input type=\"hidden\" name=\"" + name + "\" value=\"" + (value === null ? "" : value) + "\">";
        }

    }
    return _html;
}

function normalizeSerializeArray(values) {
    var _newvalue = {};

    for (var i = 0, len = values.length; i < len; i++) {
        var _val = values[i];
        _newvalue[_val["name"]] = _val["value"];
    }
    return _newvalue;
}

function serializeArray(elements) {
    var i, j, q = [];
    for (i = 0, len = elements.length; i < len; i++) {
        var name = elements[i].getAttribute("data-sform-name") || elements[i].name;
        if (name === "") {
            continue;
        }
        switch (elements[i].nodeName) {
            case 'INPUT':
                switch (elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                    case 'number':
                        q.push({ "name": name, "value": elements[i].value });
                        break;
                    case 'checkbox':
                        if (elements[i].checked) {
                            q.push({ "name": name, "value": elements[i].value });
                        } else {
                            q.push({ "name": name, "value": "false" });
                        }
                        break;
                    case 'radio':
                        if (elements[i].checked)
                            q.push({ "name": name, "value": elements[i].value });
                        break;
                    case 'file':
                        break;
                }
                break;
            case 'TEXTAREA':
                q.push({ "name": name, "value": elements[i].value });
                break;
            case 'SELECT':
                switch (elements[i].type) {
                    case 'select-one':
                        var element = elements[i];
                        q.push({ "name": name, "value": element.value });
                        if (element.selectedIndex !== -1) {
                            var _display = {};
                            _display[name] = element.options[element.selectedIndex].text;

                            q.push({ "name": "__Display", "value": _display });
                        }
                        break;
                    case 'select-multiple':
                        for (j = 0, _len = elements[i].options.length; j < _len; j = j + 1) {
                            if (elements[i].options[j].selected) {
                                q.push({ "name": name, "value": elements[i].options[j].value });
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push({ "name": name, "value": elements[i].value });
                        break;
                }
                break;
        }
    }
    return q;
}

/******** Serialize JSON ********/
$.fn.serializeJSON = function (jsonobject, root, excludednames) {
    var $element = $(this),
        $groups = $element.find('.sgroup').not($element.find('.sgroup .sgroup')),
        excludedinputs = 'button,[type="submit"],.search-field,.page-size';

    if (!(jsonobject)) {
        var jsonobject = {};
    }

    if (root === undefined || root === null)
        root = this.get(0);

    if (excludednames === undefined)
        excludednames = ["__RequestVerificationToken"];

    //Add Form Root Data
    if (!$element.is('.sgroup')) {
        var $inputs = $element.find(':input').not(excludedinputs);
        $.each($inputs, function (_index, item) {
            var $item = $(item);
            if ($item.closest(".sgroup", root).length === 0 && !$item.hasClass("ignore-data")) {
                var data = serializeArray([item]);
                if (data.length) {
                    for (var k = 0; k < data.length; k++) {
                        var _data = data[k];

                        if (excludednames.indexOf(_data["name"]) !== -1)
                            continue;

                        if (_data["name"] === "__Display") {
                            jsonobject["__Display"] = $.extend({}, jsonobject["__Display"], _data["value"]);
                            continue;
                        }

                        if (jsonobject[_data["name"]])
                            jsonobject[_data["name"]] += "," + _data["value"];
                        else
                            jsonobject[_data["name"]] = _data["value"];
                    }
                }
            }
        });
    }

    var i = 0;
    for (i = 0; i < $groups.length; i++) {
        var _group = $groups.eq(i),
            key = _group.attr('data-sform-name'),
            temp = jsonobject[key],
            _nongroupchild = {};

        $inputs = _group.find(':input').not(excludedinputs);
        $.each($inputs, function (_index, item) {
            var $item = $(item);
            if ($item.closest(".sgroup").attr("data-sform-name") === key && !$item.hasClass("ignore-data")) {
                var data = serializeArray([item]);
                if (data.length) {
                    data = data[0];

                    if (excludednames.indexOf(data["name"]) !== -1)
                        return;

                    if (data["name"] === "__Display") {
                        _nongroupchild["__Display"] = $.extend({}, _nongroupchild["__Display"], data["value"]);
                        return;
                    }

                    if (_nongroupchild[data["name"]])
                        _nongroupchild[data["name"]] += "," + data["value"];
                    else
                        _nongroupchild[data["name"]] = data["value"];
                }
            }
        });

        if (_group.hasClass("non-array")) {
            if (temp)
                jsonobject[key] = $.extend(jsonobject[key], _nongroupchild, _group.serializeJSON({}, root));
            else
                jsonobject[key] = $.extend({}, _nongroupchild, _group.serializeJSON({}, root));

            if (isEmptyObj(jsonobject[key]))
                jsonobject[key] = null;
        } else {
            if (!temp)
                jsonobject[key] = [];

            jsonobject[key].push($.extend({}, _nongroupchild, _group.serializeJSON({}, root)));

            if (isEmptyObj(jsonobject[key][0]))
                jsonobject[key] = [];
        }

    }
    return jsonobject;
};

$.fn.setSpecialDisplayValues = function (values, forcesetvalue) {
    this.find(":input[name]").setDisplayValues(values, forcesetvalue);

    var _$sinputs = this.find(".sgroup");
    for (var i = _$sinputs.length - 1; i >= 0; i--) {
        var _$sinput = _$sinputs.eq(i);

        if (_$sinput.closest(".sgroup", this.get(0)).length === 1) {
            var _value = values[_$sinput.attr("data-sform-name")];
            if (_value)
                if (Object.prototype.toString.call(_value) === '[object Array]') {
                    var _$cinputs = this.find("[data-sform-name=" + _$sinput.attr("data-sform-name") + "]");
                    for (var j = _value.length - 1; j >= 0; j--) {
                        _$cinputs.eq(j).setSpecialDisplayValues(_value[j], forcesetvalue);
                    }
                }
                else
                    _$sinput.setSpecialDisplayValues(values[_name], forcesetvalue);
            else
                _$sinput.setSpecialDisplayValues(values, forcesetvalue);
        }
    }
};

$.fn.updateJSONValues = function (values) {
    var $inputs = this.find(":input[name]");

    for (var i = 0; i < $inputs.length; i++) {
        var _$input = $inputs.eq(i);

        var _name = _$input.attr("name") || _$input.attr("data-sform-name");

        if (!_name || _$input.closest(".sgroup").length)
            continue;

        var _value = values[_name];

        if (typeof _value === "undefined")
            continue;

        if (_$input.hasClass("slov-input")) {
            //input is lov
            var _lovvalue = [];
            if (_value) {
                _value = _value.split("~|^");

                for (var j = 0; j < _value.length; j++)
                    _lovvalue.push({ "id": (values[_name.replace("Name", "") + "ID"] + "").split(",")[j], "value": _value[j] });
            }

            var _lovobject = _$input.data("sListOfValue");
            if (_lovobject.options.jumptonextinput) {
                _lovobject.options.jumptonextinput = false;
                _lovobject.val(_lovvalue, true);
                _lovobject.options.jumptonextinput = true;
            } else
                _lovobject.val(_lovvalue, true);


        } else {

            switch (_$input[0].nodeName) {
                case "TEXTAREA":
                    if (typeof tinymce != "undefined") {
                        var editor = tinymce.get(_$input.attr("id")); // use your own editor id here - equals the id of your textarea
                        if (editor) {
                            editor.setContent(_value, { no_events: true });
                            continue;
                        }
                    }

                    _$input.val(_value);
                    break;
                case "SELECT":
                    if (["True", "true", true].indexOf(_value) !== -1) {
                        if (_$input.find("[value=True]").length)
                            _$input.val("True");
                        else
                            _$input.val("true");
                    } else if (["False", "false", false].indexOf(_value) !== -1) {
                        if (_$input.find("[value=False]").length)
                            _$input.val("False");
                        else
                            _$input.val("false");
                    } else {
                        _$input.val(_value + "");
                    }
                    break;
                case "INPUT":
                    switch (_$input[0].type) {
                        case "checkbox":
                            _$input.prop("checked", (_value == true));
                            break;
                        case "radio":
                            if (_$input.is("[value=" + (_value === null || _value.toString().trim() === "" ? '""' : _value) + "]"))
                                _$input.prop("checked", true);
                            else
                                _$input.prop("checked", false);
                            break;
                        default:
                            _$input.val(_value).attr("value", _value);
                            break;
                    }
                    break;
                default:
                    _$input.val(_value).attr("value", _value);
                    break;
            }
        }
    }

    var _$proxytable = this.find(".slov-proxytable");

    for (var i = 0; i < _$proxytable.length; i++) {
        if (_$proxytable.eq(0).closest(".sgroup").length)
            continue;

        var _lovobj = _$proxytable.eq(0).data("sListOfValue"),
            _lovvalue = [];

        _value = values[_lovobj.options.groupname];
        for (var j = 0; j < _value.length; j++) {
            delete _value[j]["ValidationState"];
            _lovvalue.push(_lovobj.processProxyData(_value[j], _value[j][_lovobj.options.identityname], null, null, _value));
        }

        _lovobj.val(_lovvalue, true);
    }

    var _$sinputs = this.find(".sgroup");
    for (var i = 0; i < _$sinputs.length; i++) {
        var _$sinput = _$sinputs.eq(i);

        if (_$sinput.closest(".sgroup", this.get(0)).length === 1) {
            var _value = values[_$sinput.attr("data-sform-name")];
            if (_value)
                if (Object.prototype.toString.call(_value) === '[object Array]') {
                    var _$cinputs = this.find("[data-sform-name=" + _$sinput.attr("data-sform-name") + "]");
                    for (var j = _value.length - 1; j >= 0; j--) {
                        delete _value[j]["ValidationState"];
                        _$cinputs.eq(j).updateJSONValues(_value[j]);
                    }
                }
                else {
                    delete _value["ValidationState"];
                    _$sinput.updateJSONValues(values[_name]);
                }
            else
                _$sinput.updateJSONValues(values);
        }
    }
}

$.fn.setDisplayValues = function (values, forcesetvalue) {
    if (forcesetvalue == null)
        forcesetvalue = false;

    for (var i = this.length - 1; i >= 0; i--) {
        var _$item = this.eq(i);
        if (_$item.hasClass("slov-input")) {
            //input is lov
            var _value = values[_$item.attr("id")],
                lov = _$item.data("sListOfValue");

            if (typeof _value == "undefined" || (forcesetvalue && lov.values.length > 0))
                continue;

            _value = _value || [];
            var _newvalue = [];
            if (Object.prototype.toString.call(_value) === '[object Array]') {
                for (var j = _value.length - 1; j >= 0; j--) {
                    _newvalue.push({ "id": _value[j].ID, "value": _value[j].Name });
                }
            } else {
                _newvalue.push({ "id": _value.ID, "value": _value.Name });
            }

            if (lov.options.jumptonextinput) {
                lov.options.jumptonextinput = false;
                lov.val(_newvalue, true);
                lov.options.jumptonextinput = true;
            } else
                lov.val(_newvalue, true);

        } else {
            var _name = _$item.attr("name");
            if (_name) {
                var _value = values[_name];

                _value = _value === 'true' || _value === 'True' ? true :
                    _value === 'false' || _value === 'False' ? false :
                        _value;

                if (typeof _value != "undefined") {
                    if (_$item.is("textarea")) {
                        //textarea
                        if (typeof tinymce != "undefined") {
                            var editor = tinymce.get(_$item.attr("id")); // use your own editor id here - equals the id of your textarea
                            if (editor) {
                                if (forcesetvalue && editor.getContent({ format: 'text' }))
                                    continue;

                                editor.setContent(_value, { no_events: true });
                                continue;
                            }
                        }

                        if (forcesetvalue && _$item.val())
                            continue;

                        _$item.val(_value);
                    } else {
                        if (forcesetvalue && _$item.val())
                            continue;

                        if (_$item.is("select") && (_value == true || _value == false)) {
                            _$item.val(_value + "");
                        } else if (_$item.is("[type=checkbox]")) {
                            _$item.prop("checked", (_value == true));
                        } else if (_$item.is("[type=radio]")) {
                            var _itemValue = (_$item.val() || "").trim();
                            _itemValue = _itemValue === 'true' || _itemValue === 'True' ? true :
                                _itemValue === 'false' || _itemValue === 'False' ? false :
                                    _itemValue;

                            if (_value == _itemValue)
                                _$item.prop("checked", true);
                            else
                                _$item.prop("checked", false);
                        }
                        else {

                            //set value attribute for sFloat
                            _$item.val(_value).attr("value", _value);
                        }
                    }
                }
            }
        }
    }
    return this;
};

$.fn.setValues = function (values, forcesetvalue) {
    if (forcesetvalue === null)
        forcesetvalue = false;

    this.find(":input[name]", this).not(".sgroup:not(.set-values) :input").setDisplayValues(values, forcesetvalue);

    var $tables = this.find("table");
    for (var i = $tables.length - 1; i >= 0; i--) {
        var $table = $tables.eq(i),
            name = $table.attr("id");

        var proxyvalue = values[name];
        if (proxyvalue && !isEmptyObj(proxyvalue)) {
            var _rows = "";
            for (var j = 0, len = proxyvalue.length; j < len; j++) {
                _rows += "<tr class='item-content'><td><div class='sgroup hidden'>" + jsonToHTML(proxyvalue[j]) + "</div></td></tr>";
            }

            $table.append(_rows);
        }
    }

    return this;
};

$.fn.getDisplayValues = function () {
    var values = [];
    for (var i = 0, len = this.length; i < len; i++) {
        var _$item = this.eq(i);
        if (_$item.hasClass("slov-input")) {
            //input is lov
            var val = _$item.data("sListOfValue").val(),
                _val = [];

            for (var j = 0, _len = val.length; j < _len; j++) {
                _val.push(val[j].value || "");
            }

            values.push(_val.join("، "));
        } else if (_$item.is("select")) {
            if (_$item.val()) {
                values.push(_$item.find("option:selected").html());
            } else {
                values.push("");
            }
        } else if (_$item.is("[type=checkbox]")) {
            values.push(_$item.is(":checked") ? slang["activeimg"] : slang["nonactiveimg"]);
        } else if (_$item.is("[type=radio]")) {
            if (_$item.is(":checked"))
                values.push(_$item.parent().text());
        } else if (_$item.is("textarea")) {
            values.push($("<div/>").text(_$item.val()).html().replace(/\r\n|\r|\n/g, "<br />"));//.replace(/\r\n|\r|\n/g, "<br />"));
        } else {
            values.push($("<div/>").text(_$item.val()).html());
        }

    }
    return values;
};

$.fn.isInViewport = function (difftop) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop() - difftop;
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


jQuery.extend(jQuery.expr.pseudos, {
    focusable: function (el, _index, _selector) {
        return $(el).is('a, button, :input:not([type="hidden"]), [tabindex]');
    }
});

var scrollParent = $.fn.scrollParent = function (includeHidden) {
    var position = this.css("position"),
        excludeStaticParent = position === "absolute",
        overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        scrollParent = this.parents().filter(function () {
            var parent = $(this);
            if (excludeStaticParent && parent.css("position") === "static") {
                return false;
            }
            return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") +
                parent.css("overflow-x"));
        }).eq(0);

    return position === "fixed" || !scrollParent.length ?
        $(this[0].ownerDocument || document) :
        scrollParent;
};

function supdateWithTouchData(event) {
    var _event = event.originalEvent.changedTouches;
    if (_event) {
        event["pageX"] = _event[0]["pageX"];
        event["pageY"] = _event[0]["pageY"];
        event["clientX"] = _event[0]["clientX"];
        event["clientY"] = _event[0]["clientY"];
    }
    return event;
}

$(function () {
    var _$html = $();

    var $proxybody = $(".body");
    if ($proxybody.length === 0) {
        $proxybody = $("body").children().eq(0).addClass("body");
    }


    if (detectIE()) {
        var $body = $("body");
        $body.addClass("ie" + detectIE());
        $proxybody.hasClass("rtl") ? $body.addClass("rtl").attr("dir", "rtl") : $body.addClass("ltr");
    }

    var cookieshowagain = true;
    if ($.hasLocalStorage) {
        cookieshowagain = localStorage.getItem("cookieisshowed") ? false : true;
    }

    if ($("body").hasClass("no-privacy")) {
        cookieshowagain = false;
    }

    var _cookiewarning = "<div class='cookie-warning box-warning'>";
    if (navigator.cookieEnabled) {
        _cookiewarning += slang.cookieEnabled;
    } else {
        _cookiewarning += slang.cookieDisabled;
        cookieshowagain = true;
    }

    if (window.self !== window.top) {
        //in iframe like print and another
        cookieshowagain = false;
    }

    if (cookieshowagain) {
        _$html = _$html.add($(_cookiewarning + "</div>")
            .prepend("<div class='btn-mini red icon-white close circle margin-all-1p'></div>").on("click", function (_event) {
                $(this).closest(".cookie-warning").remove();

                if ($.hasLocalStorage) {
                    localStorage.setItem("cookieisshowed", 1);
                }
            }));
    }

    //PlaceHolder Compatibility in IE8-
    if (!$.hasPlaceholder) {
        $('[placeholder]').on('focus', function () {
            var $input = $(this);
            if ($input.val() == $input.attr('placeholder')) {
                $input.val('');
                $input.removeClass('placeholder');
            }
        }).on('blur', function () {
            var $input = $(this);
            if ($input.val() == '' || $input.val() == $input.attr('placeholder')) {
                $input.addClass('placeholder');
                $input.val($input.attr('placeholder'));
            }
        }).trigger('blur').closest('form').on('submit', function () {
            var $places = $(this).find('[placeholder]');
            for (var i = $places.length - 1; i >= 0; i--) {
                var $input = $places.eq(i);
                if ($input.val() == $input.attr('placeholder'))
                    $input.val('');
            }
        });
    }

    //Ajax Loading
    if ($("#loading").length === 0 && !$("body").hasClass("no-loading")) {
        _$html = _$html.add($('<div id="loading" class="loading"><img src="Content/images/saaed/loading-lg.gif" width="32" height="32" alt="" /><div class="loading-text">' + slang.loadingMessage + '</div></div>'));
    }

    _$html.appendTo($proxybody);

    $("html").data("ajax-loading", $("#loading"));

    //set footer in bottom of window
    //Timeout for Render StyleSheet
    setTimeout(function () {
        var $footer = $(".footer");
        $(".wrapper").css("min-height", Math.min($(document).outerHeight(), window.innerHeight) - ($footer.outerHeight(true) || 0) - 1);
        $footer.addClass("show");
    }, 50);

    $(document).on("click", ".sswitch>input", function (_event) {
        var $switch = $(this).closest(".sswitch");
        if ($(this).is(":checked")) {
            $switch.addClass("checked");
        } else {
            $switch.removeClass("checked");
        }
    });
});

function escapeHtml(value) {
    if (!value) {
        return value;
    }

    value = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return value;
}

function is_iOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

function generateRandomString(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateUUID() {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);

    array[6] = (array[6] & 0x0f) | 0x40; // UUID version 4
    array[8] = (array[8] & 0x3f) | 0x80; // UUID variant

    return [...array]
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
        .replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}
;
//sNav version 1.0.1
(function ($) {
    "use strict";
    $.fn.sNav = function (options) {
        var element = this,
            pluginName = 'sNav';

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sNav(element, options);
            $(element).data(pluginName, instance);
        }

        return instance;
    };

    $.fn.sNav.defaults = {
        theme: 'default-nav',
        holder: '',//place that holds nav and responsive nav
        mode: "normal",
        subnavholder: "",
        level: false,
        enablemouseover: false,
        responsive: {},
        fixed: {},
        isRTL: null,
        templates: {}
    };

    $.fn.sNav.fixeddefaults = {
        holder: null,
        limit: 0,
        mobile: false,
        onAfter: function () { },
        onBefore: function () { }
    };

    $.fn.sNav.templatesdefaults = {
        header: null,
        togglebutton: '<div class="nav-toggle"><div class="toggle-icon"><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div></div><span class="toggle-text">' + slang.menu + '</span><div class="clear"></div></div>'
    };

    $.fn.sNav.responsivedefaults = {
        width: 1100,
        theme: 'default-nav-sidebar',
        levelmode: true,
        position: 'bottom', //position of nav
        showmode: "slide"//slide, overlap
    };

    var sNav = (function () {
        function sNav(element, userOptions) {

            //extend options
            this.el = element;

            this.options = $.extend({}, $.fn.sNav.defaults, userOptions);
            this.options.responsive = $.extend({}, $.fn.sNav.responsivedefaults, this.options.responsive);
            this.options.fixed = $.extend({}, $.fn.sNav.fixeddefaults, this.options.fixed);
            this.options.templates = $.extend({}, $.fn.sNav.templatesdefaults, this.options.templates);

            this.$subnav = $(this.options.subnavholder);

            if (this.options.isRTL === null)
                if ($(".body").hasClass("rtl"))
                    this.options.isRTL = true;

            this.init();
        }

        sNav.prototype = {
            init: function () {
                var self = this,
                    settings = this.options;

                //add theme to navigation
                var $nav = $(self.el).clone(true, true).addClass("main-nav").removeClass("hidden").addClass(settings.theme);

                if (settings.responsive.width > 0)
                    self.addSidebarNav($nav);


                if (settings.mode === "module" || settings.mode === "vmodule") {
                    this.$subnav.addClass("subnav-holder");

                    if (settings.mode === "vmodule") {
                        this.$subnav.addClass("vmodule").on("mouseover", function () {
                            clearTimeout(self.subnavtimeout);

                            if (self.$subnav.children().length === 0)
                                return;

                            $(document.body).addClass("subnav-collapsed");
                        }).on("mouseleave", function () {
                            clearTimeout(self.subnavtimeout);
                            self.subnavtimeout = setTimeout(function () {
                                $(document.body).removeClass("subnav-collapsed");
                                self.$subnav.find(".nav-collapsed").removeClass("nav-collapsed");
                            }, 500);
                        });
                    } else {
                        $(document.body).addClass("module");
                    }

                    $nav.find(">li>a,>li>.caption").each(function () {
                        var $item = $(this).closest("li"),
                            _classnames = $item.attr("class");
                        if (_classnames !== "")
                            _classnames = _classnames.split(" ");

                        for (var i = 0; i < _classnames.length; i++) {
                            if (_classnames[i].match(/.*-area\b/) !== null) {
                                $item.attr("data-nav-area", _classnames[i]);
                                break;
                            }
                        }
                    }).on("click", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        var $link = $(this),
                            $submenus = $link.parent().children().filter("ul").clone(true, true);

                        if ($submenus.length === 0) {
                            if (window.location.pathname + window.location.search !== $link.attr("href"))
                                window.location.href = $link.attr("href");
                            return;
                        }

                        self.el.find(".active-area").removeClass("active-area");
                        $link.parent().addClass("active-area");


                        if (settings.mode === "module")
                            $submenus.removeClass("nav-vertical").addClass("nav-horizontal");
                        else if (settings.mode === "vmodule")
                            $submenus.removeClass("nav-horizontal").addClass("nav-vertical");

                        self.$currentnav = self.$subnav.clone(true).empty().append($submenus);
                        self.$subnav.replaceWith(self.$currentnav);
                        self.$subnav = self.$currentnav;

                        if (settings.mode === "vmodule") {
                            $(document.body).addClass("subnav-collapsed");
                            clearTimeout(self.subnavtimeout);
                            self.subnavtimeout = setTimeout(function () {
                                $(document.body).removeClass("subnav-collapsed");
                            }, 2000);
                        }
                    });

                    $nav.find("a").on("click", function () {
                        setOnClient("ActiveAreaName", self.el.find(".active-area").attr("data-nav-area"));
                    });

                    this.$currentnav = $nav.find("li>ul");

                } else {
                    this.$currentnav = $nav;
                }

                $(document).on('click', function (event) {
                    //event.which == 0 for ie8!
                    if (event.which === 1 || event.which === 0) {
                        self.$currentnav.find("li.nav-collapsed").removeClass("nav-collapsed");
                        clearTimeout(self.subnavtimeout);
                        $(document.body).removeClass("subnav-collapsed");
                        if (settings.responsive.width)
                            $(document.body).removeClass("sidebar-show");
                    }
                });

                this.$currentnav.find("a,.caption").on("click", function (event) {
                    event.stopPropagation();

                    var $item = $(this).closest("li");
                    //event.which == 0 for ie8!
                    if (event.which === 1 || event.which === 0)
                        if (self.mouseovertimeout)
                            clearTimeout(self.mouseovertimeout);

                    if ($item.children().filter('.nav').length) {
                        event.preventDefault();

                        if (settings.enablemouseover === true || (settings.enablemouseover === "ifopen" && $item.is(".nav-parent.nav-collapsed")))
                            return false;

                        var $lastlink = $item.closest(".nav").find('li.nav-collapsed');

                        if ($lastlink[0] !== $item[0]) {
                            $lastlink.removeClass('nav-collapsed');//.find('.nav').removeClass("show");
                        }

                        if (settings.mode === "vmodule") {
                            if (settings.isRTL === true)
                                $item.children().filter(".nav").css("right", $(window).width() - $item.offset().left);
                            else
                                $item.children().filter(".nav").css("left", $item.offset().left + $item.outerWidth(true));
                        }

                        $item.toggleClass("nav-collapsed");

                        if ($item.hasClass("nav-collapsed")) {
                            //for sDialog,sGrid
                            $nav.closest(".nav-fixed").css("z-index", "3");
                        } else {
                            $nav.closest(".nav-fixed").css("z-index", "2");
                        }
                    }
                });

                if (!$.mobile && settings.enablemouseover !== false) {
                    this.$currentnav.find("a,.caption").on("mouseover", function (event) {
                        //e.stopPropagation();
                        var $item = $(this).closest("li");
                        if (settings.enablemouseover === true || settings.enablemouseover === "ifopen" && self.$currentnav && self.$currentnav.find(".nav-collapsed").length !== 0) {
                            clearTimeout(self.mouseovertimeout);
                            self.mouseovertimeout = setTimeout(function () {
                                var $currentnav = $item.children().filter('.nav');
                                if ($currentnav.length && !$currentnav.hasClass("nav-collapsed")) {
                                    event.preventDefault();
                                    var $lastlink = $item.closest(".nav").find('li.nav-collapsed');

                                    if ($lastlink[0] !== $item[0]) {
                                        $lastlink.removeClass('nav-collapsed');
                                    }

                                    if (settings.mode === "vmodule") {
                                        if (settings.isRTL === true)
                                            $item.children().filter(".nav").css("right", $(window).width() - $item.offset().left);
                                        else
                                            $item.children().filter(".nav").css("left", $item.offset().left + $item.outerWidth(true));
                                    }

                                    $item.addClass("nav-collapsed");

                                    //for sDialog,sGrid
                                    $nav.closest(".nav-fixed").css("z-index", "3");
                                }
                            }, 200);
                        }
                        return;
                    }).on("mouseleave", function () {
                        clearTimeout(self.mouseovertimeout);
                    });
                }

                //add toggle button
                var $togglebtn = $(settings.templates.togglebutton).on("click", function (event) {
                    event.stopPropagation();
                    //event.which == 0 for ie8 !
                    if (event.which === 1 || event.which === 0) {
                        $(document.body).toggleClass("sidebar-show");
                    }
                });

                $nav = $togglebtn.add($nav);

                //Active Area
                if (this.options.mode === "module" || this.options.mode === "vmodule") {
                    var $areanav = $nav.find("." + getFromClient("ActiveAreaName")).eq(0);

                    if (!$areanav.length || !document.referrer) {
                        var _defaultarea = $("body").attr("data-nav-area");
                        if (_defaultarea[0] !== '.')
                            $areanav = $nav.find("." + _defaultarea).eq(0);
                        else
                            $areanav = $nav.find(_defaultarea).eq(0);
                    }

                    $areanav = $areanav.addClass("active-area").children().filter("ul").clone(true, true);
                    if (settings.mode === "module")
                        $areanav.removeClass("nav-vertical").addClass("nav-horizontal");
                    else if (settings.mode === "vmodule")
                        $areanav.removeClass("nav-horizontal").addClass("nav-vertical");

                    this.$currentnav = this.$subnav.clone(true).empty().append($areanav);
                    this.$subnav.replaceWith(this.$currentnav);
                    this.$subnav = this.$currentnav;
                }

                this.el.replaceWith($nav);
                this.el = $nav.eq(1);

            },
            addSidebarNav: function ($nav) {
                var deepclone = !(this.options.responsive.level || false),
                    $sidenav = $nav.clone(deepclone, deepclone).removeClass("main-nav").addClass("main-sidebar-nav nav-show").removeAttr("id").addClass(this.options.responsive.theme);

                var $sidebar = $sidenav.wrap("<div class='snav-sidebar'></div>").parent();
                $sidebar.find(".nav-horizontal").removeClass("nav-horizontal").addClass("nav-vertical");
                $(this.options.holder).append($sidebar);

                if (this.options.responsive.level) {
                    var self = this;
                    $sidebar.on("click", "a,.caption", function (event) {
                        event.stopPropagation();
                        var $item = $(this).closest("li");
                        //event.which == 0 for ie8 !
                        if (event.which === 1 || event.which === 0)
                            //click on back link
                            if ($item.hasClass("nav-back")) {
                                event.preventDefault();
                                $item.closest(".nav").prev(".nav").addClass("nav-show").end().remove();
                            } else {
                                var $nav = $item.children().filter('.nav');
                                if ($nav.length) {
                                    event.preventDefault();
                                    $nav.clone().addClass("nav-show").addClass(self.options.responsive.theme)
                                        .prepend("<li class='nav-title'>" + $item.children().filter("a,.caption").eq(0).text() + "</li><li class='nav-back'><a href='#'>" + slang.back + "</a></li>")
                                        .appendTo($sidebar).prev(".nav").removeClass("nav-show");
                                }
                            }
                    });
                } else {
                    $sidenav.find("a,.caption").off("mouseover");
                }

                if (this.options.fixed.limit > 0 && $.mobile === this.options.fixed.mobile) {
                    this.enableFixed();
                }

                if (this.options.templates.header) {
                    $(this.options.templates.header).insertBefore($sidenav);
                }

                $(window).on('resize', function () {
                    clearTimeout(self.resptimeout);
                    self.resptimeout = setTimeout(function () { self.checkResponsive(); }, 100);
                });

                this.checkResponsive();
            },
            enableFixed: function () {
                var self = this;

                $(window).on("scroll", function (_e) {
                    clearTimeout(self.navfixedtimeout);
                    self.navfixedtimeout = setTimeout(function () {
                        if ($(window).scrollTop() > self.options.fixed.limit) {
                            if ($(self.options.fixed.holder).hasClass("nav-fixed")) {
                                return;
                            }

                            self.options.fixed.onAfter.apply(this);
                            $(self.options.fixed.holder).addClass('nav-fixed');
                        } else {
                            self.options.fixed.onBefore.apply(this);
                            $(self.options.fixed.holder).removeClass('nav-fixed');
                        }
                    }, 300);
                    return;
                });

            },
            checkResponsive: function () {
                if (this.options.responsive.width > $(window).outerWidth()) {
                    $(document.body).addClass("active-sidebar-nav");
                }
                else {
                    $(document.body).removeClass("active-sidebar-nav");
                }
            }
        };
        return sNav;
    })();
}(jQuery));;
$(function(){jQuery.validator&&(jQuery.validator.addMethod("sdate",function(e,t,a){if(""!=e){var n=e.split("/").map(function(e){return parseInt(e)});if(n[1]>12)return!1;if(n[1]>6){if(n[2]>30)return!1}else if(n[2]>31)return!1}return!0},slang.vNoValidDate),jQuery.validator.unobtrusive.adapters.add("sdate",null,function(e){e.rules.sdate=e.params}))}),function(e){e.fn.persianDatepicker=function(e){var a="persianDatepicker";if(!this.length)return null;var n=this.data(a);return n||(n=new t(this[0],e),this.data(a,n)),n};var t=function(){function t(t,a){var n=this;n.el=e(t);var s=n.el;n.options=e.extend(!1,{},{months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],dowTitle:["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],shortDowTitle:["ش","ی","د","س","چ","پ","ج"],showGregorianDate:!1,sendGregorianDate:!1,persianNumbers:!0,formatDate:"YYYY/0M/0D",selectedBefore:!1,selectedDate:null,startDate:null,endDate:null,updateinput:!0,prevArrow:"►",nextArrow:"◄",theme:"default",alwaysShow:!1,selectableYears:null,selectableMonths:[1,2,3,4,5,6,7,8,9,10,11,12],cellWidth:30,cellHeight:30,fontSize:15,isRTL:!1,closeOnBlur:!0,calendarPosition:{x:0,y:0},onShow:function(){},onHide:function(){},onSelect:function(){},onRender:function(){}},a);var r=n.options;if(_fontSize=r.fontSize,_cw=parseInt(r.cellWidth),_ch=parseInt(r.cellHeight),n.cellStyle="style='width:"+_cw+"px;height:"+_ch+"px;line-height:"+_ch+"px; font-size:"+_fontSize+"px; ' ",n.headerStyle="style='height:"+_ch+"px;line-height:"+_ch+"px; font-size:"+(_fontSize+2)+"px;' ",n.selectUlStyle="style='margin-top:"+_ch+"px;height:"+(7*_ch+20)+"px; font-size:"+(_fontSize-2)+"px;' ",n.selectMonthLiStyle="style='height:"+(7*_ch+7)/4+"px;line-height:"+(7*_ch+7)/4+"px; width:"+6.7*_cw/3+"px;width:"+6.7*_cw/3+"px\\9;' ",n.selectYearLiStyle="style='height:"+(7*_ch+10)/6+"px;line-height:"+(7*_ch+10)/6+"px; width:"+(6.7*_cw-14)/3+"px;width:"+(6.7*_cw-15)/3+"px\\9;' ",n.footerStyle="",n.jDateFunctions=new jDateFunctions,null!=n.options.startDate&&("today"==n.options.startDate&&(n.options.startDate=n.now().toString("YYYY/0M/0D")),"today"==n.options.endDate&&(n.options.endDate=n.now().toString("YYYY/0M/0D")),n.options.selectedDate=n.options.startDate),null==n.options.selectedDate&&!n.options.showGregorianDate){var i=new RegExp("^([1-9][0-9][0-9][0-9])/([0]?[1-9]|[1][0-2])/([0]?[1-9]|[1-2][0-9]|[3][0-1])$");if(s.is("input")){if(i.test(s.val())&&(n.options.selectedDate=s.val(),n.options.sendGregorianDate)){var o=n.jDateFunctions.getGDate((new persianDate).parse(s.val()))._toString("YYYY/MM/DD"),l=n.el.closest("form"),d=n.el.attr("name");if(d){d=d.replace("String","");var p=e("[name="+d+"]",l);0==p.length?e("<input type='hidden' name='"+d+"'/>").val(o).insertAfter(n.el):p.val(o)}}}else i.test(s.html())&&(n.options.selectedDate=s.html())}if(n.options.sendGregorianDate&&n.el.on("keyup input",function(){var t=new RegExp("^([1-9][0-9][0-9][0-9])/([0]?[1-9]|[1][0-2])/([0]?[1-9]|[1-2][0-9]|[3][0-1])$"),a=n.el.attr("name");if(a){a=a.replace("String","");var s=e("[name="+a+"]",n.el.closest("form"));if(t.test(n.el.val())){var r=n.jDateFunctions.getGDate((new persianDate).parse(n.el.val()))._toString("YYYY/MM/DD");0==s.length?e("<input type='hidden' name='"+a+"'/>").val(r).insertAfter(n.el):s.val(r)}else s.length&&s.val("")}}),n._persianDate=null!=n.options.selectedDate?(new persianDate).parse(n.options.selectedDate):n.now(),null!=r.selectableYears&&-1==r.selectableYears._indexOf(n._persianDate.year)&&(n._persianDate.year=r.selectableYears[0]),-1==n.options.selectableMonths._indexOf(n._persianDate.month)&&(n._persianDate.month=r.selectableMonths[0]),n.persianDate=n._persianDate,n._id="pdp-"+Math.round(1e7*Math.random()),n.persianDate.formatDate=r.formatDate,n.calendar=e('<div id="'+n._id+'" class="pdp-'+r.theme+'" />'),null!=n.options.startDate){n.options.selectableYears=[];for(var h=n.persianDate.parse(n.options.startDate).year;h<=n.persianDate.parse(n.options.endDate).year;h++)n.options.selectableYears.push(h)}(s.attr("pdp-id")||"").length||s.attr("pdp-id",n._id),s.attr({"data-val":!0,"data-val-sdate":!0}),s.addClass("pdp-el").on("focus",function(e){n.show(e)}).addClass("ltr").on("click",function(e){n.show(e)}).sMask({mask:r.formatDate.replace(/[y,m,d,0]/gi,"0"),validchar:/\d/}),s.closest("form").on("submit virtualsubmit",function(e){var t=s.val();if(0!=t.replace(/\_|\//g,"").length||1==s.attr("data-val-required")){var a=t.replace(/\_/g,"").split("/");s.val(a.map(function(e,t){if(0==t)return parseInt(e||"0")<1200?"1300":e;switch(e.length){case 0:return"01";case 1:return"0"==e?"1":"0"+e;default:return e}}).join("/"))}else s.val("")}),r.closeOnBlur&&s.on("blur",function(e){n.calendar.is(":hover")||n.hide(e)}),r.selectedBefore&&(null!=n.options.selectedDate?n.showDate(s,n.persianDate.parse(n.options.selectedDate).toString("YYYY/MM/DD/"+n.jDateFunctions.getWeekday(n.persianDate.parse(n.options.selectedDate)),n.now().gDate,r.showGregorianDate)):n.showDate(s,n.now().toString("YYYY/MM/DD/"+n.jDateFunctions.getWeekday(n.now())),n.now().gDate,r.showGregorianDate)),r.isRTL&&s.addClass("rtl"),n.calendar.length&&!r.alwaysShow&&n.calendar.hide(),e(document).on("mouseup",function(t){var a=t.target,i=n.calendar;s.is(a)||i.is(a)||0!==i.has(a).length||!i.is(":visible")||n.hide();var o=e(".pdp-"+r.theme+" .yearSelect");o.is(t.target)||0!==o.has(t.target).length||o.hide(),(o=e(".pdp-"+r.theme+" .monthSelect")).is(t.target)||0!==o.has(t.target).length||o.hide()});var c=function(){var t=s.offset(),a=t.left+r.calendarPosition.x;a+n.calendar.outerWidth()>e(window).width()&&(a=e(window).width()-n.calendar.outerWidth()),n.calendar.css({top:t.top+s.outerHeight()+r.calendarPosition.y+"px",left:a+"px"})};n.onresize=c,e(window).on("resize",c),e(".body").append(n.calendar),n.render(),c()}return t.prototype={show:function(){if(this.el.prop("disabled")||this.el.prop("readonly"))return this;this.calendar.css("z-index",2).show(),e.each(e(".pdp-el").not(this.el),function(e,t){t.length&&t.options.onHide(t.calendar)}),this.options.onShow(this.calendar),this.onresize()},hide:function(){this.options.onHide(this.calendar),this.options&&!this.options.alwaysShow&&this.calendar.hide()},render:function(){this.calendar.children().remove(),this.header(),this.dows(),this.content(),this.footer(),this.options.onRender()},header:function(){var t=this;_monthYear=e('<div class="" />'),_monthYear.appendTo(this.calendar),_head=e('<div class="pdp-header" '+t.headerStyle+" />"),_head.appendTo(this.calendar),_prevMonth=e('<div class="prevArrow" />').html(this.options.prevArrow).attr("title","ماه قبل"),null==t.options.startDate||t.persianDate.parse(t.options.startDate).year<t.persianDate.year||t.persianDate.parse(t.options.startDate).month<t.persianDate.month?(_prevMonth.on("click",function(){for(prevMonth=t.persianDate.month-1;-1==t.options.selectableMonths._indexOf(prevMonth)&&prevMonth>0;prevMonth--);t.persianDate.addMonth(-(t.persianDate.month-prevMonth)),t.render()}),_prevMonth.removeClass("disabled")):_prevMonth.addClass("disabled"),_prevMonth.appendTo(_head);var n=e('<ul class="monthSelect" '+t.selectUlStyle+" />").hide(),s=e('<ul class="yearSelect" '+t.selectUlStyle+" />").hide(),r=e('<span class="month-text"></span>').html(t.options.months[t.persianDate.month-1]).on("mousedown",function(){return!1}).on("click",function(e){e.stopPropagation(),s.css({display:"none"}),n.css({display:"inline-block"})}),o=e('<span class="year-text"></span>').html(t.options.persianNumbers?t.jDateFunctions.toPersianNums(t.persianDate.year):t.persianDate.year).on("mousedown",function(){return!1}).on("click",function(e){e.stopPropagation(),n.css({display:"none"}),s.css({display:"inline-block"}),s.scrollTop(70)});_startDate=null!=t.options.startDate?t.persianDate.parse(t.options.startDate):t.persianDate.parse("1/1/1"),_endDate=null!=t.options.endDate?t.persianDate.parse(t.options.endDate):t.persianDate.parse("9999/1/1");var l=function(n,r){var o=!1;void 0===n&&void 0===r?(b=t.persianDate.year-7,a=t.persianDate.year+14):0==r?(b=n-6,a=n,o=!0):0==n&&(b=r+1,a=b+6);var l=[];for(i=b;i<a&&b>0;i++)l.push(parseInt(i));e.each(t.options.selectableYears||(o?l.reverse():l),function(a,n){var r=e("<li "+t.selectYearLiStyle+" />").html(t.options.persianNumbers?t.jDateFunctions.toPersianNums(n):n);n==t.persianDate.year&&r.addClass("selected"),r.attr("value",n),r.on("click",function(){t.persianDate.date=1,t.persianDate.year=parseInt(n),_endDate.year!=n&&9999!=_endDate.year||(t.persianDate.month=_endDate.month),_startDate.year!=n&&9999!=_startDate.year||(t.persianDate.month=_startDate.month),t.render()}),o?s.prepend(r):s.append(r)})};for(l(),i=1;i<=12;i++){var d=t.options.months[i-1],p=-1==t.options.selectableMonths._indexOf(i)||_startDate.year==t.persianDate.year&&_startDate.month>i||_endDate.year==t.persianDate.year&&i>_endDate.month?e('<li class="disableMonth" '+t.selectMonthLiStyle+" />").html(d):e("<li "+t.selectMonthLiStyle+" />").html(d);i==t.persianDate.month&&p.addClass("selected"),p.data("month",{month:d,monthNum:i}),p.hasClass("disableMonth")||p.on("click",function(){t.persianDate.date=1,t.persianDate.month=e(this).data("month").monthNum,t.render()}),n.append(p)}s.on("scroll",function(){null==t.options.selectableYears&&(c=e(this).find("li").length,firstYear=parseInt(e(this).children("li:first").val()),lastYear=parseInt(e(this).children("li:last").val()),lisHeight=c/3*(e(this).find("li:first").height()+4),_com=500*e(this).scrollTop().toString().length,e(this).scrollTop()<100*_com.toString().length&&firstYear>=1&&l(firstYear,0),_com=100*e(this).scrollTop().toString().length,lisHeight-e(this).scrollTop()>-_com&&lisHeight-e(this).scrollTop()<_com&&(l(0,lastYear),e(this).scrollTop(e(this).scrollTop()-50)),e(this).scrollTop()<_com.toString().length&&firstYear>=30&&e(this).scrollTop(100*_com.toString().length))}),_monthYear.append(n).append(s);var h=e('<div class="month" />').append(r);_head.append(h),_nextMonth=e('<div class="nextArrow" />').html(this.options.nextArrow).attr("title","ماه بعد"),null==t.options.endDate||t.persianDate.parse(t.options.endDate).year>t.persianDate.year||t.persianDate.parse(t.options.endDate).month>t.persianDate.month?(_nextMonth.on("click",function(){for(nextMonth=t.persianDate.month+1;-1==t.options.selectableMonths._indexOf(nextMonth)&&nextMonth<13;nextMonth++);t.persianDate.addMonth(nextMonth-t.persianDate.month),t.render()}),_nextMonth.removeClass("disabled")):_nextMonth.addClass("disabled"),_nextMonth.appendTo(_head),_prevYear=e('<div class="prevArrow" />').html(this.options.prevArrow).attr("title","سال قبل"),null==t.options.startDate||t.persianDate.parse(t.options.startDate).year<t.persianDate.year||t.persianDate.parse(t.options.startDate).month<t.persianDate.month?(_prevYear.on("click",function(){prevYear=t.persianDate.year-1,t.persianDate.addYear(-(t.persianDate.year-prevYear)),t.render()}),_prevYear.removeClass("disabled")):_prevYear.addClass("disabled"),_prevYear.appendTo(_head);var D=e('<div calss="year" />').append(o);_head.append(D),_nextYear=e('<div class="nextArrow" />').html(this.options.nextArrow).attr("title","سال بعد"),null===t.options.endDate||t.persianDate.parse(t.options.endDate).year>t.persianDate.year||t.persianDate.parse(t.options.endDate).month>t.persianDate.month?(_nextYear.on("click",function(){nextYear=t.persianDate.year+1,t.persianDate.addYear(nextYear-t.persianDate.year),t.render()}),_nextYear.removeClass("disabled")):_nextYear.addClass("disabled"),_nextYear.appendTo(_head)},dows:function(){for(_row=e('<div class="dows" />'),i=0;i<7;i++)_cell=e('<div class="dow cell " '+this.cellStyle+" />").html(this.options.shortDowTitle[i]),_cell.appendTo(_row);_row.appendTo(this.calendar)},content:function(){var t=this;_days=e('<div class="days" />'),_days.appendTo(this.calendar),jd=t.persianDate,jd.date=1,_start=t.jDateFunctions.getWeekday(t.persianDate),_end=t.jDateFunctions.getLastDayOfMonth(t.persianDate);for(var a=0,n=0;a<6;a++){_row=e("<div />");for(var s=0;s<7;s++,n++)n<_start||n-_start+1>_end?_cell=e('<div class="nul cell " '+t.cellStyle+" />").html("&nbsp;"):(_dt=t.getDate(t.persianDate,n-_start+1),_today="",_selday="",_disday="",0==t.now().compare(_dt)&&(_today="today"),null==t.options.startDate||-1!=t.persianDate.parse(t.options.startDate).compare(_dt)&&1!=t.persianDate.parse(t.options.endDate).compare(_dt)||(_disday="disday"),null!=t.options.selectedDate?t.persianDate.parse(t.options.selectedDate).date==n-_start+1&&(_selday="selday"):n-_start+1==t.now().date&&(_selday="selday"),_fri=6==s?"friday":"",_cell=e('<div class="day cell '+_fri+" "+_today+" "+_selday+" "+_disday+'" '+t.cellStyle+" />"),_cell.attr("data-jdate",_dt.toString("YYYY/MM/DD")),_cell.attr("data-gdate",t.jDateFunctions.getGDate(_dt)._toString("YYYY/MM/DD")),_cell.html(t.options.persianNumbers?t.jDateFunctions.toPersianNums(n-_start+1):n-_start+1),(null==t.options.startDate||-1!=t.persianDate.parse(t.options.startDate).compare(_dt)&&1!=t.persianDate.parse(t.options.endDate).compare(_dt))&&_cell.on("click",function(){var a=e(this).data("gdate");if(t.calendar.find(".day").removeClass("selday"),e(this).addClass("selday"),t.options.showGregorianDate?t.showDate(t.el,e(this).data("jdate"),a,!0):t.showDate(t.el,e(this).data("jdate"),a,!1),t.hide(),t.el.valid&&t.el.is(":input")&&t.el.valid(),t.options.sendGregorianDate){var n=t.el.closest("form"),s=t.el.attr("name");if(s){s=s.replace("String","");var r=e("[name="+s+"]",n);0==r.length?e("<input type='hidden' name='"+s+"'/>").val(a).insertAfter(t.el):r.val(a)}}})),_cell.appendTo(_row);_row.appendTo(_days)}},footer:function(){var t=this;_footer=e('<div class="pdp-footer" '+t.footerStyle+" />"),_footer.appendTo(this.calendar),t.options.selectableMonths._indexOf(t.persianDate.month)>-1&&(_goToday=e('<a class="goToday pdb-btn" />'),_goToday.attr("data-jdate",t.now().toString("YYYY/MM/DD/DW")),_goToday.attr("data-gdate",t.jDateFunctions.getGDate(t.now())),_goToday.attr("href","javascript:;").html("امروز"),null==t.options.startDate&&_goToday.on("click",function(){if(t.persianDate=t.now(),t.showDate(t.el,e(this).data("jdate"),e(this).data("gdate"),t.options.showGregorianDate),t.calendar.find(".day").removeClass("selday"),t.render(),t.options.sendGregorianDate){var a=t.jDateFunctions.getGDate((new persianDate).parse(t.el.val()))._toString("YYYY/MM/DD"),n=t.el.closest("form"),s=t.el.attr("name");if(s){s=s.replace("String","");var r=e("[name="+s+"]",n);0==r.length?e("<input type='hidden' name='"+s+"'/>").val(a).insertAfter(t.el):r.val(a)}}t.calendar.find(".today").addClass("selday"),t.hide()}),_goToday.appendTo(_footer)),_closePdp=e('<a class="closePdp pdb-btn" />').attr("href","javascript:;").html("بستن").on("click",function(){t.hide()}),_closePdp.appendTo(_footer),e("<div class='clear'></div>").appendTo(_footer),_footer.appendTo(this.calendar)},showDate:function(e,t,a,n){var s=this;t=s.persianDate.parse(t).toString(s.options.formatDate),a=new Date(a)._toString(s.options.formatDate),this.options.updateinput&&(e.is("input:text")?n?e.val(a).trigger("change"):e.val(t).trigger("change"):n?e.html(a):e.html(t)),e.data("jdate",t),e.data("gdate",a),this.options.onSelect.call(this,e,t)},getDate:function(e,t){return e.date=t,e.day=this.jDateFunctions.getWeekday(e),e},now:function(){return this.jDateFunctions.gregorian_to_jalali(new Date)}},t}();Number.prototype.padLeft=function(e,t){var a=String(e||10).length-String(this).length+1;return a>0?new Array(a).join(t||"0")+this:this},Date.prototype._toString=function(e){return months=["Januray","February","March","April","May","June","Julay","August","September","October","November","December"],dows=["Sun","Mon","Tue","Wed","Tur","Fri","Sat"],void 0===e||"default"==e?this.toLocaleDateString():e.replace("YYYY",this.getFullYear()).replace("MM",this.getMonth()+1).replace("DD",this.getDate()).replace("0M",this.getMonth()+1>9?this.getMonth()+1:"0"+(this.getMonth()+1)).replace("0D",this.getDate()>9?this.getDate():"0"+this.getDate()).replace("hh",0==this.getHours()?(new Date).getHours():this.getHours()).replace("mm",0==this.getMinutes()?(new Date).getMinutes():this.getMinutes()).replace("ss",0==this.getSeconds()?(new Date).getSeconds():this.getSeconds()).replace("0h",this.getHours()>9?this.getHours():"0"+this.getHours()).replace("0m",this.getMinutes()>9?this.getMinutes():"0"+this.getMinutes()).replace("0s",this.getSeconds()>9?this.getSeconds():"0"+this.getSeconds()).replace("ms",0==this.getMilliseconds()?(new Date).getMilliseconds():this.getMilliseconds()).replace("tm",this.getHours()>=12&&this.getMinutes()>0?"PM":"AM").replace("NM",months[this.getMonth()]).replace("DW",this.getDay()).replace("ND",dows[this.getDay()])},Array.prototype._indexOf=function(t){return e.inArray(t,this)}}(jQuery);var persianDate=function(){function e(){var e=this;e.months=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],e.dowTitle=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],e.year=1300,e.month=1,e.date=1,e.day=1,e.gDate=new Date}return e.prototype={now:function(){return(new jDateFunctions).gregorian_to_jalali(new Date)},addDay:function(t){for(var a=new jDateFunctions,n=t>0?t:-t,s=0;s<n;s++){var r=new e;r.month=this.month,r.year=this.year,r=r.addMonth(-1);var i=t>0?a.getLastDayOfMonth(this):a.getLastDayOfMonth(r);t>0?this.date+=1:this.date-=1,t>0?this.date>i&&(this.date=1,this.addMonth(1)):t<0&&(this.month>1&&this.date>i?(this.date=1,this.addMonth(1)):0==this.date&&(this.addMonth(-1),this.date=i))}return this},addMonth:function(e){for(var t=e>0?e:-e,a=0;a<t;a++)e>0?this.month+=1:this.month-=1,13==this.month?(this.month=1,this.addYear(1)):0==this.month&&(this.month=12,this.addYear(-1));return this},addYear:function(e){return this.year+=e,this},compare:function(e){return e.year==this.year&&e.month==this.month&&e.date==this.date?0:e.year>this.year||e.year==this.year&&e.month>this.month||e.year==this.year&&e.month==this.month&&e.date>this.date?1:-1},parse:function(t){arr=t.split("/"),y=arr[0],m=arr[1],d=arr[2];var a=new e;return jdf=new jDateFunctions,a.year=parseInt(y),a.month=parseInt(m),a.date=parseInt(d),a.day=jdf.getWeekday(a),a.gDate=jdf.jalali_to_gregorian(a),a},toString:function(e){return void 0===e?this.year+"/"+this.month+"/"+this.date:e.replace("YYYY",this.year).replace("MM",this.month).replace("DD",this.date).replace("0M",this.month>9?this.month:"0"+this.month.toString()).replace("0D",this.date>9?this.date:"0"+this.date.toString()).replace("hh",this.gDate.getHours()).replace("mm",this.gDate.getMinutes()).replace("ss",this.gDate.getSeconds()).replace("0h",this.gDate.getHours()>9?this.gDate.getHours():"0"+this.gDate.getHours()).replace("0m",this.gDate.getMinutes()>9?this.gDate.getMinutes():"0"+this.gDate.getMinutes()).replace("0s",this.gDate.getSeconds()>9?this.gDate.getSeconds():"0"+this.gDate.getSeconds()).replace("tm",this.gDate.getHours()>=12&&this.gDate.getMinutes()>0?"ب.ظ":"ق.ظ").replace("ms",this.gDate.getMilliseconds()).replace("NM",this.months[this.month-1]).replace("DW",this.day).replace("ND",this.dowTitle[this.day])}},e}(),jDateFunctions=function(){function e(){}return e.prototype={toPersianNums:function(e){for(strnum=e.toString(),nums=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],res="",i=0;i<strnum.length;i++)res+=nums[parseInt(strnum[i])];return res},gregorian_to_jalali:function(e){return gy=e.getFullYear(),gm=e.getMonth()+1,gd=e.getDate(),g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334],gy>1600?(jy=979,gy-=1600):(jy=0,gy-=621),gy2=gm>2?gy+1:gy,days=365*gy+parseInt((gy2+3)/4)-parseInt((gy2+99)/100)+parseInt((gy2+399)/400)-80+gd+g_d_m[gm-1],jy+=33*parseInt(days/12053),days%=12053,jy+=4*parseInt(days/1461),days%=1461,days>365&&(jy+=parseInt((days-1)/365),days=(days-1)%365),jm=days<186?1+parseInt(days/31):7+parseInt((days-186)/30),jd=1+(days<186?days%31:(days-186)%30),e=new Date,pd=new persianDate,pd.year=jy,pd.month=jm,pd.date=jd,pd.gDate=e,pd},jalali_to_gregorian:function(e){for(jy=e.year,jm=e.month,jd=e.date,jy>979?(gy=1600,jy-=979):gy=621,days=365*jy+8*parseInt(jy/33)+parseInt((jy%33+3)/4)+78+jd+(jm<7?31*(jm-1):30*(jm-7)+186),gy+=400*parseInt(days/146097),days%=146097,days>36524&&(gy+=100*parseInt(--days/36524),days%=36524,days>=365&&days++),gy+=4*parseInt(days/1461),days%=1461,days>365&&(gy+=parseInt((days-1)/365),days=(days-1)%365),gd=days+1,sal_a=[0,31,gy%4==0&&gy%100!=0||gy%400==0?29:28,31,30,31,30,31,31,30,31,30,31],gm=0;gm<13&&(v=sal_a[gm],!(gd<=v));gm++)gd-=v;return dt=new Date,new Date(gy,gm-1,gd,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds())},getGDate:function(e){return this.jalali_to_gregorian(e)},getWeekday:function(e){return[1,2,3,4,5,6,0][this.jalali_to_gregorian(e).getDay()]},getLastDayOfMonth:function(e){return y=e.year,m=e.month,m>=1&&m<=6?31:m>=7&&m<12||this.isLeapYear(y)?30:29},isLeapYear:function(e){return b=e%33,(e>1342?[1,5,9,13,17,22,26,30]:[1,5,9,13,17,21,26,30])._indexOf(b)>-1}},e}();;
$(function () {

    if (jQuery.validator) {

        $.validator.methods.range = function (value, element, param) {
            var globalizedValue = value.replace($.fn.sFloat.defaults.decimalseparator, ".");
            globalizedValue = globalizedValue.replace(new RegExp("\\" + $.fn.sSeparator.defaults.separator, "g"), "");
            return this.optional(element) || (globalizedValue >= param[0] && globalizedValue <= param[1]);
        };

        $.validator.unobtrusive.options = {
            errorPlacement: function (_error, element) {
                var $element = $(element);
                if ($element.hasClass("input-validation-error")) {
                    $element.parent().parent().find(".input-group").addClass("input-holder-validation-error");
                }
            },
            success: function (_data, element) {
                $(element).parent().parent().find(".input-group").removeClass("input-holder-validation-error");
                return true;
            }
        };

        //Add minselect validation rules
        jQuery.validator.addMethod("minselect", function (_value, element, params) {
            var checkedcount = $(element).closest("form").find("[name='" + element.name + "']:checked").length;
            return checkedcount === 0 || checkedcount >= params;
        }, "");

        jQuery.validator.unobtrusive.adapters.add("minselect", null, function (options) {
            options.rules['minselect'] = parseInt(options.message);
            options.messages['minselect'] = String.format(slang["minselection"], options.message);
        });

        //Add minselect validation rules
        jQuery.validator.addMethod("maxselect", function (_value, element, params) {
            return $(element).closest("form").find("[name='" + element.name + "']:checked").length <= params;
        }, "");

        jQuery.validator.unobtrusive.adapters.add("maxselect", null, function (options) {
            options.rules['maxselect'] = parseInt(options.message);
            options.messages['maxselect'] = String.format(slang["maxselection"], options.message);
        });

        //Add sfile validation Rules
        jQuery.validator.addMethod("sfile", function (value, element, params) {

            if (params.required) {
                if (value == "") {
                    var _uploaderobj = $(element).data("sUploader");
                    if (_uploaderobj.options.type === "proxy" && _uploaderobj.filecount > 0) {
                        return true;
                    } else if (params.fileholder) {
                        return true;
                    } else {
                        jQuery.validator.messages.sfile = slang.vFileRequired;
                        return false;
                    }
                }
            }

            if (value != "") {
                if (params.accept) {
                    var _ext = value.split('.').pop(), _VExt = params.accept.split(','), validFlag = false;
                    for (var i = 0; i < _VExt.length; i++)
                        if (_ext.toLowerCase() === _VExt[i].toLowerCase()) {
                            validFlag = true;
                            break;
                        }
                    if (!validFlag) {
                        jQuery.validator.messages.sfile = String.format(slang.vAccept, _VExt.join(' , '));
                        return false;
                    }
                } else if (params.noaccept) {
                    var _ext = value.split('.').pop(), _NVExt = params.noaccept.split(',');
                    for (var i = 0; i < _NVExt.length; i++)
                        if (_ext.toLowerCase() === _NVExt[i].toLowerCase()) {
                            jQuery.validator.messages.sfile = String.format(slang.vNoAccept, _NVExt.join(' , '));
                            return false;
                        }
                }
                //element.files is not supported in IE8
                if (params.maxsize && element.files) {
                    if (element.files[0].size / 1024 > params.maxsize) {
                        if (params.maxsize < 1024)
                            jQuery.validator.messages.sfile = String.format(slang.vMaxSize, params.maxsize + ' KB');
                        else {
                            if (params.maxsize % 1024 === 0) {
                                jQuery.validator.messages.sfile = String.format(slang.vMaxSize, params.maxsize / 1024 + ' MB');
                            } else {
                                jQuery.validator.messages.sfile = String.format(slang.vMaxSize, (params.maxsize / 1024).toFixed(2) + ' MB');
                            }
                        }

                        return false;
                    }
                }
            }

            if ($(element).data("active-uploading") > 0) {
                jQuery.validator.messages.sfile = slang.activeUploadingWarning;
                return false;
            }

            return true;
        }, "");

        jQuery.validator.unobtrusive.adapters.add("sfile", ['required', 'accept', 'noaccept', 'maxsize', 'minsize', 'fileholder'], function (options) {
            options.rules['sfile'] = options.params;
        });

        //Add svoice validation Rules
        jQuery.validator.addMethod("svoice", function (value, element, params) {

            if (params.required) {
                if (value == "") {
                    var _recorderObj = $(element).data("sVoiceRecorder");
                    if (_recorderObj.filecount > 0) {
                        return true;
                    } else {
                        jQuery.validator.messages.svoice = slang.voiceRequired;
                        return false;
                    }
                }
            }

            if ($(element).data("active-uploading") > 0) {
                jQuery.validator.messages.svoice = slang.activeUploadingWarning;
                return false;
            }

            if ($(element).data("active-recording") > 0) {
                jQuery.validator.messages.svoice = slang.activeRecordingWarning;
                return false;
            }

            return true;
        }, "");

        jQuery.validator.unobtrusive.adapters.add("svoice", ['required'], function (options) {
            options.rules['svoice'] = options.params;
        });

        //Add snumber Validation rule
        jQuery.validator.addMethod("snumber", function (value, element, _params) {
            if (value === "")
                return true;

            if ($.fn.sFloat) {
                var $element = $(element),
                    sfloatobj = $element.data("sFloat"),
                    dseparator = ".";

                if (sfloatobj)
                    dseparator = sfloatobj.options.decimalseparator;

                if ($element.hasClass("negative-number")) {
                    if (new RegExp('^-?\\d+((\\.|\\' + dseparator + ')\\d+)?$').test(toEnglishNumber(value.replace(/\,/g, "")))) {
                        return true;
                    }
                } else {
                    if (new RegExp('^\\d+((\\.|\\' + dseparator + ')\\d+)?$').test(toEnglishNumber(value.replace(/\,/g, "")))) {
                        return true;
                    }
                }
                return false;
            }

            return true;
        }, slang.vNumber.toString());

        jQuery.validator.unobtrusive.adapters.add("snumber", function (options) {
            options.rules['snumber'] = options.params;
        });
    }
});

(function ($) {
    "use strict";
    $.fn.closeNearestContainer = function () {
        if (this.length === 0) {
            return;
        }

        var container = this.closest('.sdialog').sDialog();
        if (container == null) {
            container = this.closest('.stip').sTip();
        }

        if (container != null) {
            container.close();
        }
    };

    ///////////////////// sDialog ///////////////////
    var __activedialogs = null,
        __preventescape = false;

    $.sDialog = function (idSelector, options) {
        if (idSelector.length == 0) {
            console.error("empty idSelector is not allowed");
            return null;
        }

        var $element = $(idSelector);
        if ($element.length === 0) {
            if (idSelector[0] != '#') {
                console.error("only id selectors are allowed");
                return null;
            }

            $element = $("<div id='" + idSelector.replace('#', '') + "' class='sdialog'></div>");
        }

        return $element.sDialog(options);
    }

    $.fn.closeNearestDialog = function () {
        if (this.length === 0) {
            return;
        }

        this.closest('.sdialog').sDialog().close();
    };

    $.fn.sDialog = function (options) {
        if (this.length === 0) {
            console.error("legacy sDialog detected");
            return null;
        }

        var $element = this,
            pluginName = 'sDialog';

        if (__activedialogs == null) {
            __activedialogs = new Array();
        }

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sDialog($element, options);
            $element.data(pluginName, instance);
        } else if (options) {
            //For cloned element that el point to pervious el
            instance.el = $element;
            instance = instance.update(options);
        } else {
            //For cloned element that el point to pervious el
            instance.el = $element;
        }
        return instance;
    };

    $.fn.sDialog.defaults = {
        title: '',
        dialogclass: "",
        cache: false,
        clearcontentincache: false,
        titlebar: true,
        modal: false,
        zindex: 2,
        closeonmodal: true,
        closeable: true,
        dragable: true,
        autofocusfirsteditor: true,
        onConfirmClose: function () {
            if (!confirm(slang.confirmclosedialog))
                return false;
        },
        onBeforeOpen: [function () { }],
        onBeforeClose: [function () { }],
        onChange: [function () { }],
        onAfterOpen: [function () { }],
        onAfterClose: [function () { }]
    };

    var sDialog = (function () {
        function sDialog(element, useroptions) {

            //extend options
            this.el = $(element);

            //true for deep clone object
            this.options = $.extend(true, {}, $.fn.sDialog.defaults);
            this.update(useroptions);

            this.ischanged = false;
            this.uid = Math.round(Math.random() * 1e7);
            this.content = this.el.children();

            var self = this;
            this.el.css('z-index', this.options.zindex - 1).
                on('click', function (e) {
                    if (!$(e.target).hasClass('non-activable'))
                        self.active();
                    return true;
                });

            this.el.on('updatePosition', function () {
                self.updatePosition();
            });

            this.el.on("change input", ":input:not(.slov-search)", function () {
                self.ischanged = true;
            });

            this.el.on("changeData", function () {
                self.ischanged = true;
            });

            this.el.on('change', function () {
                for (var i = self.options.onChange.length - 1; i >= 0; i--) {
                    self.options.onChange[i].call(self, this);
                }
            });
        }

        sDialog.prototype = {
            update: function (useroptions) {

                if (!useroptions)
                    return this;

                var settings = $.extend(true, {}, this.options, useroptions);

                if (useroptions.onBeforeClose) {
                    this.options.onBeforeClose.push(useroptions.onBeforeClose);
                    settings.onBeforeClose = this.options.onBeforeClose;
                }

                if (useroptions.onAfterClose) {
                    this.options.onAfterClose.push(useroptions.onAfterClose);
                    settings.onAfterClose = this.options.onAfterClose;
                }

                if (useroptions.onBeforeOpen) {
                    this.options.onBeforeOpen.push(useroptions.onBeforeOpen);
                    settings.onBeforeOpen = this.options.onBeforeOpen;
                }

                if (useroptions.onAfterOpen) {
                    this.options.onAfterOpen.push(useroptions.onAfterOpen);
                    settings.onAfterOpen = this.options.onAfterOpen;
                }

                if (useroptions.onChange) {
                    this.options.onChange.push(useroptions.onChange);
                    settings.onChange = this.options.onChange;
                }

                this.options = settings;

                return this;

            },
            object: function () {
                return this.el;
            },
            scrollTop: function (top) {
                this.el.find('.sdialog-content').scrollTop(top);
                return this;
            },
            active: function ($dialog) {
                $dialog = $dialog || this.el;
                if (!$dialog.hasClass('active')) {
                    $(__activedialogs).removeClass('active').css('z-index', this.options.zindex - 1);

                    $dialog.addClass('active').css('z-index', this.options.zindex)
                        .prev('.modal').css("z-index", this.options.zindex).addClass('show');
                }
                return this;
            },
            open: function () {

                //check dont add two same dialog to active dialogs
                if (!this.el.hasClass('show')) {
                    var _$dialog = this.render();
                    this.active(_$dialog);

                    for (var i = 0, len = this.options.onBeforeOpen.length; i < len; i++) {
                        this.options.onBeforeOpen[i].call(this, _$dialog);
                    }

                    _$dialog.trigger("beforeOpen");

                    if (this.el.parent().length)
                        this.el.replaceWith(_$dialog);
                    else {
                        $(".body").append(_$dialog);
                    }

                    //filter for exist modal
                    this.el = _$dialog.filter(".sdialog");

                    var $window = $(window),
                        winwidth = $window.width(),
                        winheight = $window.height();

                    var self = this;
                    $window.on('resize.sdialog' + this.uid, function (_event) {
                        clearTimeout(self.resizetimer);
                        self.resizetimer = setTimeout(function () {
                            if (!$.mobile || winwidth !== $window.width() && winheight !== $window.height())
                                self.updatePosition();

                            winwidth = $window.width();
                            winheight = $window.height();
                        }, 3e2);
                        return;
                    });

                    __activedialogs.push(this.el);

                    this.updatePosition(function () {
                        _$dialog.css('width', '').addClass('show active');
                    });

                    if (self.options.autofocusfirsteditor && !$.mobile) {
                        //when focus window scroll to top
                        setTimeout(function () {
                            _$dialog.find(':input:not([type="hidden"],button,[type="submit"],.hidden :input,.disabled :input)').eq(0).trigger('focus');
                        }, 600);
                    }
                } else {
                    this.el.find(".sdialog-title").text(this.options.title);

                    this.active();
                }

                for (var i = 0, len = this.options.onAfterOpen.length; i < len; i++) {
                    this.options.onAfterOpen[i].call(this, this.el);
                }
                this.el.trigger("afterOpen");

                return this;
            },
            close: function () {
                var _index = -1;

                //remove dialog from active dialogs
                for (var i = 0, len = __activedialogs.length; i < len; i++) {
                    if (this.el.get(0) === __activedialogs[i].get(0)) {
                        _index = i;
                        break;
                    }
                }
                __activedialogs.splice(_index, 1);

                this.el.trigger("closeDialog");

                $(window).off('resize.sdialog' + this.uid);

                //active last opened dialog
                if (__activedialogs.length)
                    $(__activedialogs[__activedialogs.length - 1]).addClass('active').css('z-index', this.options.zindex);

                if (this.options.cache) {
                    for (var i = 0, len = this.options.onBeforeClose.length; i < len; i++) {
                        this.options.onBeforeClose[i].call(this, this.el);
                    }
                    this.el.trigger("beforeClose");

                    this.el.add(this.el.prev('.modal')).removeClass('show');

                    if (this.options.clearcontentincache)
                        this.el.empty();

                    for (var i = 0, len = this.options.onAfterClose.length; i < len; i++) {
                        this.options.onAfterClose[i].call(this, this.el);
                    }
                    this.el.trigger("afterClose");
                }
                else {
                    for (var i = 0, len = this.options.onBeforeClose.length; i < len; i++) {
                        this.options.onBeforeClose[i].call(this, this.el);
                    }
                    this.el.trigger("beforeClose");

                    var $mustbedeleted = this.el.add(this.el.prev('.modal')).detach();

                    for (var i = 0, len = this.options.onAfterClose.length; i < len; i++) {
                        this.options.onAfterClose[i].call(this, this.el);
                    }
                    this.el.trigger("afterClose");

                    $mustbedeleted.remove();

                    //Using try because of exception in IE8
                    try {
                        delete this;
                    } catch (e) {
                        return;
                    }
                }

            },
            updatePosition: function (callback) {
                var $window = $(window),
                    //+1 for floor in outerHeight
                    _diff = $.mobile ? 0 : ($('.navbar').outerHeight() || 0) + 1;

                //+1 and -1 for floor in outerWidth
                this.el.css({
                    'top': Math.max(_diff, ($window.height() - this.el.eq(0).outerHeight() - 1) / 2) + $window.scrollTop(),
                    'left': Math.max(0, $window.width() - this.el.outerWidth() - 1) / 2
                });

                if (callback)
                    callback.call(this);

                return this;
            },
            render: function () {
                var self = this,
                    $dialog = this.el.clone(true).empty().addClass(this.options.dialogclass).addClass("sdialog");

                if (this.options.titlebar)
                    $('<div class="sdialog-titlebar"><span class="sdialog-title"></span></div>')
                        .find(".sdialog-title").text(this.options.title).end().appendTo($dialog);

                if (this.options.closeable) {
                    $('<button type="button" class="sdialog-close non-activable"></button>').on("click.sdialog", function () {
                        if (self.ischanged)
                            if (self.options.onConfirmClose.call(this) == false) {
                                return;
                            }

                        self.close();
                        return;
                    }).prependTo($dialog.find(".sdialog-titlebar"));

                    $dialog.on('keyup.sdialog', function (event) {
                        //check type file for prevent close in choose file dialog with escape
                        if (!__preventescape && $(event.target).attr("type") != "file" && (event.keyCode || event.which) === 27) {
                            event.preventDefault();
                            event.stopPropagation();
                            if (self.ischanged) {
                                if (self.options.onConfirmClose.call(this) == false) {
                                    return;
                                }
                            }

                            self.close();
                        }
                        __preventescape = false;
                        return;
                    });
                } else {
                    $dialog.off('keyup.sdialog');
                }

                $('<div class="sdialog-content"></div>').html(this.content).appendTo($dialog);

                if (this.options.dragable && $.fn.sDrag) {
                    $dialog.sDrag({
                        handle: ".sdialog-titlebar",
                        children: null,
                        revertposition: false
                    });
                }

                if (this.options.modal) {
                    var _$modal = $('<div class="modal"></div>');

                    if (this.options.closeonmodal) {
                        _$modal.on("click.sdialog", function (event) {
                            event.stopPropagation();
                            if ($(event.target).is(".modal")) {
                                self.confirmAndClose();
                            }
                        });
                    }

                    $dialog = _$modal.add($dialog);
                }

                return $dialog;
            },
            html: function (data) {
                if (typeof data === 'string') {
                    this.content = $(data);
                } else {
                    this.content = data;
                }

                if (this.el.hasClass('show')) {
                    var $content = this.el.find('.sdialog-content');
                    $content.replaceWith($content.clone(true).empty().append(this.content));
                    this.updatePosition();
                }

                this.ischanged = false;
                return this;
            },
            confirmAndClose: function () {
                var self = this;
                if (self.ischanged) {
                    if (self.options.onConfirmClose.call(this) == false) {
                        return false;
                    }
                }

                self.close();
                return true;
            }
        };
        return sDialog;
    })();

    //////////////////// sColorfiy /////////////////////////

    $.fn.sColorify = function (scolor, clear, callback) {
        this.data('style', this.attr('style') || "").css('background-color', scolor);
        if (scolor == 'transparent')
            this.css('background-color', '');
        if (clear) {
            var tag = this;
            setTimeout(function () {
                tag.attr('style', tag.data('style') || '');
            }, 400);
        }
        if (callback)
            callback.call(this);

        return this;
    };


    ///////////////// sContextMenu /////////////////////

    $.fn.sContextMenu = function (options) {

        if (this.length === 0) {
            return null;
        }

        var pluginName = 'sContextMenu';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sContextMenu(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sContextMenu.defaults = {
        menuitemsselector: '.context-menu',
        optionbuttonenable: true,
        buttontext: slang.options,
        buttonclass: "btn icon-black more",
        rightclickenable: true,
        itemselector: ".item-content",
        showoptions: {
            width: 'auto'
        }
    };

    var sContextMenu = (function () {
        function sContextMenu(element, userOptions) {
            //extend options
            this.options = $.fn.sContextMenu.defaults;
            this.el = $(element);
            this.uid = Math.round(Math.random() * 1e7);
            this.update(userOptions);
        }

        sContextMenu.prototype = {
            enableRightClick: function () {
                var settings = this.options;

                this.el.on("contextmenu touchhold", settings.itemselector, function (event) {
                    if ($(event.target).is("a,img,:input"))
                        return;

                    event.preventDefault();
                    event.stopPropagation();

                    var _$item = $(this), _$menu;

                    if (_$item.is("#i_-1"))
                        return true;

                    if (_$item.is("li")) {
                        _$menu = _$item.children().filter(".stree-content").find(settings.menuitemsselector).eq(0);

                        //not tree-view
                        if (!_$menu.length)
                            _$menu = _$item.find(settings.menuitemsselector).eq(0);
                    }
                    else {
                        if (_$item.closest(".items-holder").find(".item-select:checked").length > 1) {
                            _$menu = _$item.closest("form").find(".box-button .btn-group").clone(true, true).children().wrap("<div class='item'></div>").parent().wrapAll("<div class='menu-items'></div>").parent().find(".item.btn").removeClass("btn").end();

                            if (_$menu.length === 0)
                                _$menu = _$item.closest("form").find(".sgrid-box-dock .sdetails-menu").clone(true, true).children().wrap("<div class='item'></div>").parent().wrapAll("<div class='menu-items'></div>").parent().find(".item.btn").removeClass("btn").end();

                            _$menu.find(".show").removeClass("show");

                        }
                        else {
                            _$menu = _$item.find(settings.menuitemsselector).eq(0);
                        }
                    }

                    if (_$menu.length && _$menu.find(".item").length) {
                        _$item.sTip($.extend({}, {
                            content: _$menu.clone(true, true).data("originalelement", _$menu),
                            position: {
                                top: event.pageY,
                                left: event.pageX
                            },
                            group: 'contextmenu',
                            closegroup: true,
                            cache: true,
                            onAfterClose: function () {
                                _$item.removeClass('active-context');
                            },
                            onBeforeOpen: function ($tip) {
                                $tip.sMenu();
                            }
                        }, settings.showoptions)).open();

                        _$item.addClass("active-context");
                    } else {
                        $(window).trigger("closetipcontextmenu");
                    }

                    return false;
                });
            },
            enableOptionButton: function ($items) {
                var settings = this.options;
                $items = $items || this.el.find(settings.itemselector);

                for (var i = 0, _len = $items.length; i < _len; i++) {

                    var _$item = $items.eq(i), _$menu;

                    if (_$item.is("#i_-1"))
                        continue;

                    if (_$item.is("li")) {
                        _$menu = _$item.children().filter(".stree-content").find(settings.menuitemsselector).eq(0);

                        //not tree-view
                        if (!_$menu.length)
                            _$menu = _$item.find(settings.menuitemsselector).eq(0);
                    }
                    else {
                        _$menu = _$item.find(settings.menuitemsselector).eq(0);
                    }

                    if (_$menu.length === 0 || _$menu.find(".item").length === 0)
                        continue;

                    $('<button type="button" class="option-btn"></button>')
                        .addClass(settings.buttonclass).text(settings.buttontext)
                        .on('dblclick', function (event) {
                            event.stopPropagation();
                        })
                        .on('click', function (event) {
                            event.stopPropagation();

                            var _$btn = $(this),
                                _$menu = _$btn.next();

                            if (_$btn.closest(".items-holder").find(".item-select:checked").length > 1) {
                                _$menu = _$btn.closest("form").find(".box-button .btn-group").clone(true, true).children().wrap("<div class='item'></div>").parent().wrapAll("<div class='menu-items'></div>").parent().find(".item.btn").removeClass("btn").end();

                                if (_$menu.length === 0)
                                    _$menu = _$btn.closest("form").find(".sgrid-box-dock .sdetails-menu").clone(true, true).children().wrap("<div class='item'></div>").parent().wrapAll("<div class='menu-items'></div>").parent().find(".item.btn").removeClass("btn").end();

                                _$menu.find(".show").removeClass("show");
                            }

                            _$btn.sTip($.extend({}, {
                                content: _$menu.clone(true, true).data("originalelement", _$menu),
                                group: 'contextmenu',
                                closegroup: true,
                                cache: true,
                                onBeforeOpen: function () {
                                    _$btn.closest(settings.itemselector).addClass("active-context");
                                    this.tip.sMenu();
                                },
                                onAfterClose: function () {
                                    _$btn.closest(settings.itemselector).removeClass('active-context');
                                }
                            }, settings.showoptions)).toggle();

                        }).insertBefore(_$menu);
                }
            },
            update: function (userOptions) {
                this.options = $.extend({}, $.fn.sContextMenu.defaults, userOptions);

                if (this.options.rightclickenable)
                    this.enableRightClick();

                var self = this;
                this.el.on('contentChange', function (_event, data) {
                    if (self.options.optionbuttonenable)
                        self.enableOptionButton(data.items);
                    //for trigger
                    return false;
                });

                if (this.options.optionbuttonenable)
                    this.enableOptionButton(this.el.find(this.options.itemselector));

                return this;
            }
        };
        return sContextMenu;
    })();


    /////////////// sDropDown /////////////////


    $.fn.sDropDown = function (options) {

        var element = this,
            pluginName = 'sDropDown';

        if (element.length === 0) {
            return null;
        }

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sDropDown(element, options);
            element.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = element;
            instance = instance.update(element, options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = element;
        }

        //send element for cloned element
        return instance.update(element, options);
    };

    $.fn.sDropDown.defaults = {
        content: null,
        type: "tip",
        event: "click",
        position: {},
        width: 180,
        showoptions: null,
        classholder: "",
        autoselect: true,
        onFireEvent: function () { },
        onAfterClose: function () { },
        onAfterOpen: function () { }
    };

    $.fn.sDropDown.positionDefaults = {
        place: 'bottom',
        top: null,
        left: null
    };

    var sDropDown = (function () {
        function sDropDown(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sDropDown.defaults, userOptions);
            this.options.position = $.extend({}, $.fn.sDropDown.positionDefaults, this.options.position);
            this.holder = null;
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sDropDown.prototype = {
            init: function () {

                if (this.options.event) {
                    var self = this;
                    this.el.on(this.options.event + ".sdropdown", function (event) {
                        event.preventDefault();
                        if (self.options.onFireEvent.call(self, $(this), event) == false) {
                            return;
                        }

                        self.el = $(this);
                        self.open();
                    });
                }
                this.options.content = this.options.content || this.el.next();
            },
            update: function (element, userOptions) {
                this.el = $(element);

                if (userOptions) {
                    if (this.options.event) {
                        this.el.off(this.options.event + ".sdropdown");
                    }

                    this.options.position = $.extend({}, this.options.position, userOptions.position);
                    this.options = $.extend({}, this.options, userOptions);

                    if (this.options.event) {
                        var self = this;
                        this.el.on(this.options.event + ".sdropdown", function (event) {
                            event.preventDefault();
                            self.open();
                        });
                    }

                }
                this.options.content = this.options.content || this.el.next();
                return this;
            },
            open: function () {
                var settings = this.options,
                    _content;

                if (Object.prototype.toString.call(settings.content) === '[object Array]') {
                    _content = renderMenu(settings.content).sMenu().el;
                } else {
                    _content = this.options.content;
                }

                if (this.options.autoselect) {

                    //form menu with one item
                    var _$items = $(_content).find(".item");
                    if (_$items.length === 1 && _$items.eq(0).parent().is(".menu-items")) {
                        var $link = _$items.eq(0).find("a");
                        if ($link.length)
                            $link.eq(0).trigger('click');

                        else
                            _$items.eq(0).trigger('click');
                        return this;
                    }
                }

                if (this.options.type === "tip") {
                    this.holder = this.el.sTip($.extend({}, {
                        content: _content.clone(true, true).data("originalelement", _content),
                        width: this.options.width,
                        classholder: this.options.classholder,
                        position: this.options.position,
                        group: "dropdown"
                    }, this.options.showoptions)).toggle().object();

                } else {
                    if (!this.holder) {
                        //recreate holder because empty exsited holder destroy data and event
                        this.holder = $("<div class='sdropdown-holder hidden'></div>").append(_content).addClass(this.options.classholder)
                            .appendTo(".body");
                    } else {
                        this.holder.replaceWith(this.holder = $("<div class='sdropdown-holder hidden'></div>").append(_content).addClass(this.options.classholder));
                    }

                    var _zindex = this.el.closest(".sdialog").css("z-index");

                    if (!_zindex) {
                        _zindex = 4;
                    }
                    var _offset = this.el.offset();
                    this.holder.css($.extend({}, {
                        "z-index": _zindex,
                        "position": "absolute",
                        //+1 for floor in outerHeight
                        "top": _offset.top + this.el.outerHeight() + 1,
                        "left": _offset.left,
                        //+1 for floor in outerWidth
                        "width": this.el.outerWidth() + 1
                    }, this.options.showoptions));

                    //this.holder.empty().append(_content);
                    this.holder.removeClass("hidden");
                }

                this.options.onAfterOpen.call(this);

                return this;
            },
            close: function () {

                if (this.holder == null) {
                    return this;
                }

                if (this.holder.hasClass("stip")) {
                    this.el.sTip().close();
                } else {
                    if (Object.prototype.toString.call(this.options.content) !== '[object Array]')
                        this.options.content.detach();
                    this.holder.remove();
                }

                this.holder = null;

                this.options.onAfterClose.call(this);
            },
            object: function () {
                return $(this.holder);
            },
            scrollTop: function (topoffset) {
                this.holder.scrollTop(topoffset);
            }
        };
        return sDropDown;
    })();

    /////////////// sTabs /////////////////


    $.fn.sTabs = function (options) {
        if (this.length === 0) {
            return null;
        }

        var element = this,
            pluginName = 'sTabs';

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sTabs(element, options);
            element.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = element;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = element;
        }
        return instance;
    };

    $.fn.sTabs.defaults = {
        contentselectors: '',
        contentclass: '',
        toggle: false,
        scrollable: false, //Legacy! Kept for backward compatibility
        autoscroll: false,
        mode: "tab",
        insertsubmit: null,
        onBeforeChange: function () { return true; },
        onAfterChange: function () { },
        onAfterCloseTab: function () { },
        onBeforeCloseTab: function () { },
        onInit: function () { }
    };

    var sTabs = (function () {
        function sTabs(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sTabs.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.tabcontent = $(this.options.contentselectors);
            this.init();
        }

        sTabs.prototype = {
            init: function () {
                var settings = this.options;

                settings.onInit.call(this, this.tabcontent);
                if (settings.toggle && this.el.find(".active").length === 0) {
                    this.el.addClass("closed");
                }

                var _$activetab = this.el.children().filter(".active");

                if (_$activetab.length)
                    this.tabcontent.data("tab", _$activetab);

                var self = this;
                if (!this.tabcontent || this.tabcontent.length === 0) {
                    _$activetab = this.el.find('.active');
                    var _content = _$activetab.data("stabs-content");

                    if (_content && _content.split(':').length <= 1)
                        this.tabcontent = $(_content);

                    this.el.children().each(function () {
                        var _$tab = $(this);
                        _content = _$tab.data("stabs-content");
                        if (_content.split(':').length <= 1) {
                            self.addWizardNav(_$tab, $(_content).data("tab", _$tab));
                        }
                    });
                }

                this.el.addClass(settings.contentclass).on('click active', '>li,>.item', function (e) {
                    e.preventDefault();
                    var $tab = $(this);

                    if ($tab.is(".no-active"))
                        return false;

                    //comment for close tip
                    if ($tab.hasClass("disabled")) {
                        return;
                    }
                    if (!$tab.hasClass('active')) {
                        if (settings.onBeforeChange.call(self, self.tabcontent, $tab) == false) {
                            return;
                        }
                        var content = $tab.data("stabs-content") || "url:" + $tab.find("a").eq(0).attr("href");

                        var _url = content.split(':');

                        if (_url.length > 1) {
                            $.ajax({
                                url: _url[1],
                                type: 'get'
                            }).done(function (data) {
                                self.el.find('.active').removeClass('active');
                                //most use trigger - for update sContextMenu and ...
                                var $data = $(data);
                                self.tabcontent.html("").append($data);
                                self.addWizardNav($tab, self.tabcontent);
                                self.el.closest('.sdialog').trigger('change');
                                $tab.addClass('active');

                                if (settings.autofocus) {
                                    self.tabcontent.find(":focusable").eq(0).trigger('focus');
                                }

                                //because request ajax takes a while to compelete
                                settings.onAfterChange.call(self, self.tabcontent);

                            }).fail(function (jqXHR, textStatus, _errorThrown) {
                                var _message = getMessageCode(jqXHR.status);

                                if (textStatus !== "abort" && $.fn.sAlert) {
                                    $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                                }
                            });
                        } else {
                            self.el.find('.active').removeClass('active');
                            self.tabcontent.removeClass("show");

                            self.tabcontent = $(content).addClass("show");

                            self.addWizardNav($tab, self.tabcontent);

                            self.el.removeClass("closed").closest('.sdialog').trigger('change');
                            $tab.addClass('active');

                            if (settings.autofocus) {
                                self.tabcontent.find(":focusable").eq(0).trigger('focus');
                            }

                            settings.onAfterChange.call(self, self.tabcontent);
                        }

                        if (settings.scrollable || settings.autoscroll) {
                            $("html,body").animate({ "scrollTop": self.tabcontent.offset().top }, 'fast');
                        }

                        self.tabcontent.data("tab", $tab);

                    } else if (settings.toggle) {
                        self.tabcontent.removeClass("show");
                        $tab.removeClass('active');
                        self.el.addClass("closed");

                        if (settings.autofocus) {
                            self.tabcontent.find(":focusable").eq(0).trigger('focus');
                        }

                        settings.onAfterChange.call(self, self.tabcontent);
                    } else {
                        //click again on active tab
                        if (settings.autofocus) {
                            self.tabcontent.find(":focusable").eq(0).trigger('focus');
                        }
                    }
                }).on("keypress", function (event) {
                    if ($(event.target).is("li,.item")) {
                        var keyCode = event.keyCode || event.which;
                        if (keyCode === 13) {
                            $(this).trigger('click');
                        }
                    }
                }).each(function (_index, item) {
                    item = $(item);
                    if (item.attr("tabindex") == null) {
                        item.attr("tabindex", "0");
                    }
                });
            },
            update: function () {
                return this;
            },
            addWizardNav: function ($tab, $content) {
                if (this.options.mode.toLowerCase() === "wizard" && $content.find(".wizard-next,.wizard-prev").length === 0) {
                    var _$actions = $("<div class='form-actions'></div>");

                    if ($tab.index() !== 0) {
                        $("<button type='button' class='btn icon-black prev wizard-prev'></button>").text(slang["prev"]).on("click", function (_event) {
                            $tab.prev().trigger('click');
                        }).appendTo(_$actions);
                    }

                    if ($tab.index() !== $tab.closest(".stabs").children(".item,li").length - 1) {
                        $("<button type='button' class='btn icon-black next wizard-next margin-right-1p margin-left-1p'></button>").text(slang["next"]).on("click", function (_event) {
                            $tab.next().trigger('click');
                        }).appendTo(_$actions);
                    }

                    $("<button type='submit' class='btn blue main-action wizard-save-draft margin-right-1p margin-left-1p'></button>").text(slang["savedraft"]).on("click", function (_event) {
                        var _$form = $tab.closest("form");
                        _$form.attr("action", setParameterByName("draft", "true", _$form.attr("action")));

                        var _$inputs = _$form.find(":input");
                        for (var i = 0, len = _$inputs.length; i < len; i++) {
                            var _$input = _$inputs.eq(i);
                            if (_$input.attr("data-val-required")) {
                                _$input.attr("data-val-required-disabled", _$input.attr("data-val-required")).removeAttr("data-val-required");
                            }
                        }

                        if ($.validator) {
                            if (typeof _$form.data("validator") != "undefined") {
                                _$form.removeData("validator")
                                    .removeData("unobtrusiveValidation")
                                    .off("submit.validate click.validate focusin.validate focusout.validate keyup.validate invalid-form.validate");
                            }
                            $.validator.unobtrusive.parse(_$form[0]);
                        }

                        var _sajaxpostobj = _$form.data("sAjaxPost");
                        if (_sajaxpostobj) {
                            var _prevoptions = $.extend(true, {}, _sajaxpostobj.options);

                            _sajaxpostobj.options.actions[0].action = null;
                            _sajaxpostobj.options.integrated = true;
                            _sajaxpostobj.options.multiaction = false;
                            _sajaxpostobj.options.actions[0].type = "ignore";
                            _sajaxpostobj.options.actions[0].onDone = function () { };

                            _sajaxpostobj.options.actions[0].customAction = function (data) {
                                _$form.setSpecialDisplayValues(data);

                                this.options = _prevoptions;
                            };
                        }
                    }).appendTo(_$actions);

                    if (this.options.insertsubmit && $tab.index() === $tab.closest(".stabs").children(".item,li").length - 1) {
                        $("<button type='submit' class='btn blue main-action margin-right-1p margin-left-1p'></button>").text(this.options.insertsubmit).on("click", function () {
                            var _$form = $tab.closest("form");
                            _$form.attr("action", setParameterByName("draft", null, _$form.attr("action")));

                            var _$inputs = _$form.find(":input");
                            for (var i = 0, len = _$inputs.length; i < len; i++) {
                                var _$input = _$inputs.eq(i);
                                if (_$input.attr("data-val-required-disabled")) {
                                    _$input.attr("data-val-required", _$input.attr("data-val-required-disabled")).removeAttr("data-val-required-disabled");
                                }
                            }

                            if ($.validator) {
                                if (typeof _$form.data("validator") != "undefined") {
                                    _$form.removeData("validator")
                                        .removeData("unobtrusiveValidation")
                                        .off("submit.validate click.validate focusin.validate focusout.validate keyup.validate invalid-form.validate");
                                }
                                $.validator.unobtrusive.parse(_$form[0]);
                            }

                        }).appendTo(_$actions);
                    }

                    _$actions.appendTo($content);
                }
            },
            addTab: function (title, url, tabuid) {

                if (url) {
                    tabuid = tabuid || url.replace(/[/=?&]/g, "-");
                } else {
                    tabuid = tabuid || "tabuid" + Math.round(Math.random() * 1e7);
                }

                var $tab = this.el.find("[data-uid=" + tabuid + "]");

                if ($tab.length === 0) {
                    $tab = $("<li class='dynamic-tab'></div>").text(title || "").attr({ "data-uid": tabuid, "data-stabs-content": "url:" + url });

                    var self = this;
                    $("<span class='close-tab'>x</span>").on("click", function (event) {
                        event.stopPropagation();

                        self.options.onBeforeCloseTab.call(self);

                        var $tab = $(this).closest("li,.item");
                        if ($tab.hasClass('active')) {
                            $tab.prev().trigger('click');
                        }

                        $tab.remove();

                        self.options.onAfterCloseTab.call(self);
                    }).prependTo($tab);

                    $tab.appendTo(this.el);
                }

                $tab.trigger("active");
            }
        };
        return sTabs;
    })();

    /////////////// sSeparator /////////////////

    $.fn.sSeparator = function (options) {
        if (this.length === 0) {
            return null;
        }

        var pluginName = 'sSeparator';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sSeparator(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sSeparator.defaults = {
        separator: ',',
        validregex: /^-?\d*\.?\d*$/,
        childselector: null,
        forceEnglishNum: true,
        digit: 3,
        decimalPlaces: null
    };

    var sSeparator = (function () {
        function sSeparator(element, userOptions) {

            //extend options
            this.options = $.extend({}, $.fn.sSeparator.defaults, userOptions);
            this.el = $(element);

            if (this.options.childSelector && !this.el.is('.items-holder'))
                this.el = element.closest('.items-holder');

            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sSeparator.prototype = {
            init: function () {
                var settings = this.options,
                    $elements = this.el;

                if (settings.childSelector)
                    $elements = this.el.find(settings.childSelector);

                var self = this;
                $elements.data("sold-valid-value", "").each(function () {
                    var element = $(this);
                    if (element.is(':input')) {

                        if (element.attr("type") == "number") {
                            element.attr("type", "text").data("stype", "number").addClass("comma-number fix-num");
                        }

                        element.on('keyup input', function (event) {
                            if (event.ctrlKey || event.altKey || event.metaKey) {
                                return true;
                            }

                            var keyCode = event.keyCode || event.which;
                            if (keyCode) {
                                if (keyCode == 20 /* Caps lock */
                                    || keyCode == 16 /* Shift */
                                    || keyCode == 9 /* Tab */
                                    || keyCode == 27 /* Escape Key */
                                    || keyCode == 17 /* Control Key */
                                    || keyCode == 91 /* Windows Command Key */
                                    || keyCode == 19 /* Pause Break */
                                    || keyCode == 18 /* Alt Key */
                                    || keyCode == 93 /* Right Click Point Key */
                                    || (keyCode >= 35 && keyCode <= 40) /* Home, End, Arrow Keys */
                                    || keyCode == 45 /* Insert Key */
                                    || (keyCode >= 33 && keyCode <= 34) /*Page Down, Page Up */
                                    || (keyCode >= 112 && keyCode <= 123) /* F1 - F12 */
                                    || (keyCode >= 144 && keyCode <= 145)) {
                                    return;
                                }

                                if (keyCode === 8 || keyCode === 46) {
                                    self.formatElement();
                                    return;
                                }
                            }

                            var _$input = $(this),
                                _caret = caretPosition(this) || { "start": 0, "end": 0 },
                                _oldvalue = _$input.data("old-valid-value"),
                                _cachevalue = _$input.val(),
                                _value = self.unformat(_cachevalue);

                            if (settings.forceEnglishNum) {
                                _value = toEnglishNumber(_value);
                            }

                            if (settings.validregex) {
                                if (_value == "" || settings.validregex.test(_value)) {
                                    var _newvalue = self.format(_value);
                                    _$input.data("old-valid-value", _newvalue);
                                    _$input.val(_newvalue);
                                    caretPosition(this, Math.max(0, _caret.start + (_newvalue.length - _cachevalue.length)));
                                } else {
                                    _$input.val(_oldvalue);
                                }
                            } else {
                                _$input.val(self.format(_value));
                                caretPosition(this, _caret.start + (_value.length - _cachevalue.length));
                            }
                        });
                    }
                });

                self.formatElement();

                if (settings.childSelector) {
                    this.el.on('Update', function () {
                        self.update();
                    });
                }

                var $form = this.el.eq(0).closest('form');
                if ($form.length) {
                    $form.on('submit', function () {
                        self.unformatElement();
                    });

                    $form.on("proxysubmit", function () {
                        self.unformatElement();
                    });
                }
            },
            formatElement: function (input) {
                var settings = this.options,
                    elements = $(input || this.el);

                if (settings.childSelector)
                    elements = elements.find(settings.childSelector);

                var self = this;
                elements.each(function (index) {
                    var _element = this, _$element = elements.eq(index);

                    if (_$element.is('input')) {
                        var _caret = caretPosition(_element), _value = self.format(_$element.val());

                        _$element.val(_value);
                        if (_caret && _caret.start) {
                            var dif = _value.length - _$element.data("sold-valid-value").length;
                            caretPosition(_caret.start + dif, _caret.end + dif);
                        }
                    }
                    else {
                        _$element.html(self.format(_$element.html()));
                    }
                });
            },
            format: function (value) {
                var settings = this.options,
                    parts = value.replace(new RegExp(settings.separator, "g"), "").split(".");

                // format integer part
                parts[0] = parts[0].replace(new RegExp("\\B(?=(.{" + settings.digit + "})+(?!.))", "g"), settings.separator);

                if (parts[0] && parts[0][0] == settings.separator) {
                    //for fix bug in persian number
                    parts[0] = parts[0].substr(1);
                }

                // truncate decimals if needed
                if (settings.decimalPlaces != null && parts[1] !== undefined) {
                    parts[1] = parts[1].substring(0, settings.decimalPlaces);
                }

                return parts.join(".");
            },
            unformatElement: function () {
                var settings = this.options,
                    $elements = $(this.el);

                if (settings.childSelector)
                    $elements = $elements.find(settings.childSelector);

                var self = this;
                $elements.each(function (index) {
                    var $element = $elements.eq(index);
                    if ($element.is('input')) {
                        var _unformatvalue = self.unformat($element.val());
                        if (_unformatvalue !== $element.val())
                            $element.val(_unformatvalue);
                    }
                    else {
                        var _unformatvalue = self.unformat($element.html());
                        if (_unformatvalue !== $element.html())
                            $element.html(_unformatvalue);
                    }
                });

            },
            unformat: function (value) {
                return value.replace(new RegExp(this.options.separator, "g"), "");
            },
            update: function () {
                this.formatElement();
                return this;
            }
        };
        return sSeparator;
    })();


    /////////////// sAjaxSearch /////////////////


    $.fn.sAjaxSearch = function (options) {

        var element = this,
            pluginName = 'sAjaxSearch';

        if (element.length === 0) {
            return null;
        }

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sAjaxSearch(element, options);
            $(element).data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = element;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = element;
        }
        return instance;
    };

    $.fn.sAjaxSearch.defaults = {
        autoscroll: $.mobile
    };

    var sAjaxSearch = (function () {
        function sAjaxSearch(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sAjaxSearch.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.paging = this.el.find('.grid-paging,.paging').last();
            this.holder = this.el.find('.items-holder').eq(0);
            this.changeFlag = false;
            this.isreset = false;
            this.init();
        }

        sAjaxSearch.prototype = {
            init: function () {
                var settings = this.options,
                    self = this;

                var _showsearchheader = getFromClient("showsearchheader" + this.holder.attr("id"));

                if (_showsearchheader == "1") {
                    this.el.find(".search-header").addClass("show");
                }
                else {
                    setOnClient("showsearchheader" + this.holder.attr("id"), "0");
                }

                this.el.find(".show-advanced-search").on("click", function (_event) {
                    var _$btn = $(this);
                    if (_$btn.hasClass("down")) {
                        _$btn.removeClass("down").addClass("up");
                        self.el.find(".advanced-search").eq(0).addClass("show");
                    } else {
                        _$btn.removeClass("up").addClass("down");
                        self.el.find(".advanced-search").eq(0).removeClass("show");
                    }
                });

                this.el.addClass("search-form").on('submit', function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    var $searchheader = self.el.find(".search-header");

                    if ($searchheader.length == 0 || $searchheader.hasClass("show")) {
                        if (self.changeFlag)
                            self.doSearch();
                    } else {
                        $searchheader.addClass("show");
                        setOnClient("showsearchheader" + self.holder.attr("id"), "1");
                    }
                });

                this.el.on('change', 'select , input', function () {
                    self.changeFlag = true;
                });

                this.el.find(".search-field-holder>select").on("change", function () {
                    var _$select = $(this),
                        _value = _$select.children(":selected").val();

                    if (_value === "" || _value === "-1" || _value === -1) {
                        _$select.addClass("not-selected");
                    } else {
                        _$select.removeClass("not-selected");
                    }
                });

                this.paging.on('click', 'a', function (event) {
                    event.preventDefault();
                    self.el.trigger("virtualsubmit");

                    var $pagelink = $(this);
                    if (!$pagelink.parent().is('.disabled,.active'))
                        self.doSearch($pagelink.attr('href'));

                });

                this.el.find('.page-size').on('change', function () {
                    self.el.trigger("virtualsubmit");
                    self.doSearch();
                });

                this.el.find('button[type=reset]').on('click', function (event) {
                    event.preventDefault();
                    self.el.find('.sort-btn').removeClass('asc desc').html('');
                    var $selectall = self.el.find("input[type=checkbox].select-all"),
                        selectallchecked = $selectall.prop("checked");

                    self.el.find('.lov-search-field').each(function (_index, item) {
                        $(item).sListOfValue().clear();
                    });

                    self.isreset = true;

                    self.el.get(0).reset();

                    $selectall.prop("checked", selectallchecked);
                    self.el.find(".search-header").removeClass("show");
                    setOnClient("showsearchheader" + self.holder.attr("id"), "0");

                    setTimeout(function () {
                        self.doSearch(false);
                    }, 50);
                    return;
                });

                this.el.find('.sort-btn').on('click', function () {
                    clearTimeout(self.sorttimeout);
                    var $sortbtn = $(this);
                    if ($sortbtn.text() === 'ASC')
                        $sortbtn.removeClass('asc').addClass('desc').html('DESC');
                    else if ($sortbtn.text() === 'DESC')
                        $sortbtn.removeClass('desc').html('');
                    else
                        $sortbtn.removeClass('desc').addClass('asc').html('ASC');

                    self.sorttimeout = setTimeout(function () {
                        self.doSearch();
                    }, 800);
                });

            },
            doSearch: function (url, exportflag) {
                var $form = this.el,
                    _data = this.getData();

                if (!url)
                    url = $form.attr("action");

                //if Request is Export Download
                if (exportflag) {
                    if (url.indexOf("?") == -1) {
                        window.location.href = url + "?" + _data + "&ExportSearch=True";
                    } else {
                        window.location.href = url + "&" + _data + "&ExportSearch=True";
                    }

                } else {
                    var self = this;
                    $.ajax({
                        url: url,
                        type: "get",
                        data: _data
                    }).done(function (data) {
                        self.updateHolder(data);
                        self.changeFlag = false;
                    }).fail(function (jqXHR, textStatus, _errorThrown) {
                        var _message = getMessageCode(jqXHR.status);

                        if (textStatus !== "abort" && $.fn.sAlert) {
                            $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                        }
                    });;
                }
            },
            getData: function () {
                var sortdata = [],
                    $sorts = this.el.find('.sort-btn');

                for (var i = 0, j = 0, len = $sorts.length; i < len; i++) {
                    var _$sort = $sorts.eq(i);
                    if (_$sort.text() == '')
                        continue;
                    sortdata[j++] = _$sort.data('title') + ':' + _$sort.html();
                }
                sortdata = sortdata.join('~');

                return this.el.serialize() + (sortdata.length === 0 ? '' : '&sort=' + sortdata);
            },
            updateHolder: function (data) {
                var self = this,
                    $update = self.holder,
                    $updated,
                    $paging = self.paging,
                    $data = $(data),
                    settings = self.options;

                if (self.holder.is("ol,ul")) {
                    $update.empty();
                    $data.children().appendTo($update);

                    $updated = $update.find("li.item-content");

                } else {

                    //if data has paging
                    var temp = $data.filter('.item-paging');
                    if (temp.length) {
                        $data = $data.toArray();
                        //remove paging from data Receive
                        temp = $data.pop();
                        //convert javascript object to jquery
                        $data = $($data);
                    }

                    //replace paging
                    $paging.html($(temp).find('.pagination-container'));
                    $update.find(".item-content,.item-details,.item-not-found,.items-footer").remove();
                    var _$header = $update.find(".items-header");
                    if (_$header.length) {
                        if (_$header.eq(0).next(".search-header").length)
                            $updated = $data.hide().insertAfter(_$header.eq(0).nextUntil(".item-content").last());
                        else
                            $updated = $data.hide().insertAfter(_$header.eq(0));
                    }
                    else {
                        $updated = $data.hide().prependTo($update);
                    }
                }

                $update.trigger('contentChange', { items: $updated });

                //if device is mobile -> no animation
                $.mobile ? $updated.show() : $updated.fadeIn();

                try {
                    if (settings.autoscroll && !self.isreset) {
                        $("html, body").animate({
                            scrollTop: $update.find('.item-content,.item-not-found').eq(0).offset().top - 60
                        });
                    }

                    self.isreset = false;
                } catch (e) {
                    return !1;
                }
                //for bug in change display to block in responsive table
                $updated.css("display", "");

                setTimeout(function () {
                    $update.trigger('rowsLoaded');
                }, 100)
            },
            exportSearch: function (url) {
                this.doSearch(url, true);
            }
        };
        return sAjaxSearch;
    })();

    /////////////// sAjaxGet /////////////////

    $.sAjaxGet = function (options) {
        return new sAjaxGet($(window), $.extend({}, { event: "now" }, options));
    };

    $.sAjax = function (options) {
        return $.sAjaxGet(options);
    };

    $.fn.sAjaxGet = function (options) {
        if (this.length === 0) {
            return null;
        }

        if (options == null) {
            var name = "";
        } else {
            name = options.name || "";
        }

        var pluginName = 'sAjaxGet' + name;

        if (options) {
            delete options["name"];
        }

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sAjaxGet($element, options);
                $element.data(pluginName, instance);
            } else if (options && Object.keys(options).length) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;

    };

    $.fn.sAjax = function (options) {
        return this.sAjaxGet(options);
    }

    $.fn.sAjaxGet.defaults = {
        name: null,
        params: "",
        url: null,
        cache: false,
        type: "GET",
        datatype: null,
        sendoptions: null,
        integrated: false,
        multiaction: true,
        beforeSend: function () { },
        afterSend: function () { },
        event: 'click',
        update: '.item-content',
        children: null,
        actions: null,
        onError: function () { },
        showLoading: true
    };


    $.fn.sAjaxGet.actionDefaults = {
        item: "",
        type: "",
        showas: "",
        validate: function (_data) { return true },
        onDone: function () { },
        onComplete: function () { },
        customAction: function () { return false },
        showoptions: null,
        posts: []
    };



    var sAjaxGet = (function () {
        function sAjaxGet(element, userOptions) {

            //extend options
            this.el = element;
            this.options = $.extend({}, $.fn.sAjaxGet.defaults, userOptions);
            if (userOptions) {
                var _actions = userOptions.actions;
                for (var i = 0, len = _actions.length; i < len; i++) {
                    this.options.actions[i] = $.extend({}, $.fn.sAjaxGet.actionDefaults, _actions[i]);
                }
            }

            if (this.options.integrated) {
                this.options.multiaction = false;
                this.promptparams = {};
            }

            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sAjaxGet.prototype = {
            init: function () {
                var self = this,
                    $el = $(self.el),
                    settings = this.options;
                if ($el.length === 0) {
                    return;
                }

                settings.children = settings.children || settings.childs;

                if (settings.children) {
                    if (!$el.is('.items-holder')) {
                        $el = $el.find('.items-holder').eq(0);
                    }

                    if ($el.length) {
                        $el.on('contentChange', function (_event, data) {
                            enableEvent(data.items.find(settings.children));
                            //for trigger in edit Details items
                            return false;
                        });

                        $el = $el.find(settings.children);
                    }
                }

                enableEvent($el);

                function enableEvent(items) {
                    if (settings.event !== "now") {
                        //off for fired contentChange event from sTabs
                        items.off(settings.event + ".sAjaxGet")
                            .on(settings.event + ".sAjaxGet", function (event) {
                                event.preventDefault();

                                if (self.options.params)
                                    delete self.options.params["__response"];

                                if (settings.beforeSend.call(self, $(this), event) == false) {
                                    return;
                                }

                                self.send(this);
                            });
                    } else {
                        if (settings.beforeSend.call(self, $el, window.event) == false) {
                            return;
                        }

                        if (self.options.params)
                            delete self.options.params["__response"];

                        self.send(window);
                    }
                }
            },
            object: function () {
                return $(this.el);
            },
            update: function (useroptions) {
                if (useroptions) {
                    var _actions = this.options.actions;
                    if (useroptions.actions) {
                        var len = Math.max(this.options.actions.length, useroptions.actions.length);
                        _actions = [];
                        for (var i = 0; i < len; i++) {
                            if (i < this.options.actions.length)
                                _actions.push($.extend({}, this.options.actions[i], useroptions.actions[i]));
                            else
                                _actions.push($.extend({}, $.fn.sAjaxGet.actionDefaults, useroptions.actions[i]));
                        }
                    }

                    this.options = $.extend({}, this.options, useroptions);
                    this.options.actions = _actions;
                }

                return this;
            },
            send: function (element) {
                var self = this,
                    $el = $(element || self.el),
                    settings = this.options,
                    actions = settings.actions;

                var url = settings.url || $el.attr('href'),
                    querystring = "",
                    params;

                if (typeof settings.params == "function") {
                    params = settings.params.call(self, $el);
                } else {
                    params = settings.params;
                }

                if (typeof params !== "string") {
                    querystring = $.param(params);
                } else {
                    querystring = params;
                }

                if (params) {
                    if (url.indexOf("?") !== -1) {
                        querystring = "&" + querystring;
                    } else {
                        querystring = "?" + querystring;
                    }
                }

                this.xhr = $.ajax($.extend({
                    url: url + querystring,
                    type: settings.type,
                    cache: settings.cache,
                    datatype: settings.datatype || settings.actions.length > 1 ? 'json' : 'string',
                    global: settings.showLoading
                },
                    settings.sendoptions)).done(function (data) {


                        //convert to array when is string or json
                        try {
                            var JSONobject;
                            if (typeof data === "string") {
                                JSONobject = JSON.parse(data);
                            } else {
                                JSONobject = data;
                            }
                            if (!settings.multiaction) {
                                data = [JSONobject];
                            } else {
                                data = $.map(JSONobject, function (value) { return value; });
                            }
                        } catch (e) {
                            data = new Array(data);
                        }

                        var $content = null;

                        $.each(data, function (index, _data) {
                            if (actions.length <= index) {
                                return;
                            }

                            var _action = self.options.actions[index];

                            _action.onComplete.call(self, _data);

                            if (_action.validate(_data) !== false) {

                                if (self.options.integrated && typeof _data !== "string") {
                                    var _status = _data["Status"],
                                        _message = _data["Message"],
                                        _commands = _data["Commands"];

                                    if (_status === 0) {
                                        //successful
                                        if (_message || settings.type.toLowerCase() === "post")
                                            $.sAlert('#AjaxLog').message({ type: 'success', content: _message || slang.success, timeout: 2000 });

                                        try {
                                            $data = $(_data["Model"]);
                                        } catch (e) {
                                            $data = _data["Model"];
                                        }

                                        if (self.options.params)
                                            delete self.options.params["__response"];

                                    } else if (_status === 1) {
                                        //error
                                        $.sAlert('#AjaxLog').message({ content: _message, closebutton: true, timeout: -1, type: "error" });

                                        if (self.options.params)
                                            delete self.options.params["__response"];
                                        return;
                                    } else if (_status === 2) {
                                        //warning
                                        $.sAlert('#AjaxLog').message({ content: _message, closebutton: true, timeout: 3000, type: "warning" });

                                        if (self.options.params)
                                            delete self.options.params["__response"];
                                    } else if (_status === 3) {
                                        $.sAlert("#ConfirmDialog").confirm({
                                            content: _message,
                                            commands: _commands,
                                            onDone: function (_$btn, _command) {
                                                switch (_command.Action) {
                                                    case 1:
                                                        self.options.params = $.extend({}, self.options.params, {
                                                            "__response": this.value
                                                        });

                                                        self.send($el);
                                                        break;
                                                }
                                            }
                                        });

                                        return;
                                    } else if (_status === 4) {
                                        //prompt
                                        var _inputs = data["Inputs"],
                                            _inputtype = ["text", "textarea", "checkbox"];

                                        for (var i = 0, __len = _inputs.length; i < __len; i++) {
                                            if (_inputs[i].Type !== null)
                                                _inputs[i].Type = _inputtype[_inputs[i].Type];
                                        }

                                        $.sAlert("#PromptDialog").prompt({
                                            content: _message,
                                            inputs: _inputs,
                                            commands: _commands,
                                            onCancel: function () {
                                                if (self.promptparams) {
                                                    var _keyparams = Object.keys(self.promptparams);
                                                    for (var i = 0, __len = _keyparams.length; i < __len; i++) {
                                                        if (self.options.params[_keyparams[i]])
                                                            delete self.options.params[_keyparams[i]];

                                                        delete self.promptparams[_keyparams[i]];
                                                    }

                                                    delete self.options.params["__response"];
                                                }
                                            },
                                            onDone: function (_values, $btn, _command) {
                                                var _values = {},
                                                    _$inputs = this.dialog.object().find(":input"),
                                                    _inputsdata = serializeArray(_$inputs.not(":checkbox")),
                                                    $checkboxs = _$inputs.filter(":checkbox");


                                                for (var i = 0, _len = _inputsdata.length; i < _len; i++) {
                                                    var _inputdata = _inputsdata[i];
                                                    _values[_inputdata.name] = self.promptparams[_inputdata.name] = _inputdata.value;
                                                }

                                                for (var i = 0, _len = $checkboxs.length; i < _len; i++) {
                                                    var _name = $checkboxs.attr("name");
                                                    if (_name)
                                                        _values[_name] = self.promptparams[_name] = $checkboxs.is(":checked");
                                                }

                                                _values["__response"] = $btn.val();
                                                self.options.params = $.extend({}, self.options.params, _values);

                                                self.send($el);
                                            }
                                        });

                                        return;
                                    } else if (_status === 5) {
                                        if ((data["Model"]["Blank"] + "").toLowerCase() === "true")
                                            window.open(data["Model"]["Url"], "_blank");
                                        else {
                                            window.location = data["Model"]["Url"];
                                        }

                                        return;
                                    }

                                    if (_action.customAction.call(self, _data["Model"], $el)) {
                                        return true;
                                    }
                                } else {

                                    if (_action.customAction.call(self, _data, $el)) {
                                        return true;
                                    }
                                }

                                if (_action.type !== "update") {
                                    if (_action.showas === 'dialog') {
                                        var $data = $(_data);
                                        var title = $data.filter('.title').html();
                                        if (!title)
                                            title = $data.find('.title').eq(0).html();

                                        $content = $.sDialog(_action.item || "#Dialog", $.extend({}, {
                                            title: title || ""
                                        }, _action.showoptions)).html(_data).open().object();

                                    } else if (_action.showas === 'tip') {
                                        $content = $el.sTip($.extend({}, {
                                            id: _action.item,
                                            content: _data,
                                            clickable: true
                                        }, _action.showoptions)).toggle().object();
                                    }
                                }

                                if (_action.type === 'update') {
                                    var $update;
                                    if (_action.item[0] === '>')
                                        $update = $el.find(_action.item.substring(1));
                                    else if (_action.item[0] === '<')
                                        $update = $el.closest(_action.item.substring(1));
                                    else
                                        $update = $(_action.item);

                                    if (!_action.item) {
                                        var $originalel = $el.data("originalelement");
                                        if ($originalel) {
                                            $update = $();
                                            $.each($originalel, function (i) {
                                                $update = $update.add($originalel.eq(i).closest(settings.update));
                                            });
                                        }
                                    }

                                    var $oldajaxforms;
                                    if (_action.reloadajaxpost) {
                                        $oldajaxforms = $.map($update.find('form'), function (item) {
                                            return $(item).data('sAjaxPost');
                                        });
                                    }

                                    $content = $(_data).replaceAll($update);

                                    if (_action.reloadajaxpost) {
                                        var $newforms = $content.find('form');
                                        $.each($oldajaxforms, function (_index, _ajaxform) {
                                            if (_ajaxform)
                                                $newforms.eq(_index).data('sAjaxPost', _ajaxform.update($newforms[_index]));
                                        });
                                    }
                                } else if (_action.type === "addfirst") {
                                    var $update = $(_action.item), $updated;

                                    $update.find(".item-not-found").remove();

                                    var _$header = $update.find(".items-header");
                                    if (_$header.length) {
                                        if (_$header.eq(0).next(".search-header").length)
                                            $updated = $(_data).insertAfter(_$header.eq(0).nextUntil(".item-content").last());
                                        else
                                            $updated = $(_data).insertAfter(_$header.eq(0));
                                    }
                                    else
                                        $updated = $(_data).prependTo($update);

                                    if ($update.is(".table-sticky"))
                                        $update.closest(".table-holder").animate({ "scrollTop": 0 }, 300);

                                    $updated.sColorify("#ef9", true);
                                    $update.trigger('contentChange', { items: $updated });
                                }
                                else if (_action.type === "edit" || _action.type === "delete" || _action.type === "create") {

                                    var $item = $el.closest('.stip').data('sTipcontextmenu') || null;
                                    if ($item)
                                        //for edit call from options button
                                        $el = $item.options.content.data("originalelement");
                                    else {
                                        var $orgobj = $el.data("originalelement");
                                        if ($orgobj) {
                                            $el = $();
                                            $.each($orgobj, function (i) {
                                                $el = $el.add($orgobj.eq(i).closest(settings.update));
                                            });
                                        }
                                    }

                                    $content.find('form').each(function (_index, _form) {
                                        var _posts = _action.posts[_index];
                                        if (_posts) {
                                            $(_form).sAjaxPost({
                                                holder: _posts.holder || _action.item,
                                                group: typeof _posts.group === "function" ? _posts.group(_data) : _posts.group,
                                                reset: _posts.reset,
                                                params: _posts.params,
                                                integrated: (_posts.integrated == null ? false : _posts.integrated),
                                                multiaction: _posts.multiaction,
                                                beforeSend: _posts.beforeSend,
                                                dataformat: _posts.dataformat,
                                                onBeforeSubmit: _posts.onBeforeSubmit,
                                                actions: $.map(_posts.actions, function (__action) {
                                                    return ({
                                                        item: __action.item || $el.closest(settings.update),
                                                        type: __action.type || "update",
                                                        action: __action.action,
                                                        reloadajaxpost: (__action.reloadajaxpost == null ? false : __action.reloadajaxpost),
                                                        highlight: __action.highlight || (_action.type === "delete" ? "#f66" : "#ef9"),
                                                        log: (__action.log == null ? true : true),
                                                        showoptions: __action.showoptions || null,
                                                        customAction: __action.customAction,
                                                        onDone: __action.onDone || function () { },
                                                        onError: __action.onError || function () { },
                                                        posts: __action.posts || null,
                                                        onComplete: __action.onComplete || function () { }
                                                    });
                                                })
                                            });
                                        }
                                    });
                                }
                            }

                            if ($content) {
                                self.updated = $content;
                            }

                            _action.onDone.call(self, _data);
                        });
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        var _message = getMessageCode(jqXHR.status);
                        if (self.options.onError.call(self, jqXHR, textStatus, errorThrown) !== false) {
                            if (textStatus !== "abort" && $.fn.sAlert) {
                                $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                            }
                        }
                    });

                settings.afterSend.call(self);
            }
        };
        return sAjaxGet;
    })();

    /////////////// sAjaxPost /////////////////

    $.fn.sAjaxPost = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sAjaxPost';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if ($element.hasClass("search-form")) {
                return;
            }

            if (!instance) {
                instance = new sAjaxPost(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update($element, options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sAjaxForm = function (options) {
        return this.sAjaxPost(options);
    }

    $.fn.sAjaxPost.defaults = {
        holder: null,
        dataformat: 'string',
        beforeSend: function () { },
        afterSend: function () { },
        sendoptions: null,
        reset: false,
        multiaction: true,
        integrated: false,
        params: null,
        resetexception: "[name=__RequestVerificationToken]",
        diffTopOffset: function () {
            return -40;
        },
        group: [],
        actions: [],
        posts: [],
        onInit: function () { },
        onError: function () { },
        onBeforeSubmit: function () { }
    };


    $.fn.sAjaxPost.actionDefaults = {
        item: null,
        type: null,
        action: null,
        highlight: '#ef9',
        log: true,
        showoptions: null,
        addStatement: null,
        reloadajaxpost: false,
        message: slang.success,
        customAction: function () { return false; },
        onDone: function () { },
        onError: function () { },
        onComplete: function () { }
    };

    var sAjaxPost = (function () {
        function sAjaxPost(element, userOptions) {

            //extend options
            this.form = element;
            this.options = $.extend(true, {}, $.fn.sAjaxPost.defaults, userOptions);
            if (userOptions) {
                var _actions = userOptions.actions;
                for (var i = 0, len = _actions.length; i < len; i++)
                    this.options.actions[i] = $.extend({}, $.fn.sAjaxPost.actionDefaults, _actions[i]);
            }

            if (this.options.integrated) {
                this.options.multiaction = false;
                this.promptparams = {};
            }

            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sAjaxPost.prototype = {
            init: function () {
                var self = this,
                    $form = $(self.form);

                self.group = self.options.group || [];
                if (typeof self.group === "function") {
                    self.group = self.group() || [];
                }
                //if Model is Form Group
                if (self.group.length > 0) {

                    self.lockgroup = false;


                    self.manageGroupButtons();

                    $.each(self.group, function (_index, _form) {
                        var $form = $(_form);

                        $form.addClass('sajaxpost-group');

                        if ($form.attr('id') !== $(self.form).attr('id')) {
                            $form.sAjaxPost().setParent(self.form);
                        }

                        $form.off('submit.sajaxpost').on('submit.sajaxpost', function (event) {
                            event.preventDefault();

                            if (self.options.params)
                                delete self.options.params["__response"];

                            if (!self.lockgroup) {
                                self.lockgroup = true;
                                self.setError(false);
                                for (var i = self.group.length - 1; i >= 0; i--) {
                                    //use submit for plugins that need form submit event such as sFloat
                                    $(self.group[i]).trigger('submit');
                                }
                                self.lockgroup = false;
                            } else {
                                $(event.target).trigger("proxysubmit");
                                $(event.target).sAjaxPost().send();
                            }
                        });
                    });
                } else {
                    //Model is Single Form
                    //if it is not managed by group controller
                    if (!$form.hasClass('sajaxpost-group')) {
                        $form.on('submit.sajaxpost', function (event) {
                            event.preventDefault();

                            $form.trigger("proxysubmit");

                            if (self.options.params)
                                delete self.options.params["__response"];

                            self.send(this);
                        });
                    }
                }

                $form.on('click.sAjaxPost', ':submit', function (event) {
                    var $btn = $(this),
                        _name = $btn.attr('name'),
                        $input = $form.find('#AddedDataFormAjaxPost');

                    if (_name) {
                        if ($input.length) {
                            $input.attr('name', _name).val($btn.val());
                        } else {
                            $('<input id="AddedDataFormAjaxPost" type="hidden" />').attr("name", _name).val($btn.val()).appendTo($form);
                        }
                    } else if ($input.length) {
                        $input.remove();
                    }

                    if (self.options.params)
                        delete self.options.params["__response"];

                    self.options.onBeforeSubmit.call(self, event, $btn, $input);

                });

                self.options.onInit.call(self, $form);

            },
            update: function (element, userOptions) {
                this.form = element;

                var self = this,
                    $form = $(this.form),
                    options = this.options,
                    _actions = this.options.actions;


                if (this.parentgroup) {
                    $(this.parentgroup).sAjaxPost().updateChild($form);
                }

                if (userOptions) {
                    if (userOptions.actions) {
                        var len = Math.max(options.actions.length, userOptions.actions.length);
                        _actions = [];
                        for (var i = 0; i < len; i++) {
                            if (i < options.actions.length)
                                _actions.push($.extend(true, {}, options.actions[i], userOptions.actions[i]));
                            else
                                _actions.push($.extend(true, {}, $.fn.sAjaxPost.actionDefaults, userOptions.actions[i]));
                        }

                    }

                    this.options = $.extend(true, {}, this.options, userOptions);
                    this.options.actions = _actions;
                }
                this.group = this.group || [];

                if (typeof this.group === "function")
                    self.group = self.group() || [];

                //if Model is Form Group
                if (this.group.length > 0) {

                    this.lockgroup = false;

                    this.manageGroupButtons();

                    $.each(this.group, function (_index, _form) {
                        var $form = $(_form);

                        $form.addClass('sajaxpost-group');

                        if ($form.attr('id') !== $(self.form).attr('id')) {
                            $form.sAjaxPost().setParent(self.form);
                        }

                        $form.off('submit.sajaxpost').on('submit.sajaxpost', function (event) {
                            event.preventDefault();
                            if (!self.lockgroup) {
                                self.lockgroup = true;
                                self.setError(false);
                                for (var i = self.group.length - 1; i >= 0; i--) {
                                    //use submit for plugins that need form submit event such as sFloat
                                    $(self.group[i]).trigger('submit');
                                }
                                self.lockgroup = false;
                            } else {
                                $(event.target).trigger("proxysubmit");

                                $(event.target).sAjaxPost().send();
                            }
                        });
                    });
                } else {
                    //Model is Single Form
                    //if it is not managed by group controller
                    if (!$form.hasClass('sajaxpost-group')) {
                        $form.off('submit.sajaxpost').on('submit.sajaxpost', function (event) {
                            event.preventDefault();

                            $form.trigger("proxysubmit");

                            if (self.options.params)
                                delete self.options.params["__response"];

                            self.send(this);
                        });
                    }

                    $form.off('click.sAjaxPost', ':submit')
                        .on('click.sAjaxPost', ':submit', function (event) {
                            var $btn = $(this),
                                $input = $form.find('#AddedDataFormAjaxPost'),
                                _name = $btn.attr('name');

                            if (_name) {
                                if ($input.length) {
                                    $input.attr('name', _name).val($btn.val());
                                } else {
                                    $('<input id="AddedDataFormAjaxPost" type="hidden" />').attr("name", _name).val($btn.val()).appendTo($form);
                                }
                            } else if ($input.length) {
                                $input.remove();
                            }

                            if (self.options.params)
                                delete self.options.params["__response"];

                            self.options.onBeforeSubmit.call(self, event, $btn, $input);
                        });
                }
                return this;
            },
            disableForm: function (isdisabled) {
                if (isdisabled == null) {
                    isdisabled = true;
                }

                var $holder = $(this.options.holder || this.form);
                if (isdisabled)
                    this.formactions = $('button,input[type=submit],input[type=button]', $holder.find('.form-actions')).not(":disabled").attr('disabled', isdisabled);
                else {
                    this.formactions.prop('disabled', isdisabled);
                }

            },
            manageGroupButtons: function (group) {
                group = group || this.group;

                var self = this, $form = $(group[0]);


                $(group).each(function (_item, index) {
                    $(index).find(".form-actions").addClass("hidden");
                });

                var $holder = $(self.options.holder || $form), $formactions;

                if ($holder.is(".sdialog")) {
                    $formactions = $form.find(".form-actions").clone(true, true).removeClass("hidden").appendTo($holder.find(".sdialog-content").children());
                } else {
                    $formactions = $form.find(".form-actions").clone(true, true).removeClass("hidden").appendTo($holder);
                }

                $formactions.find("[type=submit]").on("click", function () {
                    $($form.selector).trigger('submit');
                });

            },
            setParent: function (form) {
                this.parentgroup = form;
            },
            setError: function (haserror) {
                var self = this;

                if (this.parentgroup) {
                    $(this.parentgroup).sAjaxPost().grouperror = haserror;
                } else {
                    self.grouperror = haserror;
                }
            },
            updateChild: function (form) {
                var self = this;

                $(form).addClass('sajaxpost-group').off('submit.sajaxpost').on('submit.sajaxpost', function (event) {
                    event.preventDefault();
                    if (!self.lockgroup) {
                        self.lockgroup = true;
                        self.setError(false);
                        for (var i = self.group.length - 1; i >= 0; i--) {
                            //use submit for plugins that need form submit event such as sFloat
                            $(self.group[i]).trigger('submit');
                        }
                        self.lockgroup = false;
                    } else {
                        $(event.target).trigger("proxysubmit");

                        $(event.target).sAjaxPost().send();
                    }
                });
            },
            insertData: function ($form, data, _action) {
                var self = this,
                    _data = data,
                    $data;

                if (this.options.reset && (this.options.integrated === false || this.options.integrated === true && [1, 3, 4].indexOf(data["Status"]) === -1)) {

                    $form.find(".field-validation-valid,.field-validation-error").empty().attr("class", "field-validation-valid");
                    $form.find(".input-holder-validation-error").removeClass("input-holder-validation-error");
                    //remove validation error from server
                    $form.find(".validation-summary-errors,.validation-summary-valid").remove();

                    if (this.options.reset.toString().toLowerCase() === "full") {
                        //for remove cache value form in server error
                        var _$inputs = $form.find(":input:not([type='hidden'])").not(this.options.resetexception);
                        for (var i = 0, len = _$inputs.length; i < len; i++) {
                            var _$input = _$inputs.eq(i);
                            if (_$input.is("[type='checkbox'],[type='radio']"))
                                _$input.prop("checked", false);
                            else
                                _$input.val("");
                        }
                    } else {
                        $form[0].reset();
                    }

                    if ($.fn.sListOfValue) {
                        var _$inputs = $form.find(".slov-input,.slov-proxytable").not(this.options.resetexception);
                        for (var i = _$inputs.length - 1; i >= 0; i--) {
                            _$inputs.eq(i).sListOfValue().val([], true);
                        }
                    }

                    if ($.fn.sUploader) {
                        var _$inputs = $form.find(".suploader-fileinput").not(this.options.resetexception);
                        for (i = _$inputs.length - 1; i >= 0; i--) {
                            _$inputs.eq(i).sUploader().reset();
                        }
                    }

                    $form.find(':input:not([type="hidden"],button,[type="submit"],.hidden :input,.disabled :input)').eq(0).trigger('focus');
                }

                //for syntax error on ie in returning value in upload file
                try {
                    $data = $(_data);
                } catch (e) {
                    _action.onDone.call(self, _data);
                    if (_action.log) {
                        $.sAlert('#AjaxLog').message({ type: 'success', content: _action.message, timeout: 2000 });
                    }
                    return;
                }

                var _holder = $form.closest('.sdialog').sDialog();
                if (_holder == null)
                    _holder = $form.closest('.stip').sTip();

                if (this.options.integrated && typeof data !== "string") {
                    var _status = data["Status"],
                        _message = data["Message"],
                        _commands = data["Commands"];

                    if (_status === 0) {
                        //successful
                        if (_message)
                            _action.message = _message;

                        try {
                            $data = $(data["Model"]);
                        } catch (e) {
                            $data = data["Model"];
                        }

                        if (self.options.params)
                            delete self.options.params["__response"];

                    } else if (_status === 1) {
                        //error
                        if (_message) {
                            $.sAlert('#AjaxLog').message({ content: _message, closebutton: true, timeout: -1, type: "error" });
                        }

                        _action.onError.call(this, data, _message);

                        if (self.options.params)
                            delete self.options.params["__response"];
                        return;
                    } else if (_status === 2) {
                        //warning
                        if (_message) {
                            $.sAlert('#AjaxLog').message({ content: _message, closebutton: true, timeout: 3000, type: "warning" });
                        }

                        if (self.options.params)
                            delete self.options.params["__response"];
                    } else if (_status === 3) {
                        $.sAlert("#ConfirmDialog").confirm({
                            content: _message,
                            commands: _commands,
                            onDone: function (_$btn, _command) {
                                switch (_command.Action) {
                                    case 1:
                                        self.options.params = $.extend({}, self.options.params, {
                                            "__response": this.value
                                        });

                                        self.send();
                                        break;
                                }
                            }
                        });

                        return;
                    } else if (_status === 4) {
                        var _inputs = data["Inputs"], _inputtype = ["text", "textarea", "checkbox"];

                        for (var i = 0, __len = _inputs.length; i < __len; i++) {
                            if (_inputs[i].Type !== null)
                                _inputs[i].Type = _inputtype[_inputs[i].Type];
                        }

                        //prompt
                        $.sAlert("#PromptDialog").prompt({
                            content: _message,
                            inputs: _inputs,
                            commands: _commands,
                            onCancel: function () {
                                if (self.promptparams) {
                                    var _keyparams = Object.keys(self.promptparams);
                                    for (var i = 0, __len = _keyparams.length; i < __len; i++) {
                                        if (self.options.params[_keyparams[i]])
                                            delete self.options.params[_keyparams[i]];
                                        delete self.promptparams[_keyparams[i]];
                                    }

                                    if (self.options.params) {
                                        delete self.options.params["__response"];
                                    }
                                }
                            },
                            onDone: function (_values, $btn, _command) {
                                var _values = {}, _$inputs = this.dialog.object().find(":input"), _inputsdata = serializeArray(_$inputs.not(":checkbox")), $checkboxs = _$inputs.filter(":checkbox");


                                for (var i = 0, _len = _inputsdata.length; i < _len; i++) {
                                    var _inputdata = _inputsdata[i];
                                    _values[_inputdata.name] = self.promptparams[_inputdata.name] = _inputdata.value;
                                }

                                for (var i = 0, _len = $checkboxs.length; i < _len; i++) {
                                    var _name = $checkboxs.attr("name");
                                    if (_name)
                                        _values[_name] = self.promptparams[_name] = $checkboxs.is(":checked");
                                }

                                _values["__response"] = $btn.val();
                                self.options.params = $.extend({}, self.options.params, _values);

                                self.send();
                            }
                        });

                        return;
                    } else if (_status === 5) {
                        if ((data["Model"]["Blank"] + "").toLowerCase() === "true")
                            window.open(data["Model"]["Url"], "_blank");
                        else {
                            window.location = data["Model"]["Url"];
                        }

                        return;
                    }

                    if (_action.customAction.call(self, data["Model"])) {
                        return true;
                    }
                } else {

                    if (_action.customAction.call(self, _data))
                        return true;
                }

                var $updated = null;

                if (_action.type === "first") {
                    var $update = $(_action.item), $data = $(_data);

                    $update.trigger('beforeContentChange', { items: $data });
                    $update.find(".item-not-found").remove();

                    var _$header = $update.find(".items-header");
                    if (_$header.length) {
                        if (_$header.eq(0).next(".search-header").length)
                            $updated = $data.insertAfter(_$header.eq(0).nextUntil(".item-content").last());
                        else
                            $updated = $data.insertAfter(_$header.eq(0));
                    }
                    else
                        $updated = $data.prependTo($update);

                    if ($update.is(".table-sticky"))
                        $update.closest(".table-holder").animate({ "scrollTop": 0 }, 300);

                    $updated.sColorify(_action.highlight, true);
                    $update.trigger('contentChange', { items: $updated });
                } else if (_action.type === "last") {
                    var $update = $(_action.item);

                    $update.find(".item-not-found").remove();

                    $update.trigger('beforeContentChange', { items: $data });
                    $updated = $data.appendTo($update);
                    $update.trigger('contentChange', { items: $updated.sColorify(_action.highlight, true) });

                } else if (_action.type === "update") {
                    var $update = $(_action.item),
                        $holder = $update.closest('.items-holder');

                    $update.nextUntil(".item-content").filter(".item-details").remove();

                    if (_data === ' ') {
                        //action is delete
                        $update.sColorify(_action.highlight, false, function () {
                            setTimeout(function () {
                                $updated = $data.replaceAll($update);
                            }, 100);
                        });

                        //for some plugin like sGrid
                        $holder.trigger('contentDelete', { items: $updated });
                    }
                    else {
                        var $oldajaxforms;
                        if (_action.reloadajaxpost) {
                            $oldajaxforms = $.map($update.find('form'), function (item) {
                                return $(item).data('sAjaxPost');
                            });
                        }

                        $update.closest('.items-holder').trigger('beforeContentChange', { items: $data });
                        $updated = $data.replaceAll($update);

                        if (_action.reloadajaxpost) {
                            var $newforms = $updated.find('form');
                            $.each($oldajaxforms, function (index, _ajaxform) {
                                if (_ajaxform)
                                    $newforms.eq(index).data('sAjaxPost', _ajaxform.update($newforms[index]));
                            });
                        }
                        $updated.sColorify(_action.highlight, true).closest('.items-holder').trigger('contentChange', { items: $updated });
                    }

                } else if (_action.type === "updatetree") {
                    var $update = $(_action.item), $childs = $update.find('.item-children,.item-childs').eq(0);

                    $data = $(_data + _action.addStatement);

                    //if change parent
                    var _parentid = $data.data('parentid') + '';
                    if (_parentid.length) {
                        //element has parent
                        var $el = $update.closest('.items-holder').find('#i_' + _parentid);
                        if (_parentid == $update.data('parentid'))
                            $updated = $data.replaceAll($update);
                        else {
                            $update.remove();
                            var _temp = $el.find('>.item-children,>.item-childs');
                            if (_temp.length) {
                                //Parent element has UL
                                $updated = $data.appendTo(_temp);
                            }
                            else {
                                if ($data.is("li")) {
                                    //Parent element no has UL
                                    $updated = $('<ol class="item-children">' + data + '</ol>').appendTo($el);
                                } else {
                                    $updated = $('<div class="item-children">' + data + '</div>').appendTo($el);
                                }
                            }
                        }

                    } else {
                        if ($update.data('parentid')) {
                            var $holder = $update.closest('.items-holder');
                            $update.remove();
                            $updated = $data.appendTo($holder);
                        }
                        else {
                            $updated = $data.replaceAll($update);
                        }
                    }

                    //+1 for floor in outerHeight
                    $("body,html").stop(true, true).animate({ scrollTop: $updated.last().offset().top + $updated.last().outerHeight() + 1 - $(window).height() + 50 }, 'fast');

                    $updated.sColorify(_action.highlight, true).append($childs).closest('.items-holder').trigger('contentChange', { items: $updated });

                } else if (_action.type === "addtree") {
                    var $update = $(_action.item);

                    $update.find(".item-not-found").remove();
                    _data += _action.addStatement;
                    $data = $(_data);
                    var _parentid = $data.data('parentid') + '';
                    if (_parentid.length) {
                        //element has parent
                        var $el = $update.find('#i_' + _parentid);
                        var _temp = $el.find('>.item-children,>.item-childs');
                        if (_temp.length) {
                            //Parent element has UL
                            $updated = $data.appendTo(_temp);
                        }
                        else {
                            if ($data.is("li")) {
                                //Parent element no has UL
                                if ($el.parent().is("ul"))
                                    $updated = $('<ul class="item-children">' + data + '</ul>').appendTo($el);
                                else
                                    $updated = $('<ol class="item-children">' + data + '</ol>').appendTo($el);

                                $updated.parent().find(".stree-content").prepend("<i class='stree-collapse'></i>");
                            } else {
                                $updated = $('<div class="item-children">' + data + '</div>').appendTo($el);
                            }
                        }
                    } else {
                        //element no has Parent
                        $updated = $data.appendTo($update);
                    }

                    //+1 for floor in outerHeight
                    $("body,html").stop(true, true).animate({ scrollTop: $updated.last().offset().top + $updated.last().outerHeight() + 1 - $(window).height() + 50 }, 'fast');

                    $updated.sColorify("#ef9", true);

                    $update.trigger('contentChange', { items: $updated });
                }
                else if (_action.type === "dialog") {

                    var title = $data.filter('.title').html();

                    if (!title)
                        title = $data.find('.title').eq(0).html();

                    if (_action.item) {
                        $updated = $.sDialog(_action.item || "#Dialog", $.extend({}, { title: title || "" }, _action.showoptions)).html(_data).open().object();
                    } else {
                        $updated = $form.closest('.sdialog').sDialog($.extend({}, { title: title || "" }, _action.showoptions)).html(_data).open().object();
                    }

                } else if (_action.type === "tip") {

                    if (_action.item) {
                        $updated = $(_action.item || "#STip").sTip($.extend({}, {
                            content: _data,
                            clickable: true
                        }, _action.showoptions)).open().object();
                    } else {
                        $updated = $form.closest('.stip');
                        $($stip).sTip($.extend({}, {
                            content: _data,
                            clickable: true
                        }, _action.showoptions)).open();
                    }

                }


                if (_action.action === "close") {
                    if (_holder)
                        _holder.close();
                }


                if (_action.posts) {
                    $.each($updated.find('form'), function (index, item) {
                        var $item = $(item);
                        if (_action.posts[index]) {
                            $item.sAjaxPost(_action.posts[index]);
                        } else {
                            return;
                        }
                    });
                }

                if ($updated) {
                    self.updated = $updated;
                }

                _action.onDone.call(self, _data);
                if (_action.log) {
                    $.sAlert('#AjaxLog').message({ type: 'success', content: _action.message, timeout: 2000 });
                }
            },
            checkData: function (form, data) {

                var self = this,
                    settings = this.options,
                    actions = settings.actions,
                    $form = $(form);



                //if data is null for delete
                data = data || ' ';

                //convert to array when is string or json
                try {
                    var JSONobject;
                    if (typeof data === "string") {
                        JSONobject = JSON.parse(data);
                    } else {
                        JSONobject = data;
                    }

                    if (!settings.multiaction) {
                        data = [JSONobject];
                    } else {
                        data = $.map(JSONobject, function (value) { return value; });
                    }

                } catch (e) {
                    data = new Array(data);
                }

                $.each(data, function (index, _data) {

                    if (actions.length <= index) {
                        return;
                    }

                    var $data, _action = actions[index];

                    _action.onComplete.call(self, $form, _data);

                    //for syntax error on ie in returning value in upload file
                    try {
                        $data = $(_data);
                    } catch (e) {
                        self.insertData($form, _data, _action);
                        return;
                    }

                    var $tagerror = $data.filter(".validation-summary-errors");

                    if ($tagerror.length === 0) {
                        $tagerror = $data.find(".validation-summary-errors,.field-validation-error");
                    }

                    if ($tagerror.length) {

                        //has error server side
                        var $holder = $form, $oldajaxforms;

                        if (settings.holder !== null) {
                            $holder = $(settings.holder);
                        } else {
                            $holder = $form.closest(".form-holder");

                            if ($holder.length === 0)
                                $holder = $form;
                        }


                        //holder is dialog
                        if ($holder.is('.sdialog')) {
                            $oldajaxforms = $.map($holder.find('form'), function (item) {
                                return $(item).data('sAjaxPost');
                            });

                            //use for scroll on validation message
                            $holder.find(".sdialog-content").empty().append($data);
                            $holder.sDialog().open();

                        } else if ($holder.is('.stip')) {
                            //holder is tip
                            $oldajaxforms = $.map($holder.find('form'), function (item) {
                                return $(item).data('sAjaxPost');
                            });

                            $holder.sTip({ content: $data });
                        }
                        else {

                            $oldajaxforms = $.map($form, function (item) {
                                return $(item).data('sAjaxPost');
                            });

                            $holder.replaceWith($holder = $data);
                        }

                        var $newforms = $holder.find('form');

                        if ($newforms.length === 0)
                            $newforms = $holder.filter("form");

                        if ($newforms.length === 0)
                            $newforms = $holder;

                        $.each($oldajaxforms, function (_index, _ajaxform) {
                            if (_ajaxform && !($newforms.eq(_index).data('sAjaxPost')))
                                $newforms.eq(_index).data('sAjaxPost', _ajaxform.update($newforms[_index]));
                        });

                        self.setError(true);

                        if ($tagerror.filter(".field-validation-error").length !== 0)
                            $tagerror = $tagerror.filter(".field-validation-error");

                        //first for digisurvey and user see another error
                        var difftop = settings.diffTopOffset.call(self, $tagerror.eq(0));
                        if (!$tagerror.eq(0).isInViewport(difftop)) {
                            $("body,html").stop().animate({
                                "scrollTop": Math.max(0, $tagerror.eq(0).offset().top + difftop)
                            }, 'slow');
                        }

                        _action.onError.call(this, _data);
                    } else {
                        if (!(self.group.length && self.grouperror !== false) && !(self.parentgroup && $(self.parentgroup).sAjaxPost().grouperror !== false))
                            return self.insertData($form, _data, _action);
                    }

                    self.setError(true);

                    settings.onError.call(self, $form);
                });
            },
            send: function (form) {
                var self = this,
                    $form = $(form || self.form),
                    settings = this.options,
                    actions = settings.actions;

                if (settings.beforeSend.call(self, $form) == false) {
                    return;
                }

                var querystring = "", params = settings.params;

                if (settings.params) {

                    if (typeof settings.params === "function") {
                        params = settings.params.call(self);
                    } else {
                        params = settings.params;
                    }

                    if (typeof params !== "string") {
                        querystring = $.param(params);
                    } else {
                        querystring = params;
                    }
                }

                var _$inputs = $form.find(".fix-char");
                for (var i = 0, len = _$inputs.length; i < len; i++) {
                    var _$input = _$inputs.eq(i);
                    _$input.val(fixChar(_$input.val()));
                }

                _$inputs = $form.find(".fix-num");
                for (i = 0, len = _$inputs.length; i < len; i++) {
                    var _$input = _$inputs.eq(i);
                    _$input.val(toEnglishNumber(_$input.val()));
                }

                if ($form.valid()) {
                    self.disableForm(true);

                    if ($form.attr('enctype') === 'multipart/form-data') {

                        if (window.FormData !== undefined) // for HTML5 browsers
                        {
                            var formData = new FormData($form.get(0)),
                                _url = $form.attr('action');

                            $form.find('#AddedDataFormAjaxPost').remove();
                            if (params) {
                                if (_url.indexOf("?") !== -1) {
                                    querystring = "&" + querystring;
                                } else {
                                    querystring = "?" + querystring;
                                }
                            }

                            self.xhr = $.ajax(
                                $.extend({
                                    xhr: function () {
                                        var myXhr = $.ajaxSettings.xhr();
                                        if (myXhr.upload) {
                                            myXhr.upload.addEventListener('progress', function (e) {
                                                if (e.lengthComputable) {
                                                    var max = e.total;
                                                    var current = e.loaded;

                                                    var percentage = Math.min((current * 100) / max, 90);
                                                    if (settings.progressbar) {
                                                        $(settings.progressbar).css("width", percentage + "%");
                                                    } else {
                                                        $("#globalProgress").css("width", percentage + "%");
                                                    }

                                                    if (settings.progress) {
                                                        $(settings.progress).text(percentage + "%");
                                                    }
                                                }
                                            }, false);
                                        }
                                        return myXhr;
                                    },
                                    beforeSend: function () {
                                        if (settings.progressbar) {
                                            $(settings.progressbar).show().css("width", 0);
                                        } else {
                                            $("#globalProgress").show().width(0).show();
                                        }
                                    },
                                    url: _url + querystring,
                                    type: 'POST',
                                    data: formData,
                                    mimeType: "multipart/form-data",
                                    contentType: false,
                                    cache: false,
                                    processData: false
                                },
                                    settings.sendoptions)
                            ).done(function (data, _textStatus, _jqXHR) {
                                //for caching page in firefox
                                self.disableForm(false);

                                if (settings.progressbar) {
                                    $(settings.progressbar).css("width", "100%");
                                } else {
                                    $("#globalProgress").css("width", "100%");
                                }

                                setTimeout(function () {
                                    $("#globalProgress").hide().width(0);
                                }, 500);

                                return self.checkData($form, data);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                //for caching page in firefox
                                self.disableForm(false);

                                if (self.options.onError.call(self, $form, jqXHR, textStatus, errorThrown) !== false) {

                                    if (textStatus !== "abort" && $.fn.sAlert) {
                                        var _message = getMessageCode(jqXHR.status);
                                        $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                                    }
                                }
                                self.setError(true);
                            });
                        } else {
                            //for older browsers generate a random id
                            var iframeId = 'iframe' + (new Date().getTime());

                            //create an empty iframe
                            var iframe = document.createElement("iframe");
                            iframe.style.display = 'none';
                            iframe.name = iframeId;
                            iframe.id = iframeId;
                            iframe.src = "javascript:false";

                            document.body.appendChild(iframe);

                            var formAction = $form.attr("action");

                            if (params) {
                                if (formAction.indexOf("?") !== -1) {
                                    querystring = "&" + querystring;
                                } else {
                                    querystring = "?" + querystring;
                                }
                            }

                            //parameter for return partial view
                            if (formAction.indexOf('?') !== -1) {
                                formAction += "&__part=1";
                            } else {
                                formAction += "?__part=1";
                            }

                            $("#loading").slideDown();

                            if ($form.find(":submit").length === 0) {
                                //fix submit bug in IE
                                $form.append("<input type='submit' name='fixbugsubmit' value='fixbugsubmit' class='hidden'/>");
                            }

                            //set form target to iframe
                            $form.attr({ 'action': formAction + querystring, 'target': iframeId, "enctype": "multipart/form-data", "encoding": "multipart/form-data" })
                                .off('submit.sajaxpost');

                            if ($form.parent().length === 0) {
                                //form must be connected to dom
                                $form.addClass("temp-form").hide();
                                $(document.body).append($form);
                            }

                            $form.trigger('submit');

                            //content-type must be text/plain
                            $(iframe).on("load", function () {
                                var doc = getDoc(iframe);
                                var docRoot = doc.body ? doc.body : doc.documentElement;
                                //var data = docRoot.innerHTML;
                                var data = docRoot.innerText;

                                if (data == "false") {
                                    return;
                                }

                                self.disableForm(false);
                                $("#loading").slideUp();

                                if ($form.length && $form.hasClass("temp-form")) {
                                    $form.remove();
                                }

                                // get and check the Title (and H tags if you want)
                                var ifTitle = doc.title;
                                if (ifTitle.indexOf("404") >= 0 || ifTitle.indexOf("413") >= 0 || ifTitle.indexOf("500") >= 0 || ifTitle.indexOf("403") >= 0) {
                                    self.options.onError.call(self, $form);

                                    if ($.fn.sAlert) {
                                        $.sAlert('#AjaxLog').message({ type: 'error', content: slang.error, timeout: 2000 });
                                    }

                                    return;
                                }

                                //data is returned from server.
                                return self.checkData($form, data);
                            });


                            $form.find('#AddedDataFormAjaxPost').remove();
                        }
                    } else {
                        var formdata = {}, _url = $form.attr("action");

                        if (params) {
                            if (_url.indexOf("?") !== -1) {
                                querystring = "&" + querystring;
                            } else {
                                querystring = "?" + querystring;
                            }
                        }

                        if (settings.dataformat.toLowerCase() === 'json') {

                            formdata = {
                                __RequestVerificationToken: $form.find("input[name=__RequestVerificationToken]").val() || $("input[name=__RequestVerificationToken]").val(),
                                FormData: JSON.stringify($form.serializeJSON({}, null, ["__RequestVerificationToken", "__Display"]))
                            };

                        } else {
                            formdata = $form.serialize();
                        }

                        $form.find('#AddedDataFormAjaxPost').remove();

                        self.xhr = $.ajax($.extend({
                            url: _url + querystring,
                            type: "POST",
                            data: formdata,
                            datatype: actions.length > 1 ? 'json' : 'string'
                        },
                            settings.sendoptions)
                        ).done(function (data) {
                            //for caching page in firefox
                            self.disableForm(false);
                            return self.checkData($form, data);

                        }).fail(function (jqXHR, textStatus, errorThrown) {
                            //for caching page in firefox
                            self.disableForm(false);
                            if (self.options.onError.call(self, $form, jqXHR, textStatus, errorThrown) !== false) {
                                if (textStatus !== "abort" && $.fn.sAlert) {
                                    var _message = getMessageCode(jqXHR.status);
                                    $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                                }
                            }
                            self.setError(true);
                        });
                    }

                    settings.afterSend.call(self, $form);
                } else {
                    //form is not valid
                    self.setError(true);

                    var $inputerror = $form.find(".more-fields").find(".input-validation-error");
                    if ($inputerror.length)
                        $inputerror.closest(".more-fields").trigger("show");

                    $inputerror = $form.find(".stabs-content").find(".input-validation-error");
                    if ($inputerror.length)
                        $inputerror.eq(0).closest(".stabs-content").data("tab").trigger('click');

                    settings.onError.call(self, $form);
                }
            }
        };
        return sAjaxPost;
    })();

    /////////////// sMoreFields /////////////////


    $.fn.sMoreFields = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sMoreFields';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sMoreFields($element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sMoreFields.defaults = {
        moreText: slang.more,
        lessText: slang.less
    };

    var sMoreFields = (function () {
        function sMoreFields(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sMoreFields.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sMoreFields.prototype = {
            init: function () {
                this.$btn = $('<div class="clear"></div><div class="more-fields-bar"><button type="button" class="more-fields-btn btn blue main-action icon-white down">' + this.options.moreText + '</button><hr class="more-fields-splitter"/></div><div class="clear"></div>')
                    .insertBefore(this.el)
                    .find('.more-fields-btn');

                this.formid = (this.el.closest("form").attr("id") || "").replace(/[0-9]/g, "");

                if (this.formid) {
                    var status = getFromClient(this.formid + "MoreFieldsStatus");

                    if (status === "show") {
                        this.toggle("show");
                        var _$closestDialog = this.el.closest('.sdialog');
                        if (_$closestDialog.length) {
                            _$closestDialog.sDialog().updatePosition();
                        }
                    }
                }

                if (this.el.find(".field-validation-error").length)
                    this.toggle("show");

                var self = this;
                this.el.on("toggle", function () {
                    self.toggle();
                });

                this.el.on("show", function () {
                    self.toggle("show");
                });

                this.$btn.on('click', function () {
                    self.toggle(null, true);
                });
            },
            toggle: function (state, isuseraction) {
                if (isuseraction !== true)
                    isuseraction = false;

                if (!this.el.hasClass('show') || state === "show") {
                    this.el.addClass('show');
                    this.$btn.removeClass("down blue main-action").addClass('up red').html(this.options.lessText).show();

                    //call matchtemplate for corect view lov
                    var _lovs = this.el.find(".slov-input").sListOfValue();
                    if (_lovs) {
                        for (var i = 0, len = _lovs.length; i < len; i++) {
                            _lovs[i].matchTemplate();
                        }
                    }

                    if (isuseraction && this.formid) {
                        setOnClient(this.formid + "MoreFieldsStatus", "show");
                    }
                } else {
                    this.el.removeClass('show');
                    this.$btn.removeClass('up red').addClass("down blue main-action").html(this.options.moreText).show();

                    if (isuseraction && this.formid) {
                        setOnClient(this.formid + "MoreFieldsStatus");
                    }
                }


                if (!$.mobile) {
                    var $dialog = this.el.closest('.sdialog');
                    if ($dialog.length && ($dialog.outerHeight() < $(window).height()))
                        setTimeout(function () { $dialog.trigger('updatePosition'); }, 2e2);
                }
            }
        };
        return sMoreFields;
    })();


    ///////////// sDetails /////////////////


    $.fn.sDetails = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sDetails';

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sDetails(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };

    $.fn.sDetails.defaults = {
        mixedmode: true,
        showmultidetail: true
    };

    var sDetails = (function () {
        function sDetails(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sDetails.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        };

        sDetails.prototype = {
            init: function () {
                var self = this;

                if (this.options.mixedmode) {
                    this.el.find(".details>.menu-items").addClass("sdetails-menu")
                        .find(".detail-action").addClass("icon-black add")
                        .each(function (_index, item) {
                            $(item).data("sdetails-id", "sdetails" + Math.round(Math.random() * 1e7));
                        });

                    this.el.find(".item-content").on("showDefaultDetail", function () {
                        var $link = $(this).find(".detail-action").eq(0).addClass("current-detail");
                        self.toggle($link.closest(".item-content"), $link);
                    });

                    this.el.find(".items-holder").eq(0)
                        .off("contentChange.sdetails").on("contentChange.sdetails", function (_event, data) {
                            data.items.on("showDefaultDetail", function () {
                                var $link = $(this).find(".detail-action").eq(0).addClass("current-detail");
                                self.toggle($link.closest(".item-content"), $link);
                            }).find(".details>.menu-items").addClass("sdetails-menu")
                                .find(".detail-action").off("click.sdetails").on("click.sdetails", function (event) {
                                    event.preventDefault();
                                    var $link = $(this).addClass("current-detail"),
                                        $holder = $link.closest(".context-menu");

                                    if ($holder.length) {
                                        $holder = $holder.data("originalelement");
                                    } else {
                                        $holder = $link.data("originalelement");
                                    }

                                    //for click on detail btn programmatically
                                    $holder = $holder || $link;

                                    self.toggle($holder.closest(".item-content"), $link);

                                })
                                .addClass("icon-black add").each(function (_index, item) {
                                    $(item).data("sdetails-id", "sdetails" + Math.round(Math.random() * 1e7));
                                });
                        });

                    this.el.off("click", ".detail-action")
                        .find(".detail-action").off("click.sdetails").on("click.sdetails", function (event) {
                            event.preventDefault();
                            var $link = $(this).addClass("current-detail"),
                                $holder = $link.closest(".context-menu");

                            if ($holder.length) {
                                $holder = $holder.data("originalelement");
                            } else {
                                $holder = $link.data("originalelement");
                            }

                            self.toggle($holder.closest(".item-content"), $link);

                        });
                } else {

                    this.el.find(".details .menu-items").addClass("sdetails-menu")
                        .find(".item a").addClass("icon-black add detail-action").each(function (_index, item) {
                            $(item).data("sdetails-id", "sdetails" + Math.round(Math.random() * 1e7)).parent();
                        });

                    this.el.on('click', '.detail-btn', function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        var $btn = $(this),
                            $list = $btn.next("ul").clone(true, true).data("originalelement", $btn.next("ul")).addClass("sdetails-menu"),
                            $item = $btn.closest(".item-content");

                        if ($list.length) {
                            //is multi detail
                            if ($list.children().length === 1) {
                                self.islist = false;
                            } else {
                                self.islist = true;
                            }

                            $list.off("click.sdetail", ".item a").on("click.sdetail", ".item a", function (event) {
                                event.preventDefault();
                                var $link = $(this);

                                self.toggle($item, $link);

                            });

                            $btn.sTip({
                                content: $list,
                                group: "sdetails" + ($el.attr("id") || ""),
                                closegroup: true,
                                onAfterOpen: function () {
                                    var $items = this.tip.find(".item");
                                    if ($items.length === 1) {
                                        $items.children().filter("a").trigger('click');
                                    }
                                }
                            }).toggle();

                        } else {
                            //is single detail
                            self.islist = false;
                            $btn.data("sdetails-id", $btn.data("sdetails-id") || "sdetails" + Math.round(Math.random() * 1e7));
                            self.toggle($item, $btn);
                        }
                    }).find(".items-holder").on("contentChange", function (_event, data) {
                        data.items.find(".details .menu-items").addClass("sdetails-menu")
                            .find(".item a").addClass("icon-black add detail-action").each(function (_index, item) {
                                $(item).data("sdetails-id", "sdetails" + Math.round(Math.random() * 1e7));
                            });
                    });
                }
            },
            update: function (useroptions) {
                this.options = $.extend({}, this.options, useroptions);
                this.init();
                return this;
            },
            toggle: function ($item, $link) {

                var self = this,
                    settings = self.options,
                    $item = $item || $link.closest(".item-content"),
                    id = $link.data("sdetails-id");

                var index = $link.closest(".sdetails-menu").find(".detail-action").index($link);

                if ($item.nextAll("#" + $link.data("sdetails-id")).length > 0) {
                    self.hide($item, id);

                    if (!settings.showmultidetail) {
                        self.hideAll($item);
                    }

                } else {

                    if (!settings.showmultidetail) {
                        self.hideAll($item);
                        setTimeout(function () { self.show($item, id, $link.attr("href"), index); }, 100);
                    } else {
                        self.show($item, id, $link.attr("href"), index);
                        $link.addClass("show").removeClass("remove");
                    }
                }
            },
            hide: function ($item, id) {
                var self = this;


                var $detail = $item.nextAll("#" + id),
                    index = parseInt($detail.data("sdetails-index"));

                if (index > -1) {
                    $item.find(".sdetails-menu .detail-action").eq(index)
                        .removeClass("remove").addClass("add");
                }

                $detail.remove();

                if ($item.nextUntil(".item-content").filter(".item-details").length == 0) {
                    $item.removeClass("expanded");
                }

                if (!self.islist) {
                    $item.find(".detail-btn").removeClass("remove red").addClass("add blue").html('+');
                }

                self.arrange($item);
            },
            hideAll: function ($item) {

                if ($item) {
                    $item.removeClass("expanded").find(".detail-btn").removeClass("remove red").addClass("add blue").html('+')
                        .end()
                        .nextUntil(".item-content").filter(".item-details").remove();

                    $item.find(".sdetails-menu .detail-action").removeClass("remove").addClass("add");
                }

            },
            show: function ($item, id, url, index) {
                var self = this;

                $.ajax({
                    url: url,
                    type: 'GET',
                    datatype: 'json'
                }).done(function (data) {

                    try {
                        data = $.map(data, function (value) { return value; });
                    } catch (e) {
                        data = new Array(data);
                    }

                    $.each(data, function (_index, _data) {
                        var $detail = $('<tr class="item-details" id="' + id + '"><td class="connector-holder" colspan="1"><div class="detail-connector"><div class="vertical-border"></div><div class="horizontal-border"></div></div><td class="detail-content" colspan="100"></td></tr>');
                        $detail.data("sdetails-index", index).insertAfter($item).find('>td').eq(1).append(_data);


                        $item.find(".sdetails-menu .detail-action").eq(index).removeClass("add").addClass("remove");

                        $('<button type="button" class="btn-mini remove-detail circle icon-white red close">-</button>')
                            .appendTo($detail.find(".detail-connector>div").eq(1)).on("click", function (_event) {
                                //reselect for when item-content edited and no exist
                                $item = $(this).closest(".item-details").prevAll(".item-content").eq(0);
                                self.hide($item, id);
                            });
                    });

                    $item.addClass("expanded");

                    if (!self.islist) {
                        $item.find(".detail-btn").removeClass("add blue").addClass("remove red").html('-');
                    }

                    self.arrange($item);
                }).fail(function (jqXHR, textStatus, _errorThrown) {
                    if (textStatus !== "abort" && $.fn.sAlert) {
                        var _message = getMessageCode(jqXHR.status);
                        $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                    }
                });
            },
            arrange: function ($item) {

                var $details = $item.nextUntil(".item-content").filter(".item-details");
                $details.removeClass("last-details").last().addClass("last-details");

                if ($.mobile) {
                    if ($details.length)
                        $("body,html").animate({ "scrollTop": $details.eq(0).offset().top }, 'slow');
                    else
                        $("body,html").animate({ "scrollTop": $item.offset().top }, 'slow');
                }
            }
        };
        return sDetails;
    })();


    //////////////// sListOfValue //////////////////////

    $.fn.sListOfValue = function (options) {

        if (this.length === 0) {
            return null;
        }

        var pluginName = 'sListOfValue';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sListOfValue($element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sListOfValue.defaults = {
        numSelect: 1,
        src: null,
        vHolderSelector: null,
        idsHolderSelector: null,
        itemselector: ".item-select",
        type: 'combo',
        emptytext: null,
        searchplace: "after",
        addbehavior: "end", /* beginning or end */
        namesplitter: "~|^",
        idsplitter: ",",
        resultnumber: 10,
        id: '',
        justselectleaf: false,
        params: {},
        managementParams: {},
        managementurl: null,
        editurl: null,
        jumptonextinput: true,
        managementtype: "create",
        integratedManagement: false,
        jsonManagement: false,
        managementDialogClass: "",
        syncSelect: false,
        clearItemEnable: false,
        clearAllEnable: false,
        groupname: "GroupName",
        addtext: slang["new"],
        proxydataexception: "[name=__RequestVerificationToken]",
        proxydisplay: null,
        proxydisplayformat: null,
        proxyidentity: [],
        proxyGetList: null,
        proxyfootertemplate: null,
        proxyformid: "ProxyForm",
        proxysumnames: null,
        proxysummode: "all",
        proxyresetexception: null,
        proxypagesizeselector: null,
        proxypagingholder: null,
        proxypagingvisiblecount: 5,
        proxysortname: null,
        proxysorttype: "asc",
        proxyshowas: "dialog",
        showoptions: null,
        enableedit: true,
        removeSubmitInEdit: true,
        enableinsert: true,
        enabledelete: true,
        identityname: "ID",
        staticdata: null,
        onInit: function () { },
        onItems: function () { },
        beforeGetList: function () { },
        beforeShowList: function () { },
        afterShowList: function () { },
        onAfterSubmit: function () { },
        onBeforeSubmit: function () { },
        onBeforeEdit: function () { },
        onBeforeInsert: function () { },
        onDone: function () { },
        onChange: function () { },
        onBeforeCalculateSums: function () { },
        onAfterCalculateSums: function () { },
        onProcessProxyData: function () { }
    };

    var sListOfValue = (function () {
        function sListOfValue(element, userOptions) {

            //extend options
            this.el = element;
            this.uid = Math.round(Math.random() * 1e7);
            this.options = $.extend({}, $.fn.sListOfValue.defaults, userOptions);
            this.values = new Array();
            this.holder = null;
            this.isopen = false;
            this.istree = false;
            this.itemsHolder = null;
            this.init();

            if (this.searchinput && this.searchinput.is(":disabled") || this.el.is(":disabled") || (this.idholder && this.idholder.is(":disabled")))
                this.disable();
        }

        sListOfValue.prototype = {
            init: function () {
                var self = this,
                    settings = this.options,
                    _$proxydata;

                this.cpage = 1;
                this.isdisabled = false;
                var _$contentholder = $();

                if (settings.numSelect === -1)
                    settings.clearItemEnable = true;

                settings.onInit.call(this);

                if (["proxy", "jsoncombo", "proxytable"].indexOf(settings.type) !== -1) {
                    this.proxyid = -2;
                    _$proxydata = this.el.next(".slov-proxy-data");

                    var _sajaxpostobj = this.el.closest("form").data("sAjaxPost");
                    if (_sajaxpostobj)
                        _sajaxpostobj.options.dataformat = "json";
                }

                if (settings.type !== "proxytable") {
                    var elementClasses = this.el.attr("class");
                    this.inputholder = $("<div class='slov-values-holder input-group-input " + "slov-" + settings.type + "'><div class='slov-items'></div></div>");
                    if (settings.searchplace === "after")
                        this.searchinput = $("<input type='text' class='slov-search " + elementClasses + "' autocomplete='off' placeholder='" + (settings.emptytext || slang.select) + "' value=''/>").removeClass("slov-select slov-input hidden").data("sListOfValue", this).appendTo(this.inputholder.find(".slov-items"));
                    else
                        this.searchinput = $("<input type='text' class='slov-search " + elementClasses + "' autocomplete='off' placeholder='" + (settings.emptytext || slang.select) + "' value=''/>").removeClass("slov-select slov-input hidden").data("sListOfValue", this).prependTo(this.inputholder.find(".slov-items"));

                    if (settings.numSelect === 1) {
                        this.inputholder.addClass("single-select");
                    } else {
                        this.inputholder.addClass("slov-multi-items");
                    }

                    _$contentholder = _$contentholder.add(this.inputholder);
                    this.select = null;

                    if (settings.managementurl) {
                        this.managementbtn = $('<button type="button" value="..." class="btn-mini slov-management-btn icon-white add green" tabindex="-1"></button>');
                        if (typeof settings.managementurl !== "string" && settings.managementurl.length === 1 && settings.managementurl[0]['url']) {
                            settings.managementurl = settings.managementurl[0]['url'];
                        }

                        if (typeof settings.managementurl === "string") {
                            this.managementbtn.attr("data-url", settings.managementurl)
                                .on('click', function (event) {
                                    self.clickManagementBtn(event);
                                });
                        } else {
                            this.managementbtn.sDropDown({
                                content: settings.managementurl,
                                onAfterOpen: function () {
                                    this.holder.find("a").on("click", function (event) {
                                        self.clickManagementBtn(event);
                                    });
                                }
                            });
                        }

                        _$contentholder = _$contentholder.add(this.managementbtn.wrap('<span class="input-group-btn"></span>').parent());
                    }

                    this.togglebtn = $('<button type="button" value="..." class="slov-open-btn btn-mini icon-black" tabindex="-1"></button>').addClass(settings.type == "proxy" ? 'add' : 'down')
                        .on('click', function (event) {
                            if (settings.proxyGetList)
                                settings.proxyGetList.call(self, $(this), event);
                            else {
                                if (self.isopen) {
                                    if (self.holder) {
                                        self.holder.close();
                                        self.isopen = false;
                                    }
                                } else {
                                    clearTimeout(self.closetimer);
                                    self.searchinput.trigger('click').trigger('focus');
                                }
                            }
                        });

                    _$contentholder = _$contentholder.add(this.togglebtn.wrap('<span class="input-group-btn"></span>').parent());

                    //for fix bug in sCalculate
                    this.isinitial = true;

                    if (this.el.is("select")) {
                        //Client Search
                        this.select = true;

                        settings.type = "combo";

                        this.searchinput.addClass("slov-search-select");

                        var _$el = this.el.clone(true).data("sListOfValue", this).addClass("hidden slov-input").appendTo(this.inputholder);
                        this.el.replaceWith(_$contentholder);
                        this.el = _$el;

                        if (this.el.val()) {
                            var selected = this.el.find(":selected");
                            this.val([{ id: selected.attr("value"), value: selected.html() }]);
                        }

                        if (this.el.is(":disabled"))
                            this.disable();

                        this.changelock = false;

                        this.el.on("change", function (_event) {
                            if (!self.changelock) {
                                var _$select = $(this),
                                    _$selected = _$select.find(":selected"),
                                    _display = _$selected.html(),
                                    value = _$select.val();

                                self.val([{ id: value, item: _$selected, value: _display }]);
                                self.searchinput.val("");
                                settings.onDone.call(self);
                                settings.onChange.call(self);
                            }
                            self.changelock = false;
                        });

                    } else {
                        //Server Search
                        this.idholder = this.idholder || this.el.parent().find(settings.idsHolderSelector);

                        if (settings.clearAllEnable) {
                            this.clearbtn = $('<button type="button" class="slov-clear-btn btn-mini red icon-white cancel">-</button>')
                                .prop('disabled', true).on('click', function () {
                                    self.val([], true);
                                    self.clearbtn.prop('disabled', true);
                                });

                            _$contentholder = _$contentholder.add(this.clearbtn.wrap('<span class="input-group-btn"></span>').parent());
                        }

                        var _$el = this.el.clone(true).data("sListOfValue", this).addClass("hidden slov-input").appendTo(this.inputholder);
                        if (this.el.hasClass("slov-input")) {
                            this.el.closest(".slov-values-holder").parent().children().not("input[type=hidden]").remove().end().end().append(_$contentholder);
                        } else {
                            this.el.replaceWith(_$contentholder);
                        }

                        this.el = _$el;

                        if (this.idholder && this.idholder.length) {
                            this.parseValues();
                        } else {
                            if (settings.type !== "proxy")
                                console.error("Not found " + settings.idsHolderSelector);
                        }

                        if (settings.type === "proxy" || settings.type === "jsoncombo") {
                            if (_$proxydata.length) {
                                _$proxydata = _$proxydata.find(".slov-item");
                                var _values = [];
                                for (var i = 0, _len = _$proxydata.length; i < _len; i++) {
                                    var _$data = _$proxydata.eq(i),
                                        _data = _$data.find(">.sgroup").removeClass("sgroup").serializeJSON();

                                    if (settings.staticdata) {
                                        _data = $.extend({}, _data, settings.staticdata);
                                    }

                                    if (settings.type === "proxy") {
                                        _values.push({
                                            id: _data["ID"] ? _data["ID"] : self.proxyid--,
                                            display: _$data.find(".slov-item-text").html(),
                                            data: _data
                                        });
                                    } else {
                                        _values.push({
                                            id: _data[settings.identityname],
                                            value: _$data.find(".slov-item-text").html(),
                                            data: _data
                                        });
                                    }
                                }

                                this.val(_values);
                                _$proxydata.remove();
                            }
                        }
                    }


                    if (settings.type === "combo" || settings.type === "jsoncombo") {
                        //for prevent automatic jumping to next input when pressed tab
                        this.ispressedtab = false;

                        this.searchinput.on("click.sListOfValue", function (_event) {
                            if (self.isdisabled || self.searchinput && self.searchinput.is(":disabled") || self.el.is(":disabled") || (self.idholder && self.idholder.is(":disabled"))) {
                                self.disable();
                                return;
                            }

                            if (!self.isopen) {
                                clearTimeout(self.closetimer);
                                self.getList(self.searchinput.val());
                                self.searchinput.trigger('focus');
                            }
                        });

                        self.inputholder.on("click.sListOfValue", function (_event) {
                            if (self.isdisabled || self.searchinput && self.searchinput.is(":disabled") || self.el.is(":disabled") || (self.idholder && self.idholder.is(":disabled"))) {
                                self.disable();
                                return;
                            }

                            if (!self.isopen) {
                                clearTimeout(self.closetimer);
                                self.getList(self.searchinput.val());
                                self.searchinput.trigger('focus');
                            }
                        });

                        this.searchinput.on("keypress.sListOfValue input.sListOfValue", function (event) {
                            switch (event.keyCode || event.which) {
                                case 13: //Enter
                                    if (self.isopen) {
                                        event.stopPropagation();
                                        event.preventDefault();


                                        var _$item = self.holder.object().find(".slov-hover").eq(0);

                                        if (_$item.length) {

                                            if (event.shiftKey && self.istree)
                                                self.doubleClickOnItem(_$item);
                                            else
                                                self.clickOnItems(_$item);

                                            _$item.removeClass("slov-hover");
                                        }
                                        else {
                                            if (self.searchinput.val())
                                                self.clickOnItems(self.holder.object().find(".item-content:not(.non-selectable)").eq(0));
                                            else
                                                self.holder.close();
                                        }
                                    }
                                    break;

                                case 8: //Backspace
                                case 9: //Tab
                                case 38: //ArrowUp
                                case 40: //ArrowDown
                                    //Firefox needs it!
                                    return;

                                default:
                                    clearTimeout(self.typingtimer);
                                    self.typingtimer = setTimeout(function () {
                                        self.getList(self.searchinput.val());
                                    }, 700);
                            }

                            if (self.selectcontaining) {
                                if ($(this).val())
                                    self.selectcontaining.text(String.format(slang.selectcontaining, $(this).val())).removeClass("hidden");
                                else
                                    self.selectcontaining.addClass("hidden");
                            }

                        }).on("keydown.sListOfValue", function (event) {
                            switch (event.keyCode || event.which) {
                                case 8: //Backspace
                                    if (self.searchinput.val() != "") {
                                        clearTimeout(self.typingtimer);
                                        self.typingtimer = setTimeout(function () {
                                            self.getList(self.searchinput.val());
                                        }, 700);

                                    } else if (self.values.length !== 0) {
                                        var activeindex = self.inputholder.find(".slov-item.active").index();
                                        if (activeindex !== -1) {
                                            self.val(self.values[activeindex - 1], false, true);
                                        } else {
                                            self.val(self.values[self.values.length - 1], false, true);
                                        }
                                        self.markSelected();
                                        self.searchinput.trigger('focus');
                                    }

                                    break;

                                case 9: //Tab
                                    //To prevent automatic jumping to the next input when pressed tab
                                    self.ispressedtab = true;

                                    if (self.holder) {
                                        var $holder = self.holder.object();

                                        var _$item = $holder.find(".slov-hover").eq(0);

                                        if (_$item.length) {
                                            event.preventDefault();

                                            self.clickOnItems(_$item);
                                        }
                                        else {
                                            if (self.searchinput.val()) {
                                                event.preventDefault();
                                                self.clickOnItems($holder.find(".item-content:not(.non-selectable)").eq(0));
                                            }
                                        }
                                    }
                                    break;
                                case 38: //ArrowUp
                                    if (self.holder && self.isopen) {

                                        var $holder = self.holder.object(),
                                            _$item = $holder.find(".item-empty,.item-content").filter(".slov-hover"),
                                            _$prev = _$item.prevAll(".item-empty,.item-content").eq(0),
                                            //for tree views
                                            _$subitems = _$prev.find(".item-children,.item-childs"),
                                            _$parentitem = _$item.closest(".item-children,.item-childs");

                                        if (_$subitems.length)
                                            _$prev = _$subitems.find(".item-content").last();

                                        if (_$prev.length == 0 && _$parentitem.length)
                                            _$prev = _$parentitem.closest(".item-content");


                                        if (_$item.length) {
                                            if (_$prev.addClass("slov-hover").length) {
                                                _$item.removeClass("slov-hover");

                                                var _top = _$prev.offset().top - $holder.offset().top;
                                                if (_top < 1 || _top > $holder.height()) {
                                                    $holder.scrollTop(_top + $holder.scrollTop());
                                                }
                                            }
                                        }
                                    }
                                    break;
                                case 40: //ArrowDown
                                    if (!self.isopen) {
                                        if (self.isdisabled || self.searchinput && self.searchinput.is(":disabled") || self.el.is(":disabled") || (self.idholder && self.idholder.is(":disabled"))) {
                                            self.disable();
                                            return;
                                        }

                                        clearTimeout(self.closetimer);
                                        self.getList(self.searchinput.val());
                                        self.searchinput.trigger('focus');
                                    }

                                    if (self.holder == null) {
                                        return;
                                    }

                                    var $holder = $(self.holder.object()),
                                        $items = $holder.find(".item-empty,.item-content"),
                                        _$item = $items.filter(".slov-hover"),
                                        _$next = _$item.nextAll(".item-empty,.item-content").eq(0),
                                        //for tree views
                                        _$subitems = _$item.find(".item-children,.item-childs"),
                                        _$parentitem = _$item.closest(".item-children,.item-childs");

                                    if (_$subitems.length)
                                        _$next = _$subitems.children().eq(0);

                                    if (_$next.length === 0 && _$parentitem.length)
                                        _$next = _$parentitem.parents(".item-content").nextAll(".item-empty,.item-content").eq(0);

                                    if (_$item.length) {
                                        if (_$next.addClass("slov-hover").length) {
                                            _$item.removeClass("slov-hover");

                                            var _holderheight = $holder.outerHeight(),
                                                _top = _$next.offset().top - $holder.offset().top,
                                                _nextheight = Math.min(self.istree ? _$next.children().filter(".stree-content").outerHeight() : _$next.outerHeight(), 50);
                                            if (_holderheight < _top + _nextheight || _top < 0) {
                                                $holder.scrollTop($holder.scrollTop() + _top + _nextheight - _holderheight);
                                            }
                                        }
                                    } else if (self.isopen) {
                                        if ($items.filter(".slov-highlight").eq(0).addClass("slov-hover").length === 0)
                                            $items.eq(0).addClass("slov-hover");

                                    } else {
                                        if (self.select) {
                                            //for show all Items in dropDown
                                            self.getList("");
                                        } else {
                                            self.getList(self.searchinput.val());
                                        }
                                    }
                                    break;

                                case 37: //ArrowLeft
                                    var $items = self.inputholder.find(".slov-item"),
                                        $active = $items.filter(".active");

                                    if ($active.length) {
                                        $active.removeClass("active").next(".slov-item").addClass("active");
                                    } else {
                                        $items.first().addClass("active");
                                    }

                                    break;

                                case 39: //ArrowRight
                                    var $items = self.inputholder.find(".slov-item"),
                                        $active = $items.filter(".active");

                                    if ($active.length) {
                                        $active.removeClass("active").prev(".slov-item").addClass("active");
                                    } else {
                                        $items.last().addClass("active");
                                    }
                                    break;

                                case 27: //Escape
                                    if (self.isopen) {
                                        __preventescape = true;
                                        event.preventDefault();
                                        event.stopPropagation();
                                        if (self.holder)
                                            self.holder.close();

                                        if (self.xhr && self.xhr.status != 200) {
                                            self.xhr.abort();
                                            self.isopen = false;
                                        }
                                    }
                                    break;

                            }
                        }).on("blur.sListOfValue", function () {
                            var _$input = $(this);
                            if (self.closetimer === "lock") {
                                //value must be reset for working next blur event
                                self.closetimer = null;
                                //for click on collapsed tree-view
                                //timeout for firefox
                                setTimeout(function () {
                                    _$input.trigger('focus');
                                }, 50);
                                return;
                            }

                            //setTimeOut is for click on item-content 
                            clearTimeout(self.closetimer);

                            if (self.xhr && self.xhr.status != 200) {
                                self.xhr.abort();
                                self.isopen = false;
                            }

                            self.closetimer = setTimeout(function () {
                                if (_$input.is(":focus"))
                                    return;

                                if (self.holder) {
                                    self.holder.close();
                                    self.searchinput.val("");
                                }
                            }, 200);
                        });
                    } else {

                        self.inputholder.on('click.sListOfValue', function (event) {
                            if (!self.isopen) {
                                if (settings.proxyGetList) {
                                    settings.proxyGetList.call(self, $(this), event);
                                } else {
                                    self.getList(self.searchinput.val());
                                    self.searchinput.trigger('focus');
                                }
                            }
                        });
                    }
                } else {


                    if (settings.proxypagesizeselector) {
                        this.$psize = $(settings.proxypagesizeselector);
                        this.psize = parseInt(this.$psize.val()) || this.options.resultnumber;

                        this.$psize.on("change", function () {
                            self.psize = parseInt(self.$psize.val());

                            self.insertValues();
                        });
                    }

                    var _$items = this.el.addClass("slov-proxytable").find("tr:not(.items-header,.item-not-found)");
                    var _values = [];
                    for (var i = 0, _len = _$items.length; i < _len; i++) {
                        var _$item = _$items.eq(i).clone(),
                            _data = _$item.find("td>.sgroup").removeClass("sgroup").serializeJSON();

                        _$item.find("td").last().remove();
                        var _display = null;

                        if (_$item.find("td").length)
                            _display = _$item.wrapAll("<table/>").parent().html();

                        if (_data["ID"] && parseInt(_data["ID"]) <= 0) {
                            //default value from server
                            _data["ID"] = self.proxyid--;
                        }

                        _values.push(self.processProxyData(_data, _data["ID"] ? _data["ID"] : self.proxyid--, null, _display, _values));
                    }

                    _$items.remove();

                    this.val(_values);

                    var $searchholder = this.el.closest(".grid-holder").find(".search-holder");
                    if ($searchholder.length) {
                        $searchholder.find(".search-btn").on("click", function () {
                            if (self.cpage)
                                self.cpage = 1;

                            self.insertValues();
                        });

                        $searchholder.find(".search-reset").on("click", function () {
                            //reset fields
                            $searchholder.find(":input").val("");

                            if (self.cpage)
                                self.cpage = 1;

                            self.insertValues();
                        });

                        $searchholder.find(".show-advanced-search").on("click", function () {
                            var _$btn = $(this);
                            if (_$btn.hasClass("down")) {
                                _$btn.removeClass("down").addClass("up");
                                self.el.closest(".grid-holder").find(".advanced-search").eq(0).addClass("show");
                            } else {
                                _$btn.removeClass("up").addClass("down");
                                self.el.closest(".grid-holder").find(".advanced-search").eq(0).removeClass("show");
                            }
                        });

                        $searchholder.find(":input").on("keypress keydown input", function (event) {
                            //reset fields
                            var _keycode = event.keyCode || event.which;
                            if (_keycode === 13) {
                                event.preventDefault();

                                if (self.cpage)
                                    self.cpage = 1;

                                self.insertValues();
                            }
                        });
                    }

                    if (settings.enableinsert === true) {
                        var $boxheader = this.el.closest(".table-holder").prev(".box-header");

                        if ($boxheader.length === 0)
                            $boxheader = this.el.closest(".table-holder").prev().prev(".box-header");

                        $("<button type='button' class='btn icon-white green add main-action'>" + settings["addtext"] + "</button>").on('click.sListOfValue', function (event) {
                            if (settings.onBeforeInsert.call(self, $(this)) === false)
                                return;

                            if (!self.isopen) {
                                if (settings.proxyGetList) {
                                    settings.proxyGetList.call(self, $(this), event);
                                } else {
                                    self.getList();
                                }
                            }
                        }).insertBefore($boxheader.find(".clear"));
                    }
                }

                if (this.searchinput && this.searchinput.is(":disabled") || this.el.is(":disabled") || (this.idholder && this.idholder.is(":disabled")))
                    this.disable();

                this.isinitial = false;
            },
            parseValues: function () {
                var _ids = this.idholder.val();
                //check self.el.val()=="" for caching firefox
                if (_ids == "0" || this.el.val() == "") {
                    this.idholder.val('');

                    _values = [];

                    this.val(_values);

                    if (this.clearbtn)
                        this.clearbtn.prop('disabled', false);
                }
                else if (_ids.length != 0) {
                    var _names = this.el.val().split(this.options.namesplitter),
                        _ids = this.idholder.val().split(this.options.idsplitter),
                        _values = [];

                    for (var i = 0, _len = _ids.length; i < _len; i++)
                        _values.push({ value: _names[i], id: _ids[i] });

                    //isinitial for dont fire onDone for first time
                    this.val(_values);

                    if (this.clearbtn)
                        this.clearbtn.prop('disabled', false);
                }
            },
            update: function (useroptions) {
                if (useroptions)
                    this.options = $.extend({}, this.options, useroptions);

                if (useroptions.emptytext && this.values.length === 0) {
                    this.searchinput.attr("placeholder", (useroptions.emptytext || slang.select));
                }

                if (useroptions["managementurl"])
                    this.init();

                return this;
            },
            clickManagementBtn: function (event) {
                event.preventDefault();

                var $btn = $(event.currentTarget),
                    _url = $btn.attr("href") || $btn.attr("data-url"),
                    settings = this.options,
                    self = this;

                if (settings.editurl && settings.numSelect === 1 && self.val().length !== 0) {
                    if (settings.editurl.indexOf("?") === -1)
                        _url = settings.editurl + "?id=" + self.values[0].id;
                    else
                        _url = settings.editurl + "&id=" + self.values[0].id;
                }

                var querystring = "";

                if (_url.split("?").length > 1) {
                    querystring = "&";
                } else {
                    querystring = "?";
                }

                var managementParams = typeof settings.managementParams == "function" ? settings.managementParams() : settings.managementParams;
                querystring += $.param($.extend({}, managementParams));

                $.ajax({
                    type: "GET",
                    url: _url + querystring,
                    cache: false
                }).done(function (data) {

                    var _$data = $(data),
                        _title = _$data.filter('.title').html();

                    if (!_title)
                        _title = _$data.find('.title').eq(0).html();

                    //load for finding search-form
                    $.sDialog("#ManagementDialog" + self.uid, {
                        title: _title || "",
                        modal: true,
                        dialogclass: settings.managementDialogClass
                    }).html(_$data).open();

                    var $form = _$data.filter("form:not(.search-form)");
                    if ($form.length === 0)
                        $form = _$data.find("form:not(.search-form)");

                    if ($form.length) {
                        //if View is Create
                        if (settings.managementtype.toLowerCase() === "create" || settings.editurl && settings.numSelect === 1) {

                            $form.sAjaxPost({
                                integrated: settings.integratedManagement,
                                dataformat: settings.jsonManagement ? "json" : "string",
                                actions: [{
                                    customAction: function (data) {
                                        var _$item = $(data),
                                            _display = _$item.find(".item-value,th").eq(0).text(),
                                            _id = _$item.attr("id").replace("i_", "");

                                        settings.editurl = _$item.attr("data-editurl") || settings.editurl;

                                        if (self.select === true) {
                                            var _$option = self.el.find("option[value='" + _id + "']");
                                            if (_$option.length === 0)
                                                $("<option value='" + _id + "'></option>").text(_display).appendTo(self.el);
                                            else
                                                _$option.replaceWith($("<option value='" + _id + "'></option>").text(_display));
                                        }

                                        self.val({ "value": _display, "id": _id, object: _$item }, settings.numSelect === 1 ? true : false);

                                    },
                                    type: "ignore",
                                    action: "close"
                                }]
                            });

                        } else {
                            $form.sAjaxPost({
                                actions: [{
                                    type: "ignore",
                                    action: "close"
                                }]
                            });
                        }
                    }

                }).fail(function (jqXHR, textStatus, _errorThrown) {
                    if (textStatus !== "abort" && $.fn.sAlert) {
                        var _message = getMessageCode(jqXHR.status);
                        $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                    }
                });
            },
            jsontohtml: function (json) {
                var _$html = $("<table></table>"),
                    _$row = $("<tr></tr>").appendTo(_$html);

                for (var i = 0, _header = json["header"], _len = _header.length; i < _len; i++) {
                    $("<th></th>").text(_header[i]).appendTo(_$row);
                }

                _$row = $("<tr></tr>").appendTo(_$html);
                for (var i = 0, _items = json["items"], _len = _items.length; i < _len; i++) {
                    $("<td></td>").text(_items[i]).appendTo(_$row);
                }

            },
            showList: function (_data) {
                var self = this,
                    settings = self.options;

                var $data = $(_data);

                if (settings.type === "dialog") {

                    var title = $data.filter('.title').html();

                    if (!title)
                        title = $data.find('.title').html();

                    this.markSelected($data.find(".item-content"));

                    this.holder = $.sDialog('#' + settings.id, {
                        title: title || "",
                        onAfterClose: function () {
                            self.isopen = false;
                        },
                        //+1 for floor in outerWidth
                        width: self.searchinput.outerWidth() + 1,
                        modal: true,
                        onBeforeClose: function () {
                            //when diloag close without done button
                            if (!self.isdone) {
                                self.values = self.lastvalues;
                                if (self.values.length !== 0)
                                    self.searchinput.attr("placeholder", "");
                            }
                        },
                        onAfterOpen: function () {
                            //for sGrid
                            var $itemsholder = $('#' + settings.id).find(".items-holder").eq(0).addClass("slov-activated");

                            if (settings.numSelect === -1) {
                                var $selectall = $itemsholder.find(".select-all");
                                if ($selectall.length === 0)
                                    $selectall = $('<input type="checkbox" id="SelectAllItems" value="" class="select-all"/>').appendTo($itemsholder.find(".select-all-holder"));

                                $selectall.on("click.slistofvalue", function () {
                                    if ($selectall.is(":checked")) {
                                        $itemsholder.find(".item-content:not(.slov-highlight)").trigger('click');
                                    } else {
                                        $itemsholder.find(".item-content.slov-highlight").trigger('click');
                                    }

                                });
                            }

                            self.isopen = true;
                            self.lastvalues = self.val().slice();
                            self.isdone = false;
                            self.moderateList(this.object());
                        }
                    }).html($data).open();
                }
                else if (settings.type === "tip") {

                    this.markSelected($data.find(".item-content"));

                    this.holder = this.inputholder.sTip({
                        content: $data,
                        width: "auto",
                        position: {
                            place: 'bottom'
                        },
                        group: "sListOfValue",
                        closegroup: true,
                        autoclose: false,
                        closebutton: true,
                        clickable: true,
                        onAfterClose: function () {
                            self.isopen = false;
                        },
                        onAfterOpen: function () {
                            //for sGrid
                            this.tip.find(".items-holder").eq(0).addClass("slov-activated");
                            self.isopen = true;
                            self.moderateList(this.object());
                        }
                    }).open();

                } else {

                    if ($data.is("ol,ul")) {
                        if (settings.numSelect === 1 && self.select == null) {
                            $data.prepend("<li class='item-empty'>" + (settings.emptytext || slang.select) + "</li>");
                        }



                        $data.addClass("stree-view");

                        if (settings.justselectleaf === true) {
                            $data.find("li>ul,li>ol").parents(".item-content").addClass("non-selectable");
                        }


                        this.$root = $data.find("#i_-1").addClass("non-selectable root-tree");

                        if (settings.numSelect === -1) {
                            $("<input type='checkbox' class='item-select'/>")
                                .attr("data-state", 0)
                                .on("click", function () {
                                    $(this).parent().find(".item-value").trigger('click');
                                })
                                .on("dblclick", function () {
                                    $(this).parent().find(".item-value").trigger('dblclick');
                                })
                                .prependTo($data.find("li.item-content"));
                        }

                        $data.sTreeView();

                        this.istree = true;

                        _data = $data.wrapAll("<div/>").parent().html();
                        //use $data.is("tr") for comment or another content in first of html
                    } else if ($data.is("tr")) {
                        $data = $data.wrapAll("<tbody></tbody>").parent().wrap("<table class='table items-holder'></table>").parent();

                        if (settings.numSelect === 1 && self.select == null) {
                            $("<tr class='item-empty'><td colspan='10' class='text-center'>" + (settings.emptytext || slang.select) + "</td></tr>").prependTo($data);
                        }
                    } else {
                        $data = $data.wrapAll("<div class='items-holder'></div>").parent();

                        if (settings.numSelect === 1 && self.select == null) {
                            $("<div class='item-empty'>" + (settings.emptytext || slang.select) + "</div>").prependTo($data);
                        }
                    }

                    this.markSelected($data.find(".item-content"));

                    var _offset = this.searchinput.offset();

                    this.holder = this.inputholder.sDropDown({
                        content: $data,
                        //+1 for floor in outerWidth
                        type: "drop",
                        classholder: "slov-holder",
                        event: null,
                        showoptions: {
                            "top": _offset.top + self.searchinput.outerHeight() + 1
                        },
                        autoselect: false,
                        onAfterClose: function () {
                            self.isopen = false;
                        },
                        onAfterOpen: function () {
                            self.isopen = true;
                            self.moderateList(this.object());
                        }
                    }).open();

                    if (!this.istree) {
                        var $holder = this.holder.object();
                        this.lastscroll = $holder.height();
                        $holder.on("scroll.sListOfValue", function (_event) {
                            if (!self.lockscroll) {
                                var _temp = $holder.scrollTop() + $holder.height();
                                if (self.lastscroll < _temp && _temp > $holder.find(".items-holder").height() - 20) {
                                    self.lockscroll = true;
                                    self.getList(self.searchinput.val(), ++self.lastpage);
                                    self.lastscroll = _temp;
                                }
                            }
                            return;
                        });
                    }
                }

                var _$selected = this.holder.object().find(".slov-highlight").eq(0);

                if (_$selected.length)
                    this.holder.scrollTop(_$selected.position().top);
                else
                    this.holder.scrollTop(0);

                if (this.select == null) {

                    var $holder = this.holder.object();

                    if (settings.type == "dialog") {
                        $holder = $holder.find(".sdialog-content");
                    }

                    if ((settings.type == "dialog" || settings.type == "tip") && settings.numSelect != 1) {
                        this.doneBtn = $('<div class="slov-actions"><button type="button" class="slov-done-btn btn blue main-action">انتخاب کردم</button></div>')
                            .on('click', function () {
                                self.isdone = true;
                                self.insertValues();
                                self.holder.close();
                            }).prop('disabled', self.values.length != settings.numSelect && !settings.numSelect == -1);
                        $holder.before(this.doneBtn);
                    }

                    this.holder.object().find(".items-holder").on('contentChange', function (_event, data) {
                        self.markSelected(data.items);
                        //for trigger
                        return false;
                    });
                }

                this.inputholder.closest('.sdialog').off("beforeClose.sListOfValue" + this.uid)
                    .on("beforeClose.sListOfValue" + this.uid, function () {
                        if (self.holder)
                            self.holder.close();
                    });
            },
            processProxyData: function (data, id, $proxyform, display, values) {
                var settings = this.options,
                    displaydata = [];

                if (settings.staticdata)
                    data = $.extend({}, data, settings.staticdata);

                settings.onProcessProxyData.call(this, data, id, $proxyform, display, values);

                if ($proxyform && $proxyform.length) {
                    if (settings.proxydisplay) {
                        var _pdisplay = settings.proxydisplay.split(",");

                        $.each(_pdisplay, function (_index, selector) {
                            var _value = $(selector, $proxyform).not(".sgroup:not(.set-values) :input").getDisplayValues()[0];

                            var _dvalue = $("[data-sform-name=__Display]", $proxyform).find(selector).getDisplayValues()[0];
                            if (_dvalue)
                                _value = _dvalue;

                            displaydata.push(_value);
                        });
                    } else {
                        displaydata = $proxyform.find(":input[name]").not(".sgroup:not(.set-values) :input").filter(":visible").eq(0).getDisplayValues();
                    }
                } else if (display == null) {
                    if (settings.proxydisplay) {
                        var _pdisplay = settings.proxydisplay.split(",");

                        $.each(_pdisplay, function (_index, selector) {
                            var _name = selector.replace("#", "");

                            if (selector.indexOf("[name=") !== -1) {
                                _name = selector.match(/(?:"[^"]*"|^[^"]*$)/)[0]
                                    .replace(/"/g, "");

                                if (_name.indexOf("[name=") !== -1) {
                                    _name = selector.match(/(?:'[^']*'|^[^']*$)/)[0]
                                        .replace(/'/g, "");
                                }
                            }

                            var value = (data["__Display"] ? data["__Display"][_name] : null) || data[_name] || data[_name + "String"] || "";

                            if ((value + "").toLowerCase() === "true")
                                value = slang["activeimg"];

                            if ((value + "").toLowerCase() === "false")
                                value = "";

                            displaydata.push(value);
                        });
                    } else {
                        displaydata = [data["ID"]];
                    }
                }

                if (display == null) {
                    if (settings.proxydisplayformat) {
                        if (typeof settings.proxydisplayformat === "function")
                            display = settings.proxydisplayformat.call(this, displaydata, data);
                        else
                            display = String.format.apply(this, [settings.proxydisplayformat].concat(displaydata));
                    } else {
                        display = displaydata.join(" - ");
                    }
                }

                return {
                    "id": id || this.proxyid--,
                    "display": display,
                    "data": data
                };
            },
            getList: function (search, pagenumber, $editeditem) {
                var self = this,
                    data = "",
                    settings = this.options;

                if (settings.beforeGetList.call(this) == false)
                    return false;

                //for double fire in focus and click event in elv
                this.isopen = true;

                if (["proxy", "proxyjson", "proxytable"].indexOf(settings.type) !== -1) {

                    var _html = $($.parseHTML(settings.proxydata)).text(),
                        $data = $("<div/>").html(_html),
                        _title = $data.find(".title").eq(0).html(),
                        $proxyform = $data.find("form");

                    if ($proxyform.length === 0) {
                        $proxyform = $data.filter("form");
                        if ($proxyform.length === 0) {
                            $data = $proxyform = $("<form method='post' role='form' novalidate='novalidate'></form>").attr("id", settings.proxyformid)
                                .append($data);
                        }
                    }

                    var _value = null;
                    var isCommonMode = Array.isArray($editeditem);
                    if ($editeditem) {
                        if (isCommonMode) {
                            $proxyform.data("lov-editeditem", $editeditem);

                            //changing text of elements in edit mode
                            var $needchangetext = $proxyform.find("[data-edit-text]");
                            for (var i = $needchangetext.length - 1; i >= 0; i--) {
                                var _$element = $needchangetext.eq(i);
                                _$element.text(_$element.attr("data-edit-text"));
                            }

                            //removing elements that we don't need them in edit mode
                            $proxyform.find("[data-edit-remove]").remove();
                            $proxyform.find("[data-common-edit-remove]").remove();

                            $proxyform.find(".control-label").each(function () {
                                var $label = $(this);
                                $label.removeClass("required");
                                $("<input type='checkbox' class='form-control float-right edit-enabler' />").on('change', function () {
                                    var isChecked = $(this).is(":checked");
                                    var $editor = $(this).parent().find(".form-control:not(.edit-enabler):not(.slov-search)");
                                    if ($editor.is(".slov-input")) {
                                        if (isChecked)
                                            $editor.attr('disabled', false).sListOfValue().enable();
                                        else
                                            $editor.sListOfValue().disable();
                                    }
                                    else {
                                        if (isChecked)
                                            $editor.attr('disabled', false);
                                        else
                                            $editor.attr('disabled', true);
                                    }
                                }).insertBefore($label).trigger('change');
                            })

                            $proxyform.find("[data-val-required]").removeAttr("data-val-required");
                        }
                        else {
                            _value = $editeditem.data('lov-value');
                            $proxyform.data("lov-editeditem", $editeditem).setValues(_value["data"]);

                            //changing text of elements in edit mode
                            var $needchangetext = $proxyform.find("[data-edit-text]");
                            for (var i = $needchangetext.length - 1; i >= 0; i--) {
                                var _$element = $needchangetext.eq(i);
                                _$element.text(_$element.attr("data-edit-text"));
                            }

                            //removing elements that we don't need them in edit mode
                            $proxyform.find("[data-edit-remove]").remove();

                            var _error = $editeditem.data('lov-error');
                            if (_error && checkValidation)
                                checkValidation($proxyform, { "ValidationState": _error });

                            var _enableedit = false;
                            if (typeof settings.enableedit === "function")
                                _enableedit = settings.enableedit.call(this, _value);
                            else
                                _enableedit = settings.enableedit || _value["id"] < 0;

                            if (_enableedit !== true) {
                                if (settings.removeSubmitInEdit !== false) {
                                    $proxyform.find("[type=submit]").remove();
                                }
                                else {
                                    $proxyform.find("[data-val-required]").removeAttr("data-val-required");
                                }
                            }
                        }
                    }

                    //must use data for elements outer form
                    settings.beforeShowList.call(self, $data, $editeditem);

                    var $proxyFormEditor = null;
                    if (settings.proxyshowas === 'dialog') {
                        $proxyFormEditor = $.sDialog("#" + settings.proxyformid + "Dialog", $.extend({}, {
                            modal: true,
                            title: _title,
                            onAfterClose: function () {
                                self.isopen = false;
                            }
                        }, settings.showoptions)).html($data).open();
                    } else if (settings.proxyshowas === 'tip') {
                        $proxyFormEditor = $.sTip("#" + settings.proxyformid + "Tip", $.extend({}, {
                            content: $data,
                            onAfterClose: function () {
                                self.isopen = false;
                            }
                        }, settings.showoptions)).open();
                    }

                    $proxyform.find(':input:not([type="hidden"],button,[type="submit"],.hidden :input,.disabled :input)').eq(0).trigger('focus');

                    //must be before submit for prevent error in jquery.validate
                    if ($.validator && typeof $proxyform.data("validator") === "undefined") {
                        $.validator.unobtrusive.parse($proxyform[0]);
                    }

                    if (_value) {
                        _enableedit = false;
                        if (typeof settings.enableedit === "function")
                            _enableedit = settings.enableedit.call(this, _value);
                        else
                            _enableedit = settings.enableedit || _value["id"] < 0;

                        if (_enableedit !== true) {
                            disableFormInputs("#" + settings.proxyformid);
                        }
                    }
                    else if (isCommonMode) {
                        if (typeof settings.enableedit === "function")
                            _enableedit = settings.enableedit.call(this, {});
                        else
                            _enableedit = settings.enableedit;
                    }

                    self.actiontype = "SaveClose";
                    self.pressedenter = false;
                    $proxyform.find("[type=submit]").on("click", function () {
                        if ($(this).hasClass("save-reset") || self.pressedenter === true)
                            self.actiontype = "SaveReset";
                        else
                            self.actiontype = "SaveClose";

                        self.pressedenter = false;
                    });

                    if ($proxyform.find(".save-reset").length) {
                        $proxyform.find(":input:not(button)").on("keypress input", function (event) {
                            if ((event.keyCode || event.which) === 13) {
                                self.pressedenter = true;
                            }
                        });
                    }

                    $proxyform.on("submit", function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        if (settings.onBeforeSubmit.call(self, $proxyform, event) === false)
                            return;

                        var $proxyform = $(this);
                        if ($proxyform.data("lov-editeditem")) {
                            if (_enableedit !== true && settings.removeSubmitInEdit !== false) {
                                return false;
                            }
                        } else if (settings.enableinsert !== true) {
                            return false;
                        }

                        var _$inputs = $proxyform.find(".fix-char");
                        for (var i = 0, len = _$inputs.length; i < len; i++) {
                            var _$input = _$inputs.eq(i);
                            _$input.val(fixChar(_$input.val()));
                        }

                        _$inputs = $proxyform.find(".fix-num");
                        for (i = 0, len = _$inputs.length; i < len; i++) {
                            var _$input = _$inputs.eq(i);
                            _$input.val(toEnglishNumber(_$input.val()));
                        }

                        _$inputs = $proxyform.find(".comma-number");
                        for (i = 0, len = _$inputs.length; i < len; i++) {
                            var _$input = _$inputs.eq(i);
                            _$input.sSeparator().unformatElement();
                        }

                        if ($proxyform.valid()) {
                            var _data = $proxyform.serializeJSON(),
                                _$editeditem = $proxyform.data("lov-editeditem"),
                                _isCommonMode = Array.isArray(_$editeditem);

                            if (_isCommonMode !== true) {
                                if (_$editeditem) {
                                    var _oldvalue = _$editeditem.data("lov-value");
                                }

                                if (self.val(self.processProxyData(_data, _oldvalue && _oldvalue.id ? _oldvalue.id : null, $proxyform))[0]) {
                                    if (self.actiontype === "SaveReset") {

                                        $proxyform[0].reset();

                                        if ($.fn.sListOfValue) {
                                            var _$inputs = $proxyform.find(".slov-input").not(self.options.proxyresetexception);
                                            for (var i = _$inputs.length - 1; i >= 0; i--) {
                                                _$inputs.eq(i).sListOfValue().val([], true);
                                            }
                                        }

                                        if ($.fn.sUploader) {
                                            var _$inputs = $proxyform.find(".suploader-fileinput").not(self.options.proxyresetexception);
                                            for (i = _$inputs.length - 1; i >= 0; i--) {
                                                _$inputs.eq(i).sUploader().reset();
                                            }
                                        }

                                        settings.beforeShowList.call(self, $data);

                                        setTimeout(function () {
                                            $proxyform.find(".field-validation-valid,.field-validation-error").empty().attr("class", "field-validation-valid");
                                            $proxyform.find(".input-holder-validation-error").removeClass("input-holder-validation-error");
                                        }, 100);

                                        setTimeout(function () {
                                            $proxyform.find(':input:not([type="hidden"],button,[type="submit"],.hidden :input,.disabled :input)').eq(0).trigger('focus');
                                            if (settings.proxyshowas === "dialog")
                                                $proxyform.closest('.sdialog').sDialog().ischanged = false;
                                            else if (settings.proxyshowas === "tip")
                                                $proxyform.closest('.stip').sTip().ischanged = false;
                                        }, 100);

                                        if ($.fn.sAlert)
                                            $.sAlert('#AjaxLog').message({ type: 'success', content: slang["success"], timeout: 2000 });
                                    } else {
                                        $proxyFormEditor.close();
                                    }
                                }
                                settings.onAfterSubmit.call(self, _data, $proxyform, event);
                            }
                            else {
                                var changingValues = [];
                                var $enablers = $proxyform.find(".edit-enabler:checked");
                                for (var k = 0; k < $enablers.length; k++) {
                                    var $formControls = $enablers.eq(k).parent().find(".form-control:not(.edit-enabler):not(.slov-search)");
                                    var _group = null;
                                    if ($formControls.length == 1) {
                                        var $formControl = $formControls.eq(0);
                                        if ($formControl.is("[data-sform-name]")) {
                                            var $sgroup = $formControl.closest(".sgroup");
                                            if ($sgroup.length) {
                                                var _groupName = $sgroup.eq(0).attr("data-sform-name");
                                                for (var l = 0; l < changingValues.length; l++) {
                                                    if (changingValues[l].name === _groupName) {
                                                        _group = changingValues[l];
                                                        break;
                                                    }
                                                }

                                                if (_group === null) {
                                                    _group = { name: $sgroup.eq(0).attr("data-sform-name"), value: [] };
                                                    changingValues.push(_group);
                                                }

                                                var $formValues = $sgroup.find("[data-sform-name]");
                                                for (var l = 0; l < $formValues.length; l++) {
                                                    _group.value.push({ name: $formValues.eq(l).attr("data-sform-name"), value: $formValues.eq(l).val(), key: $formValues.eq(l).attr("data-sform-key") === "true" });
                                                }
                                            }
                                        }

                                        if ($formControl.is(".slov-input")) {
                                            var _$lov = $formControl.sListOfValue();
                                            var _values = _$lov.val();
                                            var _value;
                                            if (_values.length === 1) {
                                                _value = _values[0];
                                            }
                                            else if (_values.length === 0) {
                                                _value = {};
                                            }
                                            else {
                                                alert("Multi select list of values are not supported in common edit");
                                            }

                                            changingValues.push({ name: $formControl.attr("name"), value: _value.value || "" });
                                            changingValues.push({ name: _$lov.idholder.attr("name"), value: _value.id || "" });
                                        }
                                        else {
                                            changingValues.push({ name: $formControl.attr("name"), value: $formControl.val() });
                                        }
                                    }
                                }

                                var _newvalues = [];

                                for (var k = 0; k < _$editeditem.length; k++) {
                                    for (var j = 0, __len = self.values.length; j < __len; j++) {
                                        if (self.values[j].id == _$editeditem[k]) {
                                            var _newValue = self.values[j].data;
                                            for (var l = 0; l < changingValues.length; l++) {
                                                if (Array.isArray(changingValues[l].value)) {
                                                    var group = _newValue[changingValues[l].name];
                                                    var _key = [];
                                                    var _item = null;

                                                    if (group) {
                                                        for (var m = 0; m < changingValues[l].value.length; m++) {
                                                            if (changingValues[l].value[m].key) {
                                                                _key.push({ name: changingValues[l].value[m].name, value: changingValues[l].value[m].value });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        group = [];
                                                        _newValue[changingValues[l].name] = group;
                                                    }

                                                    if (_key.length) {
                                                        for (var m = 0; m < group.length; m++) {
                                                            var matchedKeyCount = 0;
                                                            for (var n = 0; n < _key.length; n++) {
                                                                if (group[m][_key[n].name] == _key[n].value) {
                                                                    matchedKeyCount++;
                                                                }
                                                                else {
                                                                    break;
                                                                }
                                                            }

                                                            if (matchedKeyCount == _key.length) {
                                                                _item = group[m];
                                                                break;
                                                            }
                                                        }
                                                    }

                                                    if (_item == null) {
                                                        _item = [];
                                                        group.push(_item);
                                                    }

                                                    for (var m = 0; m < changingValues[l].value.length; m++) {
                                                        _item[changingValues[l].value[m].name] = changingValues[l].value[m].value;
                                                    }
                                                }
                                                else {
                                                    _newValue[changingValues[l].name] = changingValues[l].value;
                                                }
                                            }
                                            _newvalues.push(self.processProxyData(_newValue, _$editeditem[k]));
                                        }
                                    }
                                }

                                if (_newvalues && _newvalues.length) {
                                    self.val(_newvalues);
                                }

                                $proxyFormEditor.close();
                            }
                        }
                    });

                    settings.afterShowList.call(self, $proxyform, $editeditem);

                } else {
                    search = search || "";

                    if (pagenumber == null) {
                        pagenumber = 1;
                        this.lastpage = pagenumber;
                    }

                    if (this.select) {
                        var $data = this.el.clone().find(search === "" ? 'option' : 'option:contains(' + search + ')');
                        if ($data.length) {
                            $data.map(function (index) {
                                var $item = $data.eq(index), __value = $item.attr("value");
                                if (self.values.length && __value == self.values[0].id)
                                    data += "<tr class='item-content slov-highlight' data-value='" + __value + "'><td class='slov-show'>" + $item.html() + "</td></tr>";
                                else
                                    data += "<tr class='item-content' data-value='" + __value + "'><td class='slov-show'>" + $item.html() + "</td></tr>";
                            });
                        } else {
                            data = "<tr class='item-not-found'><td>" + slang.notFound + "</td></tr>";
                        }

                        self.showList(data);

                    } else {
                        var querystring = "";

                        if (settings.src.split("?").length > 1) {
                            querystring = "&";
                        } else {
                            querystring = "?";
                        }

                        var params = typeof settings.params == "function" ? settings.params() : settings.params;

                        if (settings.type == "combo" || settings.type == "jsoncombo") {
                            querystring += $.param($.extend({}, { part: "1", combo: true, __search: search, pagesize: settings.resultnumber, Page: pagenumber }, params));
                        }
                        else {
                            querystring += $.param($.extend({}, { select: "1", pagesize: settings.resultnumber, Page: pagenumber }, params));
                        }

                        if (self.xhr && self.xhr.status != 200) {
                            self.xhr.abort();
                            self.isopen = false;
                        }

                        self.xhr = $.ajax({
                            url: settings.src + querystring,
                            type: "get",
                            cache: false
                        }).done(function (data) {

                            if (!self.searchinput.is(":focus")) {
                                //for double fire in focus and click event in elv
                                self.isopen = false;
                                return;
                            }

                            if (pagenumber === 1) {
                                //First Page (First Show)
                                self.showList(data);
                                self.lockscroll = false;
                            } else {
                                //Show More Items
                                var $data = $(data);
                                if ($data.filter(".item-content").length) {

                                    self.lockscroll = false;
                                    self.markSelected($data.find(".item-content"));
                                    self.holder.object().find(".items-holder>tbody").append($data);

                                }
                            }
                        }).fail(function (jqXHR, textStatus, _errorThrown) {
                            if (textStatus !== "abort" && $.fn.sAlert) {
                                var _message = getMessageCode(jqXHR.status);
                                $.sAlert('#AjaxLog').message({ type: 'error', content: _message, timeout: 2000 });
                            }
                        });
                    }
                }
            },
            moderateList: function (object) {
                var self = this,
                    settings = self.options;

                object.off("click.sListOfValue", ".item-value a")
                    .on("click.sListOfValue", ".item-value a", function (event) {
                        event.preventDefault();
                    });

                object.off('click.sListOfValue mousedown.sListOfValue dblclick.sListOfValue', '.item-content')
                    .on('mousedown.sListOfValue', '.item-content , .item-empty', function (_event) {
                        //for prevent fire blur when click and mouse down fired on item-content
                        clearTimeout(self.closetimer);
                        self.closetimer = "lock";
                        return;
                    })
                    .off('click.sListOfValue', '.item-empty')
                    .on('click.sListOfValue', '.item-empty', function (_event) {
                        self.val([], true);
                        self.holder.close();
                    })
                    .addClass('item-clickable');

                if (settings.numSelect === -1 && this.istree) {
                    object.on("click.sListOfValue", this.options.itemselector, function (event) {
                        event.preventDefault();
                    }).on('click.sListOfValue', '.item-content', function (event) {
                        if ($(event.target).is(":input"))
                            return;

                        event.stopPropagation();

                        var $item = $(this);

                        clearTimeout(self.clicktimeout);
                        self.clicktimeout = setTimeout(function () {
                            self.clickOnItems($item);
                        }, 200);

                    }).on("dblclick.sListOfValue", ".item-content", function (event) {
                        if ($(event.target).is(":input"))
                            return;

                        event.stopPropagation();
                        clearTimeout(self.clicktimeout);

                        self.doubleClickOnItem($(this));

                        //for double mousedown event
                        self.closetimer = null;
                    });

                    if (object.find(".item-not-found").length === 0 && object.find(".item-content:not(.non-selectable)").length !== 0) {
                        var $toolbar = $("<div class='slov-toolbar'></div>");

                        $("<button class='btn btn-all'>انتخاب همه</button>").on("click", function (event) {
                            event.stopPropagation();
                            var _values = [],
                                $items = self.holder.object().find(".item-content").not(".non-selectable");

                            for (var i = 0, len = $items.length; i < len; i++) {
                                var $item = $items.eq(i);
                                _values.push({
                                    id: $item.prop('id').replace("i_", ""),
                                    value: ($item.attr("data-display") || $item.find('.item-value').eq(0).text() || "").trim(),
                                    object: $item.clone().data("originalelement", $item)
                                });
                            }

                            self.val(_values, false, false);
                            self.markSelected();
                        }).appendTo($toolbar);

                        this.selectcontaining = $("<button class='btn btn-contain'></button>").text(String.format(slang.selectcontaining, self.searchinput.val())).on("click", function (event) {
                            event.stopPropagation();
                            if (self.searchinput.val()) {
                                var _values = [],
                                    _search = self.searchinput.val(),
                                    $items = self.holder.object().find(_search === "" ? ".item-value" : ".item-value:contains(" + _search + ")").closest(".item-content").not(".non-selectable");

                                for (var i = 0, len = $items.length; i < len; i++) {
                                    var $item = $items.eq(i);
                                    _values.push({
                                        id: $item.prop('id').replace("i_", ""),
                                        value: ($item.attr("data-display") || $item.find('.item-value').eq(0).text() || "").trim(),
                                        object: $item.clone().data("originalelement", $item)
                                    });
                                }

                                self.val(_values, false, false);
                                self.markSelected();
                            }
                        }).appendTo($toolbar);

                        if (this.searchinput.val() === "")
                            this.selectcontaining.addClass("hidden");

                        $toolbar.prependTo(object);
                    }
                } else {
                    object.on('click.sListOfValue', '.item-content', function (event) {
                        event.stopPropagation();

                        self.clickOnItems($(this));
                    });
                }
            },
            doubleClickOnItem: function ($item, istoggleable) {
                var self = this,
                    $checkboxes = $item.find(".item-select"),
                    $items,
                    $parents = $item.parents("li");

                if (istoggleable == null)
                    istoggleable = true;

                if ($checkboxes.filter("[data-state=0],[data-state=2]").length !== 0) {
                    $items = $item.find("li").addBack().not(".slov-highlight,.non-selectable").addClass("slov-highlight");
                    $checkboxes.prop({ "checked": true, "indeterminate": false }).attr("data-state", 1);

                    $parents.each(function (index) {
                        var _$parent = $parents.eq(index),
                            $parentcheckbox = _$parent.find(self.options.itemselector).eq(0);

                        if ($parentcheckbox.attr("data-state") === "2") {
                            var $childcheckboxes = _$parent.children().filter("ul,ol").find(self.options.itemselector);

                            if ($childcheckboxes.filter("[data-state=0],[data-state=2]").length === 0) {
                                $parentcheckbox.attr("data-state", 1).prop({
                                    "checked": true, "indeterminate": false
                                });
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    });

                } else {
                    $items = $item.find("li").addBack().filter(".slov-highlight").removeClass("slov-highlight");
                    $checkboxes.prop({ "checked": false, "indeterminate": false }).attr("data-state", 0);


                    $parents.each(function (index) {
                        var _$parent = $parents.eq(index),
                            $parentcheckbox = _$parent.find(self.options.itemselector).eq(0);

                        if ($parentcheckbox.attr("data-state") === "1") {
                            $parentcheckbox.attr("data-state", 2).prop({
                                "checked": false, "indeterminate": true
                            });
                        } else {
                            return false;
                        }
                    });
                }

                this.checkRootState();

                var _values = [];
                for (var i = 0, len = $items.length; i < len; i++) {
                    $item = $items.eq(i);
                    _values.push({
                        id: $item.is(".non-selectable") ? -1 : $item.prop('id').replace("i_", ""),
                        value: ($item.attr("data-display") || $item.find('.item-value').eq(0).text() || "").trim(),
                        object: $item.clone().data("originalelement", $item)
                    });
                }

                self.val(_values, false, istoggleable);
            },
            clickOnItems: function ($items, nextstate) {
                for (var i = 0, len = $items.length; i < len; i++) {
                    var $item = $items.eq(i);

                    if (this.select) {
                        var value = $item.data("value"),
                            text = $item.attr("data-display") || (value ? $item.find(".slov-show").html() : "");

                        this.changelock = true;
                        this.val([{ id: value, value: text, object: $item.clone() }]);
                    } else {

                        var itemselector = this.options.itemselector,
                            $checkbox = $item.find(itemselector).eq(0),
                            needchildprocess = len === 1 && ($item.context === undefined || $item.context === $item[0]);

                        if (this.istree && this.options.numSelect === -1) {
                            var _state = $checkbox.attr("data-state") || "0",
                                _nextstate = nextstate;

                            if ($item.is(".non-selectable"))
                                nextstate = null;

                            if (nextstate == null) {
                                switch (_state) {
                                    case "0":
                                        _nextstate = 1;

                                        if ($item.is(".non-selectable,.root-tree"))
                                            this.clickOnItems($item.find(">ul>li,>ol>li"), 1);
                                        break;
                                    case "1":
                                    case "2":
                                        var $firstchildcheckbox = $item.find(">ul>li>.stree-content>" + itemselector + ",>ol>li>.stree-content>" + itemselector);

                                        if ($firstchildcheckbox.length === $firstchildcheckbox.filter("[data-state=1],[data-state=2]").length) {
                                            _nextstate = 0;
                                            this.clickOnItems($item.find(">ul>li,>ol>li"), 0);
                                        } else {
                                            _nextstate = 1;
                                            this.clickOnItems($item.find(">ul>li,>ol>li"), 1);
                                        }

                                        break;
                                }
                            }

                            switch (_nextstate) {
                                case 0:
                                    $item.removeClass("slov-highlight");
                                    $checkbox.attr("data-state", 0);
                                    $checkbox.prop({ "indeterminate": false, "checked": false });

                                    var $parents = $item.parents("li");

                                    if (needchildprocess) {
                                        $parents.each(function (index) {
                                            var _$parent = $parents.eq(index),
                                                $parentcheckbox = _$parent.find(itemselector).eq(0);

                                            if ($parentcheckbox.attr("data-state") === "1") {
                                                if (_$parent.is(".non-selectable")) {
                                                    $parentcheckbox.attr("data-state", 0).prop({
                                                        "checked": false, "indeterminate": false
                                                    });
                                                }
                                                else {
                                                    $parentcheckbox.attr("data-state", 2).prop({
                                                        "checked": false, "indeterminate": true
                                                    });
                                                }
                                            } else {
                                                return false;
                                            }
                                        });
                                    }

                                    break;
                                case 1:
                                    $item.not(".non-selectable,.root-tree").addClass("slov-highlight");

                                    var uncheckedchild = $item.find("li .item-select[data-state=0]");
                                    if (uncheckedchild.length === 0) {
                                        $checkbox.attr("data-state", 1);
                                        $checkbox.prop({ "indeterminate": false, "checked": true });

                                        if (needchildprocess) {
                                            var $parents = $item.parents("li");

                                            $parents.each(function (index) {
                                                var _$parent = $parents.eq(index),
                                                    $parentcheckbox = _$parent.find(itemselector).eq(0);

                                                if ($parentcheckbox.attr("data-state") === "2") {
                                                    var $childcheckboxes = _$parent.children().filter("ul,ol").find(itemselector);

                                                    if ($childcheckboxes.filter("[data-state=0],[data-state=2]").length === 0) {
                                                        $parentcheckbox.attr("data-state", 1).prop({
                                                            "checked": true, "indeterminate": false
                                                        });
                                                    } else {
                                                        return false;
                                                    }
                                                } else {
                                                    return false;
                                                }
                                            });
                                        }
                                    } else {
                                        _nextstate = 2;
                                        $checkbox.attr("data-state", 2);
                                        $checkbox.prop({ "indeterminate": true, "checked": false });
                                    }
                                    break;

                                case 2:
                                    $item.addClass("slov-highlight");
                                    $checkbox.attr("data-state", 2);
                                    $checkbox.prop({ "indeterminate": true, "checked": false });
                                    break;
                            }

                            this.checkRootState();

                            if ((_state === "0" && (_nextstate === 2 || _nextstate === 1)) || (_nextstate === 0 && (_state === "1" || _state === "2"))) {
                                this.val({
                                    id: $item.is(".non-selectable") ? -1 : $item.prop('id').replace("i_", ""),
                                    value: ($item.attr("data-display") || $item.find('.item-value').eq(0).text() || "").trim(),
                                    object: $item.clone().data("originalelement", $item)
                                }, false);
                            }
                        } else {
                            if ($item.is(".non-selectable"))
                                return;

                            if (this.val({
                                id: $item.prop('id').replace("i_", ""),
                                value: ($item.attr("data-display") || $item.find('.item-value').eq(0).text() || "").trim(),
                                object: $item.clone().data("originalelement", $item)
                            })[0]) {
                                $item.addClass('slov-highlight');
                                $checkbox.prop('checked', true);
                            } else {
                                $item.removeClass('slov-highlight');
                                $checkbox.prop('checked', false);
                            }
                        }
                    }
                    clearTimeout(this.closetimer);
                }
            },
            checkRootState: function ($root) {
                if ($root == null)
                    $root = this.$root;

                var itemselector = this.options.itemselector;
                if ($root && $root.length) {
                    var $childcheckboxes = $root.find("li " + itemselector);

                    if ($childcheckboxes.filter("[data-state=0],[data-state=2]").length === 0) {
                        $root.find(itemselector).eq(0).attr("data-state", 1).prop({ "checked": true, "indeterminate": false });
                    } else {
                        var $firstchildcheckbox = $root.find(">ul>li>.stree-content>" + itemselector + ",>ol>li>.stree-content>" + itemselector);

                        if ($firstchildcheckbox.filter("[data-state=0]").length === 0)
                            $root.find(itemselector).eq(0).attr("data-state", 2).prop({ "checked": false, "indeterminate": true });
                        else {
                            $root.find(itemselector).eq(0).attr("data-state", 0).prop({ "checked": false, "indeterminate": false });
                        }
                    }
                }
            },
            markSelected: function ($items) {

                if (this.holder)
                    this.holder.object().find('.slov-highlight').removeClass("slov-highlight")
                        .find(this.options.itemselector).attr("data-state", 0).prop({ "checked": false, "indeterminate": false });
                else if ($items && $items.length) {
                    $items.removeClass("slov-highlight")
                        .find(this.options.itemselector).attr("data-state", 0).prop({ "checked": false, "indeterminate": false });
                }

                if (this.select || this.values.length === 0)
                    return;

                var _ids = [];
                for (var i = 0, _len = this.values.length; i < _len; i++) {
                    _ids[i] = '#i_' + this.values[i].id;
                }

                var _selector = _ids.join(",");


                if ($items) {
                    $items = $items.filter(_selector);
                } else {
                    $items = this.holder.object().find('.items-holder').find(_selector);
                }

                var itemselector = this.options.itemselector;
                $items.each(function (index) {
                    var $item = $items.eq(index);

                    $item.addClass('slov-highlight').find(itemselector).eq(0).prop('checked', true).attr("data-state", 1);

                });

                if (this.options.numSelect === -1 && this.istree) {
                    var self = this;
                    $items.each(function (index) {
                        var $item = $items.eq(index);

                        var $childcheckboxes = $item.find("li " + itemselector);

                        if ($childcheckboxes.filter("[data-state=0],[data-state=2]").length !== 0) {
                            $item.children().filter(".stree-content>" + itemselector).attr("data-state", 2).prop({ "checked": false, "indeterminate": true });
                        }

                        $item.parents(".non-selectable").each(function () {
                            self.checkRootState($(this));
                        });
                    });



                    this.checkRootState();
                }
            },
            indexOf: function (value) {
                for (var i = 0, len = this.values.length; i < len; i++) {
                    if (this.values[i].id == value.id)
                        return i;
                }
                return -1;
            },
            checkProxyIdentity: function (value) {
                var settings = this.options;
                if (["proxy", "proxyjson", "proxytable"].indexOf(settings.type) !== -1 && settings.proxyidentity && settings.proxyidentity.length) {

                    for (var i = 0, _len = this.values.length; i < _len; i++) {
                        var _matchedcount = 0,
                            _data = this.values[i]["data"];

                        for (var j = 0, __len = settings.proxyidentity.length; j < __len; j++) {
                            var _dentity = settings.proxyidentity[j];
                            if (_data[_dentity] == value["data"][_dentity]) {
                                _matchedcount++;
                            }
                        }

                        if (_matchedcount === __len) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            clear: function () {
                this.values = [];
                this.insertValues();
            },
            val: function (values, clearoldvalues, istoggleable) {

                if (values) {
                    if (Object.prototype.toString.call(values) !== "[object Array]")
                        values = [values];

                    if (values.length !== 0 && this.isinitial === false)
                        //prevent close dialog when pressed escape key
                        this.el.closest(".sdialog").trigger('changeData');

                    var settings = this.options, result = [];


                    if (clearoldvalues != true)
                        clearoldvalues = false;

                    if (settings.numSelect !== 1 && istoggleable != false)
                        istoggleable = true;

                    if (clearoldvalues || values.length === 0) {
                        this.values = [];
                        result[0] = true;

                        if (this.clearbtn)
                            this.clearbtn.prop("disabled", true);

                        if (values.length === 0) {
                            //clear values and element
                            if (this.select) {
                                this.changelock = true;
                                this.el.val('').trigger('change');
                                this.searchinput.val('');
                            }
                        }
                    }

                    for (var i = 0, _len = values.length; i < _len; i++) {
                        var _value = values[i];

                        if (_value.object && _value.object.is(".non-selectable"))
                            _value.id = -1;

                        if (this.istree && _value.id == -1) {
                            result[i] = true;
                            continue;
                        }

                        var _index = this.indexOf(_value);

                        if (_index === -1) {
                            if (this.clearbtn)
                                this.clearbtn.prop("disabled", false);

                            if (this.select) {
                                this.changelock = true;
                                this.searchinput.val('');
                                this.el.val(_value.id).trigger('change');
                                if (_value.id)
                                    this.values = [_value];
                                else
                                    this.values = [];
                                result[i] = true;
                                continue;
                            }

                            if (this.checkProxyIdentity(_value) !== -1) {
                                $.sAlert('#AjaxLog').message({ type: 'error', content: slang["duplicateSelect"], timeout: 2000 });
                                result[i] = false;
                                continue;
                            }

                            if (settings.numSelect > this.values.length || settings.numSelect == -1) {

                                if (settings.type === "jsoncombo") {
                                    //check has data property for load data in edit
                                    if (!_value.data) {
                                        _value.data = {};
                                        _value.data[settings.identityname] = _value.id;

                                        if (settings.staticdata)
                                            _value.data = $.extend({}, _value.data, settings.staticdata);
                                    }
                                }

                                if (this.options.addbehavior === "beginning" && _value["id"] < 0)
                                    this.values.unshift(_value);
                                else
                                    this.values.push(_value);

                                if (settings.syncSelect)
                                    this.insertValues(_value);

                                result[i] = true;
                                continue;
                            } else if (settings.numSelect == 1) {
                                this.values[0] = _value;
                                result[i] = true;
                                continue;
                            }
                        } else {

                            if (["proxy", "proxyjson", "proxytable"].indexOf(this.options.type) !== -1) {
                                var _identityindex = this.checkProxyIdentity(_value);
                                if (_identityindex !== -1 && _identityindex !== _index) {
                                    $.sAlert('#AjaxLog').message({ type: 'error', content: slang["duplicateSelect"], timeout: 2000 });
                                    result[i] = false;
                                    continue;
                                } else {
                                    //update value
                                    this.values[_index] = _value;
                                    result[i] = true;

                                    continue;
                                }
                            }

                            if (settings.numSelect != -1 || this.values.length == 1) {
                                if (this.holder)
                                    this.holder.options.closeable = false;
                            }

                            if (!istoggleable) {
                                result[i] = true;
                                continue;
                            } else {
                                this.values.splice(_index, 1);
                                result[i] = false;
                                continue;
                            }
                        }

                        $.sAlert('#lov-message').message({ timeout: '2000', type: 'warning', content: String.format(slang.maxSelect, settings.numSelect) });
                    }

                    if (settings.editurl && settings.numSelect === 1) {

                        if (this.values.length !== 0) {
                            this.managementbtn.removeClass("add green").addClass("edit blue");
                        } else {
                            this.managementbtn.removeClass("edit blue").addClass("add green");
                        }
                    }

                    if (this.doneBtn) {
                        this.doneBtn.prop("disabled", this.values.length != settings.numSelect && !settings.numSelect == -1);
                    } else if (!settings.syncSelect) {
                        //check result for submit form with identity error e.g: proxytable
                        if (["proxy", "proxyjson", "proxytable"].indexOf(this.options.type) !== -1) {
                            if (result.indexOf(true) !== -1) {
                                this.sort(this.values);

                                if (settings.proxysummode === "all")
                                    this.calculateSums();

                                this.insertValues();
                            }
                        } else {
                            this.insertValues();
                        }
                    }

                    return result;
                } else {
                    return this.values;
                }
            },
            sort: function (values) {
                values = values || this.val();
                var _sname = this.options.proxysortname;
                if (_sname) {
                    if (this.options.proxysorttype.toLowerCase() === "asc") {
                        stableSort(values, function (a, b) {
                            a = a["data"][_sname] + "";
                            b = b["data"][_sname] + "";

                            return a < b ? -1 : (a > b ? 1 : 0);
                        });
                    } else {
                        stableSort(values, function (a, b) {
                            a = a["data"][_sname] + "";
                            b = b["data"][_sname] + "";

                            return a > b ? -1 : (a < b ? 1 : 0);
                        });
                    }
                }

                return values;
            },
            filter: function (values, filters) {
                if (filters.length) {
                    var filtered = [],
                        _filter = filters.pop();

                    if (_filter.name === "__Display")
                        return this.filter(values, filters);

                    if (_filter["value"] !== "") {
                        for (var i = 0, len = values.length; i < len; i++) {
                            var _value = values[i];
                            if ((_value["data"][_filter.name] || "").search(_filter["value"]) !== -1)
                                filtered.push(_value);
                            else
                                this.excludedvalues.push(_value);
                        }
                    } else {
                        return this.filter(values, filters);
                    }

                    return this.filter(filtered, filters);
                }

                return values;
            },
            renderPaging: function (values) {
                this.$pholder = $(this.options.proxypagingholder);
                if (this.$pholder && this.$pholder.length) {

                    var pagesHTML = "",
                        pcount = this.psize !== -1 ? Math.ceil(values.length / this.psize) : 1;

                    if (pcount < this.cpage && pcount !== 0)
                        this.cpage = pcount;

                    var visiblecount = this.options.proxypagingvisiblecount,
                        startpage = pcount === 0 ? 1 : Math.max(1, this.cpage - Math.floor(Math.min(visiblecount / 2, this.cpage))),
                        endpage = pcount === 0 ? 1 : Math.min(pcount, startpage + visiblecount - 1);

                    if (endpage >= startpage && endpage - startpage < visiblecount - 1)
                        startpage = Math.max(1, endpage - visiblecount + 1);

                    if (pcount > 1) {
                        if (this.cpage > 1)
                            pagesHTML += "<li class=\"PagedList-skipToFirst\" data-pnum=\"1\"><a href=\"#\">««</a></li>";
                        pagesHTML += "<li class=\"PagedList-skipToPrevious" + (this.cpage <= 1 ? " disabled" : "") + "\" data-pnum=\"" + (this.cpage - 1) + "\"><a href=\"#\" class=\"prev\" rel=\"prev\">«</a></li>";
                    }

                    if (startpage > 1)
                        pagesHTML += "<li class=\"disabled PagedList-ellipses\"><a>...</a></li>";

                    for (var i = startpage; startpage !== endpage && i <= endpage; i++) {
                        pagesHTML += "<li" + (i === this.cpage ? " class=\"active\"" : "") + " data-pnum=\"" + i + "\"><a href='#'>" + i + "</a></li>";
                    }

                    if (pcount > endpage)
                        pagesHTML += "<li class=\"disabled PagedList-ellipses\"><a>...</a></li>";

                    if (pcount > 1) {
                        pagesHTML += "<li class=\"PagedList-skipToNext" + (this.cpage >= pcount ? " disabled" : "") + "\" data-pnum=\"" + (this.cpage + 1) + "\"><a href=\"#\" class=\"next\" rel=\"next\">»</a></li>";

                        if (this.cpage + visiblecount <= pcount)
                            pagesHTML += "<li class=\"PagedList-skipToLast\" data-pnum=\"" + pcount + "\"><a href=\"#\">»»</a></li>";

                        pagesHTML = "<ul class=\"pagination\">" + pagesHTML + "</ul>";
                    }

                    if (pcount > 1) {
                        for (var i = 0, _len = (this.cpage - 1) * this.psize; i < _len; i++) {
                            this.excludedvalues.push(values[i]);
                        }

                        for (i = this.cpage * this.psize, _len = values.length; i < _len; i++) {
                            this.excludedvalues.push(values[i]);
                        }
                    }

                    if (this.excludedvalues.length) {
                        var excludedHTML = "<div class=\"hidden\" id=\"ExcludedData\">";

                        for (var i = 0, len = this.excludedvalues.length; i < len; i++) {
                            var _dataitem = "<div class='sgroup' data-sform-name='" + this.options.groupname + "'>",
                                _value = this.excludedvalues[i];

                            _dataitem += "<input type='hidden' name='ProxyID' value='" + _value["id"] + "'/>";
                            _dataitem += jsonToHTML(_value["data"]);
                            _dataitem += "</div>";

                            excludedHTML += _dataitem;
                        }

                        excludedHTML += "</div>";

                        pagesHTML += excludedHTML;
                    }
                    this.$pholder[0].innerHTML = pagesHTML;

                    var self = this;
                    this.$pholder.find("li").on("click", function (event) {
                        event.preventDefault();
                        var $pnum = $(this);
                        if ($pnum.hasClass("disabled"))
                            return;

                        var pnum = parseInt($pnum.attr("data-pnum"));
                        if (pnum !== self.cpage) {
                            self.cpage = pnum;
                            self.insertValues();
                        }
                    });
                }
            },
            insertValues: function () {
                var self = this,
                    settings = this.options;

                if (settings.type !== "proxytable") {

                    var $items = $("<div class='slov-items'></div>");

                    if (this.idholder)
                        this.idholder.val('');


                    if (this.el.is("input"))
                        this.el.val('');


                    if (settings.type === "proxy" || settings.type === "jsoncombo") {

                        for (var i = 0, _len = this.values.length; i < _len; i++) {
                            var _value = this.values[i],
                                _display = _value.display,
                                _$item = $('<div class="slov-item" data-id="' + _value.id + '"></div>');

                            if (settings.clearItemEnable) {
                                $('<span class="slov-item-clear">x</span>')
                                    .on('click', function (event) {
                                        event.stopPropagation();

                                        var _id = $(this).closest(".slov-item").data("lov-value").id,
                                            _index = -1;

                                        for (var j = 0, __len = self.values.length; j < __len; j++) {
                                            if (self.values[j].id == _id) {
                                                _index = j;
                                                break;
                                            }
                                        }

                                        if (_index === -1)
                                            return;

                                        self.values.splice(_index, 1);
                                        self.insertValues();

                                        if (self.isopen && settings.numSelect == -1) {
                                            if (self.holder) {
                                                self.holder.close();
                                                self.isopen = false;
                                            }
                                        }

                                    }).appendTo(_$item);
                            }

                            $('<span class="slov-item-text"></span>').text(_display || _value.value).appendTo(_$item);

                            var _$dataitem = $('<div class="sgroup hidden"></div>').attr("data-sform-name", settings.groupname)
                                .appendTo(_$item);

                            _$dataitem.append(jsonToHTML(_value["data"]));

                            _$item.on('click', function (event) {
                                event.stopPropagation();
                                self.getList(null, null, $(this));
                            }).data('lov-value', _value);

                            if (settings.numSelect === 1) {
                                var _holderwidth = this.inputholder.width();
                                if (_holderwidth > 50)
                                    _$item.css("max-width", this.inputholder.width() * 0.9);
                            }

                            $items.append(_$item);
                        }

                    } else {
                        var _ids = [], _names = [];

                        if (this.idholder && this.idholder.length) {
                            _ids = this.idholder.val().split(settings.idsplitter);
                            _names = this.el.val().split(settings.namesplitter);
                        }

                        for (var i = 0, _len = this.values.length; i < _len; i++) {
                            var _value = this.values[i];

                            var $element = $('<div class="slov-item" data-id="' + _value.id + '"></div>');

                            if (settings.clearItemEnable) {
                                $('<span class="slov-item-clear">x</span>')
                                    .on('click', function (event) {
                                        event.stopPropagation();

                                        if (self.idholder) {
                                            var _id = $(this).closest(".slov-item").data('lov-value').id,
                                                _index = -1;

                                            for (var j = 0, __len = self.values.length; j < __len; j++) {
                                                if (self.values[j].id == _id) {
                                                    _index = j;
                                                    break;
                                                }
                                            }

                                            if (_index == -1)
                                                return;

                                            self.values.splice(_index, 1);
                                        }

                                        self.insertValues();

                                        if (self.isopen && settings.numSelect == -1) {
                                            if (self.holder) {
                                                self.holder.close();
                                                self.isopen = false;
                                            }
                                        }

                                    }).appendTo($element);

                            }

                            $('<span class="slov-item-text"></span>').text(_value.value || _value.id).appendTo($element);

                            if (this.idholder && this.idholder.length) {
                                _ids[0] == "" ? _ids[0] = _value.id : _ids.push(_value.id);
                                _names[0] == "" ? _names[0] = _value.value : _names.push(_value.value);
                            }

                            $element.data('lov-value', _value);

                            if (settings.numSelect === 1) {
                                var _holderwidth = this.inputholder.width();
                                if (_holderwidth > 50)
                                    $element.css("max-width", this.inputholder.width() * 0.9);
                            }

                            $items.append($element);
                        }

                        if (this.idholder && this.idholder.length) {

                            //fire change event for use another plugin like print in detecting changes in print-filter
                            this.idholder.val(_ids.join(settings.idsplitter)).trigger(this.isinitial ? "initialChange" : "change");

                            this.el.val(_names.join(settings.namesplitter));
                        }
                    }

                    if (settings.searchplace === "after")
                        this.searchinput = this.searchinput.clone(true).width("100%").appendTo($items);
                    else
                        this.searchinput = this.searchinput.clone(true).width("100%").prependTo($items);

                    if (settings.numSelect !== -1) {
                        this.searchinput.val("");
                    }

                    //check for prevent validation after reset field
                    if (this.values.length !== 0) {
                        //revalidate field
                        var validatorobj = this.el.closest('form').data('validator');
                        //check isinitial for not clear server validation error
                        if (validatorobj && !this.isinitial) {
                            if (this.idholder && this.idholder.length)
                                validatorobj.element(this.idholder);
                            else
                                validatorobj.element(this.el);
                        }
                    }

                    if (this.values.length === 0) {
                        this.searchinput.attr("placeholder", (settings.emptytext || slang.select));
                    } else {
                        this.searchinput.attr("placeholder", "");
                    }

                    this.inputholder.find(".slov-items").replaceWith($items);
                    this.matchTemplate();

                    if (!this.isinitial)
                        settings.onChange.call(this);

                    if (!settings.syncSelect) {
                        //isinitial for dont fire onDone for first time
                        //for fix bug in sCalculate
                        if (!this.isinitial)
                            settings.onDone.call(this);

                        if (this.clearbtn && this.values.length)
                            this.clearbtn.prop('disabled', false);

                        clearTimeout(this.closetimer);

                        if (this.holder && settings.numSelect != -1)
                            this.holder.close();

                        if (settings.numSelect === -1 && !this.isinitial) {
                            var _oldval = this.searchinput.val();
                            //clear and set again value for set cursor to end of searchinput
                            this.searchinput.trigger('focus').val("").val(_oldval);
                        }

                        if (this.options.type === "combo" && (this.options.numSelect > 1 || this.options.numSelect === -1) && this.holder) {
                            this.holder.object().css("top", this.searchinput.offset().top + this.searchinput.outerHeight() + 1);
                        }

                        //check self.values.length for backspace pressed
                        if (settings.jumptonextinput && !$.mobile && this.values.length && settings.numSelect != -1 && !this.isinitial || this.ispressedtab) {

                            var $inputs = this.searchinput.closest('form').find(':input').filter(".slov-search:not(:hidden,:disabled,.hidden :input,.disabled :input),.form-control:not(:hidden,:disabled,.hidden :input,.disabled :input),.focusable:not(:hidden,:disabled,.hidden :input,.disabled :input)");
                            var $input = $inputs.eq($inputs.index(this.searchinput) + 1);

                            var _lovobj = $input.data("sListOfValue");

                            if (this.ispressedtab) {
                                if (this.holder)
                                    this.holder.close();
                            }

                            if (!$input.is("button,input[type=button],input[type=submit],input[type=file],input[type=checkbox],input[type=radio]") && !(_lovobj && _lovobj.val().length)) {
                                $input.trigger('click');
                                $input.trigger('focus');
                            } else {
                                $input.trigger('focus');
                            }

                        }

                        this.ispressedtab = false;
                    }
                } else {
                    $items = $();

                    if (settings.proxypagingholder !== null && this.psize > 0) {
                        this.excludedvalues = [];

                        var _values = this.filter(this.values, serializeArray(this.el.closest(".grid-holder").find(".search-holder").eq(0).find(":input")));
                        this.renderPaging(_values);

                        i = Math.max(0, (this.cpage - 1) * this.psize),
                            _len = Math.min(this.cpage * this.psize, _values.length);
                    } else {
                        i = 0;
                        _values = this.values;
                        _len = _values.length;

                        if (this.$pholder && this.$pholder.length)
                            this.$pholder.empty();
                    }

                    //check for not remove not found row
                    if (_len) {
                        this.el.find("tr:not(.items-header)").remove();
                    } else if (this.el.find("tr.item-not-found").length === 0) {
                        this.el.find("tr:not(.items-header)").remove();
                        $items = $("<tr><td colspan='100'>" + slang["notFound"] + "<div class='sgroup hidden' data-sform-name='" + settings.groupname + "'></div></td></tr>");
                    }

                    var minProxyID = 0;
                    for (; i < _len; i++) {
                        var _value = _values[i],
                            _dataitem = "<td class=\"options-holder\">";

                        _dataitem += "<div class=\"sgroup hidden\" data-sform-name=\"" + settings.groupname + "\">";
                        _dataitem += "<input type=\"hidden\" name=\"ProxyID\" value=\"" + _value["id"] + "\" />";

                        if (_value["id"] < minProxyID)
                            minProxyID = _value["id"];

                        delete _value["data"]["ProxyID"];

                        _dataitem += jsonToHTML(_value["data"]);
                        _dataitem += "</div>";

                        if (settings.proxysummode === "partial")
                            this.calculateSums(i, _len);


                        var _enableedit = false;

                        if (typeof settings.enableedit === "function")
                            _enableedit = settings.enableedit.call(this, _value);
                        else
                            _enableedit = settings.enableedit || _value["id"] < 0;

                        _dataitem += "<div class='menu-items context-menu'><div class='item'><div class='caption icon-black edit-default edit'>" + (_enableedit === true ? slang["edit"] : slang["showinfo"]) + "</div></div>" + (_enableedit === true ? "<div class='item'><div class='caption icon-black icon-edit edit-common hidden'>" + slang["edit"] + "</div></div>" : "") + "<div class='item'><div class='caption icon-black delete'>" + slang["delete"] + "</div></div></div>";
                        _dataitem += "</td>";

                        _$item = $(_value["display"]).data('lov-value', _value).attr("id", "i_" + _value["id"]).append(_dataitem);
                        _$item.on("dblclick", function (event) {
                            if ($(event.target).is(":input"))
                                return;

                            var __$item = $(this);

                            if (self.options.onBeforeEdit.call(self, __$item) === false)
                                return;

                            self.getList(null, null, __$item);
                        });

                        var $col = _$item.find(".options-holder");

                        $col.find(".edit-default").on('click', function (_event) {
                            var __$item = $(this).closest('.stip').data('sTipcontextmenu') || null;
                            if (__$item)
                                //for edit call from options button
                                __$item = __$item.options.content.data("originalelement").closest("tr");
                            else {
                                var $orgobj = $(this).data("originalelement");
                                if ($orgobj) {
                                    __$item = $();
                                    $.each($orgobj, function (i) {
                                        __$item = __$item.add($orgobj.eq(i).closest("tr"));
                                    });
                                } else {
                                    //for dblclick trigger in sgrid
                                    __$item = $(this).closest("tr");
                                }
                            }

                            if (self.options.onBeforeEdit.call(self, __$item) === false)
                                return;

                            self.getList(null, null, __$item);
                        });

                        $col.find(".edit-common").on('click', function (_event) {
                            var _ids = [];
                            var __$item = $(this).closest('.stip').data('sTipcontextmenu') || null;
                            if (__$item)
                                //for edit call from options button
                                _ids.push(__$item.options.content.data("originalelement").closest("tr").data("lov-value")["id"]);
                            else {
                                var $orgobj = $(this).data("originalelement");
                                if ($orgobj) {
                                    $.each($orgobj, function (i) {
                                        _ids.push($orgobj.eq(i).closest("tr").data("lov-value")["id"]);
                                    });
                                }
                            }

                            self.getList(null, null, _ids);
                        });

                        var _enabledelete = false;
                        if (typeof settings.enabledelete === "function")
                            _enabledelete = settings.enabledelete.call(this, _value);
                        else
                            _enabledelete = settings.enabledelete || _value["id"] < 0;

                        if (_enabledelete === true) {
                            $col.find(".delete").on('click', function (_event) {
                                if (confirm(slang["deleteConfirm"])) {
                                    var _ids = [];
                                    var __$item = $(this).closest('.stip').data('sTipcontextmenu') || null;
                                    if (__$item)
                                        //for edit call from options button
                                        _ids.push(__$item.options.content.data("originalelement").closest("tr").data("lov-value")["id"]);
                                    else {
                                        var $orgobj = $(this).data("originalelement");
                                        if ($orgobj) {
                                            $.each($orgobj, function (i) {
                                                _ids.push($orgobj.eq(i).closest("tr").data("lov-value")["id"]);
                                            });
                                        }
                                    }

                                    var _index = -1;
                                    for (var k = 0; k < _ids.length; k++) {
                                        for (var j = 0, __len = self.values.length; j < __len; j++) {
                                            if (self.values[j].id == _ids[k]) {
                                                self.values.splice(j, 1);
                                                _index = j;
                                                break;
                                            }
                                        }
                                    }

                                    if (_index === -1)
                                        return;

                                    if (settings.proxysummode === "all")
                                        self.calculateSums();

                                    self.insertValues();

                                    if (self.isopen && settings.numSelect == -1) {
                                        if (self.holder) {
                                            self.holder.close();
                                            self.isopen = false;
                                        }
                                    }

                                    self.el.closest(".items-holder").trigger('contentDelete', { items: $() });
                                }
                            });
                        } else {
                            $col.find(".delete").remove();
                        }

                        settings.onItems.call(self, _$item);

                        $items = $items.add(_$item);
                    }

                    minProxyID--;
                    if (minProxyID < this.proxyid)
                        this.proxyid = minProxyID;

                    if (settings.proxyfootertemplate && this.val().length) {
                        $items = $items.add($(String.format.apply(self, [settings.proxyfootertemplate].concat(this.sums))));
                    }

                    if ($.fn.sSeparator)
                        $items.find(".comma-number").sSeparator();

                    this.el.trigger('beforeContentChange', { items: $items });
                    $items.appendTo(this.el);
                    settings.onChange.call(this, $items);
                    this.el.trigger('contentChange', { items: $items });
                }

                this.isinitial = false;

                return this;

            },
            calculateSums: function (start, end) {
                this.options.onBeforeCalculateSums.call(this, start, end);
                var sumfields = (this.options.proxysumnames || "").split(",");
                this.sums = [];

                if (end === null || end === undefined)
                    end = this.values.length;

                if (start === null || start === undefined)
                    start = 0;

                if (sumfields.length === 0)
                    return this.sums;

                if (typeof Big === "undefined") {
                    for (var i = start; i < end; i++) {
                        var _value = this.values[i]["data"];
                        for (var k = 0; k < sumfields.length; k++) {
                            if (i === 0)
                                this.sums[k] = 0;
                            this.sums[k] += parseInt(_value[sumfields[k]] || "0");
                        }
                    }
                } else {
                    for (var i = start; i < end; i++) {
                        _value = this.values[i]["data"];
                        for (k = 0; k < sumfields.length; k++) {
                            if (i === start)
                                this.sums[k] = Big(0);
                            this.sums[k] = this.sums[k].plus(_value[sumfields[k]] || "0");
                        }
                    }

                    for (k = 0; k < this.sums.length; k++)
                        this.sums[k] = this.sums[k].toString();
                }
                this.options.onAfterCalculateSums.call(this, start, end);
                return this.sums;
            },
            matchTemplate: function () {
                var _$items = this.inputholder.find(".slov-item");

                if (_$items.length === 0 || this.options.searchplace !== "after") {
                    return;
                }

                this.searchinput.width("100%");
                var _holderinnerwidth = this.inputholder.innerWidth(), width = 0;

                for (var i = 0, _len = _$items.length; i < _len; i++) {
                    var _itemwidth = _$items.eq(i).outerWidth(true);

                    width += _itemwidth;

                    if (_holderinnerwidth < width)
                        width = _itemwidth;
                }

                width = _holderinnerwidth - width - 7;

                if (width < 50 && this.options.numSelect !== 1) {
                    width = "100%";
                }
                this.searchinput.outerWidth(width);
            },
            disable: function () {
                this.isdisabled = true;
                if (this.clearbtn)
                    this.clearbtn.prop('disabled', true);

                this.inputholder.find('.slov-item-clear').hide();

                this.inputholder.off("click").addClass("disabled");

                this.searchinput.off("focus").prop("disabled", true);

                if (this.managementbtn)
                    this.managementbtn.prop("disabled", true);

                this.togglebtn.prop("disabled", true);

            },
            enable: function () {
                this.isdisabled = false;
                if (this.clearbtn)
                    this.clearbtn.prop('disabled', false);

                this.inputholder.find('.slov-item-clear').show();

                this.inputholder.removeClass("disabled");

                this.searchinput.prop("disabled", false);

                if (this.managementbtn)
                    this.managementbtn.prop("disabled", false);

                this.togglebtn.prop("disabled", false);
            }
        };
        return sListOfValue;
    })();


    //////////// sTip /////////////////

    $.sTip = function (idSelector, options) {
        if (idSelector.length == 0) {
            console.error("empty idSelector is not allowed");
            return null;
        }

        var $element = $(idSelector);
        if ($element.length === 0) {
            if (idSelector[0] != '#') {
                console.error("only id selectors are allowed");
                return null;
            }

            $element = $("<div id='" + idSelector.replace('#', '') + "' class='stip'></div>").appendTo(".body");
        }

        return $element.sTip(options);
    }

    $.fn.closeNearestTip = function () {
        if (this.length === 0) {
            return;
        }

        this.closest('.stip').sTip().close();
    };

    $.fn.sTip = function (options) {
        if (this.length === 0) {
            return null;
        }

        var group = "general";
        if (options != null) {
            group = options.group || "general";
        }

        var pluginName = 'sTip' + group;

        var instance = this.data(pluginName);
        if (!instance) {
            instance = new sTip(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };

    $.fn.sTip.defaults = {
        content: null,
        id: null,
        group: 'general',
        closegroup: false,
        classholder: "",
        width: 150,
        position: {},
        closebutton: false,
        autoclose: true,
        cache: false,
        clickable: false,
        arrow: true,
        zindex: 2,
        modal: false,
        onAfterClose: function () { },
        onBeforeClose: function () { },
        onBeforeOpen: function () { },
        onAfterOpen: function () { }
    };

    $.fn.sTip.positionDefaults = {
        place: 'auto',
        top: null,
        left: null
    };

    var sTip = (function () {
        function sTip(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sTip.defaults, userOptions);
            this.options.position = $.extend({}, $.fn.sTip.positionDefaults, this.options.position);
            this.uid = 'stip-' + Math.round(Math.random() * 1e7);
            this.tip = null;
            this.init();
        }

        sTip.prototype = {
            init: function () {
                var self = this,
                    settings = this.options;

                if (this.tip) {

                    //update exist tip
                    if (typeof settings.content === "string") {
                        this.tip.html(settings.content);
                    } else {
                        this.tip.replaceWith(this.tip = this.tip.clone(true).empty().append(settings.content)
                            .append(settings.arrow ? '<div id="arrowsTip"></div><div class="shadow"></div>' : ''));
                    }

                    this.updatePosition();
                } else {
                    if (this.el.hasClass("stip")) {
                        this.tip = this.el;

                        if (typeof settings.content === "string") {
                            this.tip.html(settings.content);
                        } else {
                            this.tip.empty().append(settings.content)
                                .append(settings.arrow ? '<div id="arrowsTip"></div><div class="shadow"></div>' : '');
                        }
                    }
                    else {
                        var _id = settings.id ? settings.id.replace("#", "") : this.uid;

                        if (typeof settings.content === "string") {
                            this.tip = $("<div id='" + _id + "' class='stip'></div>")
                                .append(settings.content);
                        } else {
                            this.tip = settings.content.wrapAll("<div id='" + _id + "' class='stip'></div>")
                                .parent();
                        }
                    }
                    //default group is general
                    this.tip.data("sTip" + settings.group, this);
                }

                if (settings.closebutton) {
                    this.closebtn = $('<button class="stip-close">' + slang.close + '</button>').prependTo(this.tip)
                        .on('click.stip', function (event) {
                            event.stopPropagation();
                            self.close();
                        });
                }

                this.tip.append(settings.arrow ? '<div id="arrowsTip"></div><div class="shadow"></div>' : '')
                    .addClass(settings.classholder)
                    .data({
                        "stipobject": this
                    });
            },
            toggle: function () {

                if (this.tip.hasClass('show')) {
                    this.close();
                } else {
                    this.open();
                }

                return this;
            },
            open: function () {
                var self = this,
                    settings = this.options,
                    _$html = this.tip.css('z-index', this.options.zindex),
                    _$window = $(window);

                //close group
                if (settings.closegroup)
                    _$window.trigger('closetip' + settings.group);

                if (settings.modal) {
                    //set z-index for calendar
                    _$html = $("<div class='modal show'></div>").css('z-index', this.options.zindex).on("click", function (event) {
                        if ($(event.target).hasClass("modal"))
                            self.close();
                    }).add(_$html);
                }

                this.resizetimer = null;
                _$window.on('resize.stip' + this.uid, function (_event) {
                    clearTimeout(self.resizetimer);
                    self.resizetimer = setTimeout(function () {
                        self.updatePosition();
                    }, 400);
                })
                    //event for close specific tip
                    .on('closetip.stip' + self.uid, function () {
                        self.close();
                    })
                    //event for close group of tips
                    .on('closetip' + settings.group + "." + self.uid, function () {
                        self.close();
                    });

                //set timeout for prevent closing stip after click on button or ...
                setTimeout(function () {
                    if (self.options.autoclose || !self.options.clickable) {
                        $(document).on('click.stip' + self.uid, function (event) {
                            clearTimeout(self.closetimer);
                            self.closetimer = setTimeout(function () {
                                switch (event.button) {
                                    case 0: // Left button
                                        self.close();
                                        break;
                                    case 1: // Middle button
                                    case 2: // Right button
                                        break;
                                    default:
                                        self.close();
                                        break;
                                }
                            }, 200);
                        });
                    }
                }, 100);

                this.options.onBeforeOpen.call(this, this.tip);

                this.tip.addClass('show');

                if (this.tip.closest("body").length === 0)
                    //Does not exist in DOM
                    _$html.appendTo(".body");

                this.updatePosition();
                this.options.onAfterOpen.call(this, this.tip);

                if (!$.mobile) {
                    //when focus window scroll to top
                    setTimeout(function () {
                        self.tip.find(':input:not([type="hidden"],button,[type="submit"],.hidden :input,.disabled :input)').eq(0).trigger('focus');
                    }, 600);
                }
                return this;
            },
            close: function () {

                if (this.tip.hasClass('show')) {
                    this.options.onBeforeClose.call(this, this.tip);

                    this.tip.removeClass('show')
                        .prev(".modal").removeClass("show").remove();

                    this.options.onAfterClose.call(this);
                    if (!this.options.cache) {
                        //must be used detach
                        this.tip.detach();
                        this.el.removeData('sTip' + (this.options.group || "general"));
                    }
                }

                $(window).off('resize.stip' + this.uid + ' closetip.stip' + this.uid + ' closetip' + this.options.group + "." + this.uid);
                $(document).off('click.stip' + this.uid);

                return this;
            },
            update: function (userOptions) {
                var settings = $.extend({}, this.options, userOptions);
                settings.position = $.extend({}, this.options.position, settings.position);

                this.options = settings;

                if (!settings.autoclose && settings.clickable)
                    $(document).off('click.stip' + this.uid);

                this.init();

                return this;
            },
            object: function () {
                return this.tip;
            },
            updatePosition: function () {
                var settings = this.options,
                    place = settings.position.place,
                    offset = {
                        top: null,
                        left: null
                    },
                    margin = {
                        top: null,
                        left: null
                    },
                    $window = $(window),
                    _window = {
                        width: $window.width(),
                        height: $window.height(),
                        scrollTop: $window.scrollTop(),
                        scrollLeft: $window.scrollLeft()
                    },
                    stemp = 0;

                this.tip.css({ 'width': Math.min(settings.width === 'auto' ? this.tip.outerWidth() + 1 : settings.width, _window.width) });

                var tip = {
                    width: this.tip.outerWidth(),
                    height: this.tip.outerHeight(),
                    top: null,
                    left: null
                };

                var _$scrollParent = this.el.scrollParent();

                if (!settings.position.top) {
                    offset.top = this.el.offset().top;
                    //+1 for floor in outerHeight
                    margin.top = this.el.outerHeight() + 1;
                } else {
                    offset.top = settings.position.top;
                    margin.top = 0;
                }
                if (!settings.position.left) {
                    offset.left = this.el.offset().left;
                    //+1 for floor in outerWidth
                    margin.left = this.el.outerWidth() + 1;
                } else {
                    offset.left = settings.position.left;
                    margin.left = 0;
                }

                var space = {
                    top: Math.max(offset.top - (_$scrollParent.scrollTop() + _window.scrollTop), 0),
                    left: Math.max(offset.left - (_$scrollParent.scrollLeft() + _window.scrollLeft), 0)
                };

                if (place.toLowerCase() === 'auto') {
                    var maxDim = space.top - tip.height;
                    place = 'top';
                    stemp = space.left - tip.width;
                    if (stemp > maxDim) {
                        maxDim = stemp;
                        place = 'left';
                    }

                    stemp = Math.max(0, _window.width - space.left - margin.left) - tip.width;
                    if (stemp > maxDim) {
                        maxDim = stemp;
                        place = 'right';
                    }
                    stemp = _window.height - space.top - tip.height - this.el.height();
                    if (stemp > maxDim) {
                        place = 'bottom';
                        maxDim = stemp;
                    }

                    //for small screen like mobile 320 X 480
                    if (maxDim < 0 || maxDim < -0.3 * tip.width || maxDim < -0.3 * tip.height) {
                        place = offset.top - tip.height > 0 ? 'top' : 'bottom';
                    }
                }


                if (place === 'top' || place === 'bottom') {
                    var arrow;
                    if (place === 'top') {
                        tip.top = offset.top - tip.height - (settings.arrow ? 5 : 0);
                        arrow = "arrow-bottom";
                    } else if (place === 'bottom') {
                        tip.top = offset.top + margin.top + (settings.arrow ? 5 : 0);
                        arrow = "arrow-top";

                        var _toptemp = _window.height + _window.scrollTop;
                        if (tip.top > _toptemp) {
                            if (_toptemp > offset.top) {
                                place = "top";
                                arrow = "arrow-bottom";
                                tip.top = _toptemp - tip.height - margin.top - (settings.arrow ? 5 : 0);
                            }
                        } else if (tip.top + tip.height > _toptemp && tip.height <= offset.top) {
                            place = "top";
                            arrow = "arrow-bottom";
                            tip.top = tip.top - tip.height - (settings.arrow ? 10 : 0);
                        }
                    }

                    //claculate left
                    if (offset.left > _window.width - offset.left) {
                        stemp = tip.width - Math.min(_window.width - offset.left, tip.width / 2);
                    }
                    else {
                        stemp = Math.min(offset.left, tip.width / 2);
                    }

                    //Math.min prevent overflow from right of _window
                    tip.left = Math.min(_window.width - tip.width, offset.left - stemp + margin.left / 2);

                    //problem with el with huge width
                    if (tip.width > margin.left) {
                        if (offset.left < tip.left)
                            stemp = (tip.left - offset.left) / 2;
                        else
                            stemp = offset.left - tip.left + margin.left / 2;
                    } else {
                        stemp = tip.width / 2;
                    }

                    stemp = Math.max(4, stemp - 10);

                    if (settings.arrow) {
                        this.tip.find('#arrowsTip').attr('style', 'left:' + stemp + 'px').next().attr('style', 'left:' + (stemp - 1) + 'px');
                    }

                }
                else {
                    if (place === 'right') {
                        tip.left = offset.left + margin.left + (settings.arrow ? 5 : 0);
                        arrow = "arrow-left";
                    } else if (place === 'left') {
                        tip.left = offset.left - tip.width - (settings.arrow ? 5 : 0);
                        arrow = "arrow-right";
                    }

                    //calcualte top
                    if (space.top < 0.5 * _window.height) {
                        stemp = Math.min(space.top, tip.height / 2);

                    }
                    else {
                        stemp = Math.min(tip.height - Math.min(_window.height - space.top, tip.height / 2), space.top);
                    }

                    tip.top = offset.top - stemp;
                    stemp = Math.min(tip.height - 22, Math.max(0, stemp + margin.top / 2 - 10));

                    if (settings.arrow) {
                        this.tip.find('#arrowsTip').attr('style', 'top:' + stemp + 'px').next().attr('style', 'top:' + (stemp - 1) + 'px');
                    }
                }

                this.tip.css({ 'top': tip.top, 'left': tip.left }).find('#arrowsTip').attr('class', arrow);
            }
        };
        return sTip;
    })();

    /////////////// sAlert ///////////

    $.sAlert = function (idSelector) {
        if (idSelector.length == 0) {
            idSelector = "#sAlert";
        }

        var $element = $(idSelector);
        if ($element.length === 0) {
            if (idSelector[0] != '#') {
                console.error("only id selectors are allowed");
                return null;
            }

            $element = $("<div id='" + idSelector.replace('#', '') + "'></div>").appendTo(".body");
        }

        return $element.sAlert();
    }

    $.fn.sAlert = function () {

        var element = this,
            pluginName = 'salert';

        if (this.length === 0) {
            return null;
        }

        var instance = $(element).data(pluginName);

        if (!instance) {
            instance = new sAlert(element);
            $(element).data(pluginName, instance);
        }

        return instance;
    };

    var sAlert = (function () {
        function sAlert(element) {
            var self = this;
            self.el = element;
        }

        sAlert.prototype = {
            message: function (options) {
                var settings = $.extend({}, {
                    closetext: slang["realized"],
                    content: '',
                    timeout: "-1",
                    closebutton: false,
                    title: null,
                    url: null,
                    urltarget: "_blank",
                    type: 'log',
                    onClick: function () { },
                    onClose: function () { }
                }, options), $el = $(this.el).addClass('salert');
                var _html = '<div class="salert-message ' + settings.type + ' anim-alert-in">';

                if (settings.title) {
                    _html += "<div class='salert-titlebar'><span class='salert-title'>" + (settings.title || "") + "</span></div>";
                }

                if (settings.closebutton === true)
                    _html += '<button type="button" class="btn salert-close">' + (settings.closetext || "") + '</button>';

                _html += '<div class="salert-content">' + settings.content + '</div><div class="clear"></div></div>';

                var $message = $(_html).appendTo($el), self = this;

                $message.close = function () {
                    setTimeout(function () {
                        $message.remove();
                        settings.onClose.call(self, $message);
                    }, 400);
                    $message.addClass('anim-alert-out');
                };

                $message.on('click', function (event) {
                    event.stopPropagation();

                    if (settings.url) {
                        window.open(settings.url, settings.urltarget);
                    }

                    if (settings.onClick.call(self, $(this)) !== false) {
                        $message.close();
                    }
                });

                $message.find(".salert-close").on("click", function (event) {
                    event.stopPropagation();
                    settings.onClose.call(self, $message);
                    $message.close();
                });

                if (settings.timeout != '-1')
                    setTimeout(function () {
                        $message.close();
                    }, settings.timeout);

                return $message;
            },
            prompt: function (options) {
                var self = this,
                    settings = $.extend({}, {
                        content: "",
                        titleClass: "",
                        inputs: [{
                            Title: "",
                            Name: "",
                            Type: "",
                            DefaultValue: "",
                            Class: "",
                            LabelClass: "",
                            Content: ""
                        }],
                        commands: [{
                            Class: "btn green main-action",
                            Action: 1,
                            Text: slang.ok
                        },
                        {
                            Class: "btn",
                            Action: 0,
                            Text: slang.cancel
                        }],
                        dialogclass: "",
                        onCancel: function () { },
                        onDone: function () { }
                    }, options);

                this.isdone = false;
                this.values = new Array();

                function promptDone($button, command) {
                    var $dialog = self.dialog.object();
                    if ($button == null) {
                        $button = $dialog.find(".prompt-actions button").eq(0);
                        command = $button.data("salert-command");
                    }

                    var $inputs = $dialog.find(":input").not("[type=submit],[type=button],button");
                    self.isdone = true;
                    self.values = new Array();
                    $inputs.each(function (index) {
                        var _$input = $inputs.eq(index);

                        if (_$input.hasClass("fix-num"))
                            _$input.val(toEnglishNumber(_$input.val()));

                        if (_$input.hasClass("comma-number"))
                            _$input.sSeparator().unformatElement();

                        self.values.push(_$input.val());
                    });
                    settings.onDone.call(self, self.values, $button, command);
                    self.dialog.close();
                }

                var $data = $("<div></div>");
                if (settings.content) {
                    $("<div class='prompt-title'></div>").addClass(settings.titleClass).append(settings.content).appendTo($data);
                }

                var $inputsholder = $("<div class='inputs-holder'></div>").appendTo($data);

                for (var i = 0, len = settings.inputs.length; i < len; i++) {
                    var _input = settings.inputs[i],
                        _type = _input.Type || "text";

                    var _$holder = $("<div class='item'></div>").appendTo($inputsholder);

                    if (_type === "textarea") {
                        if (_input["Title"])
                            $("<label><label>").text(_input["Title"]).attr({ "for": _input["Name"], "class": "control-label disp-iblock" }).addClass(_input["LabelClass"]).appendTo(_$holder);

                        $("<textarea class='form-control' rows='6'>" + (_input.DefaultValue || "") + "</textarea>").attr({ "name": _input.Name, "id": _input.Name }).addClass(_input.Class).appendTo(_$holder);
                    }
                    else if (_type === "checkbox") {
                        $("<label class='valign-middle pad-all-1p' for='" + _input.Name + "'>" + _input.Title + "</label>").appendTo(_$holder);
                        $('<span class="sswitch valign-middle"><input  type="checkbox"' + (_input.DefaultValue ? ' checked="chekced"' : '') + ' id="' + _input.Name + '" name="' + _input.Name + '" value="true"/><label class="slider round" for="' + _input.Name + '"><span class="handle"></span></label></span>').appendTo(_$holder);
                    }
                    else if (_type === "html") {
                        $(_input["Content"]).appendTo(_$holder);
                    }
                    else if (_type === "number") {
                        if (_input["Title"])
                            $("<label><label>").text(_input["Title"]).attr({ "for": _input["Name"], "class": "control-label disp-iblock" }).addClass(_input["LabelClass"]).appendTo(_$holder);

                        var $element = $("<input type='number' class='form-control ltr fix-num'/>").attr({ "value": _input.DefaultValue, "name": _input.Name, "id": _input.Name }).addClass(_input.Class).appendTo(_$holder);
                        if ($element.hasClass("comma-number"))
                            $element.sSeparator();
                    }
                    else {
                        if (_input["Title"])
                            $("<label><label>").text(_input["Title"]).attr({ "for": _input["Name"], "class": "control-label disp-iblock" }).addClass(_input["LabelClass"]).appendTo(_$holder);

                        $("<input type='" + _type + "' class='form-control'/>").attr({ "value": _input.DefaultValue, "name": _input.Name, "id": _input.Name }).addClass(_input.Class).appendTo(_$holder);
                    }
                }

                $(":input:not(textarea)", $inputsholder).on("keyup", function (event) {
                    if ((event.keyCode || event.which) === 13)
                        promptDone();
                });

                $(":input", $inputsholder).on("focus", function () {
                    if (this.select)
                        this.select();
                });

                var $actions = $("<div class='prompt-actions'></div>").appendTo($data);

                for (i = 0, len = settings.commands.length; i < len; i++) {
                    var _command = settings.commands[i],
                        _class = _command.Class || "btn blue main-action";

                    if (_command.Action !== null && !_class) {
                        switch (_command.Action) {
                            case 1:
                                _class = "btn blue main-action";
                                break;
                            case 0:
                                _class = "btn";
                                break;
                        }
                    }

                    $("<button></button>").append(_command.Text).attr({ "value": _command.Value || i, "class": _class }).on("click", function () {
                        var $btn = $(this),
                            _com = $btn.data("salert-command");

                        if (_com.onClick)
                            _com.onClick.call(self, $btn);

                        if (_com.Action === 1)
                            promptDone($btn, _com);
                        else
                            self.dialog.close();

                    }).data("salert-command", _command).appendTo($actions);
                }

                this.dialog = $(this.el).sDialog({
                    modal: true,
                    dialogclass: (settings.dialogclass || "") + " salert-dialog",
                    onAfterClose: function () {
                        if (!self.isdone) {
                            settings.onCancel.call(self);
                        }
                    }
                }).html($data).open();
            },
            confirm: function (options) {
                var defaultcommands = [{
                    Class: "btn green main-action",
                    Action: 1,
                    Value: "true",
                    Text: slang.yes
                },
                {
                    Class: "btn",
                    Action: 0,
                    Value: "false",
                    Text: slang.no
                }], settings = $.extend({}, {
                    content: slang.defaultConfirm,
                    commands: defaultcommands,
                    onDone: function () { }
                }, options);

                var $data = $("<div></div>");
                $("<div class='confirm-message'></div>").css("max-height", $(window).height() - 150).append(settings.content).appendTo($data);
                var $comholder = $("<div class='confirm-actions'></div>").appendTo($data);

                var self = this;

                if (!settings.commands)
                    settings.commands = defaultcommands;

                for (var i = 0, len = settings.commands.length; i < len; i++) {
                    var _command = settings.commands[i],
                        _class;

                    if (_command.Action !== null) {
                        switch (_command.Action) {
                            case 1:
                                _class = _command.Class || "btn blue main-action";
                                break;
                            case 0:
                                _class = _command.Class || "btn";
                                break;
                        }
                    }

                    var $command = $("<button></button>").append(_command.Text).attr({ "value": _command.Value || i, "class": _class }).on("click", function () {
                        var $btn = $(this),
                            _com = $btn.data("salert-command"),
                            customClick = _com.onClick;

                        self.value = $btn.val();

                        if (customClick)
                            customClick.call(self, $btn);

                        self.dialog.close();

                        settings.onDone.call(self, $btn, _com);
                    }).data("salert-command", _command).appendTo($comholder);
                }

                this.dialog = $(this.el).sDialog({
                    modal: true,
                    closeable: false,
                    dialogclass: "salert-dialog",
                    closeonmodal: false,
                    onAfterOpen: function () {
                        $data.find(".confirm-actions button").eq(0).trigger('focus');
                    }
                }).html($data).open();


            }
        };
        return sAlert;
    })();


    //////////////// sTreeView //////////////////////

    $.fn.sTreeView = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'streeView',
            instance = this.data(pluginName);

        if (!instance) {
            instance = new sTreeView(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };

    $.fn.sTreeView.defaults = {
        depth: -1
    };

    var sTreeView = (function () {
        function sTreeView(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sTreeView.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        };

        sTreeView.prototype = {
            init: function () {

                this.update();

                var self = this;
                this.el.on('contentChange', function (_event, _data) {
                    self.update();
                    //for trigger
                    return false;
                });
            },
            update: function (settings) {

                if (settings)
                    this.options = $.extend({}, this.options, settings);

                settings = this.options;

                var $holder = this.el.wrapAll("<div/>").parent(),
                    $tree = this.el.detach().addClass('stree-view unselectable');

                $tree.find("li").not(".stree-item").addClass('stree-item').wrapInner("<div class='stree-content'/>");

                $tree.find(".stree-content>ul,.stree-content>ol").each(function () {
                    var $element = $(this);
                    $element.insertAfter($element.parent().prepend("<i class='stree-collapse'></i>"));
                });

                var selector,
                    _type = $tree.find("ol").length ? "ol" : "ul";

                if (settings.depth > 0)
                    for (var i = 0; i < settings.depth; i++) {
                        if (i)
                            selector += ',';
                        selector += '>li>' + _type;
                        for (var j = 0; j < i; j++)
                            selector += '>li>' + _type;
                    }
                else
                    selector = _type;

                $tree.find(selector).parent().addClass('collapsed');

                $tree.off("click.streeview", '.stree-collapse')
                    .on('click.streeview', '.stree-collapse', function (event) {
                        event.stopPropagation();
                        $(this).closest("li").toggleClass('collapsed');
                        //Close other Component
                        $(document).trigger('click');
                    });

                $holder.replaceWith(this.el);
            }
        };
        return sTreeView;
    })();

    //////////////// sCalculate //////////////////////

    $.sCalculate = function (options) {
        return new sCalculate(options);
    };

    $.sCalculate.defaults = {
        selectors: null,
        expressions: null,
        grouprels: null,
        types: ['update']
    };

    var sCalculate = (function () {
        function sCalculate(userOptions) {
            this.options = $.extend({}, $.sCalculate.defaults, userOptions),
                this.calculate();
        };

        sCalculate.prototype = {
            evaluate: function (element, expression) {
                var $el = $(element);

                var i = 0;
                var token = "";
                var expr = "";
                var isToken = false;
                var isInBrac = false;

                while (true) {
                    if (i == expression.length)
                        break;

                    switch (expression.charAt(i)) {
                        case "(":
                        case ")":
                        case "+":
                        case "*":
                        case "/":
                            if (isToken) {
                                expr += parseFloat($el.data('lov-' + token)).toString();
                                isToken = false;
                            }

                            expr += expression.charAt(i);
                            i++;
                            break;

                        case "-":
                            if (isInBrac) {
                                token += expression.charAt(i);
                                i++;
                            }
                            else {
                                if (isToken) {
                                    expr += parseFloat($el.data('lov-' + token)).toString();
                                    isToken = false;
                                }

                                expr += expression.charAt(i);
                                i++;
                            }
                            break;
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                        case '.':
                            if (isToken) {
                                token += expression.charAt(i);
                            }
                            else {
                                expr += expression.charAt(i);
                            }

                            i++;
                            break;

                        default:
                            if (!isToken) {
                                token = "";
                                isToken = true;
                            }

                            token += expression.charAt(i);

                            if (expression.charAt(i) == "[")
                                isInBrac = true;
                            else if (expression.charAt(i) == "]")
                                isInBrac = false;

                            i++;
                    }
                }

                if (isToken)
                    expr += $el.data('lov-' + token);

                try {
                    return eval(expr);
                } catch (e) {
                    return false;
                }
            },
            calculate: function () {
                var self = this,
                    settings = self.options;

                $.each(settings.expressions, function (i, expr) {
                    var result = 0,
                        opt = settings.grouprels[i];
                    if (settings.elements && settings.elements.length) {
                        $.each(settings.elements, function (_index, element) {
                            switch (opt) {
                                case '+':
                                    result += self.evaluate(element, expr);
                                    break;
                                case '-':
                                    result -= self.evaluate(element, expr);
                                    break;
                                case '/':
                                    result /= self.evaluate(element, expr);
                                    break;
                                case '*':
                                    result *= self.evaluate(element, expr);
                                    break;
                                default:
                                    result = self.evaluate(element, expr);
                                    if (!result) {
                                        result = $(element).data('lov-' + expr);
                                    }
                            }
                        });

                        switch (settings.types[i] || 'update') {
                            case 'update':
                                var $updated = $(settings.selectors[i]);
                                if ($updated.is(':input')) {
                                    if ($updated.is("[type='checkbox']"))
                                        $updated.prop("checked", (result === true || (result + "").toLowerCase() === "true"));
                                    else if ($updated.is("[type='radio']")) {
                                        if ($updated.is("[value=" + result + "]"))
                                            $updated.prop("checked", true);
                                        else
                                            $updated.prop("checked", false);
                                    }
                                    else
                                        $updated.val((result == null ? "" : result).toString()).trigger('change');
                                }
                                else
                                    $updated.html(result == null ? "" : result);
                                break;
                        }
                    }
                });
                return this;
            }
        };

        return sCalculate;
    })();



    //////////////// sMapValues //////////////////////

    $.sMapValues = function (options) {
        return new sMapValues(options);
    };

    $.sMapValues.defaults = {
        selectors: null,
        expressions: null,
        types: ['update']
    };

    var sMapValues = (function () {
        function sMapValues(userOptions) {
            this.options = $.extend({}, $.sMapValues.defaults, userOptions),
                this.calculate();
        };

        sMapValues.prototype = {
            evaluate: function (element, expression) {
                var $el = $(element);
                return $el.data('lov-' + expression);
            },
            calculate: function () {
                var self = this,
                    settings = self.options;

                if (settings.elements && settings.elements.length) {
                    $.each(settings.expressions, function (i, expr) {
                        $.each(settings.elements, function (_index, element) {
                            var result = $(element).data('lov-' + expr);

                            switch (settings.types[i] || 'update') {
                                case 'update':
                                    var $updated = $(settings.selectors[i]);
                                    if ($updated.is(':input')) {
                                        if ($updated.is("[type='checkbox']")) {
                                            $updated.prop("checked", (result === true || (result + "").toLowerCase() === "true"));
                                        }
                                        else if ($updated.is("[type='radio']")) {
                                            if ($updated.is("[value=" + result + "]")) {
                                                $updated.prop("checked", true);
                                            }
                                            else {
                                                $updated.prop("checked", false);
                                            }
                                        }
                                        else {
                                            $updated.val((result == null ? "" : result).toString()).trigger('change');
                                        }
                                    }
                                    else {
                                        $updated.html(result == null ? "" : result);
                                    }
                                    break;
                            }
                        });
                    });
                }
                return this;
            }
        };

        return sMapValues;
    })();



    //////////////// sMenu //////////////////////

    $.fn.sMenu = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sMenu';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sMenu(element, options);
                $element.data(pluginName, instance);
            } else {
                //dont check  if (options) for cloned elements
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sMenu.defaults = {
        delay: 200,
        onShowMenu: function () { },
        onHideMenu: function () { },
        mousehover: false
    };

    var sMenu = (function () {
        function sMenu(element, userOptions) {

            this.el = $(element);
            //extend options
            this.options = $.extend({}, $.fn.sMenu.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sMenu.prototype = {
            init: function () {
                this.last = null;

                this.update(this.options);

                var self = this;
                $(document).on("click", function () {
                    self.options.onHideMenu.call(self);
                    self.el.find(".menu-items").removeClass("show");
                });

            },
            update: function (settings) {

                if (settings)
                    this.options = $.extend({}, this.options, settings);

                settings = this.options;

                this.el.find('.item').each(function () {
                    var $item = $(this);

                    if ($item.find('>.menu-items').length > 0)
                        $item.addClass('menu-parent');
                });

                var self = this;
                if (settings.mousehover) {

                    this.el.off('mouseover.sMenu', '.item')
                        .on('mouseover.sMenu', '.item', function (event) {
                            event.stopPropagation();
                            event.preventDefault();
                            var $item = $(this);

                            clearTimeout(self.timeout);
                            self.timeout = setTimeout(function () {
                                self.openSubmenu($item);
                            }, settings.delay);

                            return;
                        }).off('mouseleave.sMenu', '.item')
                        .on('mouseleave.sMenu', '.item', function (event) {
                            event.stopPropagation();
                            clearTimeout(self.timeout);
                            return;
                        });
                }

                this.el.off('click.sMenu', '.item')
                    .on('click.sMenu', '.item', function (event) {
                        event.stopPropagation();
                        var $item = $(this);

                        if ($item.find('.menu-items').length > 0)
                            event.preventDefault();
                        else {
                            $(document).trigger('click');
                            $(window).trigger("closetipcontextmenu");
                            settings.onHideMenu.call(self);
                        }

                        clearTimeout(self.timeout);
                        self.toggleSubmenu($item);

                        return;
                    });
            },
            openSubmenu: function ($item) {
                var $submenu = $item.find('>.menu-items');

                if (this.last) {
                    this.last.find('.menu-items').removeClass('show');
                }

                if ($submenu.length > 0) {

                    if (!$submenu.hasClass('menu-active')) {
                        $submenu.addClass('menu-active');
                        $submenu.sMenu();
                    }

                    $submenu.removeClass("right-side left-side upon");
                    //+1 for floor in outerWidth
                    var subwidth = $submenu.outerWidth() + 1,
                        _itemoffset = $item.offset();

                    if (subwidth <= _itemoffset.left) {
                        $submenu.addClass('left-side show');
                        //-1 for floor in outerWidth
                    } else if (subwidth <= $(window).width() - $item.outerWidth() - 1 - _itemoffset.left) {
                        $submenu.addClass('right-side show');
                    } else {
                        $submenu.addClass('upon show');
                    }

                    this.options.onShowMenu.call(self, $item, $submenu);

                    this.last = $item;
                }
            },
            toggleSubmenu: function ($item) {
                var $submenu = $item.find('>.menu-items');

                if ($submenu.hasClass('show')) {
                    this.options.onHideMenu.call(this);
                    $submenu.removeClass('show');
                } else {
                    this.options.onShowMenu.call(this, $item, $submenu);
                    this.openSubmenu($item);
                }

            }
        };
        return sMenu;
    })();

    //////////////// sUploader ////////////////

    $.fn.sUploader = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sUploader';
        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sUploader(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };


    $.fn.sUploader.defaults = {
        accept: null,
        noaccept: null,
        required: false,
        readonly: false,
        maxsize: null,
        filecount: -1,
        fileidname: "UploadedFileID",
        handlefilename: "attachment",
        keyname: null,
        type: "normal",
        url: null,
        groupname: null,
        deleteitems: true,
        onDone: function () { }
    };

    var sUploader = (function () {
        function sUploader(element, userOptions) {

            this.el = $(element);
            this.el.data("active-uploading", 0);
            var settings = this.options = $.extend(false, {}, $.fn.sUploader.defaults, userOptions);

            this.filecount = 0;

            if (settings.type === "proxy") {

                var _sajaxpostobj = this.el.closest("form").data("sAjaxPost");
                if (_sajaxpostobj) {
                    _sajaxpostobj.options.dataformat = "json";
                }

                this.$holder = $("<label " + (settings.readonly === false ? "for='" + this.el.attr("id") + "' " : "") + "class='suploader-holder'><div class='suploader-helptext'>" + (settings.readonly === false ? slang.uploadHelpText : slang.uploadReadOnlyText) + "</div><div class='suploader-fileholder'></div><div class='clear'></div></label>")
                    .insertBefore(this.el.addClass("suploader-fileinput"));

                if (settings.filecount === 1)
                    this.$holder.addClass("single-file");

                var _$proxydata = this.el.next(".suploader-proxy-data");
                if (_$proxydata.length) {
                    _$proxydata = _$proxydata.find(".item");

                    var _$items = $("<div/>");
                    for (var i = 0, _len = _$proxydata.length; i < _len; i++) {
                        var _$data = _$proxydata.eq(i),
                            _name = decodeURIComponent(_$data.find(".item-name").remove().html()),
                            _id = _$data.find(".item-id").remove().val(),
                            _key = _$data.find(".item-key").remove().val();

                        _$items.append(this.createItem(_name, _$data.attr("data-url"), true).append(this.renderData(_id, _key, _$data.children().clone())));
                        _$data.remove();
                    }
                    this.filecount = _$proxydata.length;
                    _$items.children().appendTo(this.$holder.find(".suploader-fileholder"));
                }

                this.addValidation(this.el);

                var self = this;
                //must be use a real input file for prevent security block in IE8 and another
                this.el.attr("multiple", settings.filecount === 1 ? false : true).on("change", function () {
                    var isfilessupport = false,
                        $proxyfile = self.el,
                        _files;

                    //revalidate hidden field
                    if ($.validator) {
                        if (!$proxyfile.valid()) {
                            return false;
                        }
                    }

                    if ($proxyfile[0].files) {
                        _files = $proxyfile[0].files;
                        isfilessupport = true;

                    } else {
                        _files = [{ "name": $proxyfile.val().split(/(\\|\/)/g).pop() }];
                    }

                    if (settings.filecount !== -1 && settings.filecount < _files.length + self.filecount) {
                        if (settings.filecount === 1) {
                            if (confirm(slang.replacefile)) {
                                self.$holder.find(".suploader-fileholder").find(".item-clear").trigger("cancelupload")
                                    //clear another elements
                                    .end().find(".item").remove();
                            }
                            else {
                                self.el.val("");
                                return;
                            }
                        } else {
                            $.sAlert('#AjaxLog').message({ content: String.format(slang.maxfilecount, settings.filecount), type: "error", timeout: -1 });
                            self.el.val("");
                            return;
                        }
                    }

                    for (var i = 0, _len = _files.length; i < _len; i++) {
                        var $proxyform = $("<form action='" + settings.url + "' method='post' role='form' enctype='multipart/form-data'><input type='hidden' name='name' value='" + self.options.handlefilename + "' /></form>"),
                            _file = _files[i],
                            _sendoptions = {};

                        $proxyform.append(self.el.closest("form").find("input[name=__RequestVerificationToken]").clone());

                        if (!isfilessupport || !window.FormData) {
                            //value of input file not clone
                            self.el = $proxyfile.clone(true, true).insertBefore($proxyfile);
                            $proxyfile.attr("name", "file").appendTo($proxyform);
                        } else {
                            var _formdata = new FormData($proxyform[0]);
                            _formdata.append('file', _file);

                            _sendoptions = {
                                data: _formdata
                            };
                        }

                        var $element = self.createItem(_file.name).appendTo(self.$holder.find(".suploader-fileholder"));

                        $proxyform.sAjaxPost({
                            progressbar: $element.find(".suploader-progressbar"),
                            integrated: true,
                            beforeSend: function () {
                                var sajaxobj = this;
                                sajaxobj._tempelement = $element;

                                $("html").data("ajax-loading", "");
                                self.el.data("active-uploading", self.el.data("active-uploading") + 1);

                                self.filecount++;
                                $element.on('click cancelupload', '.item-clear', function (event) {
                                    event.stopPropagation();
                                    event.preventDefault();

                                    if (sajaxobj.xhr && sajaxobj.xhr.status != 200) {
                                        sajaxobj.xhr.abort();
                                    } else {
                                        $("#loading").slideUp();
                                        self.filecount--;
                                    }

                                    if ($.validator)
                                        $proxyfile.valid();

                                    var $item = $(this);
                                    $item.closest(".item").remove();
                                });

                            },
                            afterSend: function () {
                                setTimeout(function () {
                                    $("html").data("ajax-loading", $("#loading"));
                                }, 100);
                            },
                            onError: function () {
                                this._tempelement.remove();
                                self.el.data("active-uploading", self.el.data("active-uploading") - 1);

                                if ($.validator)
                                    $proxyfile.valid();

                                self.filecount--;
                                self.el.val("");
                            },
                            sendoptions: _sendoptions,
                            actions: [{
                                type: "ignore",
                                log: false,
                                onError: function () {
                                    this._tempelement.remove();
                                    self.el.data("active-uploading", self.el.data("active-uploading") - 1);

                                    if ($.validator)
                                        $proxyfile.valid();

                                    self.filecount--;
                                    self.el.val("");
                                },
                                customAction: function (data) {
                                    self.el.data("active-uploading", self.el.data("active-uploading") - 1);
                                    self.renderData(data["ID"] || data, data["Key"] || "").appendTo(this._tempelement);
                                    if (data["Url"])
                                        this._tempelement.find(".item-text").wrap("<a href='" + data["Url"] + "' class='item-link' target='_blank'></a>");

                                    if ($.validator)
                                        $proxyfile.valid();

                                    self.el.val("");
                                    return false;
                                },
                                onDone: function (data) {
                                    if (data["Status"] === 0) {
                                        self.options.onDone.call(self, data["Model"]);
                                    }
                                }
                            }]
                        }).send();
                    }
                });

            } else {

                this.idholder = this.el.parent().parent().find("input[type='hidden']").eq(0);

                this.addValidation(this.el);

                if (settings.deleteitems && !settings.readonly) {
                    var _$delete_item_btn = $('<button type="button" class="btn-mini icon-black red delete">' + slang.remove + '</button>').prependTo(this.el.parent().parent().find('>.uploaded-items>.item'));

                    if (!settings.required) {
                        var self = this;
                        _$delete_item_btn.on('click', function () {
                            self.idholder.val("");
                            $(this).closest('.item').remove();
                        });
                    } else {
                        _$delete_item_btn.attr("disabled", true);
                    }
                }
            }
        }

        sUploader.prototype = {
            update: function (userOptions) {
                this.options = $.extend({}, this.options, userOptions);
                this.addValidation(this.el);
                if (this.options.readonly === true) {
                    this.$holder.removeAttr('for').find('.suploader-helptext').text(slang.uploadReadOnlyText);
                }
                else {
                    this.$holder.attr('for', this.el.attr("id")).find('.suploader-helptext').text(slang.uploadHelpText);
                }
                return this;
            },
            createItem: function (name, url, eventclose) {
                var $element = $('<div class="item"><div class="suploader-progress-holder"><div class="suploader-progressbar"></div></div>' + (!this.options.readonly ? '<span class="item-clear">x</span>' : '') + '</div>');

                if (url)
                    $('<a class="item-link" href="' + url + '" target="_blank"><span class="text-english item-text">' + name + '</span></a>').appendTo($element);
                else
                    $('<span class="text-english item-text">' + name + '</span>').appendTo($element);

                if (eventclose) {
                    var self = this;
                    $element.on('click', '.item-clear', function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        if (!$(self.el).is(":disabled")) {
                            $(this).closest(".item").remove();
                            if (self.filecount)
                                self.filecount--;
                        }
                    });
                }

                return $element;
            },
            renderData: function (id, key, extradata) {
                var element = '<div ' + (this.options.groupname ? 'class="sgroup hidden" data-sform-name="' + this.options.groupname + '"' : '') + '>';
                element += "<input type='hidden' name='" + this.options.fileidname + "' value='" + (id ? id : "") + "'/>";
                element += "<input type='hidden' name='" + (this.options.keyname ? this.options.keyname : this.options.fileidname + "File") + "' value='" + (key ? key : "") + "'/>";
                element = $(element);

                if (extradata)
                    element.append(extradata);

                return element;
            },
            addValidation: function ($el) {
                var settings = this.options;

                $el.attr('data-val', true);

                if (settings.required && !settings.readonly) {
                    $el.attr('data-val-sfile-required', slang.vFileRequired);
                    if (this.idholder) {
                        $el.attr('data-val-sfile-fileholder', this.idholder.val());
                    }
                }
                else {
                    $el.removeAttr('data-val-sfile-required');
                }

                if (settings.maxsize) {
                    $el.attr('data-val-sfile-maxsize', settings.maxsize);
                }
                else {
                    $el.removeAttr('data-val-sfile-maxsize');
                }

                if (settings.accept) {
                    $el.attr('data-val-sfile-accept', settings.accept);
                }
                else {
                    $el.removeAttr('data-val-sfile-accept');
                }

                if (settings.noaccept) {
                    $el.attr('data-val-sfile-noaccept', settings.noaccept);
                }
                else {
                    $el.removeAttr('data-val-sfile-noaccept');
                }

                $el.attr('data-val-sfile', true);
            },
            reset: function () {
                this.el.val("");

                if (this.options.type === "proxy")
                    this.$holder.find(".suploader-fileholder").children().remove();
            }
        };
        return sUploader;
    })();

    //////////////// sTime  ////////////////

    $.fn.sTime = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sTime';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if ($element.hasClass("search-form")) {
                return;
            }

            if (!instance) {
                instance = new sTime(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update($element, options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };


    $.fn.sTime.defaults = {
        validvalue: /^([01]?\d|2[0-3])(:[0-5]\d)?(:([0-5]\d?|[0-5]\d\.\d{1,3}))?$/,
        format: "hh:mm",
        onDone: function () { }
    };

    var sTime = (function () {
        function sTime(element, userOptions) {

            var self = this;
            self.el = $(element);
            self.options = $.extend(false, {}, $.fn.sTime.defaults, userOptions);

            self.init();
        };

        sTime.prototype = {
            init: function () {
                var self = this,
                    settings = self.options,
                    $input = $(self.el);

                $input.attr("type", "text").addClass("ltr");

                $input.sMask({
                    mask: settings.format.replace(/[h,m,s]/gi, "0"),
                    onChange: function (value, _e, el) {
                        var mask = this;

                        if (value == "")
                            return;

                        if (["0", "1", "2"].indexOf(value[0]) == -1) {
                            value = "0" + value[0] + value.slice(2);
                            mask.val(value);
                        } else if (value[0] == "2" && value[1] && (["0", "1", "2", "3", "_"].indexOf(value[1]) == -1)) {
                            value = "0" + value[0] + ":" + (value[1] || "") + value.slice(4);
                            mask.val(value);
                        }

                        var _value = value.match(/\d*/g).join("");
                        _value = self.format(_value);

                        if (!_value.match(/^([01]?\d|2[0-3])(:[0-5]+\d?)?(:([0-5]\d?|[0-5]\d\.\d{1,3}))?$/)) {
                            this.val(el.data("mask-previus-value"));
                        }
                    }
                });

            },
            format: function (value) {
                var self = this;
                value = value || $(self.el).val();
                if (value) {
                    return (value.match(/\d{1,2}/g) || [""]).join(":");
                }
                return "";

            }
        }
        return sTime;
    })();



    //////////////// sMask  ////////////////

    $.fn.sMask = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sMask';
        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sMask(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };


    $.fn.sMask.defaults = {
        validchar: /\d/,
        mask: "__:__",
        beforeValidate: function () { },
        directionInput: "ltr",
        showmaskonfocus: true,
        customValidate: function () { return true },
        onDone: function () { },
        /****/
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        selectOnFocus: true,
        // old versions of chrome dont work great with input event
        useInput: true,
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': { pattern: /\d/ },
            '9': { pattern: /\d/, optional: true },
            '#': { pattern: /\d/, recursive: true },
            'A': { pattern: /[a-zA-Z0-9]/ },
            'S': { pattern: /[a-zA-Z]/ }
        }
    };

    var sMask = (function () {
        function sMask(element, userOptions) {

            var self = this;
            self.el = $(element);
            self.options = $.extend(false, {}, $.fn.sMask.defaults, userOptions);

            self.init();
        }

        sMask.prototype = {
            init: function () {
                this.useInput = this.options.useInput;
                this.mask = this.options.mask;
                this.translation = this.options.translation;
                this.events();
            },
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    if (dSel && navigator.userAgent.indexOf('MSIE 10') === -1) {
                        // IE
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    else if (cSelStart || cSelStart === '0') {
                        // Firefox
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) { }
            },
            setCaret: function (pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        if (ctrl.setSelectionRange) {
                            // Firefox, WebKit and etc.
                            ctrl.setSelectionRange(pos, pos);
                        }
                        else {
                            // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) { }
            },
            events: function () {
                var p = this,
                    el = this.el,
                    options = this.options;

                el
                    .on('keydown.mask', function (e) {
                        el.data('mask-keycode', e.keyCode || e.which);
                        el.data('mask-previus-value', el.val());
                        el.data('mask-previus-caret-pos', p.getCaret());
                        p.maskDigitPosMapOld = p.maskDigitPosMap;
                    })
                    .on(this.options.useInput ? 'input.mask' : 'keyup.mask', function (e) {
                        e = e || window.event;
                        p.invalid = [];

                        var keyCode = el.data('mask-keycode');

                        if ($.inArray(keyCode, p.options.byPassKeys) === -1) {
                            var newVal = p.getMasked(),
                                caretPos = p.getCaret();

                            // this is a compensation to devices/browsers that don't compensate
                            // caret positioning the right way
                            setTimeout(function () {
                                p.setCaret(p.calculateCaretPosition());
                            }, p.keyStrokeCompensation);

                            p.val(newVal);
                            p.setCaret(caretPos);
                            return p.callbacks(e);
                        }
                    })
                    .on('paste.mask drop.mask', function () {
                        setTimeout(function () {
                            el.trigger('keydown').trigger('keyup');
                        }, 100);
                    })
                    .on('change.mask', function () {
                        el.data('changed', true);
                    })
                    .on('blur.mask', function () {
                        if (p.oldValue !== p.val() && !el.data('changed')) {
                            el.trigger('change');
                        }
                        el.data('changed', false);
                    })
                    // it's very important that this callback remains in this position
                    // otherwhise oldValue it's going to work buggy
                    .on('blur.mask', function () {
                        p.oldValue = p.val();
                    })
                    // select all text on focus
                    .on('focus.mask', function (e) {
                        p.oldValue = p.val();
                        if (options.selectOnFocus === true) {
                            $(e.target).trigger('select');
                        }
                    })
                    // clear the value if it not complete the mask
                    .on('focusout.mask', function () {
                        if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                            p.val('');
                        }
                    });
            },
            getRegexMask: function () {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < this.mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = { digit: mask.charAt(i), pattern: pattern };
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                        .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function () {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function (v) {
                var el = this.el,
                    isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function () {
                var el = this.el,
                    p = this,
                    oldVal = el.data('mask-previus-value') || '',
                    newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                        caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew]) {
                            var caretPos = caretPosNew;
                            caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                            caretPosNew -= maskDigitsBeforeCaret;
                            if (p.maskDigitPosMap[caretPosNew]) {
                                caretPosNew = caretPos;
                            }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            getMasked: function (skipMaskChars, val) {
                var p = this,
                    mask = this.mask,
                    buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = this.mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                value = toEnglishNumber(value);

                if (this.options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = this.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                            if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                            p.invalid.push({ p: v, v: valDigit, e: translation.pattern });
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !this.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function (newVal, maskDigitPosArr, valLen) {
                var maskDiff = this.options.reverse ? newVal.length - valLen : 0;
                this.maskDigitPosMap = {};
                for (var i = 0; i < maskDigitPosArr.length; i++) {
                    this.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
                }
            },
            callbacks: function (e) {
                var val = this.val(),
                    self = this,
                    changed = val !== this.oldValue,
                    defaultArgs = [val, e, this.el, this.options],
                    callback = function (name, criteria, args) {
                        if (typeof self.options[name] === 'function' && criteria) {
                            self.options[name].apply(self, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === this.mask.length, defaultArgs);
                callback('onInvalid', self.invalid.length > 0, [val, e, self.el, self.invalid, self.options]);
            }
        };
        return sMask;
    })();


    //////////////// sHelp  ///////////////////

    $.fn.sHelp = function (options) {
        if (this.length === 0)
            return null;

        if (options == null) {
            var name = "";
        } else {
            name = options.name || "";
        }

        var pluginName = 'sHelp' + name;

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sHelp(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;

    };

    $.fn.sHelp.defaults = {
        open: false,
        content: null,
        showicon: true,
        preload: true,
        cache: true,
        mode: "help",
        showoptions: {},
        position: {},
        onClick: function () { return true; }
    };

    var sHelp = (function () {
        function sHelp(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sHelp.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sHelp.prototype = {
            init: function (isupdate) {
                var self = this,
                    $el = $(self.el),
                    settings = this.options,
                    _content;

                $el.addClass('shelp-holder');

                if (settings.preload) {
                    if (typeof settings.content === "function")
                        _content = settings.content.call(this, $el);
                    else
                        _content = settings.content;

                    if (_content)
                        $el.data("shelpcontent", _content);
                    else
                        $el.data("shelpcontent", $el.find(".shelp-content").eq(0).html());
                }

                if (settings.mode === "tooltip") {
                    if (settings.preload) {
                        $el.data("shelpcontent", _content || $el.attr("title"));
                        $el.removeAttr("title");
                    }

                    $el.on('mouseover', function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        clearTimeout(self.timeout);
                        var $item = $(this);

                        self.timeout = setTimeout(function () {
                            if ($item.is(':hover'))
                                self.show($item, true);
                        }, 300);
                    }).on("mouseleave", function () {
                        if (self.stip && !self.stip.tip.is(":hover"))
                            self.stip.close();
                    });
                } else if (settings.showicon) {

                    if (isupdate && $el.find(".shelp-icon").length)
                        return this;

                    $('<span class="shelp-icon">' + slang.questionmark + '</span>').appendTo($el).on('click', function (event) {
                        if (settings.onClick && settings.onClick() === false)
                            return;

                        clearTimeout(self.timeout);
                        event.preventDefault();
                        event.stopPropagation();

                        self.show($(this));

                    }).on('mouseover', function (event) {
                        if (settings.mode === "none") {
                            return;
                        }

                        event.preventDefault();
                        event.stopPropagation();

                        clearTimeout(self.timeout);
                        var $helpbtn = $(this);
                        self.timeout = setTimeout(function () {
                            if ($helpbtn.is(':hover'))
                                self.show($helpbtn, true);
                        }, 1e3);
                    });
                }
                return this;
            }, update: function (userOptions) {
                this.options = $.extend({}, this.options, userOptions);
                this.init(true);
                return this;
            }, show: function ($element, forceshow) {
                var _content,
                    settings = this.options;

                $element = $element || $(this.el);
                if (forceshow == null)
                    forceshow = false;

                if ($element.is(":visible")) {

                    if (!settings.preload && (!settings.cache || this.el.data("shelpcontent") == undefined)) {
                        if (typeof settings.content === "function")
                            _content = settings.content.call(this, this.el);
                        else
                            _content = settings.content;

                        if (_content)
                            this.el.data("shelpcontent", _content);
                        else
                            this.el.data("shelpcontent", this.el.find(".shelp-content").eq(0).html());
                    } else {
                        _content = $element.closest(".shelp-holder").data("shelpcontent");
                    }

                    if (typeof _content === "object")
                        _content = _content.clone().data("originalelement", _content);

                    if (settings.mode === "dialog") {
                        $.sDialog("#HelpDialog" + this.uid, $.extend({}, {
                            dialogclass: "shelp-dialogholder"
                        }, this.options.showoptions)).html(_content).open();

                    } else if (settings.mode !== "none") {

                        this.stip = $element.sTip($.extend({}, {
                            content: _content,
                            width: "auto",
                            group: 'shelpTip',
                            closegroup: false,
                            position: settings.position,
                            classholder: "shelp-contentholder"
                        }, this.options.showoptions));

                        if (forceshow)
                            this.stip.open();
                        else
                            this.stip.toggle();


                        if (settings.mode === "tooltip") {
                            var self = this;
                            this.stip.tip.on("mouseleave", function () {
                                if (!self.el.is(":hover"))
                                    self.stip.close();
                            });
                        }
                    }
                }
                return this;
            }
        };
        return sHelp;
    })();

    //////////////// sFloat  ///////////////////

    $.fn.sFloat = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sFloat';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sFloat(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sFloat.defaults = {
        defaultseparator: ".",
        decimalseparator: ".",
        convertoninit: true,
        convertonsubmit: true
    };

    var sFloat = (function () {
        function sFloat(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sFloat.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sFloat.prototype = {
            init: function () {
                var $input = this.el,
                    settings = this.options;

                //change type to text for firefox bug
                $input.attr("data-val-snumber", true)
                    .removeAttr("data-val-number").attr("type", "text");
                if (settings.convertoninit) {
                    $input.val(($input.attr("value") || "").replace(settings.decimalseparator, settings.defaultseparator));
                }

                if (settings.convertonsubmit) {
                    $input.closest("form").on("submit.sfloat" + this.uid, function () {
                        $input.attr("type", "text").val($input.val().replace(settings.defaultseparator, settings.decimalseparator));
                    });

                    $input.closest("form").on("proxysubmit.sfloat" + this.uid, function () {
                        $input.attr("type", "text").val($input.val().replace(settings.defaultseparator, settings.decimalseparator));
                    });
                }

            }, update: function (userOptions) {
                this.options = $.extend({}, this.options, userOptions);
                var self = this,
                    $form = this.el.closest("form");

                $form.off("submit.sfloat" + this.uid);
                $form.off("proxysubmit.sfloat" + this.uid);

                if (self.options.convertonsubmit) {
                    $form.on("submit.sfloat" + this.uid, function () {
                        self.el.attr("type", "text").val(self.el.val().replace(self.options.defaultseparator, self.options.decimalseparator));
                    });

                    $form.on("proxysubmit.sfloat" + this.uid, function () {
                        self.el.attr("type", "text").val(self.el.val().replace(self.options.defaultseparator, self.options.decimalseparator));
                    });
                }

                return this;
            }
        };
        return sFloat;
    })();


    /************** sGrid******************/
    var shiftpressed = false,
        ctrlpressed = false;

    $(document).on("keydown", function (event) {
        switch (event.keyCode || event.which) {
            case 16:
                shiftpressed = true;
                break;
            case 17:
                ctrlpressed = true;
                break;
        }
        return;
    }).on("keyup", function (event) {
        switch (event.keyCode || event.which) {
            case 16:
                shiftpressed = false;
                break;
            case 17:
                ctrlpressed = false;
                break;
        }
        return;
    });


    $(window).on('focusout', function () {
        shiftpressed = false;
        ctrlpressed = false;
    });

    $(window).on('blur', function () {
        shiftpressed = false;
        ctrlpressed = false;
    });

    $.fn.sGrid = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sGrid';

        var _objects = $.map(this, function (element, _index) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sGrid(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sGrid.defaults = {
        btngroups: ".edit,.delete$.edit-proxy,.delete-proxy$.detail-action$.print-action",
        commonbtngroups: ".delete",
        dblclickitem: ".edit-default,.edit",
        mode: "normal",
        mindockitem: 4,
        stickymode: false,
        groupbysplitter: true,
        boxdock: false,
        onShowActions: function () { }
    };

    var sGrid = (function () {
        function sGrid(element, userOptions) {

            //extend options
            this.el = $(element);
            this.context = element.context;
            this.options = $.extend({}, $.fn.sGrid.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.ids = [];

            if (this.options.mode === "normal" && $.mobile)
                this.options.boxdock = true;

            this.init();
        }

        sGrid.prototype = {
            init: function () {
                var self = this,
                    settings = this.options;

                this.el.find(".items-holder").addClass("sgrid");
                this.itemparent = this.el.find(".item-content,.item-not-found").eq(0).parent();
                if (settings.stickymode === true) {
                    if (this.el.closest(".item-details").length === 0 && !$.mobile) {
                        var $holder = this.el.scrollParent() || $(document),
                            _height;

                        if ($holder[0] === document) {
                            _height = $(window).height() - ($holder.height() - this.el.find(".items-holder").addClass("table-sticky").height());
                            if ($(".wrapper").height() + $(".footer").height() < $(window).height())
                                _height = 0;
                        }
                        else {
                            _height = $holder.height() - ($holder[0].scrollHeight - this.el.find(".items-holder").addClass("table-sticky").outerHeight(true));
                        }
                        if (_height > 200)
                            this.el.find(".table-holder").css("height", _height - 1);
                    }
                }

                this.defaultactions = $(".default-actions", this.el).eq(0).clone();

                if (settings.boxdock) {
                    //added ltr class for horizontal scroll bug in default android browser
                    //append to element for deleting box-dock in change tab
                    this.boxbuttons = $("<div class='sgrid-mbox-dock bottom'></div>").appendTo(this.el);
                } else {
                    if (settings.mode === "normal") {
                        this.boxbuttons = $(".box-button", this.el).eq(0);
                        if (!this.boxbuttons.parent().hasClass("actions-holder")) {
                            this.boxbuttons.wrap("<div class='actions-holder'></div>");
                            this.defaultactions = $("<div class='box-button default-actions'/>").clone();
                        }
                    } else {
                        this.boxbuttons = $("<div class='sgrid-box-dock'></div>").appendTo(this.el);
                    }

                    this.boxbuttonoffsettop = (this.boxbuttons.offset() || { "top": 0 }).top;

                    $(window).on("scroll", function () {
                        clearTimeout(self.scrolltimer);
                        self.scrolltimer = setTimeout(function () {

                            if (!self.boxbuttons.hasClass("show") || self.boxbuttons.hasClass("default-actions"))
                                return;

                            self.checkFixed();
                            //300 for sync with nav-fixed
                        }, 300);
                    });
                }

                var $selectall = this.el.find(".select-all");
                if ($selectall.length === 0) {
                    this.selectall = $('<input type="checkbox" id="SelectAllItems" value="" class="select-all"/>').on("click.sGrid", function (_event) {
                        if (self.holder.hasClass("slov-activated"))
                            return;

                        var $checkbox = $(this);
                        if ($checkbox.is(":checked")) {
                            if (self.options.mode === "dock" || settings.mode === "expanded") {
                                $("form").each(function () {
                                    var _sgrid = $(this).data("sGrid");
                                    if (_sgrid)
                                        _sgrid.clear(false, true);
                                });
                            }

                            $checkbox.prop("checked", true);

                            var _$items = self.itemparent.children().filter(".item-content");
                            _$items.filter(":not(.item-checked)").addClass("item-checked").find(".item-select").prop("checked", true);
                            self.commonbuttons(_$items);
                        } else {
                            self.clear(true);
                        }
                    }).appendTo(this.el.find(".select-all-holder").eq(0));
                }
                else {
                    this.selectall = $selectall.eq(0);
                }

                this.update();

                this.holder = this.el.find(".items-holder").eq(0)
                    .off("contentChange.sGrid").on("contentChange.sGrid", function (_event, data) {
                        var _$items = data.items.filter(".item-content");
                        //for contentChange from stabs
                        if (_$items.length === 0)
                            return;

                        //timeout for items with so many item options like factor
                        setTimeout(function () {
                            self.update(null, _$items);
                            if (self.ids.length) {
                                _$items = _$items.filter("#i_" + self.ids.join(",#i_"));
                                if (_$items.length) {
                                    _$items.addClass("item-checked").find(".item-select").prop("checked", true);
                                    self.commonbuttons(_$items);
                                } else {
                                    self.clear(true);
                                }
                            }

                            //for unselect item after selectall
                            var _$iselects = self.el.find("tr").eq(0).parent().children().filter(".item-content").find(".item-select");
                            if (_$iselects.filter(":checked").length === _$iselects.length)
                                self.selectall.prop("checked", true);
                            else
                                self.selectall.prop("checked", false);
                        }, 100);


                    }).off("contentDelete.sGrid").on("contentDelete.sGrid", function (_event, _data) {
                        self.clear(true);
                    });

            }, update: function (userOptions, $items) {
                $items = $items || this.el.find(".item-content");

                var self = this,
                    settings = this.options;

                if (userOptions) {
                    this.options = settings = $.extend({}, this.options, userOptions);
                }

                if (!settings.commonbtngroups) {
                    this.selectall.prop("disabled", true).hide();
                } else {
                    this.selectall.prop("disabled", false).show();
                }

                if ($items) {
                    $items.off("click.sGrid").on("click.sGrid", function (event) {
                        if ($(event.target).is(":input"))
                            return;

                        if (self.holder.hasClass("slov-activated")) {
                            return;
                        }
                        //for show animation
                        self.boxbuttons.removeClass("show");

                        //remove blue border in firefox
                        if (ctrlpressed || shiftpressed) {
                            if (document.selection)
                                document.selection.empty();
                            else if (window.getSelection)
                                window.getSelection().removeAllRanges();
                        }

                        var _$item = $(this);
                        if (shiftpressed && self.$lastitem) {
                            var _$items,
                                $lastitem = self.$lastitem;

                            self.clear();

                            if ($lastitem.index() > _$item.index()) {
                                _$items = $lastitem.prevUntil(_$item);
                            } else {
                                _$items = $lastitem.nextUntil(_$item);
                            }

                            _$items = _$items.not(".item-details").add($lastitem.add(_$item));

                            _$items.filter(":not(.item-checked)").addClass("item-checked").find(".item-select").prop("checked", true);
                            self.commonbuttons(_$items);

                            self.$lastitem = _$item;

                            return;
                        }

                        var ischecked = false;
                        if (_$item.hasClass("item-checked") && self.ids.length < 2) {
                            ischecked = true;
                        }

                        if (!ctrlpressed) {
                            //clear all select
                            self.clear();
                        } else if (ischecked) {
                            _$item.find(".item-select").trigger('click');
                        }

                        if (!ischecked) {
                            if (settings.mode === "expanded" && _$item.closest(".gdetail-holder").length === 0) {
                                _$item.addClass("item-checked").find(".item-select").prop("checked", true);

                                $.sAjaxGet({
                                    url: "/factors/detailsale?id=" + _$item.attr("id").replace("i_", ""),
                                    actions: [{
                                        customAction: function (data) {
                                            var _$data = $(data),
                                                _$stabs = _$data.find(".stabs"),
                                                _$actions = _$item.find(".sdetails-menu").children();

                                            for (var i = 0; i < _$actions.length; i++) {
                                                var _$action = _$actions.eq(i);
                                                if (_$action.find(".detail-action").length) {
                                                    var _$link = _$action.find("a");
                                                    _$stabs.append($("<li></li>").addClass("item").attr("data-stabs-content", "url:" + _$link.attr("href")).text(_$link.text()));
                                                } else {
                                                    _$data.find(".custom-actions").append(_$action.children().clone(true, true).data("originalelement", _$action.children()).addClass("btn"));
                                                }
                                            }

                                            _$stabs.sTabs({
                                                contentselectors: _$data.find(".stabs-content")
                                            });

                                            _$stabs.children().eq(0).trigger('click');

                                            $("<button type='button' class='btn icon-black close sgrid-close-dock'>" + slang["close"] + "</button> ").data("sgrid-items", _$item).on("click.sGrid", function (_event) {
                                                self.clear($(this).data("sgrid-items"));
                                            }).prependTo(_$data);

                                            $(".gdetail-holder").empty().append(_$data);

                                            settings.onShowActions.call(self, self.boxbuttons);
                                        }
                                    }]
                                });

                            }
                            else {
                                _$item.find(".item-select").trigger('click');
                            }
                        } else if (!settings.boxdock && self.defaultactions && self.defaultactions.length) {
                            if (settings.mode === "normal") {
                                var _$defaultactions = self.defaultactions.clone();
                                self.boxbuttons.replaceWith(_$defaultactions);
                                self.boxbuttons = _$defaultactions;
                            }

                            settings.onShowActions.call(self, self.boxbuttons);
                        }
                    }).off("dblclick.sGrid").on("dblclick.sGrid", function (event) {
                        if ($(event.target).is(":input"))
                            return;

                        var _$item = $(this);

                        if (!_$item.hasClass("item-checked")) {
                            _$item.trigger('click');
                        }

                        _$item.one("click.sgrid", function (event) {
                            event.stopPropagation();
                        });

                        if (!_$item.closest(".sgrid").data("sListOfValue"))
                            _$item.find(settings.dblclickitem).eq(0).trigger('click');
                    }).find(".item-select")
                        .off("click.sGrid").on("click.sGrid", function (event) {

                            if (self.holder.hasClass("slov-activated")) {
                                return;
                            }

                            event.stopPropagation();

                            //for unselect item after selectall
                            var _$iselects = self.el.find("tr").eq(0).parent().children().filter(".item-content").find(".item-select");
                            if (_$iselects.filter(":checked").length === _$iselects.length)
                                self.selectall.prop("checked", true);
                            else
                                self.selectall.prop("checked", false);

                            if (!settings.commonbtngroups) {
                                self.clear(true);
                            }

                            self.$lastitem = $(this).closest(".item-content");
                            var _$items = self.$lastitem.toggleClass("item-checked").parent().children().filter(".item-checked");
                            self.commonbuttons(_$items);
                        })
                        .filter(function () {
                            return $(this).parents().hasClass('sdialog') === false;
                        }).prop("checked", false) //for firefox cache;;
                }

                return this;
            },
            checkFixed: function () {
                if (this.boxbuttons.closest(".sdialog").length || this.boxbuttons.scrollParent().get(0) !== document)
                    return this;


                if (!this.boxbuttons.hasClass("fixed"))
                    this.boxbuttonoffsettop = this.boxbuttons.offset().top;

                var _$fixedboxbuttons = $(".box-button.fixed"),
                    _fixedboxheight = 0;

                if (_$fixedboxbuttons.length > 1 || _$fixedboxbuttons.last().get(0) != this.boxbuttons.get(0))
                    _fixedboxheight = _$fixedboxbuttons.last().height();

                var fixednavtop = $(".nav-fixed").eq(0).outerHeight() || 0;
                //calculate offset top for multi detail
                if (this.boxbuttonoffsettop < $(window).scrollTop() + fixednavtop + _fixedboxheight) {
                    if (this.boxbuttons.hasClass("fixed"))
                        return;
                    this.boxbuttons.addClass("fixed").css("top", fixednavtop + "px");
                }
                else
                    this.boxbuttons.removeClass("fixed").css("top", "");
            },
            commonbuttons: function ($groups) {
                var len = $groups.length,
                    self = this,
                    settings = self.options,
                    gpselectors = "";

                var _$newboxbuttons = this.boxbuttons.clone().removeClass("default-actions").empty();

                if (len === 1) {
                    var $cell = $groups.eq(0).find(".item-value").eq(0);

                    if ($cell.length === 0)
                        $cell = $groups.eq(0).find(".details+td");

                    $("<div class='detail-title'><div class='text-sm'>" + $groups.eq(0).closest("form").find(".title").eq(0).text().replace("?", "").replace("؟", "") + "</div>" + (($cell.attr("data-title") || "") + " " + ($cell.html() || "")).trim() + "</div>").on("click", function () {
                        var _$item = $groups.eq(0).closest(".item-content");
                        $("html").animate({ "scrollTop": _$item.offset().top - 100 }, 'normal', function () {
                            if ($.fn.sColorify)
                                _$item.sColorify("#fffbd7", true);
                        });
                    }).appendTo(_$newboxbuttons);
                }

                if (len > 1) {
                    gpselectors = settings.commonbtngroups.split("$");

                } else {
                    gpselectors = settings.btngroups.split("$");
                }

                if (gpselectors.length === 0) {
                    gpselectors = [gpselectors];
                }

                this.ids = [];
                for (var i = 0; i < len; i++) {
                    //reverse for sum function like confirm document in acc
                    this.ids[len - i - 1] = ($groups.eq(i).attr("id") || "").replace("i_", "");
                }

                var gplen = gpselectors.length;

                if (settings.groupbysplitter) {
                    var $splitter = $groups.eq(0).find(".menu-items:first>.splitter"),
                        _$groups = [];
                    _$groups[0] = $($splitter.eq(0).prevAll(".item").get().reverse());

                    for (var i = 0; i < $splitter.length; i++) {
                        _$groups[i + 1] = $splitter.eq(i).nextUntil(".splitter");
                    }

                    if (_$groups[0].length === 0) {
                        _$groups = $groups.eq(0);
                    }

                } else {
                    _$groups = $groups.eq(0);
                }

                var $btns;
                for (var j = 0; j < _$groups.length; j++) {
                    var $item = $(_$groups[j]);
                    for (var i = 0; i < gplen; i++) {
                        var _$btngroup = $("<div class='sdetails-menu'></div>").appendTo(_$newboxbuttons);

                        if (settings.boxdock || settings.mode === "normal") {
                            _$btngroup.addClass("btn-group");
                        }

                        $btns = $item.find(gpselectors[i]).add($item.filter(gpselectors[i]));
                        $.each($btns, function (index) {
                            var _$item = $btns.eq(index);

                            //not show again item in groups 
                            if (_$item.parent().closest(gpselectors.join(",")).length) {
                                return;
                            }

                            _$item = _$item.clone(true, true).data("originalelement", $groups);

                            if (_$item.is(".item")) {
                                var $subitems = _$item.find(">.menu-items>.item");

                                if (self.ids.length === 1) {
                                    if ($subitems.length === $subitems.filter(".hidden").length)
                                        return;
                                } else {
                                    $subitems.removeClass("hidden");
                                }
                            }

                            if (len > 1) {

                                var _actiontype = _$item.attr("data-action-type");
                                if (_actiontype && $groups.find("[data-action-type='" + _actiontype + "']").length !== $groups.length) {
                                    _$item.remove();
                                    return;
                                }

                                //remove class hidden for change state in documents accounting
                                var url = _$item.removeClass("hidden").attr("href");
                                if (url) {
                                    url = url.indexOf("?") !== -1 ? url + "&" : url + "?";
                                    _$item.attr("href", url + "ids=" + self.ids.join(","));
                                } else {
                                    var _$link = _$item.find("a");

                                    $.each(_$link, function (_index) {
                                        var __$item = _$link.eq(_index);

                                        _actiontype = __$item.attr("data-action-type");
                                        if (_actiontype && $groups.find("[data-action-type='" + _actiontype + "']").length !== $groups.length) {
                                            __$item.remove();
                                            return;
                                        }

                                        var url = __$item.attr("href");
                                        __$item.attr("href", (url.indexOf("?") !== -1 ? url + "&" : url + "?") + "ids=" + self.ids.join(","));
                                    });
                                }
                            }

                            _$item.addClass("btn default").appendTo(_$btngroup);

                            if (_$item.find(".menu-items").length) {
                                _$item.parent().sMenu();
                            }

                            if (_$item.hasClass("detail-action")) {
                                _$item.removeClass("icon-black");
                            }
                        });

                        if ($btns.length === 0) {
                            _$btngroup.remove();
                        }
                    }

                }
                $btns = _$newboxbuttons.find(".btn");

                //show on top last dock show
                $(".body").find(".sgrid-mbox-dock,.sgrid-box-dock").css("z-index", "1");

                if (settings.boxdock) {

                    $("<button type='button' class='btn-mini icon-black close sgrid-close-dock'>X</button>").data("sgrid-items", $groups).on("click.sGrid", function (_event) {
                        self.clear($(this).data("sgrid-items"));
                    }).wrap("<div class='btn-group'></div>").parent().prependTo(_$newboxbuttons);

                    _$newboxbuttons.children().wrapAll("<div class='inline-dock'></div>").parent();
                } else {
                    $("<button type='button' class='btn icon-black close sgrid-close-dock'>" + slang["close"] + "</button> ").data("sgrid-items", $groups).on("click.sGrid", function (_event) {
                        self.clear($(this).data("sgrid-items"));
                    }).prependTo(_$newboxbuttons);
                }

                if ($btns.length) {
                    this.boxbuttons.replaceWith(_$newboxbuttons.css("z-index", "2"));
                    this.boxbuttons = _$newboxbuttons;
                    self.checkFixed();

                    if (settings.mode === "dock")
                        this.boxbuttons.find("a").on("click", function () {
                            if ($(this).is(".detail-action"))
                                self.clear();
                        });

                    //added late for animation
                    this.boxbuttons.addClass("active show");
                } else {
                    if (settings.mode === "normal") {
                        var _$defaulactions = this.defaultactions.clone();
                        this.boxbuttons.replaceWith(_$defaulactions);
                        this.boxbuttons = _$defaulactions;
                    } else {
                        this.boxbuttons.removeClass("show").empty();
                    }
                }

                settings.onShowActions.call(this, this.boxbuttons);
            },
            clear: function (showdefaultactions, ischildaction) {
                this.ids = [];
                this.selectall.prop("checked", false);
                this.itemparent.children().filter(".item-checked").removeClass("item-checked").find(".item-select").prop("checked", false);

                if ((this.options.mode === "dock" || this.options.mode === "expanded") && ischildaction !== true) {
                    $("form").each(function () {
                        var _sgrid = $(this).data("sGrid");
                        if (_sgrid)
                            _sgrid.clear(false, true);
                    });
                }

                if (showdefaultactions && this.defaultactions && this.defaultactions.length && this.options.boxdock !== true) {
                    if (this.options.mode === "normal") {
                        var _$defaulactions = this.defaultactions.clone();
                        this.boxbuttons.replaceWith(_$defaulactions);
                        this.boxbuttons = _$defaulactions;
                    } else if (this.boxbuttons.hasClass("show")) {
                        this.boxbuttons.removeClass("show").empty();
                    }
                } else if (this.boxbuttons.hasClass("show"))
                    this.boxbuttons.removeClass("show").empty();
            }
        };
        return sGrid;
    })();

    /////////////// sTimer ///////////

    $.fn.sTimer = function (options) {

        var element = this,
            pluginName = 'sTimer';

        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sTimer(element, options);
            $(element).data(pluginName, instance);
        } else if (options) {
            instance = instance.update(options);
        }
        return instance;
    };

    $.fn.sTimer.defaults = {
        start: "0:00:00:00:000",
        theme: "default",
        zerohide: true,
        title: null,
        donecontent: null,
        onDispose: function () { },
        onStart: function () { },
        onUpdate: function () { },
        onDone: function () { },
        onError: function () { }
    };

    var sTimer = (function () {
        function sTimer(element, userOptions) {

            //extend options
            this.el = $(element);
            this.options = $.extend({}, $.fn.sTimer.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sTimer.prototype = {
            init: function () {
                this.el.addClass("stimer " + this.options.theme);

                var sections = this.options.start.split(":"),
                    lastindex = sections.length - 1;

                this.interval = 1000; // ms

                this._time = new Date();
                this._time.setMilliseconds(this._time.getSeconds() + parseInt(sections[lastindex] || 0));
                this._time.setSeconds(this._time.getSeconds() + parseInt(sections[lastindex - 1] || 0));
                this._time.setMinutes(this._time.getMinutes() + parseInt(sections[lastindex - 2] || 0));
                this._time.setHours(this._time.getHours() + parseInt(sections[lastindex - 3] || 0));
                this._time.setHours(this._time.getHours() + parseInt(sections[lastindex - 4] || 0) * 24);

                this._time = this._time - new Date();

                this.options.onStart.call(this);

                if (this.timeout === "disposed")
                    return this;

                this._print();

                this.expected = Date.now() + this.interval;

                var self = this;
                this.timeout = setTimeout(function () {
                    self.step(self);
                }, this.interval);

            },
            update: function (useroptions) {
                var _oldtime = this._time;

                this.options = $.extend({}, this.options, useroptions);
                this.el.addClass("stimer " + this.options.theme);
                this.options.onUpdate.call(this);

                if (useroptions.start) {
                    var sections = this.options.start.split(":"),
                        lastindex = sections.length - 1;

                    this._time = new Date();
                    this._time.setMilliseconds(this._time.getSeconds() + parseInt(sections[lastindex] || 0));
                    this._time.setSeconds(this._time.getSeconds() + parseInt(sections[lastindex - 1] || 0));
                    this._time.setMinutes(this._time.getMinutes() + parseInt(sections[lastindex - 2] || 0));
                    this._time.setHours(this._time.getHours() + parseInt(sections[lastindex - 3] || 0));
                    this._time.setHours(this._time.getHours() + parseInt(sections[lastindex - 4] || 0) * 24);

                    this._time = this._time - new Date();
                }

                if (_oldtime !== this._time) {
                    var interval = this.interval;
                    if (this._time < interval)
                        interval = this._time;

                    this._print();

                    this.expected = Date.now() + interval;

                    var self = this;
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(function () {
                        self.step(self);
                    }, Math.max(0, interval));
                }
                return this;
            },
            step: function (self) {
                var interval = self.interval;
                if (self._time < interval)
                    interval = self._time;

                var dt = Date.now() - self.expected; // the drift (positive for overshooting)
                if (dt > interval) {
                    // something really bad happened. Maybe the browser (tab) was inactive?
                    // possibly special handling to avoid futile "catch up" run
                    self.options.onError.call(self);
                }

                self._time -= interval;
                self.expected += interval;

                var haswarning = this.el.hasClass("end-warning");
                if (self._time < 10000) {
                    if (!haswarning)
                        this.el.addClass("end-warning");
                }
                else if (haswarning)
                    this.el.removeClass("end-warning");

                if (self._time <= 0) {
                    self.timeout = null;
                    self.done();
                    return;
                }

                if ($(self.el).closest("body").length === 0) {
                    self.timeout = null;
                    return;
                }

                self._print();
                self.timeout = setTimeout(function () {
                    self.step(self);
                }, Math.max(0, interval - dt)); // drifttake into account
            },
            _print: function () {
                var html = "",
                    days = Math.floor(this._time / (1000 * 60 * 60 * 24)),
                    hours = Math.floor((this._time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((this._time % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((this._time % (1000 * 60)) / 1000);


                if (this.options.title) {
                    html += "<div class='timer-title'>" + this.options.title + "</div>";
                }

                if (this.options.zerohide && days !== 0) {
                    html += "<div class='item'><div class='number'>" + days + "</div><div class='legend'>" + slang["days"] + "</div></div>";
                }
                if (this.options.zerohide && (hours !== 0 || days !== 0)) {
                    html += "<div class='item'><div class='number'>" + (hours < 10 ? "0" + hours : hours) + "</div><div class='legend'>" + slang["hours"] + "</div></div>";
                }
                if (this.options.zerohide && (minutes !== 0 || hours !== 0 || days !== 0)) {
                    html += "<div class='item'><div class='number'>" + (minutes < 10 ? "0" + minutes : minutes) + "</div><div class='legend'>" + slang["minutes"] + "</div></div>";
                }

                html += "<div class='item'><div class='number'>" + (seconds < 10 ? "0" + seconds : seconds) + "</div><div class='legend'>" + slang["seconds"] + "</div></div>";

                this.el.html(html);
            },
            done: function () {
                this.options.onDone.call(this, this.el);

                if (this.options.donecontent) {
                    this.el.html(this.options.donecontent);
                }
            },
            dispose: function () {
                if (this.timeout)
                    clearTimeout(this.timeout);

                this.options.onDispose.call(this);

                this.timeout = "disposed";

                this.el.removeClass("stimer " + this.options.theme);
                this.el.empty();
            }
        };

        return sTimer;
    })();

    /////////////// sDynamicEditors ///////////

    $.fn.sDynamicEditors = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sDynamicEditors';
        var instance = this.data(pluginName);

        if (!instance) {
            instance = new sDynamicEditors(this, options);
            this.data(pluginName, instance);
        } else if (options) {
            //for cloned element that el point to pervious el
            instance.el = this;
            instance = instance.update(options);
        } else {
            //for cloned element that el point to pervious el
            instance.el = this;
        }
        return instance;
    };

    $.fn.sDynamicEditors.defaults = {
        trigger: null,
        url: null,
        setmode: "confirm",
        message: slang.resetvaluesconfirm,
        uid: null,
        onDone: function () { }
    };

    var sDynamicEditors = (function () {
        function sDynamicEditors(element, userOptions) {

            //extend options
            this.el = element;
            this.options = $.extend({}, $.fn.sDynamicEditors.defaults, userOptions);
            this.init();
        }

        sDynamicEditors.prototype = {
            init: function () {
                var self = this;
                $(self.options.allTriggers || self.options.trigger).off("change.sDynamicEditors").on("change.sDynamicEditors", function (event) {
                    var sender = event.target;
                    var _$trigger = $(self.options.trigger);
                    if (_$trigger.val()) {
                        var params = {};
                        if (typeof self.options.params == "function") {
                            params = self.options.params.call(self, _$trigger);
                        } else {
                            params = self.options.params;
                        }

                        params = $.extend({ "ID": _$trigger.val(), "uid": self.options.uid }, params);
                        $.sAjaxGet({
                            type: "POST",
                            url: self.options.url,
                            params: params,
                            actions: [{
                                onDone: function (data) {
                                    var $holder = $(self.el),
                                        $data = $(data),
                                        _serializevalues = serializeArray($holder.find(":input")),
                                        _oldvalues = [];

                                    for (var i = 0, _len = _serializevalues.length; i < _len; i++) {
                                        var _val = _serializevalues[i];
                                        _oldvalues[_val["name"]] = _val["value"];
                                    }

                                    var setmode;
                                    if (typeof self.options.setmode == "function") {
                                        setmode = self.options.setmode.call(self, sender);
                                    } else {
                                        setmode = self.options.setmode;
                                    }

                                    if (setmode == "confirm" && _serializevalues.length > 0) {
                                        $.sAlert("#DynamicEditorsConfirm").confirm({
                                            content: self.options.message,
                                            onDone: function (_$btn, command) {
                                                if (command.Action == 0)
                                                    $data.find(":input:not([type=button])").setDisplayValues(_oldvalues);

                                                $holder.empty().append($data);
                                                self.options.onDone.call(self, $data);

                                                var $form = $holder.closest("form");
                                                if ($.validator) {
                                                    if (typeof $form.data("validator") != "undefined") {
                                                        $form.removeData("validator")
                                                            .removeData("unobtrusiveValidation")
                                                            .off("submit.validate click.validate focusin.validate focusout.validate keyup.validate invalid-form.validate");
                                                    }
                                                    $.validator.unobtrusive.parse($form[0]);
                                                }
                                            }
                                        });
                                    } else {
                                        switch (setmode) {
                                            case "ifnull":
                                                $data.find(":input:not([type=button])").setDisplayValues(_oldvalues, true);
                                                break;
                                            case "always":
                                                $data.find(":input:not([type=button])").setDisplayValues(_oldvalues);
                                                break;
                                        }
                                        $holder.empty().append($data);
                                        self.options.onDone.call(self, $data);

                                        var $form = $holder.closest("form");
                                        if ($.validator) {
                                            if (typeof $form.data("validator") != "undefined") {
                                                $form.removeData("validator")
                                                    .removeData("unobtrusiveValidation")
                                                    .off("submit.validate click.validate focusin.validate focusout.validate keyup.validate invalid-form.validate");
                                            }
                                            $.validator.unobtrusive.parse($form[0]);
                                        }
                                    }
                                }
                            }]
                        });
                    }
                });

            }, update: function (useroptions) {
                this.options = $.extend({}, this.options, useroptions);
                this.init();
                return this;
            }
        };
        return sDynamicEditors;
    })();

    /***************** sDrag *********************/

    $.fn.sDrag = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sDrag';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sDrag(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };


    $.fn.sDrag.defaults = {
        handle: null,
        direction: "all",
        children: ".item-content",
        mode: "original",
        dropzones: null,
        dropappend: true,
        revertposition: true,
        exceptionlist: ["button", "input[type=button]", "a"],
        scroll: true,
        scrollsensitivity: 20,
        scrollspeed: 15,
        onBeforeDrag: function () { },
        onStartDrag: function () { },
        onBeforeDrop: function () { },
        onAfterDrop: function () { },
        onDragging: function () { },
        onAfterDrag: function () { }
    };

    var sDrag = (function () {
        function sDrag(element, userOptions) {
            this.el = $(element);
            this.options = $.extend(false, {}, $.fn.sDrag.defaults, userOptions);
            this.update(this.options);
        }

        sDrag.prototype = {
            attachEvent: function ($elements) {
                var settings = this.options;
                $elements = $elements || $(this.el);

                if (settings.children)
                    if ($elements.eq(0).is(settings.children))
                        $elements = $elements.filter(settings.children);
                    else
                        $elements = $elements.find(settings.children);

                if (settings.handle)
                    $elements = $elements.find(settings.handle);

                var element = this.el[0];
                this.document = $(element.style ?
                    // Element within the document
                    element.ownerDocument :
                    // Element is window or document
                    element.document || element);

                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);

                var self = this;
                //add dragable class for showing move cursor 
                $elements.addClass("draggable").on("mousedown.sdrag touchstart.sdrag", function (event) {
                    if (!settings.exceptionlist || settings.exceptionlist.indexOf(this.tagName.toLowerCase()) === -1 && settings.exceptionlist.indexOf(event.target.tagName.toLowerCase()) === -1)
                        return self._mouseDown(event, this);
                });
            },
            update: function (useroptions) {
                if (useroptions) {
                    this.options = $.extend(false, {}, this.options, useroptions);
                    var $element = $(this.el);

                    this.attachEvent($element);

                    var self = this;
                    $element.closest(".items-holder").off("contentChange.sdrag").on("contentChange.sdrag", function (_event, data) {
                        self.attachEvent(data.items);
                    });
                }
                return this;
            },
            _cacheMargins: function ($element) {
                this.margins = {
                    left: (parseInt($element.css("marginLeft"), 10) || 0),
                    top: (parseInt($element.css("marginTop"), 10) || 0),
                    right: (parseInt($element.css("marginRight"), 10) || 0),
                    bottom: (parseInt($element.css("marginBottom"), 10) || 0)
                };
            },
            _generatePosition: function (event) {
                var scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

                // Cache the scroll
                if (!scrollIsRootNode || !this.offset.scroll) {
                    this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    };
                }

                return {
                    top: (

                        // The absolute mouse position
                        event.pageY -

                        // Click offset (relative to the element)
                        this.offset.click.top -

                        // Only for relative positioned nodes: Relative offset from element to offset parent
                        this.offset.relative.top -

                        // The offsetParent's offset without borders (offset + border)
                        this.offset.parent.top +
                        (this.cssPosition === "fixed" ?
                            -this.offset.scroll.top :
                            (scrollIsRootNode ? 0 : this.offset.scroll.top))
                    ),
                    left: (

                        // The absolute mouse position
                        event.pageX -

                        // Click offset (relative to the element)
                        this.offset.click.left -

                        // Only for relative positioned nodes: Relative offset from element to offset parent
                        this.offset.relative.left -

                        // The offsetParent's offset without borders (offset + border)
                        this.offset.parent.left +
                        (this.cssPosition === "fixed" ?
                            -this.offset.scroll.left :
                            (scrollIsRootNode ? 0 : this.offset.scroll.left))
                    )
                };

            },
            _refreshOffsets: function (event) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: false,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                };

                this.offset.click = {
                    left: this.startdragpoint.left - this.offset.left,
                    top: this.startdragpoint.top - this.offset.top
                };
            },
            _getParentOffset: function () {

                //Get the offsetParent and cache its position
                var po = this.offsetParent.offset();

                // This is a special case where we need to modify a offset calculated on start, since the
                // following happened:
                // 1. The position of the helper is absolute, so it's position is calculated based on the
                // next positioned parent
                // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
                // the document, which means that the scroll is included in the initial calculation of the
                // offset of the parent, and never recalculated upon drag
                if (this.cssPosition === "absolute" && this.scrollParent[0] !== document &&
                    $.contains(this.scrollParent[0], this.offsetParent[0])) {
                    po.left += this.scrollParent.scrollLeft();
                    po.top += this.scrollParent.scrollTop();
                }

                if (this._isRootNode(this.offsetParent[0])) {
                    po = { top: 0, left: 0 };
                }

                return {
                    top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                };

            },
            _getRelativeOffset: function () {
                if (this.cssPosition !== "relative") {
                    return { top: 0, left: 0 };
                }

                var p = this.element.position(),
                    scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

                return {
                    top: p.top - (parseInt(this.dragging.css("top"), 10) || 0) +
                        (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                    left: p.left - (parseInt(this.dragging.css("left"), 10) || 0) +
                        (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
                };

            },
            _isRootNode: function (element) {
                return (/(html|body)/i).test(element.tagName) || element === this.document[0];
            },
            _createDragging: function () {

                if (this.options.handle) {
                    //check children for plugin like dialog and ...
                    if (this.options.children)
                        this.element = this.element.closest(this.options.children);
                    else
                        this.element = $(this.el);
                }

                if (this.options.mode === "clone") {
                    this.dragging = $(this.element[0].cloneNode(true)).removeAttr("id")

                    this.options.onStartDrag.call(this);
                    this.element[0].parentNode.insertBefore(this.dragging[0], this.element.addClass("dragging-source")[0]);

                    if (this.dragging.is("tr")) {
                        var _$orgcols = this.element.children(),
                            _$cols = this.dragging.children();

                        $.each(_$cols, function (index) {
                            //+1 for floor in outerWidth
                            _$cols.eq(index).outerWidth(_$orgcols.eq(index).outerWidth() + 1);
                        });
                    }
                } else {
                    this.dragging = this.element;

                    this.options.onStartDrag.call(this);

                    if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                        this.dragging[0].style.position = "relative";
                    }
                }

                if (this.dragging[0] !== this.element[0] &&
                    !(/(fixed|absolute)/).test(this.dragging.css("position"))) {
                    this.dragging.css("position", "absolute");
                }

                this.dragging.data("soriginal-style", this.dragging.attr("style") || "")
                    .attr("draggable", "false");

                this.dragging.css({
                    //+1 for floor in outerHeight
                    height: this.element.outerHeight() + 1,
                    //+1 for floor in outerWidth
                    width: this.element.outerWidth() + 1
                }).addClass("dragging");

                // Grab cursor from handle so we can place it on overlay
                if (window.getComputedStyle) {
                    this.cursor = window.getComputedStyle(this.dragging.get(0), null).getPropertyValue("cursor");
                } else {
                    this.cursor = this.dragging.get(0).runtimeStyle.cursor;
                }
            },
            _mouseMove: function (event) {
                event = supdateWithTouchData(event);

                var settings = this.options;

                if (this.clickhandled) {
                    //detect move or clicked
                    if (Math.abs(this.startdragpoint.top - event.pageY) < 3 && Math.abs(this.startdragpoint.left - event.pageX) < 3) {
                        return;
                    }

                    this.clickhandled.attr("draggable", "false");
                    this.clickhandled = false;

                    this._createDragging();

                    this._cacheMargins(this.element);
                    this.cssPosition = this.dragging.css("position");

                    settings.onBeforeDrag.call(this, this.dragging);

                    this.scrollParent = this.dragging.scrollParent(true);
                    this.offsetParent = this.dragging.offsetParent();

                    this.positionAbs = this.element.offset();
                    this._refreshOffsets(event);

                    this.isrootnode = this._isRootNode(this.scrollParent[0]);
                    if (!this.isrootnode) {
                        this.topbound = this.scrollParent.offset().top;
                        this.bottombound = this.scrollParent.height() + this.topbound;
                    }

                    this.eventOverlay = $('<div></div>').css({
                        position: "absolute",
                        top: 0, left: 0,
                        width: $(document.body).width(),
                        height: $(document.body).height(),
                        zIndex: 0x7FFFFFFF,
                        opacity: 0.0001,
                        cursor: this.cursor,
                        pointerEvents: "none",
                        touchAction: "none"
                    }).appendTo($(document.body).addClass("unselectable"));
                }

                var _dragging = this.dragging.get(0),
                    _lastposition = this.position;

                this.position = this._generatePosition(event);

                if (_lastposition === undefined)
                    _lastposition = this.position;

                var _ishorizonalmove;
                switch (settings.direction) {
                    case "v":
                        _dragging.style.top = this.position.top + "px";
                        _ishorizonalmove = false;
                        break;
                    case "h":
                        _dragging.style.left = this.position.left + "px";
                        _ishorizonalmove = true;
                        break;
                    default:
                        _dragging.style.top = this.position.top + "px";
                        _dragging.style.left = this.position.left + "px";

                        _ishorizonalmove = Math.abs(this.position.top - _lastposition.top) < Math.abs(this.position.left - _lastposition.left);

                }

                if (settings.dropzones !== null) {
                    var $zone = $(document.elementFromPoint(event.clientX, event.clientY)).closest(settings.dropzones);
                    if ($zone.length && $zone[0] !== this.dragging[0] && $zone[0] !== this.element[0]) {
                        var _zoneoffset = $zone.offset();
                        _zoneoffset["xmid"] = _zoneoffset["left"] + $zone.outerWidth() / 2 - window.scrollX;
                        _zoneoffset["ymid"] = _zoneoffset["top"] + $zone.outerHeight() / 2 - window.scrollY;

                        if (settings.dropappend === true) {
                            if ($zone[0] !== this.currentzone[0]) {
                                settings.onBeforeDrop.call(this, this.dragging, this.currentzone, $zone);
                                $zone.append(this.element);
                            }
                        }
                        else {
                            settings.onBeforeDrop.call(this, this.dragging, this.currentzone, $zone);

                            if (_ishorizonalmove && event.clientX > _zoneoffset["xmid"] || !_ishorizonalmove && event.clientY < _zoneoffset["ymid"])
                                $zone.before(this.element);
                            else
                                $zone.after(this.element);
                        }

                        if (this.element[0] !== this.dragging[0]) {
                            if (settings.dropappend === true) {
                                if ($zone[0] !== this.currentzone[0]) {
                                    settings.onBeforeDrop.call(this, this.dragging, this.currentzone, $zone);
                                    $zone.append(this.dragging);
                                }
                            }
                            else {
                                settings.onBeforeDrop.call(this, this.dragging, this.currentzone, $zone);
                                if (_ishorizonalmove && event.clientX > _zoneoffset["xmid"] || !_ishorizonalmove && event.clientY < _zoneoffset["ymid"])
                                    $zone.before(this.dragging);
                                else
                                    $zone.after(this.dragging);
                            }
                        }
                        settings.onAfterDrop.call(this, this.dragging, this.currentzone, $zone);

                        this.currentzone = $zone;

                    }
                }

                if (settings.scroll) {
                    if (this.isrootnode) {
                        this.topbound = this.scrollParent.scrollTop();
                        this.bottombound = $(window).height() + this.topbound;
                    }

                    var $parentscroll = this.scrollParent;
                    if (event.pageY > this.bottombound - settings.scrollsensitivity) {
                        clearTimeout(this.scrolltimer);
                        this.scrolltimer = setTimeout(function () {
                            $parentscroll.scrollTop($parentscroll.scrollTop() + settings.scrollspeed);
                        }, 5);
                    }
                    else if (event.pageY < this.topbound + settings.scrollsensitivity) {
                        clearTimeout(this.scrolltimer);
                        this.scrolltimer = setTimeout(function () {
                            $parentscroll.scrollTop($parentscroll.scrollTop() - settings.scrollspeed);
                        }, 5);
                    }
                }

                this.offsetoriginal = this.dragging.offset();

                //for better performance
                settings.onDragging(this, this.dragging);
                return false;
            },
            _mouseDown: function (event, element) {
                //for don't fire refresh in chrome mobile
                // event.preventDefault();

                if (typeof event.originalEvent.changedTouches == "undefined" && event.which != 1)
                    return;

                event = supdateWithTouchData(event);

                this.clickhandled = $(event.target);
                this.element = $(element);

                if (this.options.dropzones) {
                    this.currentzone = this.element.closest(this.options.dropzones);
                }

                this.startdragpoint = {
                    top: event.pageY,
                    left: event.pageX
                };

                var self = this;
                this._mouseMoveDelegate = function (event) {
                    return self._mouseMove(event, this);
                };

                this._mouseUpDelegate = function (event) {
                    return self._mouseUp(event, this);
                };

                $(document).on("mousemove.sdrag touchmove.sdrag", self._mouseMoveDelegate)
                    .one("mouseup.sdrag touchend.sdrag", self._mouseUpDelegate);

                return false;
            },
            _mouseUp: function (event) {
                $(document).off("mousemove.sdrag touchmove.sdrag", this._mouseMoveDelegate);

                if (this.clickhandled) {
                    //for canceled click in touch device
                    if (event.type == "touchend") {
                        this.clickhandled.trigger('click');
                    }
                } else if (this.dragging) {
                    this.eventOverlay.remove();
                    var settings = this.options;

                    if (settings.mode == "clone") {
                        this.element.removeClass("dragging-source");
                        this.dragging.removeClass("dragging");
                        this.dragging.remove();
                        settings.onAfterDrag.call(this, this.dragging);
                        this.dragging = null;
                    } else {
                        if (settings.revertposition) {
                            this.dragging.attr("style", this.dragging.data("soriginal-style"));
                        } else {
                            var top = this.dragging.css("top"),
                                left = this.dragging.css("left");
                            this.dragging.attr("style", this.dragging.data("soriginal-style"))
                                .css({ position: this.cssPosition, "top": top, "left": left });
                        }
                        settings.onAfterDrag.call(this, this.dragging);
                        this.dragging.removeClass("dragging");
                        this.dragging = null;
                    }

                    $(document.body).removeClass("unselectable");
                }
            }
        };
        return sDrag;
    })();

    //////////////// sSort  ///////////////////

    $.fn.sSort = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sSort';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sSort(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sSort.defaults = {
        children: ".item-content",
        holders: null,
        handle: null,
        enabledrag: true,
        enablebutton: false,
        upbutton: ".up",
        downbutton: ".down",
        onSwap: function () { }
    };

    var sSort = (function () {
        function sSort(element, userOptions) {

            //extend options
            var self = this;
            self.el = $(element);
            self.options = $.extend({}, $.fn.sSort.defaults, userOptions);
            self.uid = Math.round(Math.random() * 1e7);
            self.init();
        }

        sSort.prototype = {
            init: function () {
                var self = this,
                    settings = this.options;

                self.cloneditem = null;

                if (settings.enabledrag) {
                    this.el.sDrag($.extend({}, {
                        children: settings.children,
                        mode: "clone",
                        onDragging: function (drag, _$item) {
                            var top = drag.offsetoriginal.top,
                                dragging = drag.element,
                                _swapped = false;

                            self.findNeighbor(dragging);

                            if (self.prev.length && top < self.prevtop) {
                                dragging[0].parentNode.insertBefore(dragging[0], self.prev[0]);
                                _swapped = self.prev;
                            } else if (self.next.length && top > self.nexttop) {
                                if (self.next.next()[0]) {
                                    dragging[0].parentNode.insertBefore(dragging[0], self.next.next()[0]);
                                } else {
                                    dragging[0].parentNode.appendChild(dragging[0]);
                                }
                                _swapped = self.next;
                            }

                            if (_swapped) {
                                settings.onSwap.call(self, dragging, _swapped);

                                if (settings.enablebutton) {
                                    self.managebuttons();
                                }
                            }

                            return;
                        },
                        onBeforeDrag: function (_$item) {
                            if (this.cssPosition == "relative") {
                                self.isrelative = true;
                            }
                            return;
                        }
                    }, settings.dragoptions));
                }

                if (settings.enablebutton) {
                    self.managebuttons();

                    this.el.find(settings.upbutton).on("click.ssort", function (event) {
                        event.stopPropagation();

                        var $item = $(this).closest(settings.children);
                        $item.prev(settings.children).before($item);
                        self.managebuttons();

                    }).end()
                        .find(settings.downbutton).on("click.ssort", function (event) {
                            event.stopPropagation();

                            var $item = $(this).closest(settings.children);
                            $item.next(settings.children).after($item);
                            self.managebuttons();

                        });
                } else {
                    this.el.find(settings.upbutton).addClass("hidden").end()
                        .find(settings.downbutton).addClass("hidden");
                }

            }, update: function (userOptions) {
                return this;
            }, managebuttons: function () {

                this.el.find(this.options.upbutton).removeClass("hidden").eq(0).addClass("hidden");
                this.el.find(this.options.downbutton).removeClass("hidden").last().addClass("hidden");
            }, findNeighbor: function ($item) {
                if (true) {
                    var self = this,
                        children = self.options.children;

                    var $next = $item.next(children);
                    if ($next.hasClass("dragging")) {
                        $next = $next.next(children);
                    }
                    self.next = $next;
                    self.nexttop = self.next.length ? self.next.offset().top - 15 : 0;
                    var $prev = $item.prev(children);
                    if ($prev.hasClass("dragging")) {
                        $prev = $prev.prev(children);
                    }
                    self.prev = $prev;
                    self.prevtop = $prev.length ? self.prev.offset().top + 15 : 0;
                }
                else {
                    var children = this.options.children;

                    this.next = $item.next(children);
                    if (this.next.hasClass("dragging")) {
                        this.next = this.next.next(children);
                    }

                    if (this.next.length === 0) {
                        for (var i = this.itemlist.length - 2; i >= 0; i--) {
                            if (this.itemlist.eq(i).is(".dragging-source")) {
                                this.next = this.itemlist.eq(i + 1);
                                break;
                            }
                        }
                    }

                    this.nexttop = this.next.length ? this.next.offset().top - 15 : 0;

                    this.prev = $item.prev(children);
                    if (this.prev.hasClass("dragging")) {
                        this.prev = this.prev.prev(children);
                    }

                    if (this.prev.length === 0) {
                        for (var i = 1, _len = this.itemlist.length; i < _len; i++) {
                            if (this.itemlist.eq(i).is(".dragging-source")) {
                                this.prev = this.itemlist.eq(i - 1);
                                break;
                            }
                        }
                    }

                    this.prevtop = this.prev.length ? this.prev.offset().top + 15 : 0;
                }
            }
        };
        return sSort;
    })();

    //////////////// sColorPicker  ///////////////////

    $.fn.sColorPicker = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sColorPicker';

        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sColorPicker(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }

            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };

    $.fn.sColorPicker.defaults = {
        theme: '',
        // Show the picker or make it inline
        picker: true,
        // Animation delay in milliseconds
        pickerDelay: 0,
        colors: ["b71c1c", "d32f2f", "f44336", "e57373", "ffcdd2", "ffebee",
            "880e4f", "c2185b", "e91e63", "f06292", "f8bbd0", "fce4ec",
            "4a148c", "7b1fa2", "9c27b0", "ba68c8", "e1bee7", "f3e5f5",
            "311b92", "512da8", "673ab7", "9575cd", "d1c4e9", "ede7f6",
            "1a237e", "303f9f", "3f51b5", "7986cb", "c5cae9", "e8eaf6",
            "0d47a1", "1976d2", "2196f3", "64b5f6", "bbdefb", "e3f2fd",
            "01579b", "0288d1", "03a9f4", "4fc3f7", "b3e5fc", "e1f5fe",
            "006064", "0097a7", "00bcd4", "4dd0e1", "b2ebf2", "e0f7fa",
            "004d40", "00796b", "009688", "4db6ac", "b2dfdb", "e0f2f1",
            "1b5e20", "388e3c", "4caf50", "81c784", "c8e6c9", "e8f5e9",
            "33691e", "689f38", "8bc34a", "aed581", "dcedc8", "f1f8e9",
            "827717", "afb42b", "cddc39", "dce775", "f0f4c3", "f9fbe7",
            "f57f17", "fbc02d", "ffeb3b", "fff176", "fff9c4", "fffde7",
            "ff6f00", "ffa000", "ffc107", "ffd54f", "ffecb3", "fff8e1",
            "e65100", "f57c00", "ff9800", "ffb74d", "ffe0b2", "fff3e0",
            "bf360c", "e64a19", "ff5722", "ff8a65", "ffccbc", "fbe9e7",
            "3e2723", "5d4037", "795548", "a1887f", "bcaaa4", "efebe9",
            "000000", "212121", "9e9e9e", "e0e0e0", "f5f5f5", "ffffff",
            "263238", "455a64", "607d8b", "90a4ae", "b0bec5", "eceff1"]
    };

    var sColorPicker = (function () {
        function sColorPicker(element, userOptions) {

            //extend options
            this.$el = $(element);
            this.options = $.extend({}, $.fn.sColorPicker.defaults, userOptions);
            this.uid = Math.round(Math.random() * 1e7);
            this.init();
        }

        sColorPicker.prototype = {
            init: function () {
                var self = this;

                this.$el.hide();
                this.$colorList = $("<div class='scolorpicker-picker'/>");

                this.$colorinput = $("<input class='form-control text-english ltr' type='text'/>").val(this.$el.val()).on("keyup input", function (_event) {
                    var _color = $(this).val();
                    self.$icon.css('background-color', "#" + _color).data("color", _color);
                    self.$el.val(_color);
                    self.$icon.prop('title', "");
                }).on("click", function (event) {
                    event.stopPropagation();
                });

                this.$colorinput.wrap("<div class='input-group'></div>").parent().append("<span class='input-group-addon'>#</span>").appendTo(this.$colorList);

                this.$nocolor = $("<button class='btn scolorpicker-nocolor'>" + slang.nocolor + "</button>").on("click", function (event) {
                    event.stopPropagation();
                    self.$icon.css('background-color', "transparent");
                    self.$el.val("");
                    self.$icon.data("color", "").prop('title', "");
                    self.$colorinput.val("");
                }).appendTo(this.$colorList);

                var selectText = this.$el.val();
                this.$icon = $('<span class="scolorpicker icon"'
                    + ' title="' + selectText + '"'
                    + ' style="width:100%;background-color:#' + selectText + ';"'
                    + ' role="button" tabindex="0">'
                    + '</span>').data("color", selectText)
                    .on('click', function (event) {
                        event.stopPropagation();
                        self.$icon.sTip({
                            width: 170,
                            content: self.$colorList
                        }).toggle();

                        self.$colorinput.val(self.$icon.data("color"));
                    }).insertAfter(this.$el);


                // Build the list of colors
                for (var i = 0, len = this.options.colors.length; i < len; i++) {
                    var _color = this.options.colors[i];

                    $('<span class="scolorpicker-color"'
                        + ' style="background-color:#' + _color + '"'
                        + ' data-color="' + _color + '">'
                        + '</span>').on('click', function (_event) {
                            var $colorSpan = $(this),
                                _color = $colorSpan.data('color'),
                                _title = $colorSpan.prop('title');

                            self.$icon.data("color", _color).css('background-color', "#" + _color);
                            self.$el.val(_color);
                            self.$icon.prop('title', _title);

                        }).appendTo(self.$colorList);
                }
            }
        };
        return sColorPicker;
    })();

    //////////////// sVoiceRecorder ////////////////

    $.fn.sVoiceRecorder = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sVoiceRecorder';
        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sVoiceRecorder(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };


    $.fn.sVoiceRecorder.defaults = {
        required: false,
        maxsize: null,
        fileidname: "UploadedFileID",
        handlefilename: "attachment",
        keyname: null,
        url: null,
        groupname: null,
        onDone: function () { }
    };

    var sVoiceRecorder = (function () {
        function sVoiceRecorder(element, userOptions) {
            var getAudioFormat = function () {
                var audio = document.createElement('audio');
                if (audio.canPlayType('audio/webm; codecs=opus')) {
                    return { mime: 'audio/webm; codecs=opus', ext: 'webm' };
                }
                else if (audio.canPlayType('audio/ogg; codecs=opus')) {
                    return { mime: 'audio/ogg; codecs=opus', ext: 'ogg' };
                }
                else if (audio.canPlayType('audio/webm')) {
                    return { mime: 'audio/webm', ext: 'webm' };
                }
                else if (audio.canPlayType('audio/ogg')) {
                    return { mime: 'audio/ogg', ext: 'ogg' };
                }
                else {
                    return { mime: 'audio/ogg', ext: 'ogg' };
                }
            }

            const format = getAudioFormat();
            if (format == null) {
                alert(slang.noAudioFormatIsSupported);
                return;
            }

            var self = this;
            this.el = $(element);
            this.el.data("active-uploading", 0);
            this.el.data("active-recording", 0);
            var settings = this.options = $.extend(false, {}, $.fn.sVoiceRecorder.defaults, userOptions);

            this.filecount = 0;

            var _sajaxpostobj = this.el.closest("form").data("sAjaxPost");
            if (_sajaxpostobj) {
                _sajaxpostobj.options.dataformat = "json";
            }

            this.$holder = $("<div class='voice-recorder-holder'><div class='col-xs-4 pad-all-no'>" +
                "<button class='btn recorder-btn valign-middle record-audio' type='button'><span class='audio-icon'></span>" + slang.startRecord + "</button>" +
                "<button class='btn recorder-btn valign-middle stop-audio stop-record hidden' type='button'><span class='audio-icon'></span>" + slang.stopRecord + "</button>" +
                "</div><div class='voice-recorder-fileholder col-xs-8 pad-all-no'></div><div class='clear'></div></div>")
                .insertBefore(this.el.addClass("voice-recorder-fileinput"));

            let mediaRecorder;
            let chunks = [];
            let totalSize = 0;
            let maxSizeInBytes = settings.maxsize > 0 ? settings.maxsize * 1024 : null;

            const $recordButton = this.$holder.find(".record-audio");
            const $stopRecordButton = this.$holder.find(".stop-record");

            $recordButton.on('click', function () {
                if (self.filecount > 0 || self.el.data("active-uploading") > 0) {
                    if (confirm(slang.replaceVoice)) {
                        self.removeItem(self.$holder.find(".voice-recorder-fileholder").find(".item-clear"));
                    }
                    else {
                        return;
                    }
                }

                navigator.mediaDevices
                    .getUserMedia({ audio: true })
                    .then((stream) => {
                        chunks = [];
                        totalSize = 0;
                        mediaRecorder = new MediaRecorder(stream);
                        mediaRecorder.start(1000);

                        $recordButton.addClass("hidden");
                        $stopRecordButton.removeClass("hidden");
                        self.el.data("active-recording", self.el.data("active-recording") + 1);

                        mediaRecorder.ondataavailable = (e) => {
                            chunks.push(e.data);
                            totalSize += e.data.size;

                            if (mediaRecorder.state === "recording" && maxSizeInBytes > 0 && totalSize >= maxSizeInBytes) {
                                mediaRecorder.stop();
                                $.sAlert('#AjaxLog').message({ type: 'warning', content: slang.maxRecordSizeExceeded, timeout: 5000 });
                            }
                        };

                        mediaRecorder.onstop = () => {
                            $recordButton.removeClass("hidden");
                            $stopRecordButton.addClass("hidden");
                            const blob = new Blob(chunks, { type: format.mime });
                            self.el.data("active-recording", self.el.data("active-recording") - 1);

                            uploadVoice(self.el, blob);
                        };
                    })
                    .catch((err) => {
                        console.log(err);

                        if (err.name === "NotAllowedError")
                            $.sAlert('#AjaxLog').message({ type: 'error', content: slang.micPermissionError, timeout: -1 });

                        else
                            $.sAlert('#AjaxLog').message({ type: 'error', content: err.name + ": " + err.message, timeout: -1 });
                    });
            });

            $stopRecordButton.on('click', function () {
                mediaRecorder.stop();
            });

            var _$proxydata = this.el.next(".voice-recorder-proxy-data");
            if (_$proxydata.length) {
                _$proxydata = _$proxydata.find(".item");

                var _$items = $("<div/>");
                for (var i = 0, _len = _$proxydata.length; i < _len; i++) {
                    var _$data = _$proxydata.eq(i),
                        _id = _$data.find(".item-id").remove().val(),
                        _key = _$data.find(".item-key").remove().val();

                    _$items.append(this.createItem(_$data.attr("data-url"), true).append(this.renderData(_id, _key, _$data.children().clone())));
                    _$data.remove();
                }
                this.filecount = _$proxydata.length;
                _$items.children().appendTo(this.$holder.find(".voice-recorder-fileholder"));
            }

            this.addValidation(this.el);

            function uploadVoice($proxyfile, blob) {
                var $proxyform = $("<form action='" + settings.url + "' method='post' role='form' enctype='multipart/form-data'><input type='hidden' name='name' value='" + self.options.handlefilename + "' /></form>"),
                    _sendoptions = {};

                $proxyform.append(self.el.closest("form").find("input[name=__RequestVerificationToken]").clone());
                var _formdata = new FormData($proxyform[0]);
                _formdata.append('file', blob, "recorded-voice." + format.ext);

                _sendoptions = {
                    data: _formdata
                };

                var $element = self.createItem("", false).appendTo(self.$holder.find(".voice-recorder-fileholder"));

                $proxyform.sAjaxPost({
                    progressbar: $element.find(".voice-recorder-progressbar"),
                    integrated: true,
                    beforeSend: function () {
                        var sajaxobj = this;
                        sajaxobj._tempelement = $element;

                        $("html").data("ajax-loading", "");
                        self.el.data("active-uploading", 1);

                        $element.on('click cancelupload', '.item-clear', function (event) {
                            event.stopPropagation();
                            event.preventDefault();

                            if (confirm(slang.cancelUploadingVoiceConfirmMessage)) {
                                if (sajaxobj.xhr && sajaxobj.xhr.status != 200) {
                                    sajaxobj.xhr.abort();
                                } else {
                                    $("#loading").slideUp();
                                }

                                if ($.validator)
                                    $proxyfile.valid();

                                var $item = $(this);
                                $item.closest(".item").remove();
                            }
                        });

                    },
                    afterSend: function () {
                        setTimeout(function () {
                            $("html").data("ajax-loading", $("#loading"));
                        }, 100);
                    },
                    onError: function () {
                        handleUploadError(self, this._tempelement, $proxyfile, blob);
                    },
                    sendoptions: _sendoptions,
                    actions: [{
                        type: "ignore",
                        log: false,
                        onError: function () {
                            handleUploadError(self, this._tempelement, $proxyfile, blob);
                        },
                        customAction: function (data) {
                            self.el.data("active-uploading", 0);
                            self.renderData(data["ID"] || data, data["Key"] || "").appendTo(this._tempelement);
                            if (data["Url"]) {
                                const $audio = this._tempelement.find("audio");

                                self.filecount++;
                                self.addClearEvent(this._tempelement.find(".item-clear"));

                                $audio
                                    .attr("src", data["Url"])
                                    .sAudioPlayer({
                                        download: false
                                    });

                                this._tempelement.find(".voice-recorder-progressbar").addClass("hidden");
                            }


                            if ($.validator)
                                $proxyfile.valid();

                            self.el.val("");
                            return false;
                        },
                        onDone: function (data) {
                            if (data["Status"] === 0) {
                                self.options.onDone.call(self, data["Model"]);
                            }
                        }
                    }]
                }).send();
            }

            function handleUploadError(self, $element, $proxyfile, blob) {
                self.el.data("active-uploading", 0);
                $element.find(".voice-recorder-progressbar").addClass("error").width('100%');
                var $recordedVoice = $element.find(".recorded-voice");
                $("<button class='btn player-btn valign-middle retry' type='button'>" + slang.retryUploadVoice + "</button>")
                    .on("click", function () {
                        $element.remove();
                        uploadVoice($proxyfile, blob);
                    })
                    .appendTo($recordedVoice);
            }
        }

        sVoiceRecorder.prototype = {
            update: function (userOptions) {
                this.options = $.extend({}, this.options, userOptions);
                return this;
            },
            removeItem: function ($item) {
                if (!$(this.el).is(":disabled")) {
                    $item.closest(".item").remove();
                    if (this.filecount)
                        this.filecount--;
                }
            },
            addClearEvent: function ($clearSpan) {
                var self = this;
                $clearSpan.off('click')
                    .on('click', function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        if (confirm(slang.removeVoiceConfirmMessage)) {
                            self.removeItem($clearSpan);
                        }
                    });
            },
            createItem: function (url, eventclose) {
                var $element = $('<div class="item"><div class="voice-recorder-progress-holder"><div class="voice-recorder-progressbar"></div></div><span class="item-clear">x</span></div>');
                if (url) {
                    $("<span class='recorded-voice'><audio src='" + url + "'></audio></span>").appendTo($element);

                    const $audio = $element.find("audio");
                    $audio.sAudioPlayer({
                        download: false
                    });
                }
                else {
                    $("<span class='recorded-voice'><audio></audio></span>").appendTo($element);
                }

                $("<div class='clear'></div>").appendTo($element);

                if (eventclose) {
                    var $clearSpan = $element.find('.item-clear');
                    this.addClearEvent($clearSpan);
                }

                return $element;
            },
            renderData: function (id, key, extradata) {
                var element = '<div ' + (this.options.groupname ? 'class="sgroup hidden" data-sform-name="' + this.options.groupname + '"' : '') + '>';
                element += "<input type='hidden' name='" + this.options.fileidname + "' value='" + (id ? id : "") + "'/>";
                element += "<input type='hidden' name='" + (this.options.keyname ? this.options.keyname : this.options.fileidname + "File") + "' value='" + (key ? key : "") + "'/>";
                element = $(element);

                if (extradata)
                    element.append(extradata);

                return element;
            },
            addValidation: function ($el) {
                var settings = this.options;

                $el.attr('data-val', true);

                if (settings.required) {
                    $el.attr('data-val-svoice-required', slang.vFileRequired);
                    if (this.idholder) {
                        $el.attr('data-val-svoice-fileholder', this.idholder.val());
                    }
                }

                $el.attr('data-val-svoice', true);
            },
            reset: function () {
                this.el.val("");

                if (this.options.type === "proxy")
                    this.$holder.find(".voice-recorder-fileholder").children().remove();
            }
        };
        return sVoiceRecorder;
    })();

    //////////////// sAudioPlayer ////////////////

    $.fn.sAudioPlayer = function (options) {
        if (this.length === 0)
            return null;

        var pluginName = 'sAudioPlayer';
        var _objects = $.map(this, function (element) {
            var $element = $(element),
                instance = $element.data(pluginName);

            if (!instance) {
                instance = new sAudioPlayer(element, options);
                $element.data(pluginName, instance);
            } else if (options) {
                //for cloned element that el point to pervious el
                instance.el = $element;
                instance = instance.update(options);
            } else {
                //for cloned element that el point to pervious el
                instance.el = $element;
            }
            return instance;
        });

        if (this.length === 1)
            return _objects[0];
        else
            return _objects;
    };


    $.fn.sAudioPlayer.defaults = {
        pause: true,
        stop: true,
        download: true
    };

    var sAudioPlayer = (function () {
        function sAudioPlayer(element, userOptions) {
            this.el = $(element);
            const iosMode = is_iOS();

            var settings = this.options = $.extend(false, {}, $.fn.sAudioPlayer.defaults, userOptions);

            this.$holder = $("<span class='audio-player'></span>").insertBefore(this.el);

            if (!iosMode) {
                $("<button class='btn player-btn valign-middle play-audio' type='button' title='" + slang.play + "'><span class='audio-icon'></span></button>")
                    .appendTo(this.$holder);

                if (settings.pause === true)
                    $("<button class='btn player-btn valign-middle pause-audio' type='button' title='" + slang.pause + "' disabled><span class='audio-icon'></span></button>")
                        .appendTo(this.$holder);

                if (settings.stop === true)
                    $("<button class='btn player-btn valign-middle stop-audio' type='button' title='" + slang.stop + "' disabled><span class='audio-icon'></span></button>")
                        .appendTo(this.$holder);
            }

            if (settings.download === true || iosMode)
                $("<a class='btn player-btn valign-middle download-audio' href='" + this.el.attr("src") + "' target='_blank' title='" + slang.download + "'><span class='audio-icon'></span></a>")
                    .appendTo(this.$holder);

            if (!iosMode) {
                const $audio = this.el;
                const $playAudioBtn = this.$holder.find(".play-audio");
                const $pauseAudioBtn = this.$holder.find(".pause-audio");
                const $stopAudioBtn = this.$holder.find(".stop-audio");

                this.el
                    .on('playing', function () {
                        $playAudioBtn.prop("disabled", true);
                        $pauseAudioBtn.prop("disabled", false);
                        $stopAudioBtn.prop("disabled", false);
                    })
                    .on('pause', function () {
                        $playAudioBtn.prop("disabled", false);
                        $pauseAudioBtn.prop("disabled", true);
                    })
                    .on('ended', function () {
                        $playAudioBtn.prop("disabled", false);
                        $pauseAudioBtn.prop("disabled", true);
                        $stopAudioBtn.prop("disabled", true);
                    });

                $playAudioBtn.on("click", function () {
                    $audio[0].play();
                });

                $pauseAudioBtn.on("click", function () {
                    $audio[0].pause();
                });

                $stopAudioBtn.on("click", function () {
                    $audio[0].pause();
                    $audio[0].currentTime = 0;
                    $stopAudioBtn.prop("disabled", true);
                });
            }
        }

        sAudioPlayer.prototype = {
            update: function (userOptions) {
                this.options = $.extend({}, this.options, userOptions);
                return this;
            }
        };
        return sAudioPlayer;
    })();


    //////////////// sFieldsetAccordion ////////////////


    $.fn.sFieldsetAccordion = function (options) {

        var settings = $.extend({
            state: "show",

            onBeforeToggle: null,
            onToggle: null,

            onBeforeOpen: null,
            onOpened: null,

            onBeforeClose: null,
            onClosed: null

        }, options);

        return this.each(function () {

            var $fieldset = $(this);
            var $legend = $fieldset.children("legend").first();

            if (!$legend.length) {
                return;
            }

            // Prevent duplicate initialization
            if ($fieldset.data("sFieldsetAccordion")) {
                return;
            }

            // Wrap all fieldset contents except the legend
            var $content = $fieldset
                .children()
                .not($legend)
                .wrapAll("<div class=\"sfieldset-accordion-content\"></div>")
                .parent();

            var $button = $("<button>", {
                type: "button",
                class: "btn icon-white sfieldset-accordion-button"
            });

            $legend.append($button);

            function isOpen() {
                return !$content.hasClass("hidden");
            }

            function updateButton() {
                var opened = isOpen();

                $button
                    .attr("aria-expanded", opened)
                    .toggleClass("collapsed", !opened)
                    .toggleClass("blue", !opened)
                    .toggleClass("down", !opened)
                    .toggleClass("red", opened)
                    .toggleClass("up", opened)
                    .text(opened ? slang.close : slang.show);
            }

            function callEvent(callback, eventName) {
                if (typeof callback === "function") {
                    return callback.call(
                        $fieldset[0],
                        $fieldset,
                        eventName
                    );
                }

                return undefined;
            }

            function open() {

                if (isOpen()) {
                    return;
                }

                if (callEvent(settings.onBeforeToggle, "beforeToggle") === false) {
                    return;
                }

                if (callEvent(settings.onBeforeOpen, "beforeOpen") === false) {
                    return;
                }

                $content.removeClass("hidden");

                updateButton();

                callEvent(settings.onOpened, "opened");
                callEvent(settings.onToggle, "toggle");
            }

            function close() {

                if (!isOpen()) {
                    return;
                }

                if (callEvent(settings.onBeforeToggle, "beforeToggle") === false) {
                    return;
                }

                if (callEvent(settings.onBeforeClose, "beforeClose") === false) {
                    return;
                }

                $content.addClass("hidden");

                updateButton();

                callEvent(settings.onClosed, "closed");
                callEvent(settings.onToggle, "toggle");
            }

            function toggle() {

                if (isOpen()) {
                    close();
                } else {
                    open();
                }
            }

            // Initial state
            if (settings.state === "hide") {
                $content.addClass("hidden");
            } else {
                $content.removeClass("hidden");
            }

            updateButton();

            $button.on("click.sFieldsetAccordion", function (e) {
                e.preventDefault();

                toggle();
            });

            $fieldset.data("sFieldsetAccordion", {
                open: open,
                close: close,
                toggle: toggle
            });
        });
    };
}(jQuery));
;
/* big.js v3.1.3 https://github.com/MikeMcl/big.js/LICENCE */(function(global){"use strict";var DP=20,RM=1,MAX_DP=1e6,MAX_POWER=1e6,E_NEG=-7,E_POS=21,P={},isValid=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Big;function bigFactory(){function Big(n){var x=this;if(!(x instanceof Big)){return n===void 0?bigFactory():new Big(n)}if(n instanceof Big){x.s=n.s;x.e=n.e;x.c=n.c.slice()}else{parse(x,n)}x.constructor=Big}Big.prototype=P;Big.DP=DP;Big.RM=RM;Big.E_NEG=E_NEG;Big.E_POS=E_POS;return Big}function format(x,dp,toE){var Big=x.constructor,i=dp-(x=new Big(x)).e,c=x.c;if(c.length>++dp){rnd(x,i,Big.RM)}if(!c[0]){++i}else if(toE){i=dp}else{c=x.c;i=x.e+i+1}for(;c.length<i;c.push(0)){}i=x.e;return toE===1||toE&&(dp<=i||i<=Big.E_NEG)?(x.s<0&&c[0]?"-":"")+(c.length>1?c[0]+"."+c.join("").slice(1):c[0])+(i<0?"e":"e+")+i:x.toString()}function parse(x,n){var e,i,nL;if(n===0&&1/n<0){n="-0"}else if(!isValid.test(n+="")){throwErr(NaN)}x.s=n.charAt(0)=="-"?(n=n.slice(1),-1):1;if((e=n.indexOf("."))>-1){n=n.replace(".","")}if((i=n.search(/e/i))>0){if(e<0){e=i}e+=+n.slice(i+1);n=n.substring(0,i)}else if(e<0){e=n.length}for(i=0;n.charAt(i)=="0";i++){}if(i==(nL=n.length)){x.c=[x.e=0]}else{for(;n.charAt(--nL)=="0";){}x.e=e-i-1;x.c=[];for(e=0;i<=nL;x.c[e++]=+n.charAt(i++)){}}return x}function rnd(x,dp,rm,more){var u,xc=x.c,i=x.e+dp+1;if(rm===1){more=xc[i]>=5}else if(rm===2){more=xc[i]>5||xc[i]==5&&(more||i<0||xc[i+1]!==u||xc[i-1]&1)}else if(rm===3){more=more||xc[i]!==u||i<0}else{more=false;if(rm!==0){throwErr("!Big.RM!")}}if(i<1||!xc[0]){if(more){x.e=-dp;x.c=[1]}else{x.c=[x.e=0]}}else{xc.length=i--;if(more){for(;++xc[i]>9;){xc[i]=0;if(!i--){++x.e;xc.unshift(1)}}}for(i=xc.length;!xc[--i];xc.pop()){}}return x}function throwErr(message){var err=new Error(message);err.name="BigError";throw err}P.abs=function(){var x=new this.constructor(this);x.s=1;return x};P.cmp=function(y){var xNeg,x=this,xc=x.c,yc=(y=new x.constructor(y)).c,i=x.s,j=y.s,k=x.e,l=y.e;if(!xc[0]||!yc[0]){return!xc[0]?!yc[0]?0:-j:i}if(i!=j){return i}xNeg=i<0;if(k!=l){return k>l^xNeg?1:-1}i=-1;j=(k=xc.length)<(l=yc.length)?k:l;for(;++i<j;){if(xc[i]!=yc[i]){return xc[i]>yc[i]^xNeg?1:-1}}return k==l?0:k>l^xNeg?1:-1};P.div=function(y){var x=this,Big=x.constructor,dvd=x.c,dvs=(y=new Big(y)).c,s=x.s==y.s?1:-1,dp=Big.DP;if(dp!==~~dp||dp<0||dp>MAX_DP){throwErr("!Big.DP!")}if(!dvd[0]||!dvs[0]){if(dvd[0]==dvs[0]){throwErr(NaN)}if(!dvs[0]){throwErr(s/0)}return new Big(s*0)}var dvsL,dvsT,next,cmp,remI,u,dvsZ=dvs.slice(),dvdI=dvsL=dvs.length,dvdL=dvd.length,rem=dvd.slice(0,dvsL),remL=rem.length,q=y,qc=q.c=[],qi=0,digits=dp+(q.e=x.e-y.e)+1;q.s=s;s=digits<0?0:digits;dvsZ.unshift(0);for(;remL++<dvsL;rem.push(0)){}do{for(next=0;next<10;next++){if(dvsL!=(remL=rem.length)){cmp=dvsL>remL?1:-1}else{for(remI=-1,cmp=0;++remI<dvsL;){if(dvs[remI]!=rem[remI]){cmp=dvs[remI]>rem[remI]?1:-1;break}}}if(cmp<0){for(dvsT=remL==dvsL?dvs:dvsZ;remL;){if(rem[--remL]<dvsT[remL]){remI=remL;for(;remI&&!rem[--remI];rem[remI]=9){}--rem[remI];rem[remL]+=10}rem[remL]-=dvsT[remL]}for(;!rem[0];rem.shift()){}}else{break}}qc[qi++]=cmp?next:++next;if(rem[0]&&cmp){rem[remL]=dvd[dvdI]||0}else{rem=[dvd[dvdI]]}}while((dvdI++<dvdL||rem[0]!==u)&&s--);if(!qc[0]&&qi!=1){qc.shift();q.e--}if(qi>digits){rnd(q,dp,Big.RM,rem[0]!==u)}return q};P.eq=function(y){return!this.cmp(y)};P.gt=function(y){return this.cmp(y)>0};P.gte=function(y){return this.cmp(y)>-1};P.lt=function(y){return this.cmp(y)<0};P.lte=function(y){return this.cmp(y)<1};P.sub=P.minus=function(y){var i,j,t,xLTy,x=this,Big=x.constructor,a=x.s,b=(y=new Big(y)).s;if(a!=b){y.s=-b;return x.plus(y)}var xc=x.c.slice(),xe=x.e,yc=y.c,ye=y.e;if(!xc[0]||!yc[0]){return yc[0]?(y.s=-b,y):new Big(xc[0]?x:0)}if(a=xe-ye){if(xLTy=a<0){a=-a;t=xc}else{ye=xe;t=yc}t.reverse();for(b=a;b--;t.push(0)){}t.reverse()}else{j=((xLTy=xc.length<yc.length)?xc:yc).length;for(a=b=0;b<j;b++){if(xc[b]!=yc[b]){xLTy=xc[b]<yc[b];break}}}if(xLTy){t=xc;xc=yc;yc=t;y.s=-y.s}if((b=(j=yc.length)-(i=xc.length))>0){for(;b--;xc[i++]=0){}}for(b=i;j>a;){if(xc[--j]<yc[j]){for(i=j;i&&!xc[--i];xc[i]=9){}--xc[i];xc[j]+=10}xc[j]-=yc[j]}for(;xc[--b]===0;xc.pop()){}for(;xc[0]===0;){xc.shift();--ye}if(!xc[0]){y.s=1;xc=[ye=0]}y.c=xc;y.e=ye;return y};P.mod=function(y){var yGTx,x=this,Big=x.constructor,a=x.s,b=(y=new Big(y)).s;if(!y.c[0]){throwErr(NaN)}x.s=y.s=1;yGTx=y.cmp(x)==1;x.s=a;y.s=b;if(yGTx){return new Big(x)}a=Big.DP;b=Big.RM;Big.DP=Big.RM=0;x=x.div(y);Big.DP=a;Big.RM=b;return this.minus(x.times(y))};P.add=P.plus=function(y){var t,x=this,Big=x.constructor,a=x.s,b=(y=new Big(y)).s;if(a!=b){y.s=-b;return x.minus(y)}var xe=x.e,xc=x.c,ye=y.e,yc=y.c;if(!xc[0]||!yc[0]){return yc[0]?y:new Big(xc[0]?x:a*0)}xc=xc.slice();if(a=xe-ye){if(a>0){ye=xe;t=yc}else{a=-a;t=xc}t.reverse();for(;a--;t.push(0)){}t.reverse()}if(xc.length-yc.length<0){t=yc;yc=xc;xc=t}a=yc.length;for(b=0;a;){b=(xc[--a]=xc[a]+yc[a]+b)/10|0;xc[a]%=10}if(b){xc.unshift(b);++ye}for(a=xc.length;xc[--a]===0;xc.pop()){}y.c=xc;y.e=ye;return y};P.pow=function(n){var x=this,one=new x.constructor(1),y=one,isNeg=n<0;if(n!==~~n||n<-MAX_POWER||n>MAX_POWER){throwErr("!pow!")}n=isNeg?-n:n;for(;;){if(n&1){y=y.times(x)}n>>=1;if(!n){break}x=x.times(x)}return isNeg?one.div(y):y};P.round=function(dp,rm){var x=this,Big=x.constructor;if(dp==null){dp=0}else if(dp!==~~dp||dp<0||dp>MAX_DP){throwErr("!round!")}rnd(x=new Big(x),dp,rm==null?Big.RM:rm);return x};P.sqrt=function(){var estimate,r,approx,x=this,Big=x.constructor,xc=x.c,i=x.s,e=x.e,half=new Big("0.5");if(!xc[0]){return new Big(x)}if(i<0){throwErr(NaN)}i=Math.sqrt(x.toString());if(i===0||i===1/0){estimate=xc.join("");if(!(estimate.length+e&1)){estimate+="0"}r=new Big(Math.sqrt(estimate).toString());r.e=((e+1)/2|0)-(e<0||e&1)}else{r=new Big(i.toString())}i=r.e+(Big.DP+=4);do{approx=r;r=half.times(approx.plus(x.div(approx)))}while(approx.c.slice(0,i).join("")!==r.c.slice(0,i).join(""));rnd(r,Big.DP-=4,Big.RM);return r};P.mul=P.times=function(y){var c,x=this,Big=x.constructor,xc=x.c,yc=(y=new Big(y)).c,a=xc.length,b=yc.length,i=x.e,j=y.e;y.s=x.s==y.s?1:-1;if(!xc[0]||!yc[0]){return new Big(y.s*0)}y.e=i+j;if(a<b){c=xc;xc=yc;yc=c;j=a;a=b;b=j}for(c=new Array(j=a+b);j--;c[j]=0){}for(i=b;i--;){b=0;for(j=a+i;j>i;){b=c[j]+yc[i]*xc[j-i-1]+b;c[j--]=b%10;b=b/10|0}c[j]=(c[j]+b)%10}if(b){++y.e}if(!c[0]){c.shift()}for(i=c.length;!c[--i];c.pop()){}y.c=c;return y};P.toString=P.valueOf=P.toJSON=function(){var x=this,Big=x.constructor,e=x.e,str=x.c.join(""),strL=str.length;if(e<=Big.E_NEG||e>=Big.E_POS){str=str.charAt(0)+(strL>1?"."+str.slice(1):"")+(e<0?"e":"e+")+e}else if(e<0){for(;++e;str="0"+str){}str="0."+str}else if(e>0){if(++e>strL){for(e-=strL;e--;str+="0"){}}else if(e<strL){str=str.slice(0,e)+"."+str.slice(e)}}else if(strL>1){str=str.charAt(0)+"."+str.slice(1)}return x.s<0&&x.c[0]?"-"+str:str};P.toExponential=function(dp){if(dp==null){dp=this.c.length-1}else if(dp!==~~dp||dp<0||dp>MAX_DP){throwErr("!toExp!")}return format(this,dp,1)};P.toFixed=function(dp){var str,x=this,Big=x.constructor,neg=Big.E_NEG,pos=Big.E_POS;Big.E_NEG=-(Big.E_POS=1/0);if(dp==null){str=x.toString()}else if(dp===~~dp&&dp>=0&&dp<=MAX_DP){str=format(x,x.e+dp);if(x.s<0&&x.c[0]&&str.indexOf("-")<0){str="-"+str}}Big.E_NEG=neg;Big.E_POS=pos;if(!str){throwErr("!toFix!")}return str};P.toPrecision=function(sd){if(sd==null){return this.toString()}else if(sd!==~~sd||sd<1||sd>MAX_DP){throwErr("!toPre!")}return format(this,sd-1,2)};Big=bigFactory();if(typeof define==="function"&&define.amd){define(function(){return Big})}else if(typeof module!=="undefined"&&module.exports){module.exports=Big}else{global.Big=Big}})(this);;
var prepareForPrint = function () {
      $(".input-field[class^='col-sm-'],.input-field[class^='col-sm-']").each(function () {
        var $item = $(this);
        if ($item.parent().closest(".item-content").length === 0)
            $item.addClass("item-content").removeClass("text-center");
        else
            $item.removeClass("text-center");
    });

    $(".shelp-icon").each(function () {
        var $helpicon = $(this),
            $item = $helpicon.parent();

        $helpicon.remove();
        $item.append($($item.data("shelpcontent")).addClass("text-right text-sm text-gray"));
    });

    $(".choice-label").remove();
    $(".input-group-btn").removeClass("input-group-btn");
    $(".input-group-addon").removeClass("input-group-addon");

    $(".slov-items").each(function () {
        var _$hitems = $(this),
            _$items = _$hitems.find(".slov-item");
        if (_$items.length) {
            var _$values = $("<span class='text-bold'></span>");
            for (var i = 0, _len = _$items.length; i < _len; i++) {
                $("<span></span>").text(_$items.eq(i).find(".slov-item-text").text() + (_len > 1 && i !== _len ? " ،" : "")).appendTo(_$values);
            }

            _$hitems.closest(".input-group").replaceWith(_$values);
        } else {
            _$hitems.closest(".input-group").replaceWith("<span>-</span>");

        }
    });


    $(".control-label").each(function () {
        $(this).removeClass("required").addClass("text-sm").parent().addClass("item-content pad-bottom-2p");
    });

    $("select").each(function () {
        var $input = $(this);
        $input.parent().replaceWith($("<span class='printable-value text-bold'></span>").text(" " + ($input.val() === "" ? "-" : $input.find(":selected").text()) + " ").attr("id", $input.attr("id")));
    });

    $(".comma-number").each(function () {
        var $input = $(this);

        if ($input.is(":input")) {
            var parts = $input.val().replace(new RegExp(',', "g"), "").split(".");

            parts[0] = parts[0].replace(new RegExp("\\B(?=(.{3})+(?!.))", "g"), ',');

            if (parts[0] && parts[0][0] == ',') {
                //for fix bug in persian number
                parts[0] = parts[0].substr(1);
            }

            $input.parent().replaceWith($("<span class='text-bold'></span>").text(" " + (parts.join(".") || "-") + " " + ($input.parent().find(".unit-field,.printable-value").text() || "")).attr("id", $input.attr("id")));
        }
    });

    $("textarea").each(function () {
        $(this).parent().replaceWith($("<div class='box-report pad-all-1p margin-all-1p text-justify'></div>").html($(this).html().replace(/\n/g, "<br />")));
    });

    $("input[type='radio']:checked").each(function () {
        var $input = $(this);
        $input.closest(".input-group").replaceWith($("<span class='text-bold'></span>").text($input.parent().text()));
    });

    $("input[type='radio']:not(:checked)").closest(".input-group").replaceWith($("<span class='text-bold'>-</span>"));

    $(":input").not("button,[type='button'],[type='radio'],[type='checkbox'],[type='hidden']").each(function () {
        var $input = $(this);
        $input.parent().replaceWith($("<span class='text-bold'></span>").text(" " + ($input.val() || "-") + " " + ($input.parent().find(".unit-field,.printable-value").text() || "")).attr("id", $input.attr("id")));
    });

    $(".title").addClass("item-content pad-top-1p clear h3 sub-heading");

    $(".grid-table").addClass("item-content item-text margin-bottom-2p");
    $(".sgrid").addClass("item-text item-content margin-bottom-2p").find(".options-holder,.options-footer").remove().end().find(".items-header").each(function (item) {
        var $header = $(this),
            $col = $header.find("th");

        if ($col.last().text().trim() === "")
            $col.last().remove();

        if ($header.next(".items-header").length)
            $col.eq(0).before('<th scope="col" rowspan="2" class="responsive-hide">ردیف</th>');
        else if ($header.prev(".items-header").length === 0)
            $col.eq(0).before('<th scope="col" class="responsive-hide">ردیف</th>');

        $header.closest("table").find(".item-content").each(function (index) {
            var $row = $(this);
            $row.removeClass("item-content").prepend("<td>" + (index + 1) + "</td>");
        });
    });

    $("tr.items-footer").each(function () {
        var $cell = $(this).find("td").eq(0),
            _colspan = $cell.attr("colspan");

        if (_colspan)
            $cell.attr("colspan", parseInt(_colspan) + 1);

    });

    $("fieldset").addClass("report-items-holder").children().addClass("item-content");
    $(".responsive-table").removeClass("responsive-table").addClass("report-table");

    $(".clear").each(function () {
        var $clear = $(this);
        if ($clear.closest(".item-content").length === 0)
            $clear.addClass("item-content");
    });

    $(".item", ".stabs").each(function () {
        var $tab = $(this),
            $stabcontent = $($tab.attr("data-stabs-content"));
        if ($stabcontent.children().eq(0).is(".page-break"))
            $stabcontent.children().eq(0).after("<h2 class='item-content clear bg-smoke margin-bottom-1p margin-top-2p pad-right-1p border-smooth'>" + $tab.text() + "</h2>");
        else
            $stabcontent.prepend("<h2 class='item-content clear bg-smoke margin-bottom-1p margin-top-2p pad-right-1p border-smooth'>" + $tab.text() + "</h2>");
    })

    $('[class*="col-sm"]').each(function () {
        var cl = $(this).attr("class").split(" ");
        var newcl = [];
        for (var i = 0; i < cl.length; i++) {
            r = cl[i].search(/col-sm+/);
            if (r) newcl[newcl.length] = cl[i];
            else newcl[newcl.length] = "col-xs-" + cl[i].substring(7);
        }
        $(this).removeClass().addClass(newcl.join(" "));
    });
};

if ($.fn.sGrid)
    $.fn.sGrid.defaults.mode = "dock";

if ($.fn.sDialog)
    $.fn.sDialog.defaults.modal = true;

$(function () {
    if ($.fn.sNav) {

        $("#MainNav,#menu").sNav({
            responsive: {
                width: 1000,
                level: true,
                theme: "main-nav"
            },
            fixed: {
                holder: "#TopMenu",
                limit: 150,
                onAfter: function () {
                    $('.wrapper').css("padding-top", $("#TopMenu").outerHeight());
                },
                onBefore: function () {
                    $('.wrapper').css("padding-top", "0");
                }
            },
            //templates: {
            //    header: "<div class='text-center pad-all-1p'><img height='50' src='Content/images/logo-mie.gif'/></div>"
            //},
            enablemouseover: true,
            theme: "main-nav",
            holder: ".wrapper"
        });
    }

    $("body").on("click.help", ".btn-help", function (event) {
        var $btn = $(this);
        $("#HelpContent").sDialog({
            modal: true,
            cache: false,
            title: "راهنما",
            dialogclass: "help-dialog"
        }).html($($btn.data("helpholder")).clone()).open();
    });

    $("body").on("click", "input[type=text],input[type=number]", function () {
        if ($(this).val() == "0")
            this.select();
    });

    $("body").off("click", ".print-button").on("click", ".print-button", function (event) {
        event.preventDefault();
        var $btn = $(this);

        var $printframe = $("#printframe");

        if ($printframe.length == 0) {
            $printframe = $('<iframe src="' + $btn.data("printurl") + '" class="hidden" name="printframe" id="printframe"></iframe>').appendTo("body");
        } else {
            $printframe.prop("src", $btn.data("printurl"))
        }

        $printframe.load(function () {
            if (detectIE()) {
                window.frames['printframe'].document.execCommand('print', false, null);
            } else {
                window.frames['printframe'].window.print();
            }
        });
    });

    function changeCultureUrl(culture) {
        var _culture = window.location.pathname.toString().substring(1, 6),
            pureurl = window.location.pathname.toString().substring(6);

        if (!new RegExp(/\w\w\-\w\w/).test(_culture)) {
            pureurl = "/" + _culture + pureurl;
        }

        if (_culture != culture) {
            if (culture)
                culture = "/" + culture;
            else
                culture = "";
            window.location = culture + (pureurl || "/");
        }
    }

    $(".language-list").on('click', ".item", function (event) {
        event.preventDefault();
        changeCultureUrl($(this).data("culture"));
    });


    $(".language-switch").on("click", function (event) {
        event.stopPropagation();
        $(this).find(".language-list").toggleClass("hidden");
    });

    $(document).on("click", function () {
        $(".language-list").addClass("hidden");
    });

});;
