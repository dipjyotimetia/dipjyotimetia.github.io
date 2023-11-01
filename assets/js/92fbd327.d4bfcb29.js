"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[6939],{7303:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=s(5893),r=s(1151);const c={id:"aws4",title:"IAM",sidebar_label:"IAM"},l="Identity & Access Management",t={id:"snippets/cloud/aws/aws4",title:"IAM",description:"IAM 101",source:"@site/docs/snippets/cloud/aws/02_Identity & Access Management.mdx",sourceDirName:"snippets/cloud/aws",slug:"/snippets/cloud/aws/aws4",permalink:"/docs/snippets/cloud/aws/aws4",draft:!1,unlisted:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/aws/02_Identity & Access Management.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"aws4",title:"IAM",sidebar_label:"IAM"},sidebar:"Docs",previous:{title:"Certifications",permalink:"/docs/snippets/cloud/aws/aws3"},next:{title:"S3 Storage and CDN",permalink:"/docs/snippets/cloud/aws/aws5"}},o={},a=[{value:"IAM 101",id:"iam-101",level:2},{value:"Critical Terms",id:"critical-terms",level:3},{value:"IAM Features",id:"iam-features",level:3},{value:"Billing Alarm",id:"billing-alarm",level:3}];function d(n){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"identity--access-management",children:"Identity & Access Management"}),"\n",(0,i.jsx)(e.h2,{id:"iam-101",children:"IAM 101"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Configure ",(0,i.jsx)(e.strong,{children:"who uses AWS and their level of access"})," to the AWS Console."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Centralized control over AWS Account"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Share access for AWS Account"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Granular permissions for users / services"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Identity Federation"})," \u2013 Facebook, LinkedIn and Active Directory- You can login to AWS with your corporate credentials."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Multi-factor authentication"})," \u2013 helps secure the account. Especially for root account"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Temporary access to users and services"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Setup ",(0,i.jsx)(e.strong,{children:"password rotation policy"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Integration with other AWS services."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Supports ",(0,i.jsx)(e.strong,{children:"PCI-DSS compliance"})," (Payment Card Industry Data Security Standard )"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"critical-terms",children:"Critical Terms"}),"\n",(0,i.jsx)(e.p,{children:"IAM consists of the following"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Users"})," \u2013 End users / people, employees of an organization."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Groups"})," \u2013 Users having one set of permissions."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Roles"})," \u2013 Create roles and assign them to AWS resources."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Policies"})," \u2013 Document (JSON format) that defines one or more permissions \u2013 assign to user or groups"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"iam-features",children:"IAM Features"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"IAM is a global service"}),". It is not region specific, user is available globally"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Root account"})," / god mode is the email address you use to sign up for AWS, it has complete admin access"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Use google authenticator app and scan the QR code"}),"\n",(0,i.jsx)(e.li,{children:"update the MFA code and assign MFA"}),"\n",(0,i.jsx)(e.li,{children:"Whenever you are doing anything inside IAM , the reigon is global and you are using the root account."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"AWS recommends very limited usage of root account"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"new users have NO permission when first created."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Setup MFA on root account."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"You can attach permissions to individual users and groups."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Secret access key"})," can be retrieved only once during user creation. In case you lose it then you can re-generate it."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"IAM Password policy"})," can be set to access the admin console."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"New users have no permissions when first created"}),". Everything has to be explicitly added."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Power User Access"})," allows Access to all AWS services except the management of groups and users within IAM."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Manage AWS resources via"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Management console"})," \u2013 Using username and password"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Rest APIs"})," \u2013 Using Access Key ID and Secret Access Key"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"AWS CLI"})," - Command Line Interface - Using Access Key ID and Secret Access Key"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"AWS SDK"})," \u2013 various programming languages supported."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Using Access Key ID and Secret Access Key \u2013 can be used only via accessing programmatically. Akin to username and password used while accessing the console"}),"\n",(0,i.jsx)(e.h3,{id:"billing-alarm",children:"Billing Alarm"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Create a billing alarm and create SNS topic for billing alarm."}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>l});var i=s(7294);const r={},c=i.createContext(r);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);