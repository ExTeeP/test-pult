!function(e){function t(t){for(var r,l,a=t[0],c=t[1],u=t[2],d=0,p=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=c;i.push([8,3]),n()}({4:function(e,t){document.querySelectorAll('a[href*="#"]').forEach((e=>{console.log(e),e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(`${n}`).scrollIntoView({behavior:"smooth",block:"start"})}))}))},8:function(e,t,n){"use strict";n.r(t),((e,t,n)=>{n=n||window;let r=!1;n.addEventListener(e,(()=>{r||(r=!0,requestAnimationFrame((()=>{n.dispatchEvent(new CustomEvent(t)),r=!1})))}))})("resize","optimizedResize");var r=n(13),o=n(11),i=n(12);n(3);r.a.use([o.a,i.a]);new r.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,renderBullet:function(e,t){return`<li class="carusel__dots-item ${t}">\n          <button class="carusel__dot sr-only" type="button">${e+1}</button>\n        </li>`}},autoplay:!0});document.documentElement.classList.remove("nojs");const l=document.querySelector(".burger"),a=document.querySelector(".header__menu"),c=function(){document.documentElement.classList.toggle("page--menu-open"),l.classList.toggle("burger__active"),a.classList.toggle("header__menu-open"),l.classList.contains("burger__active")?l.children[0].innerText="Закрыть меню":l.children[0].innerText="Открыть меню"},u=e=>{"A"===e.target.tagName&&c()},s=()=>{var e,t;(e=c,t=150,function(n){let r=window.lastCall;window.lastCall=Date.now(),(void 0===r||window.lastCall-r>t)&&e(n)})()};l.addEventListener("click",s),a.addEventListener("click",u),window.addEventListener("optimizedResize",(()=>{window.innerWidth>767?(l.removeEventListener("click",s),a.removeEventListener("click",u)):(l.addEventListener("click",s),a.addEventListener("click",u))}));n(4)}});