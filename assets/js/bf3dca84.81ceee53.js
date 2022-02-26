"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[9733],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={id:"ubuntu",title:"Ubuntu Cheat sheet"},l=void 0,u={unversionedId:"snippets/toolos/ubuntu",id:"snippets/toolos/ubuntu",title:"Ubuntu Cheat sheet",description:"In this section you will find my notes on setting up and securing Ubuntu 18.04. Vim knowledge is assumed.",source:"@site/docs/snippets/toolos/ubuntu.md",sourceDirName:"snippets/toolos",slug:"/snippets/toolos/ubuntu",permalink:"/docs/snippets/toolos/ubuntu",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/toolos/ubuntu.md",tags:[],version:"current",frontMatter:{id:"ubuntu",title:"Ubuntu Cheat sheet"},sidebar:"Docs",previous:{title:"VS Code",permalink:"/docs/snippets/ide/vscode"},next:{title:"Reading Lists",permalink:"/docs/snippets/generic"}},d={},p=[{value:"Creating a new non-root Sudo user",id:"creating-a-new-non-root-sudo-user",level:2},{value:"Add a new user",id:"add-a-new-user",level:3},{value:"Add user to sudo group",id:"add-user-to-sudo-group",level:3},{value:"Log in to user",id:"log-in-to-user",level:3},{value:"Only allow Key Authentication",id:"only-allow-key-authentication",level:2},{value:"Add Public Key to User",id:"add-public-key-to-user",level:3},{value:"Disable Password Authentication",id:"disable-password-authentication",level:3},{value:"Basic Firewall",id:"basic-firewall",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section you will find my notes on setting up and securing Ubuntu 18.04. ",(0,i.kt)("a",{parentName:"p",href:"https://www.linux.com/learn/vim-101-beginners-guide-vim"},"Vim")," knowledge is assumed."),(0,i.kt)("h2",{id:"creating-a-new-non-root-sudo-user"},"Creating a new non-root Sudo user"),(0,i.kt)("p",null,"It is recommended to avoid using the root user account on a regular basis as it compromises security and is risky. Instead, create a new user account and add it to the sudo group."),(0,i.kt)("h3",{id:"add-a-new-user"},"Add a new user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adduser xyz\n")),(0,i.kt)("h3",{id:"add-user-to-sudo-group"},"Add user to sudo group"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -aG sudo xyz\n")),(0,i.kt)("h3",{id:"log-in-to-user"},"Log in to user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"su xyz\n")),(0,i.kt)("h2",{id:"only-allow-key-authentication"},"Only allow Key Authentication"),(0,i.kt)("p",null,"Password-based authentication is susceptible to brute-force attacks. Thus, it is good practice to disable it and only allow key-based authentication."),(0,i.kt)("h3",{id:"add-public-key-to-user"},"Add Public Key to User"),(0,i.kt)("p",null,"As mentioned, usage of the root user account should be avoided. Hence, it is advisable that you add your public key to the user account you created earlier on. It is assumed that you logged into your root account using SSH key."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"su xyz\ncd ~\nmkdir .ssh\nvim .ssh/authorized_keys\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Insert your public key and save the file with ",(0,i.kt)("inlineCode",{parentName:"li"},":wq!"),". You can copy this from the ",(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")," file under the root account's directory. You can find the file using the following commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"su root\ncd ~\nvim .ssh/authorized_keys\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Toggle visual mode by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," at the start of the line for the public key you wish to copy over. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," to move the cursor to the end of the line; doing so highlights the entire line. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to yank (copy). Then exit the file using ",(0,i.kt)("inlineCode",{parentName:"p"},":q!"),"."),(0,i.kt)("p",{parentName:"div"},"Enter the destination ",(0,i.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," to paste what you yanked."))),(0,i.kt)("h3",{id:"disable-password-authentication"},"Disable Password Authentication"),(0,i.kt)("p",null,"As it is assumed that you logged into your root account using SSH key, this step could be unnecessary. However, do still perform a check to verify that ",(0,i.kt)("inlineCode",{parentName:"p"},"PasswordAuthentication no")," is in place."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"sshd_config")," with Vim:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/ssh/sshd_config\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication no"),". It might be commented out as ",(0,i.kt)("inlineCode",{parentName:"li"},"#PasswordAuthentication no")," or written as ",(0,i.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication yes"),". If you find either, replace with ",(0,i.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication no"),". Else just add it in.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},":/PasswordAuthentication")," to find ",(0,i.kt)("inlineCode",{parentName:"p"},"#PasswordAuthentication no"),"."))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the file with ",(0,i.kt)("inlineCode",{parentName:"p"},":wq!"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restart ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," to implement this change:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart ssh\n")),(0,i.kt)("h2",{id:"basic-firewall"},"Basic Firewall"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List application profiles registered with ufw firewall:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw app list\n")),(0,i.kt)("p",null,"You should see"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Available applications:\n  OpenSSH\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Ensure the firewall allows SSH connections:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow OpenSSH\nsudo ufw enable # Enable firewall\nsudo ufw status # Check if OpenSSH is allowed\n")),(0,i.kt)("p",null,"You should see the following after executing ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo ufw status"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"To                         Action      From\n--                         ------      ----\nOpenSSH                    ALLOW       Anywhere\nOpenSSH (v6)               ALLOW       Anywhere (v6)\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04"},"Initial Server Setup with Ubuntu 18.04")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1804"},"How to Set Up SSH Keys on Ubuntu 18.04 "))))}m.isMDXComponent=!0}}]);