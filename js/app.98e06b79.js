(function(){"use strict";var e={9239:function(e,t,i){var n=i(9242),r=i(3396),a=i.p+"img/profile_pic.9f89e3f0.jpg";const o={class:"page"},s=(0,r.uE)('<nav class="navbar_custom"><a href="#home" class="navbar_title">Liew Kai Le</a><div class="navbar_section"><a href="#home" class="home active">Home</a><a href="#about" class="about">About</a><a href="#services" class="services">Services</a><a href="#workExperience" class="workExperience">Work Experience</a><a href="#portfolio" class="portfolio">Portfolio</a><a href="#rating" class="rating">Rating</a><a href="#contact" class="contact">Contact</a></div></nav><div class="page_inner"><section id="home"><div class="home_empty"></div><div class="home_div reveal_left"><p class="description">I&#39;m a</p><p class="description" style="text-decoration:underline;">Freelancer</p><p class="description">as</p><div class="typewriter" id="myTypewriter"><h1 class="typewriterText" id="myTypewriterText">Python developer</h1></div><div></div></div><div class="home_empty"></div><div class="home_div reveal_right"><img class="profile_pic" src="'+a+'" alt="Profile pic"></div><div class="home_empty"></div></section><section id="about"><h1 class="title">About</h1><div class="about_div"><div class="about_div_inner"><p class="about_description reveal"> Hey there! I got 3 years plus of experience as developer. I like to discover new technologies, especially in software field. I switched to freelance and dedicated to <u>Upwork</u>. Feel free to contact me for any exciting project! </p></div><div class="about_div_inner"><p class="about_description reveal"> My speciality on programming language is <u>Python, PHP and Vue</u>. I prefer doing web programming than native app programming because there is so much possibility in web, also with responsive design. </p></div></div></section><section id="services"><h1 class="title">Services</h1></section><section id="workExperience"><h1 class="title">Work Experience</h1></section></div>',2),c=[s];function l(e,t,i,n,a,s){return(0,r.wg)(),(0,r.iD)("div",o,c)}var d={name:"App",components:{},data:function(){return{messages:["PHP developer","Vue developer","Python developer"],rank:0,currentHath:""}},created(){document.title="Liew Kai Le"},mounted(){this.reveal(),this.active_link(),this.currentPath=window.location.pathname+"#home",window.addEventListener("scroll",this.reveal),window.addEventListener("scroll",this.active_link),window.addEventListener("scroll",this.change_url),document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd",this.changeTxt),document.getElementById("myTypewriter").addEventListener("animationend",this.changeTxt)},methods:{changeTxt(){let e=document.getElementById("myTypewriterText");e.style.webkitAnimation="none",setTimeout((()=>{e.innerHTML=this.messages[this.rank];let t=3.5*this.messages[this.rank].length/20;e.style.webkitAnimation="typing "+t+"s steps(40, end), blink-caret .75s step-end infinite",this.rank===this.messages.length-1?this.rank=0:this.rank++}),1e3)},reveal(){var e=document.querySelectorAll(".reveal"),t=document.querySelectorAll(".reveal_left"),i=document.querySelectorAll(".reveal_right");this.reveal_inner(e),this.reveal_inner(t),this.reveal_inner(i)},reveal_inner(e){for(var t=0;t<e.length;t++){var i=window.innerHeight,n=e[t].getBoundingClientRect().top,r=100;n<i-r?e[t].classList.add("active"):e[t].classList.remove("active")}},active_link(){const e=document.querySelectorAll("section"),t=document.querySelectorAll("nav .navbar_section a");var i="";e.forEach((e=>{const t=e.offsetTop;pageYOffset>=t-200&&(i=e.getAttribute("id"))})),t.forEach((e=>{e.classList.remove("active"),e.classList.contains(i)&&e.classList.add("active")}))},change_url(){const e=document.querySelectorAll("section"),t=document.querySelectorAll("nav .navbar_section a");var i="",n=window.location.pathname+"#"+i,r=!1;e.forEach((e=>{const t=e.offsetTop;pageYOffset>=t-200&&(i=e.getAttribute("id"))})),t.forEach((e=>{e.classList.contains(i)&&(n=window.location.pathname+"#"+i,n!=this.currentPath&&(r=!0))})),1==r&&(console.log("window.location.pathname",n),this.currentPath=n,window.history.pushState(null,"",this.currentPath))}}},u=i(89);const v=(0,u.Z)(d,[["render",l]]);var h=v;(0,n.ri)(h).mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,a){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/liewkaile/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],s=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var d=c(i)}for(t&&t(n);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},n=self["webpackChunkliewkaile"]=self["webpackChunkliewkaile"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(9239)}));n=i.O(n)})();
//# sourceMappingURL=app.98e06b79.js.map