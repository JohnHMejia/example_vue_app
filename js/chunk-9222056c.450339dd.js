(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9222056c"],{3427:function(t,n,e){"use strict";function r(t){var n=document.getElementById(t);n.setAttribute("data-enabledText",n.innerHTML),n.disabled=!0,n.innerHTML='<span class="spinner-grow spinner-grow-md" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'}function s(){r("nextButton")}function o(){var t=document.getElementById("nextButton"),n=t.getAttribute("data-enabledText");t.disabled=!1,t.innerHTML=n}function i(t){var n=document.getElementById(t);n.style.display="block"}function a(t){var n=document.getElementById(t);n.style.display="none"}function u(t){var n=document.getElementById("errorMessage");n.style.display="block",n.innerText=t,i("errorMessage")}function c(){a("errorMessage")}e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return u})),e.d(n,"c",(function(){return c}))},a6b1:function(t,n,e){"use strict";var r=e("f072"),s=e.n(r);s.a},dbd5:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"py-4 text-center"},[e("h3",{attrs:{id:"story1"}},[t._v("A single "+t._s(this.registration.noun)+" is the key to not "+t._s(this.registration.gerund)+" your own "+t._s(this.registration.nouns)+".")]),e("h3",{attrs:{id:"story2"}},[t._v("Always bring a "+t._s(this.registration.noun)+" while "+t._s(this.registration.gerund)+" near "+t._s(this.registration.nouns)+".")]),e("h3",{attrs:{id:"story3"}},[t._v(" "+t._s(this.registration.noun)+" is the root of all evil, but "+t._s(this.registration.gerund)+" is nearly as good as "+t._s(this.registration.nouns)+".")])])])},s=[],o=e("2f62"),i=e("3427"),a={name:"Story",computed:Object(o["b"])({registration:function(t){return t}}),mounted:function(){var t=this.randomNumber(1,3);console.log("chosen: ".concat(t)),Object(i["e"])("story".concat(t))},methods:{randomNumber:function(t,n){var e=Math.ceil(t),r=Math.floor(n);return Math.floor(Math.random()*(r-e+1))+e}}},u=a,c=(e("a6b1"),e("2877")),d=Object(c["a"])(u,r,s,!1,null,"208cddb0",null);n["default"]=d.exports},f072:function(t,n,e){}}]);
//# sourceMappingURL=chunk-9222056c.450339dd.js.map