"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[3504],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9601:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=["components"],l={id:"aws12",title:"Serverless",sidebar_label:"Serverless"},s="Lambda Concepts",u={unversionedId:"snippets/cloud/aws/aws12",id:"snippets/cloud/aws/aws12",title:"Serverless",description:"Lambda",source:"@site/docs/snippets/cloud/aws/10_Serverless.md",sourceDirName:"snippets/cloud/aws",slug:"/snippets/cloud/aws/aws12",permalink:"/docs/snippets/cloud/aws/aws12",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/aws/10_Serverless.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"aws12",title:"Serverless",sidebar_label:"Serverless"},sidebar:"Docs",previous:{title:"Application Services",permalink:"/docs/snippets/cloud/aws/aws11"},next:{title:"AWS Well-Architected Framework",permalink:"/docs/snippets/cloud/aws/aws13"}},c=[{value:"Lambda",id:"lambda",children:[{value:"What is Lambda?",id:"what-is-lambda",children:[],level:3},{value:"Why is Lambda cool?",id:"why-is-lambda-cool",children:[],level:3},{value:"How is Lambda priced?",id:"how-is-lambda-priced",children:[],level:3},{value:"Lambda Exam Tips",id:"lambda-exam-tips",children:[],level:3},{value:"Lambda Limits",id:"lambda-limits",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lambda-concepts"},"Lambda Concepts"),(0,i.kt)("h2",{id:"lambda"},"Lambda"),(0,i.kt)("h3",{id:"what-is-lambda"},"What is Lambda?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS Lambda is a compute service where you can upload your code and create a Lambda function. AWS Lambda takes care of provisioning and managing the servers that you use to run the code. You don't have to worry about operating systems, patching, scaling, etc. You can use Lambda in the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As an event-driven compute service where AWS Lambda runs your code in response to events. These events could be changes to data in an Amazon S3 bucket or an Amazon DynamoDB table"),(0,i.kt)("li",{parentName:"ul"},"As a compute service to run your code in response to HTTP requests using Amazon API Gateway or API calls made using AWS SDKs.")))),(0,i.kt)("h3",{id:"why-is-lambda-cool"},"Why is Lambda cool?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No servers"),(0,i.kt)("li",{parentName:"ul"},"Continuous scaling"),(0,i.kt)("li",{parentName:"ul"},"Super cheap")),(0,i.kt)("h3",{id:"how-is-lambda-priced"},"How is Lambda priced?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Numbers of requests"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First 1 million requests are free $0.20 per 1 million requests thereafter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Duration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Duration si calculated from the time your code begins executing until it returns or otherwise terminates, rounded up to the nearest 100ms. The price depends on the amount fo memory you allocate to your function. You are charged $0.00001667 for every GB-second used")))),(0,i.kt)("h3",{id:"lambda-exam-tips"},"Lambda Exam Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lambda scales out (not up) automatically"),(0,i.kt)("li",{parentName:"ul"},"Lambda functiosn are independent, 1 event = 1 function"),(0,i.kt)("li",{parentName:"ul"},"Lambda is serverless"),(0,i.kt)("li",{parentName:"ul"},"Know what services are serverless"),(0,i.kt)("li",{parentName:"ul"},"Lambda functions can trigger other lambda functions 1 event can = x functions if functions trigger other functions"),(0,i.kt)("li",{parentName:"ul"},"Architectures can get extremely complicated, AWS X-ray allows you to debug what is happening"),(0,i.kt)("li",{parentName:"ul"},"Lambda can do things globally, you can use it to back up S3 buckets to other buckets"),(0,i.kt)("li",{parentName:"ul"},"Know your triggers")),(0,i.kt)("h3",{id:"lambda-limits"},"Lambda Limits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max function time: 5 minutes")),(0,i.kt)("h1",{id:"serverless-page"},"Serverless Page"),(0,i.kt)("h1",{id:"alexa-skill"},"Alexa skill"))}d.isMDXComponent=!0}}]);