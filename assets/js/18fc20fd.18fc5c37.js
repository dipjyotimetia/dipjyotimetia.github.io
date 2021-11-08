"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[2396],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return d}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),u=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(s.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),f=u(t),d=r,m=f["".concat(s,".").concat(d)]||f[d]||g[d]||i;return t?o.createElement(m,a(a({ref:e},l),{},{components:t})):o.createElement(m,a({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3439:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return g},default:function(){return d}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],c={slug:"function",title:"function",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["cloud function","tech","golang","serverless"],description:"This blog talked about serverless mocking using cloud function",image:"../static/img/blog/cloudfunctions.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/function",editUrl:"https://github.com/dipjyotimetia/blog/blog/blog/2021-07-30-functions.md",source:"@site/blog/2021-07-30-functions.md",title:"function",description:"This blog talked about serverless mocking using cloud function",date:"2021-07-30T00:00:00.000Z",formattedDate:"July 30, 2021",tags:[{label:"cloud function",permalink:"/blog/tags/cloud-function"},{label:"tech",permalink:"/blog/tags/tech"},{label:"golang",permalink:"/blog/tags/golang"},{label:"serverless",permalink:"/blog/tags/serverless"}],readingTime:3.27,truncated:!1,authors:[{name:"Dipjyoti Metia",title:"Lead Software Engineer",url:"https://github.com/dipjyotimetia",imageURL:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],nextItem:{title:"Kafka",permalink:"/blog/kafka"}},l={authorsImageUrls:[void 0]},g=[{value:"What is serverless",id:"what-is-serverless",children:[],level:2},{value:"Introduction to cloud functions",id:"introduction-to-cloud-functions",children:[],level:2},{value:"Functions Framework",id:"functions-framework",children:[{value:"Deploy cloud function",id:"deploy-cloud-function",children:[],level:3}],level:2},{value:"Why Mocking using cloud function",id:"why-mocking-using-cloud-function",children:[],level:2},{value:"Use cases of mocking using cloud function",id:"use-cases-of-mocking-using-cloud-function",children:[{value:"System Testing",id:"system-testing",children:[],level:3},{value:"Performance testing",id:"performance-testing",children:[],level:3}],level:2}],f={toc:g};function d(n){var e=n.components,c=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-serverless"},"What is serverless"),(0,i.kt)("p",null,"Serverless computing is a method of providing backend services on an as-used basis. A serverless provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure. code executes in a fully managed environment and no need to provision any infrastructure."),(0,i.kt)("h2",{id:"introduction-to-cloud-functions"},"Introduction to cloud functions"),(0,i.kt)("p",null,"Google Cloud Functions is a serverless execution environment for building and connecting cloud services. With Cloud Functions you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your Cloud Function is triggered when an event being watched is fired. Your code executes in a fully managed environment. There is no need to provision any infrastructure or worry about managing any servers."),(0,i.kt)("h2",{id:"functions-framework"},"Functions Framework"),(0,i.kt)("p",null,"The Functions Framework lets you write lightweight functions that run in many different environments. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/functions-framework"},"Functions framework")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/GoogleCloudPlatform/functions-framework-go/funcframework"\n    p "github.com/cloudmock"\n    "golang.org/x/net/context"\n    "log"\n    "os"\n)\n\nfunc main() {\n    ctx := context.Background()\n    if err := funcframework.RegisterHTTPFunctionContext(ctx, "/", p.GoMock); err != nil {\n        log.Fatalf("funcframework.RegisterHTTPFunctionContext: %v\\n", err)\n    }\n    port := "8080"\n    if envPort := os.Getenv("PORT"); envPort != "" {\n        port = envPort\n    }\n    if err := funcframework.Start(port); err != nil {\n        log.Fatalf("funcframework.Start: %v\\n", err)\n    }\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package db\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "os"\n    "time"\n\n    "github.com/cloudmock/config"\n    "github.com/cloudmock/secret"\n    "go.mongodb.org/mongo-driver/mongo"\n    "go.mongodb.org/mongo-driver/mongo/options"\n)\n\nconst ENV = "ENVIRONMENT"\n\nfunc NewDatabaseConnection() *mongo.Collection {\n    var err error\n    log.Print("Connecting to mongodb")\n    conf, err := config.LoadConfigPath("config/app")\n    if err != nil {\n        log.Fatalf("")\n    }\n    env := os.Getenv(ENV)\n    var client *mongo.Client\n\n    conn, err := secret.GetSecrets()\n    if err != nil {\n        log.Fatalf("mongo db secret url failed %v", err)\n    }\n    if env == "dev" {\n        fmt.Println("Connecting to localdb")\n        client, err = mongo.NewClient(options.Client().SetAuth(\n            options.Credential{\n                Username: conf.DBuser,\n                Password: conf.DBpassword,\n            }).ApplyURI(conf.DBurl))\n    } else {\n        client, err = mongo.NewClient(options.Client().ApplyURI(conn))\n    }\n\n    if err != nil {\n        log.Fatalf("mongo db client failed %v", err)\n    }\n    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n    defer cancel()\n    err = client.Connect(ctx)\n    if err != nil {\n        log.Fatalf("mongo db connection failed %s", err) //nolint:gocritic\n    }\n    return client.Database("function").Collection("payments")\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package router\n\nimport (\n    "encoding/json"\n    "github.com/brianvoe/gofakeit/v6"\n    "net/http"\n)\n\ntype UserDetails struct {\n    Name     string `json:"name"`\n    Email    string `json:"email"`\n    Phone    string `json:"phone"`\n    Address  string `json:"address"`\n    Company  string `json:"company"`\n    JobTitle string `json:"jobTitle"`\n}\n\nfunc NewUserWrite() *[]UserDetails {\n    var usr []UserDetails\n    for i := 0; i < gofakeit.RandomInt([]int{5, 10, 12, 4, 11}); i++ {\n        usr = append(usr, UserDetails{\n            Name:     gofakeit.Name(),\n            Email:    gofakeit.Email(),\n            Phone:    gofakeit.Phone(),\n            Address:  gofakeit.Address().Address,\n            Company:  gofakeit.Company(),\n            JobTitle: gofakeit.JobTitle(),\n        })\n    }\n    return &usr\n}\n\nfunc User() func(w http.ResponseWriter, r *http.Request) {\n    return func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set("Content-Type", "application/json")\n        jData, err := json.Marshal(NewUserWrite())\n        if err != nil {\n            http.Error(w, err.Error(), http.StatusInternalServerError)\n            return\n        }\n        w.WriteHeader(http.StatusOK)\n        w.Write(jData)\n    }\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package p\n\nimport (\n    "github.com/cloudmock/router"\n    "github.com/go-chi/chi/v5"\n    "github.com/go-chi/chi/v5/middleware"\n    "github.com/go-chi/httprate"\n    "github.com/rs/cors"\n    "net/http"\n    "time"\n)\n\nfunc GoMock(w http.ResponseWriter, r *http.Request) {\n    rc := chi.NewRouter()\n    conn := db.NewDatabaseConnection()\n\n    rc.Use(middleware.RealIP)\n    rc.Use(middleware.Logger)\n    rc.Use(httprate.Limit(\n        2,\n        1*time.Second,\n        httprate.WithLimitHandler(func(w http.ResponseWriter, r *http.Request) {\n            http.Error(w, "too many requests", http.StatusTooManyRequests)\n        }),\n    ))\n\n    rc.Route("/api/v1", func(rc chi.Router) {\n        rc.Get("/users", router.User())\n        rc.Get("/categories", router.Category())\n    })\n\n    cors.Default().Handler(rc).ServeHTTP(w, r)\n}\n\n')),(0,i.kt)("h3",{id:"deploy-cloud-function"},"Deploy cloud function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Build and Deploy to CloudFunction\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  deploy:\n    name: deploy\n    runs-on: ubuntu-latest\n    steps:\n      - uses: google-github-actions/setup-gcloud@master\n        with:\n          project_id: ${{ secrets.GCP_PROJECT_ID }}\n          service_account_key: ${{ secrets.gcp_credentials }}\n          export_default_credentials: true\n      - uses: actions/checkout@v2\n      - name: Deploy serverless function\n        run: |\n          gcloud functions deploy "GoMock" \\\n            --runtime go113 --trigger-http \\\n            --allow-unauthenticated \\\n            --region australia-southeast1 \\\n            --update-env-vars MONGODB=${{ secrets.mongo_secret }} \\\n            --max-instances 2 \\\n            --memory 128mb \\\n            --service-account=${{ secrets.service_account }} \\\n            --no-user-output-enabled\n')),(0,i.kt)("h2",{id:"why-mocking-using-cloud-function"},"Why Mocking using cloud function"),(0,i.kt)("h2",{id:"use-cases-of-mocking-using-cloud-function"},"Use cases of mocking using cloud function"),(0,i.kt)("h3",{id:"system-testing"},"System Testing"),(0,i.kt)("h3",{id:"performance-testing"},"Performance testing"),(0,i.kt)("p",null,"Performance tests check the behaviors of the system when it is under significant load. These tests are non-functional and can have the various form to understand the reliability, stability, and availability of the platform. For instance, it can be observing response times when executing a high number of requests, or seeing how the system behaves with a significant of data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:t(2382).Z}),"\n",(0,i.kt)("img",{alt:"img.png",src:t(214).Z})))}d.isMDXComponent=!0},2382:function(n,e,t){e.Z=t.p+"assets/images/K6Result-25acebe39961c7920c7dbca40e2e33e8.png"},214:function(n,e,t){e.Z=t.p+"assets/images/function-9fb2556cd7f83454557403a8a7a0ffa7.png"}}]);