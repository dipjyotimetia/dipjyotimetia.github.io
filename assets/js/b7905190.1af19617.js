"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[3511],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(t),u=a,m=k["".concat(c,".").concat(u)]||k[u]||d[u]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1999:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],l={id:"docker",title:"Docker",sidebar_label:"Docker"},c=void 0,s={unversionedId:"snippets/cloud/ci/docker",id:"snippets/cloud/ci/docker",isDocsHomePage:!1,title:"Docker",description:"Docker with jenkins is present in the jenkins",source:"@site/docs/snippets/cloud/ci/docker.md",sourceDirName:"snippets/cloud/ci",slug:"/snippets/cloud/ci/docker",permalink:"/docs/snippets/cloud/ci/docker",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/ci/docker.md",tags:[],version:"current",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"Docs",previous:{title:"Get Started",permalink:"/docs/snippets/cloud/azure/azure1"},next:{title:"Jenkins",permalink:"/docs/snippets/cloud/ci/jenkins"}},p=[{value:"Build docker image with tag",id:"build-docker-image-with-tag",children:[],level:3},{value:"Docker run and stop",id:"docker-run-and-stop",children:[],level:3},{value:"Docker stop and remove all containers",id:"docker-stop-and-remove-all-containers",children:[],level:3},{value:"Docker login to container",id:"docker-login-to-container",children:[],level:3},{value:"Docker login to image",id:"docker-login-to-image",children:[],level:3},{value:"Docker login to image with entry point",id:"docker-login-to-image-with-entry-point",children:[],level:3},{value:"Docker conatainer run with priviledge",id:"docker-conatainer-run-with-priviledge",children:[],level:3},{value:"Docker containers:",id:"docker-containers",children:[],level:3},{value:"Docker images:",id:"docker-images",children:[],level:3},{value:"Starting an interactive shell",id:"starting-an-interactive-shell",children:[],level:3},{value:"Stopping and removing containers",id:"stopping-and-removing-containers",children:[],level:3},{value:"Inspecting container metadata",id:"inspecting-container-metadata",children:[],level:3},{value:"Viewing container logs",id:"viewing-container-logs",children:[],level:3},{value:"Docker and Github",id:"docker-and-github",children:[{value:"Deploy script",id:"deploy-script",children:[],level:3},{value:"Resources",id:"resources",children:[],level:3},{value:"AWS Docker Jenkins",id:"aws-docker-jenkins",children:[],level:3}],level:2}],d={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docker with jenkins is present in the ",(0,o.kt)("a",{parentName:"p",href:"./jenkins"},"jenkins"),"   "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You do not have to write out the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," in full. The partial ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," specified need only uniquely identify the container. Given a container 'aa151b912448' and 'aa153cd14238', ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs aa15")," will not work, but ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs aa151")," will."))),(0,o.kt)("h3",{id:"build-docker-image-with-tag"},"Build docker image with tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t node-app:0.1 .\n")),(0,o.kt)("h3",{id:"docker-run-and-stop"},"Docker run and stop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 4000:80 --name my-app -d node-app:0.1\ndocker ps\n\ndocker logs [CONTAINER_ID]\n")),(0,o.kt)("h3",{id:"docker-stop-and-remove-all-containers"},"Docker stop and remove all containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop my-app && docker rm my-app\ndocker stop $(docker ps -q)\ndocker rm $(docker ps -aq)\n")),(0,o.kt)("h3",{id:"docker-login-to-container"},"Docker login to container"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker exec -it <mycontainer> bash    ")),(0,o.kt)("h3",{id:"docker-login-to-image"},"Docker login to image"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -it <image> bash  ")),(0,o.kt)("h3",{id:"docker-login-to-image-with-entry-point"},"Docker login to image with entry point"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -it --entrypoint bash <image>")),(0,o.kt)("h3",{id:"docker-conatainer-run-with-priviledge"},"Docker conatainer run with priviledge"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")),(0,o.kt)("h3",{id:"docker-containers"},"Docker containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container ls\n# List all containers\ndocker ps\n# Docker container already exited\ndocker ps -a \n")),(0,o.kt)("h3",{id:"docker-images"},"Docker images:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker images")),(0,o.kt)("h3",{id:"starting-an-interactive-shell"},"Starting an interactive shell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it [CONTAINER_ID] bash\n")),(0,o.kt)("h3",{id:"stopping-and-removing-containers"},"Stopping and removing containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop $(docker ps -q)\ndocker rm $(docker ps -aq)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-q"),": Only display numeric IDs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-a"),": Show all containers (default shows just running)")),(0,o.kt)("h3",{id:"inspecting-container-metadata"},"Inspecting container metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker inspect [CONTAINER_ID]\n\ndocker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' [CONTAINER_ID]\n")),(0,o.kt)("h3",{id:"viewing-container-logs"},"Viewing container logs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typical command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs [CONTAINER_ID]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow log output for a specified duration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --until=[TIME]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker compose logs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose logs --no-color --tail=1000 [service_name] > logs.txt\n")),(0,o.kt)("p",null,"TIME can be a TIMESTAMP or relative (e.g. '10m' or '5s')"),(0,o.kt)("h2",{id:"docker-and-github"},"Docker and Github"),(0,o.kt)("h3",{id:"deploy-script"},"Deploy script"),(0,o.kt)("p",null,"This script assumes that the working directory contains a ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," directory, ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerignore")," file may be useful too. It is also assumed that the project dependencies have been installed using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"deploy.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'IMAGE_NAME=""\nVERSION="" # Can be left blank\nCONTAINER_NAME=""\nCONTAINER_PORT="" # To be mapped to HOST_PORT\nHOST_PORT="" # The port clients will access\n\ndocker stop $CONTAINER_NAME # Stop the running container\ndocker system prune -af # Removes the container and all unused images\ngit pull origin master # Pulls latest source files and image\ndocker build -t $IMAGE_NAME .\ndocker run --name $CONTAINER_NAME -p $CONTAINER_PORT:$HOST_PORT -d $IMAGE_NAME:$VERSION\n')),(0,o.kt)("p",null,"Before the script can be used, replace the following placeholders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IMAGE_NAME")," : The name of your image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VERSION")," : The version of your image. Can be left blank."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONTAINER_NAME")," : The desired name of your container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONTAINER_PORT")," : The port of your container which your application is running on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HOST_PORT")," : The host port your container port will be mapped to. This is the port that is exposed on the host system.")),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://realestate-com-au.github.io/intro-to-docker/#1"},"Docker get Started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker#step-4-%E2%80%94-using-a-repository-to-work-with-images"},"How To Build a Node.js Application with Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/logs/"},"docker logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/ps/"},"docker ps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qxf2.com/blog/view-docker-container-display-using-vnc-viewer/"},"Docker VNC"))),(0,o.kt)("h3",{id:"aws-docker-jenkins"},"AWS Docker Jenkins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install java-1.8.0 -y\nsudo yum remove java-1.7.0-openjdk -y\n\nUpdate the packages on your instance\n\n[ec2-user ~]$ sudo yum update -y\n\nInstall Docker\n\n[ec2-user ~]$ sudo yum install docker -y\n\nStart the Docker Service\n\n[ec2-user ~]$ sudo service docker start\n\nAdd the ec2-user to the docker group so you can execute Docker commands without using sudo.\n\n[ec2-user ~]$ sudo usermod -a -G docker ec2-user\n")))}k.isMDXComponent=!0}}]);