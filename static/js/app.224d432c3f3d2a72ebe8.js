webpackJsonp([2,0],[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(124),r=o(i),a=n(118),s=o(a);new r.default({el:"#app",template:"<App/>",components:{App:s.default}})},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(47),r=o(i),a=(0,r.default)({});t.default=a},,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){b.sideBar.close(),x.select(e),w.set("lang",x.selected)}function r(e){b.sideBar.showContext(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(65),s=o(a),c=n(49),u=o(c),l=n(53),d=o(l),f=n(54),v=o(f),p=n(17),h=o(p),m=n(29),g=o(m),w=u.default.instance({lang:"js"}),x=new d.default;x.add("js","JavaScript"),x.add("jsx","React"),x.add("css","Cascading Style Sheets"),x.add("html","HTML"),x.add("java","Java"),x.add("py","Python"),x.add("lua","Lua"),x.add("php","PHP"),x.add("rb","Ruby"),x.add("cpp","C++",".C, .cc, .cpp, .c++, .cp, .cxx, .h"),x.add("pl","Perl",".pm"),x.add("cs","C#"),x.add("scala","Scala"),x.add("go","Go"),x.add("sql","SQL"),x.add("rs","Rust"),x.add("lisp","Lisp",".lsp, .lisp"),x.add("clj","Clojure",".clj, .cljs"),x.add("kt","Kotlin",".kt, .ktm, .kts"),x.add("cmake","CMake",".cmake, .cmake.in"),x.add("swift","Swift"),x.add("hs","Haskell",".hs, .hsc"),x.add("ex","Elixir",".ex, .exs"),x.add("objc","Objective C/C++",".m, .mm"),x.add("fs","F#",".fs, .fsi"),x.add("elm","Elm",".elm"),x.add("purs","PureScript",".purs"),x.add("pas","Pascal",".pas"),x.select(w.get("lang")),w.onChange(function(){x.select(w.get("lang"))});var b={languages:x,listState:{expanded:!1},allWords:[],sideBar:(0,v.default)(x),updateSelected:i,selectWord:r};t.default=b,h.default.on("context-changed",function(e){b.allWords=(0,s.default)(e).map(function(t){return e[t]}).sort(function(e,t){return t.total-e.total}).map(function(e,t){return{place:t,text:e.word,total:(0,g.default)(e.total)}})})},function(e,t){"use strict";function n(e){return e.toString(10).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=(0,d.default)(null);return e.forEach(function(e){var n=r(e.context);t[e.word]={lines:n,word:e.word,total:e.useCount}}),t}function r(e){var t=new u.default;return e.forEach(function(e){var n=e[0];t.set(n,(t.get(n)||0)+e[1])}),(0,s.default)(t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(61),s=o(a),c=n(62),u=o(c),l=n(63),d=o(l),f=n(30),v=o(f),p=n(31),h=o(p),m=n(32),g=o(m),w=n(57),x=o(w),b="static/data",y=function(){function e(t,n,o){(0,v.default)(this,e),this.extension=t;var i=o||"."+t;this.text=n+" - "+i,this.positions=null}return(0,h.default)(e,[{key:"markSelected",value:function(e){this.selected=e}},{key:"getLinesWithWord",value:function(e){var t=this;if(!this.context){var n=new g.default(function(n){t.pendingWordContext={resolve:n,word:e}});return n}return this.buildLinesWithWord(e)}},{key:"loadPositions",value:function(){var e=this;if(this.positions)return g.default.resolve(this.positions);var t=b+"/"+this.extension,n=(0,x.default)(t+"/index.json").then(function(t){return e.positions=t,t});return n}},{key:"loadContext",value:function(){var e=this;if(this.context)return g.default.resolve(this.context);var t=b+"/"+this.extension;return(0,x.default)(t+"/context.json").then(function(t){return e.context=i(t),e.pendingWordContext&&e.buildLinesWithWord(e.pendingWordContext.word).then(function(t){e.pendingWordContext.resolve(t),e.pendingWordContext=null}),e.context})}},{key:"buildLinesWithWord",value:function(e){if(!this.context)throw new Error("You are not supposed to call this function directly. use getLinesWithWord() instead");var t=this.context[e];if(!t)throw new Error(e+" is not part of the "+this.extension+". How did you get here?");return g.default.resolve(t)}}]),e}();t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),r=o(i),a=n(31),s=o(a),c=n(52),u=o(c),l=n(17),d=o(l),f=function(){function e(){(0,r.default)(this,e),this.known={},this.list=[],this.selected=""}return(0,s.default)(e,[{key:"add",value:function(e,t,n){if(void 0!==this.known[e])throw new Error("Extension is already registered");this.known[e]=this.list.length,this.list.push(new u.default(e,t,n))}},{key:"select",value:function(e){var t=this.getLanguageByExtension(this.selected);t&&t.markSelected(!1);var n=this.getLanguageByExtension(e);if(!n)throw new Error("unknown langauge "+e);this.selected=e,d.default.fire("loading"),n.loadPositions().then(function(e){d.default.fire("loaded",e)}),n.loadContext().then(function(e){d.default.fire("context-changed",e)})}},{key:"getLanguageByExtension",value:function(e){var t=this.known[e];return this.list[t]}}]),e}();t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){function t(){o.show=!1}function n(t){var n=e.getLanguageByExtension(e.selected);if(!n)throw new Error("How come there is no selected language?");n.getLinesWithWord(t).then(function(e){o.show=!0,o.lines=e.lines.map(function(e){return r(e,t)}),o.header=e.word+"  - "+(0,s.default)(e.total)})}var o={show:!1,header:"",word:"",showContext:n,close:t};return o}function r(e,t){for(var n=new RegExp("\\b"+t+"\\b"),o=e[0].split(n).map(function(e){return{text:e,bold:!1}}),i=[],r=0;r<o.length-1;++r)i.push(o[r],{text:t,bold:!0});i.push(o[o.length-1]);var a=(0,s.default)(e[1]);return{text:e[0],count:a,parts:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=n(29),s=o(a)},function(e,t){"use strict";function n(e,t){function n(e){d=new Date,f.x=e.pageX,f.y=e.pageY}function r(e){c(e,e)}function a(e){var t=e.touches;1===t.length&&(d=new Date,f.x=e.touches[0].pageX,f.y=e.touches[0].pageY)}function s(e){e.touches.length>1||c(e.changedTouches[0],e)}function c(e,t){var n=new Date-d;if(!(n>o)){var r=e.pageX-f.x,a=e.pageY-f.y;r*r+a*a<i&&l(t)}}function u(){e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",r),e.removeEventListener("touchend",s),e.removeEventListener("touchstart",a)}function l(e){t(e)}var d=void 0,f={x:0,y:0};return"function"==typeof t&&(e.addEventListener("mousedown",n),e.addEventListener("mouseup",r),e.addEventListener("touchend",s),e.addEventListener("touchstart",a)),u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=300,i=25},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={coffee:{text:["#3C3A40","#817463","#8a3c18","#B9424D","#310E17"],back:"#f6f9ff"},brownee:{text:["#98a8b8","#4a5364","#8a3c18","#30140b","#0a0909"],back:"#f6f9ff"},lavender:{text:["#1b1341","#3a417a","#3d57b1","#abb2e1","#d3d5f2"],back:"white"},darkspring:{text:["#0e4675","#9ae1d4","#f9d4db","#ff9690","#f9545b"],back:"#111"},autumn:{text:["#3f2d3b","#743042","#9c1f2d","#dd800b","#fab509"],back:"white"},molokai:{text:["#FFFFFF","#48483E","#FE9720","#FA2772","#E7DB75","#A7E22E","#66D9EE","#AF81FF"],back:"#252922"},solarized:{text:["#B58900","#CB4B16","#D33682","#DC322F","#6C71C4","#268BD2","#2AA198","#859900"],back:"#FDF6E3"},"solarized-dark":{text:["#B58900","#CB4B16","#D33682","#DC322F","#6C71C4","#268BD2","#2AA198","#859900"],back:"#002B36"},github:{text:["#795da3","#333333","#ed6a43","#a71d5d","#0086b3","#63a35c"],back:"ffffff"},nova:{text:["#D32F2F","#C2185B","#7B1FA2","#512DA8"],back:"#fafafa"},uni:{text:["#000"],back:"white"}};t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(n,o){function i(e){e.lengthComputable&&t.progress({loaded:e.loaded,total:e.total,percent:e.loaded/e.total})}function r(){if(200!==c.status)return void o("Unexpected status code "+c.status+" when calling "+e);var i=c.response;"json"===t.responseType&&"string"==typeof i&&(i=JSON.parse(i)),n(i)}function a(){o("Failed to download "+e)}function s(){o("Cancelled download of "+e)}var c=new window.XMLHttpRequest;"function"==typeof t.progress&&c.addEventListener("progress",i,!1),c.addEventListener("load",r,!1),c.addEventListener("error",a,!1),c.addEventListener("abort",s,!1),c.open("GET",e),t.responseType&&(c.responseType=t.responseType),c.send(null)}return t||(t={}),e.indexOf(".json")===e.length-5&&(t.responseType="json"),new a.default(n)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(32),a=o(r);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(28),r=o(i),a=n(120),s=o(a),c=n(119),u=o(c);t.default={name:"app",components:{WordsCloudRenderer:s.default,DropClick:u.default},data:function(){return r.default},methods:{updateSelectedLanguage:function(e){r.default.updateSelected(e)},closeContext:function(){this.sideBar.close()},toggleList:function(e){"SELECT"!==e.target.nodeName&&(this.listState.expanded=!this.listState.expanded)}},computed:{isContextVisible:function(){return this.sideBar.show}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{items:{default:[]},selected:{default:""}},data:function(){return{hover:!1,selectedInternal:this.selected}},watch:{selectedInternal:function(){this.$emit("selected",this.selectedInternal)}},computed:{selectedName:function(){return this.selected}},methods:{getValue:function(e){return e.value||e.name},triggerMouseEnter:function(e){this.hover=e}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){var o=0,i=0;n.forEach(function(e){e.x>o&&(o=e.x),e.y>i&&(i=e.y)}),r(e.ownerSVGElement.parentNode,t,o,i)}function r(e,t,n,o){var i=e.clientWidth/n,r=e.clientHeight/o,a=Math.min(i,r);t.zoomAbs(0,0,a);var s=(e.clientWidth-n*a)/2,c=(e.clientHeight-o*a)/2;t.moveTo(s,c)}function a(e){return e[C.next(e.length)]}function s(e){if("innerHTML"in e)e.innerHTML="";else for(;e.hasChildNodes();)e.removeChild(e.lastChild)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(126),u=o(c),l=n(113),d=o(l),f=n(50),v=o(f),p=n(49),h=n(17),m=o(h),g=n(28),w=o(g),x=n(56),b=o(x),y=n(55),E=o(y),_=(0,p.instance)(),C=n(109).random(42);t.default={mounted:function(){m.default.on("loading",this.clearScene,this),m.default.on("loaded",this.renderScene,this),this.zoomer=(0,u.default)(this.$refs.scene),this.scene=(0,v.default)(this.$refs.scene),this.disposeClap=(0,E.default)(this.scene,this.selectText.bind(this))},destroyed:function(){m.default.off("loading",this.clearScene,this),m.default.off("loaded",this.renderScene,this),this.zoomer.dispose(),this.disposeClap()},methods:{clearScene:function(){s(this.scene)},selectText:function(e){"text"===e.target.tagName&&w.default.selectWord(e.target.text())},renderScene:function(e){function t(e){var t="translate("+e.x+", "+e.y+")";e.rotate&&(t+=" rotate(-90)");var n=(0,v.default)("text",{transform:t,x:e.dx,"font-size":e.fontSize,"font-family":e.fontFamily,"dominant-baseline":"text-before-edge",fill:a(o.text)});n.text(e.text),r.appendChild(n)}var n=_.get("theme"),o=b.default[n]||b.default.brownee;document.body.style.backgroundColor=o.back;var r=this.scene;i(this.scene,this.zoomer,e),(0,d.default)(e,t,function(){return 0},{probeElements:20})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,function(e,t,n){var o,i;n(108),o=n(58);var r=n(123);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,i;n(107),o=n(59);var r=n(122);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,i;n(106),o=n(60);var r=n(121);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"scene-container"},[t("svg",[t("g",{ref:"scene"})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"drop-click-container"},[t("span",{staticClass:"drop-click-name",class:{hover:e.hover},attrs:{title:e.selectedName}},[e._v("\n    "+e._s(e.selectedName)+"\n    "),t("div",{staticClass:"button-dropdown"},[e._v(" ")])]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedInternal,expression:"selectedInternal"}],staticClass:"back-dropdown",on:{mouseenter:function(t){e.triggerMouseEnter(!0)},mouseleave:function(t){e.triggerMouseEnter(!1)},focus:function(t){e.triggerMouseEnter(!0)},blur:function(t){e.triggerMouseEnter(!1)},change:function(t){e.selectedInternal=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t})[0]}}},[e._l(e.items,function(t){return e._t("item",null,{item:t})})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"app"}},[t("words-cloud-renderer"),e._v(" "),t("a",{staticClass:"about",attrs:{href:"https://github.com/anvaka/common-words",title:"about this website..."}},[e._v("?")]),e._v(" "),t("div",{staticClass:"language-picker no-print",class:{"list-expanded":e.listState.expanded}},[t("div",{staticClass:"header no-select",class:{"context-visible":e.isContextVisible},on:{click:e.toggleList}},[e._v("\n    Most used words in\n    "),t("drop-click",{attrs:{selected:e.languages.selected,items:e.languages.list},on:{selected:e.updateSelectedLanguage},scopedSlots:{item:function(n){return[t("option",{domProps:{value:n.item.extension}},[e._v(e._s(n.item.text))])]}}}),e._v(" files\n    ")],1),e._v(" "),t("div",{staticClass:"word-list"},[t("div",{staticClass:"all-words list",class:{"context-visible":e.isContextVisible}},e._l(e.allWords,function(n){return t("a",{staticClass:"line",attrs:{href:"#",title:n.text},on:{click:function(t){t.preventDefault(),e.selectWord(n.text)}}},[t("div",{staticClass:"place"},[e._v(e._s(n.place))]),e._v(" "),t("div",{staticClass:"word"},[e._v(e._s(n.text))]),e._v(" "),t("div",{staticClass:"count",attrs:{align:"right"}},[e._v(e._s(n.total))])])})),e._v(" "),t("div",{staticClass:"context",class:{"context-visible":e.isContextVisible}},[t("div",{staticClass:"context-header"},[t("a",{staticClass:"back-to-all",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.closeContext(t)}}},[e._v("all → ")]),e._v(" "),t("a",{staticClass:"context-word",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.toggleList(t)}}},[e._v(e._s(e.sideBar.header))])]),e._v(" "),t("div",{staticClass:"list"},e._l(e.sideBar.lines,function(n){return t("div",{staticClass:"line"},[t("div",{staticClass:"parts",attrs:{title:n.text}},e._l(n.parts,function(n){return t("span",{class:{highlight:n.bold}},[e._v(e._s(n.text))])})),e._v(" "),t("div",{staticClass:"count"},[e._v(e._s(n.count))])])}))])]),e._v(" "),t("a",{staticClass:"expand-list context-action",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.toggleList(t)}}},[e._v(e._s(e.listState.expanded?"hide list":"show list"))])])],1)},staticRenderFns:[]}},,,function(e,t,n){function o(e,t){function n(){return ne}function o(){return{x:ne.x,y:ne.y}}function a(e,t){ne.x=e,ne.y=t,x(),Q("pan"),_()}function w(e,t){a(ne.x+e,ne.y+t)}function x(){var e=b();if(e){var t=!1,n=y(),o=e.left-n.right;return o>0&&(ne.x+=o,t=!0),o=e.right-n.left,o<0&&(ne.x+=o,t=!0),o=e.top-n.bottom,o>0&&(ne.y+=o,t=!0),o=e.bottom-n.top,o<0&&(ne.y+=o,t=!0),t}}function b(){if(se){if("boolean"==typeof se){var e=ie.clientWidth,t=ie.clientHeight;return{left:e*me,top:t*me,right:e*(1-me),bottom:t*(1-me)}}return se}}function y(){var t=e.getBBox(),n=E(t.x,t.y);return{left:n.x,top:n.y,right:t.width*ne.scale+n.x,bottom:t.height*ne.scale+n.y}}function E(e,t){return{x:e*ne.scale+ne.x,y:t*ne.scale+ne.y}}function _(){te=!0,oe=window.requestAnimationFrame(P)}function C(e,t,n){if(s(e)||s(t)||s(n))throw new Error("zoom requires valid numbers");var o=ne.scale*n;if(!(o>pe||o<he)){var i=ie.getScreenCTM(),r=e*i.a-i.e,a=t*i.a-i.f;ne.x=r-n*(r-ne.x),ne.y=a-n*(a-ne.y);var c=x();c||(ne.scale*=n),Q("zoom"),_()}}function k(e,t,n){var o=n/ne.scale;C(e,t,o)}function L(e){var t=e.ownerSVGElement;if(!t)throw new Error("ui element is required to be within the scene");var n=e.getBoundingClientRect(),o=n.left+n.width/2,i=n.top+n.height/2,r=t.getBoundingClientRect(),a=r.width/2-o,s=r.height/2-i;M(a,s,!0)}function M(e,t,n){if(!n)return w(e,t);de&&de.cancel();var o={x:0,y:0},i={x:e,y:t},r=0,a=0;de=u(o,i,{step:function(e){w(e.x-r,e.y-a),r=e.x,a=e.y}})}function S(e,t){Z(),a(e,t)}function F(){c.removeWheelListener(e,q),ie.removeEventListener("mousedown",z),ie.removeEventListener("keydown",W),ie.removeEventListener("dblclick",T),oe&&(window.cancelAnimationFrame(oe),oe=0),ye.cancel(),V(),H(),K()}function D(){ie.addEventListener("mousedown",z),ie.addEventListener("dblclick",T),ie.addEventListener("touchstart",A),ie.addEventListener("keydown",W),c.addWheelListener(ie,q),_()}function P(){te&&j()}function j(){te=!1,e.setAttribute("transform","matrix("+ne.scale+" 0 0 "+ne.scale+" "+ne.x+" "+ne.y+")"),oe=0}function W(e){var t=0,n=0,o=0;if(38===e.keyCode?n=1:40===e.keyCode?n=-1:37===e.keyCode?t=1:39===e.keyCode?t=-1:189===e.keyCode||109===e.keyCode?o=1:187!==e.keyCode&&107!==e.keyCode||(o=-1),t||n){e.preventDefault(),e.stopPropagation();var i=ie.getBoundingClientRect(),r=Math.min(i.width,i.height),a=.05,s=r*a*t,c=r*a*n;M(s,c)}if(o){var u=J(o);$(ie.clientWidth/2,ie.clientHeight/2,u)}}function A(e){return 1===e.touches.length?B(e,e.touches[0]):void(2===e.touches.length&&(e.stopPropagation(),e.preventDefault(),le=I(e.touches[0],e.touches[1]),ve=!0,O()))}function B(e){e.stopPropagation(),e.preventDefault();var t=e.touches[0];ce=t.clientX,ue=t.clientY,O()}function O(){xe||(xe=!0,document.addEventListener("touchmove",X),document.addEventListener("touchend",Y),document.addEventListener("touchcancel",Y))}function X(e){if(1===e.touches.length){e.stopPropagation();var t=e.touches[0],n=t.clientX-ce,o=t.clientY-ue;0!==n&&0!==o&&U(),ce=t.clientX,ue=t.clientY,M(n,o)}else if(2===e.touches.length){ve=!0;var i=e.touches[0],r=e.touches[1],a=I(i,r),s=0;a<le?s=1:a>le&&(s=-1);var c=J(s);ce=(i.clientX+r.clientX)/2,ue=(i.clientY+r.clientY)/2,$(ce,ue,c),le=a,e.stopPropagation(),e.preventDefault()}}function Y(e){if(e.touches.length>0)ce=e.touches[0].clientX,ue=e.touches[0].clientY;else{var t=new Date;t-we<g&&G(ce,ue,ge),we=t,xe=!1,K(),H()}}function I(e,t){return(e.clientX-t.clientX)*(e.clientX-t.clientX)+(e.clientY-t.clientY)*(e.clientY-t.clientY)}function T(e){G(e.clientX,e.clientY,ge),e.preventDefault(),e.stopPropagation()}function z(e){if(xe)return e.stopPropagation(),!1;var t=1===e.button&&null!==window.event||0===e.button;if(t)return ce=e.clientX,ue=e.clientY,document.addEventListener("mousemove",N),document.addEventListener("mouseup",R),f.capture(e.target||e.srcElement),!1}function N(e){if(!xe){U();var t=e.clientX-ce,n=e.clientY-ue;ce=e.clientX,ue=e.clientY,M(t,n)}}function R(){f.release(),K(),V()}function V(){document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",R),be=!1}function H(){document.removeEventListener("touchmove",X),document.removeEventListener("touchend",Y),document.removeEventListener("touchcancel",Y),be=!1,ve=!1}function q(e){if(!re(e)){ye.cancel();var t=J(e.deltaY);1!==t&&($(e.clientX,e.clientY,t),e.preventDefault())}}function G(t,n,o){var i=v(e),r=i.matrix.a,a={scale:r},s={scale:o*r};ye.cancel(),Z(),Q("zoom"),fe=u(a,s,{step:function(e){k(t,n,e.scale)}})}function $(e,t,n){return ye.cancel(),Z(),C(e,t,n)}function Z(){fe&&(fe.cancel(),fe=null)}function J(e){var t=1;return e>0?t=1-ae:e<0&&(t=1+ae),t}function U(){be||(Q("panstart"),be=!0,ye.start())}function K(){be&&(ve||ye.stop(),Q("panend"))}function Q(t){var n=d(t);e.dispatchEvent(n)}var ee=e instanceof SVGElement,te=!1,ne=new p;if(!ee)throw new Error("svg element is required for svg.panzoom to work");var oe,ie=e.ownerSVGElement;if(!ie)throw new Error("Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element");ie.setAttribute("tabindex",1),t=t||{};var re=t.beforeWheel||i,ae="number"==typeof t.zoomSpeed?t.zoomSpeed:h,se=t.bounds;r(se);var ce,ue,le,de,fe,ve,pe="number"==typeof t.maxZoom?t.maxZoom:Number.POSITIVE_INFINITY,he="number"==typeof t.minZoom?t.minZoom:0,me="number"==typeof t.boundsPaddding?t.boundsPaddding:.05,ge="number"==typeof t.zoomDoubleClickSpeed?t.zoomDoubleClickSpeed:m,we=0,xe=!1,be=!1,ye=l(o,S);return D(),{dispose:F,moveBy:M,moveTo:a,centerOn:L,zoomTo:$,zoomAbs:k,getTransform:n}}function i(){}function r(e){var t=typeof e;if("undefined"!==t&&"boolean"!==t){var n=a(e.left)&&a(e.top)&&a(e.bottom)&&a(e.right);if(!n)throw new Error("Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}")}}function a(e){return Number.isFinite(e)}function s(e){return Number.isNaN?Number.isNaN(e):e!==e}var c=n(134),u=n(132),l=n(129),d=n(127),f=n(130)(),v=n(128),p=n(131),h=.065,m=1.75,g=300;e.exports=o},function(e,t){function n(e){if(o){var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!0,!0,void 0),t}return new Event(e,{bubbles:!0})}e.exports=n;var o="function"!=typeof Event},function(e,t){function n(e){var t=e.transform.baseVal;if(t.numberOfItems)return t.getItem(0);var n=e.ownerSVGElement||e,o=n.createSVGTransform();return e.transform.baseVal.appendItem(o),o}e.exports=n},function(e,t){function n(e,t){function n(){window.clearInterval(d),window.cancelAnimationFrame(w)}function r(){u=e(),p=g=f=h=0,l=new Date,window.clearInterval(d),window.cancelAnimationFrame(w),d=window.setInterval(a,100)}function a(){var t=Date.now(),n=t-l;l=t;var o=e(),i=o.x-u.x,r=o.y-u.y;u=o;var a=1e3/(1+n);f=.8*i*a+.2*f,h=.8*r*a+.2*h}function s(){window.clearInterval(d),window.cancelAnimationFrame(w);var t=e();v=t.x,m=t.y,l=Date.now(),(f<-o||f>o)&&(p=i*f,v+=p),(h<-o||h>o)&&(g=i*h,m+=g),w=window.requestAnimationFrame(c)}function c(){var e=Date.now()-l,n=!1,o=0,i=0;p&&(o=-p*Math.exp(-e/x),o>.5||o<-.5?n=!0:o=p=0),g&&(i=-g*Math.exp(-e/x),i>.5||i<-.5?n=!0:i=g=0),n&&(t(v+o,m+i),w=window.requestAnimationFrame(c))}var u,l,d,f,v,p,h,m,g,w,x=342;return{start:r,stop:s,cancel:n}}e.exports=n;var o=10,i=.42},function(e,t){function n(){function e(e){i=window.document.onselectstart,r=window.document.ondragstart,window.document.onselectstart=o,n=e,n.ondragstart=o}function t(){window.document.onselectstart=i,n&&(n.ondragstart=r)}var n,i,r;return{capture:e,release:t}}function o(e){return e.stopPropagation(),!1}e.exports=n},function(e,t){function n(){this.x=0,this.y=0,this.scale=1}e.exports=n},function(e,t,n){function o(e,t,n){function o(){p.cancel(m),m=0}function a(){var t=d(x/w);x+=1,s(t),x<=w?(m=p.next(a),f(e)):(m=0,setTimeout(function(){v(e)},0))}function s(t){h.forEach(function(n){e[n]=l[n]*t+c[n]})}var c=Object.create(null),l=Object.create(null);n=n||{};var d="function"==typeof n.easing?n.easing:u[n.easing];d||(n.easing&&console.warn("Unknown easing function in amator: "+n.easing),d=u.ease);var f="function"==typeof n.step?n.step:i,v="function"==typeof n.done?n.done:i,p=r(n.scheduler),h=Object.keys(t);h.forEach(function(n){c[n]=e[n],l[n]=t[n]-e[n]});var m,g=n.duration||400,w=Math.max(1,.06*g),x=0;return m=p.next(a),{cancel:o}}function i(){}function r(e){if(!e){var t="undefined"!=typeof window&&window.requestAnimationFrame;return t?a():s()}if("function"!=typeof e.next)throw new Error("Scheduler is supposed to have next(cb) function");if("function"!=typeof e.cancel)throw new Error("Scheduler is supposed to have cancel(handle) function");return e}function a(){return{next:window.requestAnimationFrame.bind(window),cancel:window.cancelAnimationFrame.bind(window)}}function s(){return{next:function(e){return setTimeout(e,1e3/60)},cancel:function(e){return clearTimeout(e)}}}var c=n(133),u={ease:c(.25,.1,.25,1),easeIn:c(.42,0,1,1),easeOut:c(0,0,.58,1),easeInOut:c(.42,0,.58,1),linear:c(0,0,1,1)};e.exports=o},function(e,t){function n(e,t){return 1-3*t+3*e}function o(e,t){return 3*t-6*e}function i(e){return 3*e}function r(e,t,r){return((n(t,r)*e+o(t,r))*e+i(t))*e}function a(e,t,r){return 3*n(t,r)*e*e+2*o(t,r)*e+i(t)}function s(e,t,n,o,i){var a,s,c=0;do s=t+(n-t)/2,a=r(s,o,i)-e,a>0?n=s:t=s;while(Math.abs(a)>d&&++c<f);return s}function c(e,t,n,o){for(var i=0;i<u;++i){var s=a(t,n,o);if(0===s)return t;var c=r(t,n,o)-e;t-=c/s}return t}var u=4,l=.001,d=1e-7,f=10,v=11,p=1/(v-1),h="function"==typeof Float32Array;e.exports=function(e,t,n,o){function i(t){for(var o=0,i=1,r=v-1;i!==r&&u[i]<=t;++i)o+=p;--i;var d=(t-u[i])/(u[i+1]-u[i]),f=o+d*p,h=a(f,e,n);return h>=l?c(t,f,e,n):0===h?f:s(t,o,o+p,e,n)}if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var u=h?new Float32Array(v):new Array(v);if(e!==t||n!==o)for(var d=0;d<v;++d)u[d]=r(d*p,e,n);return function(a){return e===t&&n===o?a:0===a?0:1===a?1:r(i(a),t,o)}}},function(e,t){function n(e,t,n){i(e,u,t,n),"DOMMouseScroll"==u&&i(e,"MozMousePixelScroll",t,n)}function o(e,t,n){r(e,u,t,n),"DOMMouseScroll"==u&&r(e,"MozMousePixelScroll",t,n)}function i(e,t,n,o){e[s](l+t,"wheel"==u?n:function(e){!e&&(e=window.event);var t={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,delatZ:0,clientX:e.clientX,clientY:e.clientY,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){e.stopImmediatePropagation&&e.stopImmediatePropagation()}};return"mousewheel"==u?(t.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX)):t.deltaY=e.detail,n(t)},o||!1)}function r(e,t,n,o){e[c](l+t,n,o||!1)}function a(e,t){e&&e.addEventListener?(s="addEventListener",c="removeEventListener"):(s="attachEvent",c="detachEvent",l="on"),u=t?"onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll":"wheel"}e.exports=n,e.exports.addWheelListener=n,e.exports.removeWheelListener=o;var s,c,u,l="";a("undefined"!=typeof window&&window,"undefined"!=typeof document&&document)}]);
//# sourceMappingURL=app.224d432c3f3d2a72ebe8.js.map