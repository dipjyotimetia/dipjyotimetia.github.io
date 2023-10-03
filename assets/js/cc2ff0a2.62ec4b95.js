"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[2805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const r={id:"gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},a=void 0,i={unversionedId:"snippets/cloud/google/gke",id:"snippets/cloud/google/gke",title:"Google Kubernetes Engine",description:"Kubernetes is a container orchestration tool, helps manage multiple container, nodes and pods, provided services like health checks, scheduling and scaling",source:"@site/docs/snippets/cloud/google/kubernetes.md",sourceDirName:"snippets/cloud/google",slug:"/snippets/cloud/google/gke",permalink:"/docs/snippets/cloud/google/gke",draft:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/google/kubernetes.md",tags:[],version:"current",frontMatter:{id:"gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},sidebar:"Docs",previous:{title:"Get Started",permalink:"/docs/snippets/cloud/google/google1"},next:{title:"Cloud Run",permalink:"/docs/snippets/cloud/google/cr"}},s={},p=[{value:"Google Kubernetes Engine",id:"google-kubernetes-engine",level:3},{value:"High availability",id:"high-availability",level:3},{value:"Logging and monitoring",id:"logging-and-monitoring",level:3},{value:"Deploy and manage applications",id:"deploy-and-manage-applications",level:3},{value:"Create and manage node pools",id:"create-and-manage-node-pools",level:3},{value:"Kubectl Cheet sheet",id:"kubectl-cheet-sheet",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kubernetes is a container orchestration tool, helps manage multiple container, nodes and pods, provided services like health checks, scheduling and scaling"),(0,l.kt)("h3",{id:"google-kubernetes-engine"},"Google Kubernetes Engine"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Split into the Control plane and Nodes"),(0,l.kt)("li",{parentName:"ul"},"Nodes container Pods"),(0,l.kt)("li",{parentName:"ul"},"Pods contain containers"),(0,l.kt)("li",{parentName:"ul"},"Application resides in Containers\n",(0,l.kt)("img",{alt:"img.png",src:n(4052).Z,width:"1280",height:"688"}))),(0,l.kt)("h3",{id:"high-availability"},"High availability"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replication occurs to three zones"),(0,l.kt)("li",{parentName:"ul"},"Zero downtime upgrades"),(0,l.kt)("li",{parentName:"ul"},"Uptime is 99.5 for zonal and 99.9 for regional"),(0,l.kt)("li",{parentName:"ul"},"Eliminate single point of failure")),(0,l.kt)("h3",{id:"logging-and-monitoring"},"Logging and monitoring"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stackdriver provides all application logs")),(0,l.kt)("h3",{id:"deploy-and-manage-applications"},"Deploy and manage applications"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create/Select project"),(0,l.kt)("li",{parentName:"ol"},"Browse to the Kubernetes Engine Dashboard"),(0,l.kt)("li",{parentName:"ol"},"Create/Select Cluster"),(0,l.kt)("li",{parentName:"ol"},"Open cloud Shell"),(0,l.kt)("li",{parentName:"ol"},"Deploy application: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl run wordpress --image=wordpress --port=80")),(0,l.kt)("li",{parentName:"ol"},"Expose application: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl expose deployment wordpress --type=LoadBalancer")),(0,l.kt)("li",{parentName:"ol"},"Check the service details: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl describe services wordpress")),(0,l.kt)("li",{parentName:"ol"},"Open the load balancer ingress URL: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get ingress wordpress"))),(0,l.kt)("h3",{id:"create-and-manage-node-pools"},"Create and manage node pools"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools create pool-1 --cluster=cluster-1 --num-nodes-3 --zone=us-central1-a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools list --cluster=cluster-1")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container clusters resize node-pools resize pool-1 --node-pool pool1 --num-nodes-2")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools delete pool-1 --cluster=cluster-1"))),(0,l.kt)("h3",{id:"kubectl-cheet-sheet"},"Kubectl Cheet sheet"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.bluematador.com/learn/kubectl-cheatsheet"},"https://www.bluematador.com/learn/kubectl-cheatsheet"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dgkanatsios/CKAD-exercises"},"https://github.com/dgkanatsios/CKAD-exercises")))}d.isMDXComponent=!0},4052:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/GKE_Layers-4e383dce4f4af0ebdaec0ffe9aff0a17.png"}}]);