"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4484],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"pubsub",title:"PubSub",sidebar_label:"PubSub"},l=void 0,u={unversionedId:"snippets/cloud/google/pubsub",id:"snippets/cloud/google/pubsub",title:"PubSub",description:"Ingest events for streaming into BigQuery, data lakes or operational databases.",source:"@site/docs/snippets/cloud/google/pubsub.md",sourceDirName:"snippets/cloud/google",slug:"/snippets/cloud/google/pubsub",permalink:"/docs/snippets/cloud/google/pubsub",draft:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/google/pubsub.md",tags:[],version:"current",frontMatter:{id:"pubsub",title:"PubSub",sidebar_label:"PubSub"}},c={},p=[{value:"Ingestion user interaction and server events",id:"ingestion-user-interaction-and-server-events",level:3},{value:"Real-time event distribution",id:"real-time-event-distribution",level:3},{value:"Replicating data among databases",id:"replicating-data-among-databases",level:3},{value:"Parallel processing and workflows",id:"parallel-processing-and-workflows",level:3},{value:"Enterprise event bus",id:"enterprise-event-bus",level:3},{value:"Load balancing for reliability",id:"load-balancing-for-reliability",level:3}],d={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ingest events for streaming into BigQuery, data lakes or operational databases."),(0,o.kt)("h3",{id:"ingestion-user-interaction-and-server-events"},"Ingestion user interaction and server events"),(0,o.kt)("p",null,"To make use of user interaction events from end-user apps or server events from your system, you may forward them to Pub/Sub and then use a stream processing tool (such as Dataflow) which delivers them to BigQuery, Bigtable, Cloud Storage and other databases. Pub/Sub allows you to gather events from many clients. simultaneously."),(0,o.kt)("h3",{id:"real-time-event-distribution"},"Real-time event distribution"),(0,o.kt)("p",null,'Events, raw or processed, may be made available to multiple applications across your team and organization for real time processing. This supports an "enterprise event bus" and event-driven application design patterns. Pub/Sub allows you to integrate with many Google systems that export events to Pub/Sub.'),(0,o.kt)("h3",{id:"replicating-data-among-databases"},"Replicating data among databases"),(0,o.kt)("p",null,"Pub/Sub is commonly used to distribute change events from databases. These events can be used to construct a view of the database state and state history in BigQuery and other data storage systems."),(0,o.kt)("h3",{id:"parallel-processing-and-workflows"},"Parallel processing and workflows"),(0,o.kt)("p",null,"You can efficiently distribute a large number of tasks among multiple workers--such as compressing text files, sending email notifications, evaluating AI models, or reformatting images--by using Pub/Sub messages to connect to Cloud Functions."),(0,o.kt)("h3",{id:"enterprise-event-bus"},"Enterprise event bus"),(0,o.kt)("p",null,"You can create an enterprise-wide real-time\ndata sharing bus, distributing business events, database updates, and analytics events across your organization.\nData streaming from IoT devices. For example, a residential sensor can stream data to backend servers hosted in the cloud.\nRefreshing distributed caches. For example, an application can publish invalidation events to update the IDs of objects that have changed."),(0,o.kt)("h3",{id:"load-balancing-for-reliability"},"Load balancing for reliability"),(0,o.kt)("p",null,"For example, instances of a service may be deployed on Compute Engine in multiple zones but subscribe to a common topic. When the service fails in any zone, the others can pick up the load automatically."))}b.isMDXComponent=!0}}]);