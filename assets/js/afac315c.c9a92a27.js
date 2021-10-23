(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[2755],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,h=f["".concat(c,".").concat(m)]||f[m]||u[m]||s;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2733:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(4034),o=n(9973),s=(n(7294),n(3905)),a=["components"],i={id:"k6performance",title:"K6 Performance Test Framework"},c=void 0,l={unversionedId:"projects/k6performance",id:"projects/k6performance",isDocsHomePage:!1,title:"K6 Performance Test Framework",description:"There are couple of load testing tools present in the market, K6 is one of them which looks more promising in",source:"@site/docs/projects/k6performance.md",sourceDirName:"projects",slug:"/projects/k6performance",permalink:"/docs/projects/k6performance",editUrl:"https://github.com/dipjyotimetia/Docs/docs/projects/k6performance.md",tags:[],version:"current",frontMatter:{id:"k6performance",title:"K6 Performance Test Framework"}},p=[],u={toc:p};function f(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There are couple of load testing tools present in the market, K6 is one of them which looks more promising in\nthe field of modern performance testing, which not only provides the best in class developer experience but\nalso it has robust code base maintained by multiple open source contributors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import http from "k6/http";\nimport { check, group, sleep } from "k6";\nimport { Rate } from "k6/metrics";\n\n// A custom metric to track failure rates\nvar failureRate = new Rate("check_failure_rate");\n\nexport let options = {\n  thresholds: {\n    // We want the 95th percentile of all HTTP request durations to be less than 500ms\n    "http_req_duration": ["p(95)<500"],\n    // Requests with the staticAsset tag should finish even faster\n    "http_req_duration{staticAsset:yes}": ["p(99)<250"],\n    // Thresholds based on the custom metric we defined and use to track application failures\n    "check_failure_rate": [\n      // Global failure rate should be less than 1%\n      "rate<0.01",\n      // Abort the test early if it climbs over 5%\n      { threshold: "rate<=0.05", abortOnFail: true },\n    ],\n  },\n};\n\nexport default function () {\n  let response = http.get("https://test.k6.io/");\n\n    // check() returns false if any of the specified conditions fail\n    let checkRes = check(response, {\n        "http2 is used": (r) => r.proto === "HTTP/2.0",\n        "status is 200": (r) => r.status === 200,\n        "content is present": (r) => r.body.indexOf("Collection of simple web-pages suitable for load testing.") !== -1,\n    });\n\n    // We reverse the check() result since we want to count the failures\n    failureRate.add(!checkRes);\n\n    // Load static assets, all requests\n    group("Static Assets", function () {\n        // Execute multiple requests in parallel like a browser, to fetch some static resources\n        let resps = http.batch([\n            ["GET", "https://test.k6.io/static/css/site.css", null, { tags: { staticAsset: "yes" } }],\n            ["GET", "https://test.k6.io/static/favicon.ico", null, { tags: { staticAsset: "yes" } }],\n            ["GET", "https://test.k6.io/static/js/prisms.js", null, { tags: { staticAsset: "yes" } }],\n        ]);\n        // Combine check() call with failure tracking\n        failureRate.add(!check(resps, {\n            "status is 200": (r) => r[0].status === 200 && r[1].status === 200,\n            "reused connection": (r) => r[0].timings.connecting == 0,\n        }));\n    });\n\n    sleep(Math.random() * 3 + 2); // Random sleep between 2s and 5s\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import http from "k6/http";\nimport { check, sleep } from "k6";\n\n// `options.stages to configure ramp up/down VU level\nexport let options = {\n  stages: [\n    { duration: "30s", target: 20 },\n    { duration: "1m30s", target: 10 },\n    { duration: "20s", target: 0 },\n  ]\n}\n\n// this defines the entry point for your VUs\n// similar to the main() function in many other language\n\nexport default function() {\n  let res = http.get("http://test.loadimpact.com");\n  \n  // check() function to verify status code, transaction time etc\n  check(res, {\n    "status was 200": (r) => r.status == 200,\n    "transaction time OK": (r) => r.timings.duration < 200\n  });\n  sleep(1);\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(4072).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(7047).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(1106).Z})))}f.isMDXComponent=!0},7047:function(e,t,n){"use strict";t.Z=n.p+"assets/images/grafana-ab1c34866e1238b17aa18e102350ba7e.png"},1106:function(e,t,n){"use strict";t.Z=n.p+"assets/images/grafana2-b6d7303c7316b4d035564917f40e2371.png"},4072:function(e,t,n){"use strict";t.Z=n.p+"assets/images/k6_execution-0a3e1887d1a3802ca790e8816531ce37.png"}}]);