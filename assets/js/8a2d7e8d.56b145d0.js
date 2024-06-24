"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[502],{3750:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(5893),t=n(1151);const r={id:"aws11",title:"Application Services",sidebar_label:"Application Services"},l="Application Services",a={id:"snippets/cloud/aws/aws11",title:"Application Services",description:"SQS \u2013 Simple Queue Service",source:"@site/docs/snippets/cloud/aws/09_Application Services.mdx",sourceDirName:"snippets/cloud/aws",slug:"/snippets/cloud/aws/aws11",permalink:"/docs/snippets/cloud/aws/aws11",draft:!1,unlisted:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/aws/09_Application Services.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"aws11",title:"Application Services",sidebar_label:"Application Services"},sidebar:"Docs",previous:{title:"VPC",permalink:"/docs/snippets/cloud/aws/aws9"},next:{title:"Serverless",permalink:"/docs/snippets/cloud/aws/aws12"}},c={},o=[{value:"SQS \u2013 Simple Queue Service",id:"sqs--simple-queue-service",level:2},{value:"SWF \u2013 Simple Workflow Service",id:"swf--simple-workflow-service",level:2},{value:"SNS \u2013 Simple Notification Service",id:"sns--simple-notification-service",level:2},{value:"Elastic Transcoder",id:"elastic-transcoder",level:2},{value:"API Gateway",id:"api-gateway",level:2},{value:"Amazon Kinesis",id:"amazon-kinesis",level:2}];function d(e){const s={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"application-services",children:"Application Services"}),"\n",(0,i.jsx)(s.h2,{id:"sqs--simple-queue-service",children:"SQS \u2013 Simple Queue Service"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SQS is a distributed web service that gives you access to a message queue that can be used to store messages while waiting for a computer to process them."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SQS helps decouple the components of an application so they can run independently."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Messages can be retrieved via SQS API"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The producer and consumer can run at their own independent throughput."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The queue acts as a buffer between consumer and producer. Ensures delivery of messages at least once. Ensure your application isn\u2019t affected by processing the same message multiple times."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Allows multiple readers and writers. Single queue can be used simultaneously by various applications \u2013 helps scale out applications"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SQS Message size up to 256KB of text in any format. May consist of 1-10 messages."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Does not guarantee FIFO messages. If order is important, add sequencing information in each message."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"For SQS, you have to pull messages. It doesn\u2019t push messages \u2013 unlike SNS. You are billed at 64KB Chunks"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Pricing"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"First 1 million SQS Requests per month are free."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"$0.50 per 1 million SQS requests per month thereafter."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"64KB chunk = 1 request. So a message of 256KB = 4 requests."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Each messages has a visibility timeout \u2013 12 hours by default. Visibility timeout period only starts when a worker node has picked up the message for processing. During this interval, the message is invisible to other processor workers."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SQS can do auto-scaling. If queue grows beyond a threshold, instantiate new web/app servers. Use Auto scaling + SQS to achieve this."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Exam Tip - De-couple \u2794 SQS"}),"\n",(0,i.jsx)(s.h2,{id:"swf--simple-workflow-service",children:"SWF \u2013 Simple Workflow Service"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SWS is a web service that makes it easy to coordinate work across distributed application components. Co-ordinate tasks & workflows."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Amazon uses SWS to process orders on its website."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"No EC2 components involved."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"It can also involve human actors."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Trick Question \u2013 when to use SQS or SWS"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"SQS"}),(0,i.jsx)(s.th,{children:"SWS"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Retention"}),(0,i.jsx)(s.td,{children:"14 days"}),(0,i.jsx)(s.td,{children:"1 year"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"API"}),(0,i.jsx)(s.td,{children:"Message Oriented"}),(0,i.jsx)(s.td,{children:"Task Oriented"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Assignment"}),(0,i.jsx)(s.td,{children:"Might be assigned multiple times"}),(0,i.jsx)(s.td,{children:"Only once"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"State"}),(0,i.jsx)(s.td,{children:"Write code to implement tracking"}),(0,i.jsx)(s.td,{children:"Keeps Track of State & Events"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"SWF Actors"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"WF Starters \u2013 e-commerce application"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"WF Deciders \u2013 Control flow of activity tasks."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"WF Activity workers \u2013 Carry out actual task"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sns--simple-notification-service",children:"SNS \u2013 Simple Notification Service"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Makes it easy to setup, operate and send notifications from the cloud."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Immediate delivery to subscribers or other applications"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SNS consists of Topics and you can publish messages to topics."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You can send emails, text and other alerts. Apple Push, Android etc."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Publish messages to SQS queues, trigger Lambda functions.  Lambda function can then manipulate information and then send to other SNS Topics"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SNS is Push based messaging."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You can group multiple recipients using topics. Recipients can subscribe to topics to receive notifications."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Flexible message delivery over multiple protocols."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Is used in conjunction with CloudWatch and AutoScaling."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"EC2 instances pull SQS messages from a standard SQS queue on a FIFO (First In First out) basis.  \u2013 False"}),"\n",(0,i.jsx)(s.h2,{id:"elastic-transcoder",children:"Elastic Transcoder"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Allows to convert media files from source to different media formats."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You pay the minutes you transcode and the resolution"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"S3 \u2192 Lambda Function \u2192 E. Transcoder \u2192 S3"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"api-gateway",children:"API Gateway"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Managed web service which enables developers to publish, monitor and secure APIs at any scale."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Create an API that acts as front door for applications to access data, business logic or any functionality from your backend services"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"API Caching \u2013 Cache your endpoint\u2019s responses. Reduces load on endpoints based on duration of TTLs"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Low cost & Efficient. Scales"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Throttle requests as required to prevent attacks."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Log requests to CloudWatch."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"For application built on top of multiple domains, you need to enable CORS on API Gateway."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"amazon-kinesis",children:"Amazon Kinesis"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Streaming data is something which is generated by thousands of data sources \u2013 stock prices, game information, social network data, geo-spatial data, purchases from online stores, IoT sensor data."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Kinesis is an AWS platform to analyze streaming data."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Kinesis Streams"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stores data for 24 hours to 7 days."}),"\n",(0,i.jsxs)(s.li,{children:["Data stored in ",(0,i.jsx)(s.strong,{children:"shards"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Data consumers (EC2 instances) analyze the stream and then derive results/take next actions."}),"\n",(0,i.jsx)(s.li,{children:"Data capacity of stream is a function of the number of shards you specify for the stream."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Kinesis Firehose"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Don\u2019t have to worry about shards, streams \u2013 completely automated."}),"\n",(0,i.jsx)(s.li,{children:"No automatic data retention window. Data is either immediately analyzed or sent to S3 and then to Redshift, elastic search cluster"}),"\n",(0,i.jsxs)(s.li,{children:["Data is immediately analyzed via ",(0,i.jsx)(s.strong,{children:"Lambda"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Kinesis Analytics \u2013"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Run SQL type queries on top of data contained in Streams or Firehose and store the results in S3 / Redshift and Elastic Search cluster."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var i=n(7294);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);