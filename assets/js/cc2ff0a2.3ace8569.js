"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[2805],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},374:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var o=t(3117),r=t(102),l=(t(7294),t(3905)),i=["components"],a={id:"gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},s=void 0,p={unversionedId:"snippets/cloud/google/gke",id:"snippets/cloud/google/gke",title:"Google Kubernetes Engine",description:"Kubernetes is a container orchestration tool, helps manage multiple container, nodes and pods, provided services like health checks, scheduling and scaling",source:"@site/docs/snippets/cloud/google/kubernetes.md",sourceDirName:"snippets/cloud/google",slug:"/snippets/cloud/google/gke",permalink:"/docs/snippets/cloud/google/gke",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/google/kubernetes.md",tags:[],version:"current",frontMatter:{id:"gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},sidebar:"Docs",previous:{title:"Get Started",permalink:"/docs/snippets/cloud/google/google1"},next:{title:"Cloud Run",permalink:"/docs/snippets/cloud/google/cr"}},c={},u=[{value:"Google Kubernetes Engine",id:"google-kubernetes-engine",level:3},{value:"High availability",id:"high-availability",level:3},{value:"Logging and monitoring",id:"logging-and-monitoring",level:3},{value:"Deploy and manage applications",id:"deploy-and-manage-applications",level:3},{value:"Create and manage node pools",id:"create-and-manage-node-pools",level:3}],d={toc:u};function g(e){var n=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kubernetes is a container orchestration tool, helps manage multiple container, nodes and pods, provided services like health checks, scheduling and scaling"),(0,l.kt)("h3",{id:"google-kubernetes-engine"},"Google Kubernetes Engine"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Split into the Control plane and Nodes"),(0,l.kt)("li",{parentName:"ul"},"Nodes container Pods"),(0,l.kt)("li",{parentName:"ul"},"Pods contain containers"),(0,l.kt)("li",{parentName:"ul"},"Application resides in Containers\n",(0,l.kt)("img",{loading:"lazy",alt:"img.png",src:t(4052).Z,width:"1280",height:"688"}))),(0,l.kt)("h3",{id:"high-availability"},"High availability"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replication occurs to three zones"),(0,l.kt)("li",{parentName:"ul"},"Zero downtime upgrades"),(0,l.kt)("li",{parentName:"ul"},"Uptime is 99.5 for zonal and 99.9 for regional"),(0,l.kt)("li",{parentName:"ul"},"Eliminate single point of failure")),(0,l.kt)("h3",{id:"logging-and-monitoring"},"Logging and monitoring"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stackdriver provides all application logs")),(0,l.kt)("h3",{id:"deploy-and-manage-applications"},"Deploy and manage applications"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create/Select project"),(0,l.kt)("li",{parentName:"ol"},"Browse to the Kubernetes Engine Dashboard"),(0,l.kt)("li",{parentName:"ol"},"Create/Select Cluster"),(0,l.kt)("li",{parentName:"ol"},"Open cloud Shell"),(0,l.kt)("li",{parentName:"ol"},"Deploy application: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl run wordpress --image=wordpress --port=80")),(0,l.kt)("li",{parentName:"ol"},"Expose application: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl expose deployment wordpress --type=LoadBalancer")),(0,l.kt)("li",{parentName:"ol"},"Check the service details: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl describe services wordpress")),(0,l.kt)("li",{parentName:"ol"},"Open the load balancer ingress URL: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get ingress wordpress"))),(0,l.kt)("h3",{id:"create-and-manage-node-pools"},"Create and manage node pools"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools create pool-1 --cluster=cluster-1 --num-nodes-3 --zone=us-central1-a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools list --cluster=cluster-1")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container clusters resize node-pools resize pool-1 --node-pool pool1 --num-nodes-2")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container node-pools delete pool-1 --cluster=cluster-1"))))}g.isMDXComponent=!0},4052:function(e,n,t){n.Z=t.p+"assets/images/GKE_Layers-4e383dce4f4af0ebdaec0ffe9aff0a17.png"}}]);