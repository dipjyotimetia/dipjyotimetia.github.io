"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[8049],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(y,p(p({ref:t},u),{},{components:r})):n.createElement(y,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9547:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),p=["components"],l={id:"hyperv",title:"Hyper-V",sidebar_label:"Hyper-V"},a=void 0,c={unversionedId:"snippets/generic/hyperv",id:"snippets/generic/hyperv",title:"Hyper-V",description:"Problem:",source:"@site/docs/snippets/generic/hyper-v.md",sourceDirName:"snippets/generic",slug:"/snippets/generic/hyperv",permalink:"/docs/snippets/generic/hyperv",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/generic/hyper-v.md",tags:[],version:"current",frontMatter:{id:"hyperv",title:"Hyper-V",sidebar_label:"Hyper-V"},sidebar:"Docs",previous:{title:"Api Test Sites",permalink:"/docs/snippets/generic/apitestsites"},next:{title:"Get Started",permalink:"/docs/snippets/programming/go/godoc1"}},u={},s=[{value:"Problem:",id:"problem",level:3},{value:"Solution:",id:"solution",level:3},{value:"Explanation:",id:"explanation",level:3}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"problem"},"Problem:"),(0,i.kt)("p",null,"After I installed Ubuntu Desktop in HyperV I could not get the machine to run full screen."),(0,i.kt)("h3",{id:"solution"},"Solution:"),(0,i.kt)("p",null,"Update your /etc/default/grub settings."),(0,i.kt)("h3",{id:"explanation"},"Explanation:"),(0,i.kt)("p",null,"Start terminal Type sudo vi /etc/default/grub Press i to enter edit mode Change the GRUB_CMDLINE_LINUX_DEFAULT=\u201dquiet splash\u201d line to GRUB_CMDLINE_LINUX_DEFAULT=\u201dquiet splash video=hyperv_fb:1920x1080\u201d Type :wq to save the file Run sudo update-grub Restart your VM, enter Full Screen mode and enjoy."))}d.isMDXComponent=!0}}]);