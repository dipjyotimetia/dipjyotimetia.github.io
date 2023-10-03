"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),w=o,g=u["".concat(s,".").concat(w)]||u[w]||m[w]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}w.displayName="MDXCreateElement"},7e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={id:"playwrighttestframework",title:"Playwright Test Framework",sidebar_label:"Playwright Test Framework",description:"WEB, API testing framework using playwright",keywords:["playwright","testing","api"]},i="\ud83c\udfad Playwright | AutomationTest | UI Framework",l={unversionedId:"projects/playwrighttestframework",id:"projects/playwrighttestframework",title:"Playwright Test Framework",description:"WEB, API testing framework using playwright",source:"@site/docs/projects/playwright.md",sourceDirName:"projects",slug:"/projects/playwrighttestframework",permalink:"/docs/projects/playwrighttestframework",draft:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/projects/playwright.md",tags:[],version:"current",frontMatter:{id:"playwrighttestframework",title:"Playwright Test Framework",sidebar_label:"Playwright Test Framework",description:"WEB, API testing framework using playwright",keywords:["playwright","testing","api"]},sidebar:"sidebar",previous:{title:"Testcafe Test Framework",permalink:"/docs/projects/testcafe"},next:{title:"Api Test Framework",permalink:"/docs/projects/apitestautomation"}},s={},p=[{value:"Tech Details",id:"tech-details",level:2},{value:"Docker container run",id:"docker-container-run",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-playwright--automationtest--ui-framework"},"\ud83c\udfad Playwright | AutomationTest | UI Framework"),(0,o.kt)("h2",{id:"tech-details"},"Tech Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright - Playwright is a cross-browser automation library for Node.js. It enables you to write reliable end-to-end tests for web applications and websites. With Playwright, you can automate scenarios across multiple browsers (Chromium, Firefox, WebKit) and platforms (Windows, Linux, macOS)."),(0,o.kt)("li",{parentName:"ul"},"Allure - Allure is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com/"},"Axios")),(0,o.kt)("p",null,"This patch allows passing 0 to disable timeout for the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await page.goto(`http://www.goole.com.au`, { timeout: 0 });\nawait page.waitForSelector(`a[href='/signup']`, { visible: true });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"page.goto"),(0,o.kt)("li",{parentName:"ul"},"page.waitForNavigation"),(0,o.kt)("li",{parentName:"ul"},"page.goForward"),(0,o.kt)("li",{parentName:"ul"},"page.goBack")),(0,o.kt)("h3",{id:"docker-container-run"},"Docker container run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")))}u.isMDXComponent=!0}}]);