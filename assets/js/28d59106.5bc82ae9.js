"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[1320],{670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(5893),i=n(1151);const s={id:"hyperv",title:"Hyper-V",sidebar_label:"Hyper-V"},o=void 0,p={id:"snippets/generic/hyperv",title:"Hyper-V",description:"Problem:",source:"@site/docs/snippets/generic/hyper-v.mdx",sourceDirName:"snippets/generic",slug:"/snippets/generic/hyperv",permalink:"/docs/snippets/generic/hyperv",draft:!1,unlisted:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/generic/hyper-v.mdx",tags:[],version:"current",frontMatter:{id:"hyperv",title:"Hyper-V",sidebar_label:"Hyper-V"},sidebar:"Docs",previous:{title:"Api Test Sites",permalink:"/docs/snippets/generic/apitestsites"},next:{title:"Get Started",permalink:"/docs/snippets/programming/go/godoc1"}},l={},c=[{value:"Problem:",id:"problem",level:3},{value:"Solution:",id:"solution",level:3},{value:"Explanation:",id:"explanation",level:3}];function a(e){const t={h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"problem",children:"Problem:"}),"\n",(0,r.jsx)(t.p,{children:"After I installed Ubuntu Desktop in HyperV I could not get the machine to run full screen."}),"\n",(0,r.jsx)(t.h3,{id:"solution",children:"Solution:"}),"\n",(0,r.jsx)(t.p,{children:"Update your /etc/default/grub settings."}),"\n",(0,r.jsx)(t.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,r.jsxs)(t.p,{children:["Start terminal Type sudo vi /etc/default/grub Press i to enter edit mode Change the GRUB_CMDLINE_LINUX_DEFAULT=\u201dquiet splash\u201d line to GRUB_CMDLINE_LINUX_DEFAULT=\u201dquiet splash video=hyperv_fb:1920x1080\u201d Type ",":wq"," to save the file Run sudo update-grub Restart your VM, enter Full Screen mode and enjoy."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);