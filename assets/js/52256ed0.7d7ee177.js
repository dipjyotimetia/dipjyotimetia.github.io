"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[3010],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>m});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),l=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},g=function(t){var e=l(t.components);return i.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,g=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(m,o(o({ref:e},g),{},{components:n})):i.createElement(m,o({ref:e},g))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7734:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const r={slug:"github",title:"Github Eyes",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["github","tech","golang"],description:"This is a blog talked about github apis using golang",image:"../static/img/blog/gogithub.png",hide_table_of_contents:!0},o=void 0,s={permalink:"/blog/github",editUrl:"https://github.com/dipjyotimetia/blog/blog/blog/2021-01-26-githubapi.md",source:"@site/blog/2021-01-26-githubapi.md",title:"Github Eyes",description:"This is a blog talked about github apis using golang",date:"2021-01-26T00:00:00.000Z",formattedDate:"January 26, 2021",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"tech",permalink:"/blog/tags/tech"},{label:"golang",permalink:"/blog/tags/golang"}],readingTime:2.6,hasTruncateMarker:!1,authors:[{name:"Dipjyoti Metia",title:"Lead Software Engineer",url:"https://github.com/dipjyotimetia",imageURL:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],frontMatter:{slug:"github",title:"Github Eyes",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["github","tech","golang"],description:"This is a blog talked about github apis using golang",image:"../static/img/blog/gogithub.png",hide_table_of_contents:!0},prevItem:{title:"Kafka",permalink:"/blog/kafka"},nextItem:{title:"Serverless Framework",permalink:"/blog/serverless"}},u={authorsImageUrls:[void 0]},l=[],g={toc:l};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Presenting github eyes, a golang implementation of the github rest apis using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/go-github"},"Google GitHub")," sdk to interact with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest"},"Github Api"),", using github apis we can crawl over multiple repository and automate different tasks from creating repo, creating labels, adding milestones, get latest commits, updating workflows, get the project build status etc, below is the basic demonstration of getting list of issues from multiple repos. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7593).Z,width:"1117",height:"442"})),(0,a.kt)("p",null,"The go-github library does not directly handle authentication. The easiest and recommended way to do this is using the OAuth2 library, If you have an OAuth2 access token (for example, a personal API token), you can use it with the OAuth2 library.\nTo get the personal api token follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"documentation")," and\nBelow is the code snippet for authentication using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/oauth2"},"oauth2"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="auth.go"',title:'"auth.go"'},'package github\n\nimport (\n    "context"\n\n    "github.com/google/go-github/v33/github"\n    "golang.org/x/oauth2"\n)\n\nAUthenticating using github access token\n// AuthGithubAPI authentication of github api\nfunc AuthGithubAPI(ctx context.Context) *github.Client {\n    ts := oauth2.StaticTokenSource(\n        &oauth2.Token{AccessToken: "XXXXXXXXXXXXXXXXXXXXXXX"},\n    )\n    tc := oauth2.NewClient(ctx, ts)\n    return github.NewClient(tc)\n}\n')),(0,a.kt)("p",null,"Getting the list of issues in a repository, here we have created a struct named ",(0,a.kt)("inlineCode",{parentName:"p"},"Issues")," with the required fields and then created a function ",(0,a.kt)("inlineCode",{parentName:"p"},"ListIssues")," where we are passing the github api authentication and then ",(0,a.kt)("inlineCode",{parentName:"p"},"client.Issues.ListByRepo")," is doing the job where underneath its calling ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/issues/#list-repository-issues"},"Github Issues Api"),".",(0,a.kt)("br",{parentName:"p"}),"\n","We can also extend this function by adding filters to get open/closed issues and so on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="issues.go"',title:'"issues.go"'},'package github\n\nimport (\n    "context"\n    "log"\n    "time"\n)\n\ntype Issues struct {\n    ID        int64\n    Title     string\n    State     string\n    CreatedAt time.Time\n    URL       string\n}\n\n// ListIssues get list of issues\nfunc ListIssues(repos string) interface{}{\n    ctx := context.Background()\n    client := AuthGithubAPI(ctx)\n    issues, _, err := client.Issues.ListByRepo(ctx, "dipjyotimetia", repos, nil)\n    if err != nil {\n        log.Println(err)\n    }\n\n    var issueList []interface{}\n    for _, v := range issues {\n        issueList = append(issueList,&Issues{\n            ID:        v.GetID(),\n            Title:     v.GetTitle(),\n            State:     v.GetState(),\n            CreatedAt: v.GetCreatedAt(),\n            URL:       v.GetHTMLURL(),\n        })\n    }\n    return issueList\n}\n')),(0,a.kt)("p",null,"Main function to drive the show, here we are passing the repo names in an array called ",(0,a.kt)("inlineCode",{parentName:"p"},"repoNames")," and in a loop calling the the function derived above ",(0,a.kt)("inlineCode",{parentName:"p"},"ListIssues")," and then generating the result in a json file in local path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "github.com/goutils/pkg/github"\n    "io/ioutil"\n)\n\nfunc main() {\n    repoNames := []string{"HybridTestFramewrok", "MobileTestFramework"}\n    var result []interface{}\n    for _, repoName := range repoNames {\n        result = append(result, repoName, github.ListIssues(repoName))\n    }\n\n    file, _ := json.MarshalIndent(result, "", "")\n    _ = ioutil.WriteFile("test.json", file, 0644)\n}\n\n')),(0,a.kt)("p",null,"Example of the exported json data of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListIssues")," function for the two repos."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "HybridTestFramewrok",\n  [\n    {\n      "ID": 690950907,\n      "Title": "Add reddis tests support",\n      "State": "open",\n      "CreatedAt": "2020-09-02T11:42:07Z",\n      "URL": "https://github.com/dipjyotimetia/HybridTestFramewrok/issues/65"\n    },\n    {\n      "ID": 690950833,\n      "Title": "Add ssh login builder",\n      "State": "open",\n      "CreatedAt": "2020-09-02T11:42:01Z",\n      "URL": "https://github.com/dipjyotimetia/HybridTestFramewrok/issues/64"\n    },\n    {\n      "ID": 690950781,\n      "Title": "Add file reader validations",\n      "State": "open",\n      "CreatedAt": "2020-09-02T11:41:55Z",\n      "URL": "https://github.com/dipjyotimetia/HybridTestFramewrok/issues/63"\n    },\n    {\n      "ID": 690950708,\n      "Title": "add kafka testing",\n      "State": "open",\n      "CreatedAt": "2020-09-02T11:41:48Z",\n      "URL": "https://github.com/dipjyotimetia/HybridTestFramewrok/issues/62"\n    },\n    {\n      "ID": 690950641,\n      "Title": "add rabitmq testing support",\n      "State": "open",\n      "CreatedAt": "2020-09-02T11:41:43Z",\n      "URL": "https://github.com/dipjyotimetia/HybridTestFramewrok/issues/61"\n    }\n  ],\n  "MobileTestFramework",\n  [\n    {\n      "ID": 793821012,\n      "Title": "Add AWS Device Farm support",\n      "State": "open",\n      "CreatedAt": "2021-01-26T00:19:55Z",\n      "URL": "https://github.com/dipjyotimetia/MobileTestFramework/issues/88"\n    }\n  ]\n]\n')),(0,a.kt)("p",null,"Project structure",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"image",src:n(6835).Z,width:"352",height:"311"})))}p.isMDXComponent=!0},7593:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gogithub-4b1387f20a6475fafa5381be5c101bbb.png"},6835:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gogithubstruct-7b6bd2487492508d1aeade35fa88c3a4.png"}}]);