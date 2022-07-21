"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4204],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var s=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=s.createContext({}),p=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),v=a,f=m["".concat(i,".").concat(v)]||m[v]||c[v]||n;return r?s.createElement(f,l(l({ref:t},u),{},{components:r})):s.createElement(f,l({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var s=r(3117),a=r(102),n=(r(7294),r(3905)),l=["components"],o={slug:"serverless",title:"Serverless Framework",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["serverless","tech","aws"],description:"This is a blog about serverless framework using nodejs",image:"https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png",hide_table_of_contents:!0},i=void 0,p={permalink:"/blog/serverless",editUrl:"https://github.com/dipjyotimetia/blog/blog/blog/2020-05-16-serverless.md",source:"@site/blog/2020-05-16-serverless.md",title:"Serverless Framework",description:"This is a blog about serverless framework using nodejs",date:"2020-05-16T00:00:00.000Z",formattedDate:"May 16, 2020",tags:[{label:"serverless",permalink:"/blog/tags/serverless"},{label:"tech",permalink:"/blog/tags/tech"},{label:"aws",permalink:"/blog/tags/aws"}],readingTime:.485,hasTruncateMarker:!1,authors:[{name:"Dipjyoti Metia",title:"Lead Software Engineer",url:"https://github.com/dipjyotimetia",imageURL:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],frontMatter:{slug:"serverless",title:"Serverless Framework",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["serverless","tech","aws"],description:"This is a blog about serverless framework using nodejs",image:"https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png",hide_table_of_contents:!0},prevItem:{title:"Github Eyes",permalink:"/blog/github"}},u={authorsImageUrls:[void 0]},c=[{value:"Where to start?",id:"where-to-start",level:3},{value:"Serverless offline",id:"serverless-offline",level:3},{value:"Insomnia",id:"insomnia",level:3},{value:"Serverless dashbird",id:"serverless-dashbird",level:3},{value:"Mongodb",id:"mongodb",level:3}],m={toc:c};function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png",alt:"alt text"})),(0,n.kt)("h3",{id:"where-to-start"},(0,n.kt)("a",{parentName:"h3",href:"https://serverless.com/framework/docs/providers/aws/guide/quick-start/"},"Where to start?")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"npm install -g serverless")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/serverless.png",alt:"alt text"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://serverless.com/framework/docs/providers/aws/guide/iam/"},"Create IAM user"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Setup user access",(0,n.kt)("br",{parentName:"p"}),"\n","serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create project",(0,n.kt)("br",{parentName:"p"}),"\n","serverless create --template aws-nodejs --path my-service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/"},"Serverless yml"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Serverless Deploy",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"serverless deploy -v")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessdeploy.png",alt:"alt text"})),(0,n.kt)("h3",{id:"serverless-offline"},"Serverless offline"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/dherault/serverless-offline"},"https://github.com/dherault/serverless-offline")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"serverless plugin install --name serverless-offline\nserverless offline start\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessOffline.png",alt:"alt text"})),(0,n.kt)("h3",{id:"insomnia"},"Insomnia"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessMongo.png",alt:"alt text"})),(0,n.kt)("h3",{id:"serverless-dashbird"},"Serverless ",(0,n.kt)("a",{parentName:"h3",href:"https://app.dashbird.io/"},"dashbird")),(0,n.kt)("h3",{id:"mongodb"},"Mongodb"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Develop-X/Serverless/master/mongodb.png",alt:"alt text"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init -y\n$ npm i --save-dev serverless-offline\n$ npm i --save mongoose dotenv\nsls offline start --skipCacheInvalidation\n")))}v.isMDXComponent=!0}}]);