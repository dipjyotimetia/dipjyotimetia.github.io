"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4854],{4506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(5893),i=t(1151);const s={id:"bash",title:"Get Started with bash",sidebar_label:"Get Started"},a=void 0,r={id:"snippets/toolos/bash",title:"Get Started with bash",description:"bash",source:"@site/docs/snippets/toolos/bash.mdx",sourceDirName:"snippets/toolos",slug:"/snippets/toolos/bash",permalink:"/docs/snippets/toolos/bash",draft:!1,unlisted:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/toolos/bash.mdx",tags:[],version:"current",frontMatter:{id:"bash",title:"Get Started with bash",sidebar_label:"Get Started"},sidebar:"Docs",previous:{title:"Ubuntu Cheat sheet",permalink:"/docs/snippets/toolos/ubuntu"},next:{title:"Reading Lists",permalink:"/docs/snippets/generic"}},l={},d=[{value:"Adding permissions",id:"adding-permissions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://devhints.io/bash",children:"bash"})}),"\n",(0,o.jsx)(n.h2,{id:"adding-permissions",children:"Adding permissions"}),"\n",(0,o.jsx)(n.p,{children:"Make a shell script executable by the user/owner"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"chmod u+x deploy.sh # You can then execute it like this: ./deploy.sh\nchmod 444 file # - Allow read permission to owner and group and world\nchmod 777 file # - Allow everyone to read, write, and execute file\n\nThe command used to change permissions is chmod\n```bash\nchmod g+w hello.txt\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here, I am adding (+) the permission to write (w) for the group (g) users."}),"\n",(0,o.jsx)(n.p,{children:"Similarly, if I want to remove the read permission for anyone outside the group, then:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"chmod o-r hello.txt\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here, I am removing (-) the permission to read (r) for the others (o)"}),"\n",(0,o.jsx)(n.p,{children:"Create a file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"touch hello.txt\n"})}),"\n",(0,o.jsx)(n.p,{children:"Read and stream a file\ntail command is similar to cat in a way that it lets you read a file."}),"\n",(0,o.jsx)(n.p,{children:"But unlike cat you can define how you want to view it."}),"\n",(0,o.jsx)(n.p,{children:"For e.g. if you want to see only the last 100 lines of a log file (log files contain thousands of lines of text) you can use the following command"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tail -n100 log_filename\n"})}),"\n",(0,o.jsx)(n.p,{children:"An added advantage of tail command is that you can use it to stream a file as well"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tail -f filename\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command will give you a streaming output that keeps updating as the log file is updated."}),"\n",(0,o.jsx)(n.p,{children:"Filtering the output of a command\nThe above commands to read through a file can produce hundreds of lines of output. But that will make it difficult for you to go through them."}),"\n",(0,o.jsx)(n.p,{children:"You can filter out the output so any line that contains a substring you want to see will be shown in the output."}),"\n",(0,o.jsx)(n.p,{children:"Let me introduce you to pipe in unix. A pipe is used to send the output of a certain command to a different command. A pipe is represented by | ."}),"\n",(0,o.jsx)(n.p,{children:"grep is the command you use to filter out an output. If you pass the output of tail to the grep command via a pipe, that should do the trick of filtering lines."}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s say you only want to view only the lines in a file that contain the word gunicorn in it then this is how you do it"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tail -n100 log_filename | grep 'gunicorn'\n"})}),"\n",(0,o.jsx)(n.p,{children:"A much more powerful tool for filtering is awk"}),"\n",(0,o.jsx)(n.p,{children:"awk follows the pattern"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"awk options 'selection _criteria {action }' input-file\n"})}),"\n",(0,o.jsx)(n.p,{children:"An example of awk command is like this"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"awk '/gunicorn/ { print $1 }' log_filename\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, the command will print out the first word (indicated by $1) of lines that contain the word \u201cgunicorn\u201d\nMore info ",(0,o.jsx)(n.a,{href:"https://linuxize.com/post/awk-command/",children:"awk-command"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(7294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);