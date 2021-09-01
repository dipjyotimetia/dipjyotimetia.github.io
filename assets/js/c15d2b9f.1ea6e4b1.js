(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[7197],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7355:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},Highlight:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c={id:"react1",title:"React"},i=void 0,p={unversionedId:"snippets/programming/react/react1",id:"snippets/programming/react/react1",isDocsHomePage:!1,title:"React",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/snippets/programming/react/react1.mdx",sourceDirName:"snippets/programming/react",slug:"/snippets/programming/react/react1",permalink:"/docs/snippets/programming/react/react1",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/programming/react/react1.mdx",tags:[],version:"current",frontMatter:{id:"react1",title:"React"},sidebar:"Docs",previous:{title:"Get Started",permalink:"/docs/snippets/programming/java/java1"},next:{title:"Get Started",permalink:"/docs/snippets/programming/python/python1"}},s=[],u=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:s,Highlight:u};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can write JSX and use React components within your Markdown thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => ( <span style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>{children}</span> );\n")),(0,a.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,a.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,a.kt)("p",null,"I can write ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,a.kt)("em",{parentName:"p"},"JSX"),"!"))}m.isMDXComponent=!0}}]);