"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[3815],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6892:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],s={id:"aws11",title:"Application Services",sidebar_label:"Application Services"},o="Application Services",p={unversionedId:"snippets/cloud/aws/aws11",id:"snippets/cloud/aws/aws11",title:"Application Services",description:"SQS \u2013 Simple Queue Service",source:"@site/docs/snippets/cloud/aws/09_Application Services.md",sourceDirName:"snippets/cloud/aws",slug:"/snippets/cloud/aws/aws11",permalink:"/docs/snippets/cloud/aws/aws11",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/aws/09_Application Services.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"aws11",title:"Application Services",sidebar_label:"Application Services"},sidebar:"Docs",previous:{title:"VPC",permalink:"/docs/snippets/cloud/aws/aws9"},next:{title:"Serverless",permalink:"/docs/snippets/cloud/aws/aws12"}},u=[{value:"SQS \u2013 Simple Queue Service",id:"sqs--simple-queue-service",children:[],level:2},{value:"SWF \u2013 Simple Workflow Service",id:"swf--simple-workflow-service",children:[],level:2},{value:"SNS \u2013 Simple Notification Service",id:"sns--simple-notification-service",children:[],level:2},{value:"Elastic Transcoder",id:"elastic-transcoder",children:[],level:2},{value:"API Gateway",id:"api-gateway",children:[],level:2},{value:"Amazon Kinesis",id:"amazon-kinesis",children:[],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-services"},"Application Services"),(0,r.kt)("h2",{id:"sqs--simple-queue-service"},"SQS \u2013 Simple Queue Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQS is a distributed web service that gives you access to a message queue that can be used to store messages while waiting for a computer to process them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQS helps decouple the components of an application so they can run independently.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Messages can be retrieved via SQS API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The producer and consumer can run at their own independent throughput.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The queue acts as a buffer between consumer and producer. Ensures delivery of messages at least once. Ensure your application isn\u2019t affected by processing the same message multiple times.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows multiple readers and writers. Single queue can be used simultaneously by various applications \u2013 helps scale out applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQS Message size up to 256KB of text in any format. May consist of 1-10 messages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Does not guarantee FIFO messages. If order is important, add sequencing information in each message.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For SQS, you have to pull messages. It doesn\u2019t push messages \u2013 unlike SNS. You are billed at 64KB Chunks"))),(0,r.kt)("p",null,"Pricing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First 1 million SQS Requests per month are free.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"$0.50 per 1 million SQS requests per month thereafter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"64KB chunk = 1 request. So a message of 256KB = 4 requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each messages has a visibility timeout \u2013 12 hours by default. Visibility timeout period only starts when a worker node has picked up the message for processing. During this interval, the message is invisible to other processor workers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQS can do auto-scaling. If queue grows beyond a threshold, instantiate new web/app servers. Use Auto scaling + SQS to achieve this."))),(0,r.kt)("p",null,"Exam Tip - De-couple \u2794 SQS"),(0,r.kt)("h2",{id:"swf--simple-workflow-service"},"SWF \u2013 Simple Workflow Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SWS is a web service that makes it easy to coordinate work across distributed application components. Co-ordinate tasks & workflows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Amazon uses SWS to process orders on its website.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No EC2 components involved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can also involve human actors."))),(0,r.kt)("p",null,"Trick Question \u2013 when to use SQS or SWS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"SQS"),(0,r.kt)("th",{parentName:"tr",align:null},"SWS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retention"),(0,r.kt)("td",{parentName:"tr",align:null},"14 days"),(0,r.kt)("td",{parentName:"tr",align:null},"1 year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},"Message Oriented"),(0,r.kt)("td",{parentName:"tr",align:null},"Task Oriented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Might be assigned multiple times"),(0,r.kt)("td",{parentName:"tr",align:null},"Only once")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State"),(0,r.kt)("td",{parentName:"tr",align:null},"Write code to implement tracking"),(0,r.kt)("td",{parentName:"tr",align:null},"Keeps Track of State & Events")))),(0,r.kt)("p",null,"SWF Actors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WF Starters \u2013 e-commerce application")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WF Deciders \u2013 Control flow of activity tasks.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WF Activity workers \u2013 Carry out actual task"))),(0,r.kt)("h2",{id:"sns--simple-notification-service"},"SNS \u2013 Simple Notification Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Makes it easy to setup, operate and send notifications from the cloud.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Immediate delivery to subscribers or other applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SNS consists of Topics and you can publish messages to topics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can send emails, text and other alerts. Apple Push, Android etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publish messages to SQS queues, trigger Lambda functions.  Lambda function can then manipulate information and then send to other SNS Topics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SNS is Push based messaging.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can group multiple recipients using topics. Recipients can subscribe to topics to receive notifications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Flexible message delivery over multiple protocols.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Is used in conjunction with CloudWatch and AutoScaling."))),(0,r.kt)("p",null,"EC2 instances pull SQS messages from a standard SQS queue on a FIFO (First In First out) basis.  \u2013 False"),(0,r.kt)("h2",{id:"elastic-transcoder"},"Elastic Transcoder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows to convert media files from source to different media formats.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You pay the minutes you transcode and the resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"S3 \u2192 Lambda Function \u2192 E. Transcoder \u2192 S3"))),(0,r.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Managed web service which enables developers to publish, monitor and secure APIs at any scale.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create an API that acts as front door for applications to access data, business logic or any functionality from your backend services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API Caching \u2013 Cache your endpoint\u2019s responses. Reduces load on endpoints based on duration of TTLs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Low cost & Efficient. Scales")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Throttle requests as required to prevent attacks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log requests to CloudWatch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For application built on top of multiple domains, you need to enable CORS on API Gateway."))),(0,r.kt)("h2",{id:"amazon-kinesis"},"Amazon Kinesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Streaming data is something which is generated by thousands of data sources \u2013 stock prices, game information, social network data, geo-spatial data, purchases from online stores, IoT sensor data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kinesis is an AWS platform to analyze streaming data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kinesis Streams"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- Stores data for 24 hours to 7 days.\n- Data stored in **shards**.\n- Data consumers (EC2 instances) analyze the stream and then derive results/take next actions.\n- Data capacity of stream is a function of the number of shards you specify for the stream.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kinesis Firehose "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don\u2019t have to worry about shards, streams \u2013 completely automated."),(0,r.kt)("li",{parentName:"ul"},"No automatic data retention window. Data is either immediately analyzed or sent to S3 and then to Redshift, elastic search cluster"),(0,r.kt)("li",{parentName:"ul"},"Data is immediately analyzed via ",(0,r.kt)("strong",{parentName:"li"},"Lambda"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kinesis Analytics \u2013"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run SQL type queries on top of data contained in Streams or Firehose and store the results in S3 / Redshift and Elastic Search cluster.")))))}m.isMDXComponent=!0}}]);