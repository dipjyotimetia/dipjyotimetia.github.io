---
slug: serverless
title: Serverless Framework
author: Dipjyoti Metia
author_title: Lead Software Engineer
author_url: https://github.com/dipjyotimetia
author_image_url: https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4
tags: [serverless, tech, aws]
---

# Serverless Framework

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png)

### Where to start?

https://serverless.com/framework/docs/providers/aws/guide/quick-start/

`npm install -g serverless`

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverless.png)

- Create IAM user
  https://serverless.com/framework/docs/providers/aws/guide/iam/

- Setup user access  
  serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx

- Create project  
  serverless create --template aws-nodejs --path my-service

- Serverless yml  
  https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/

- Serverless Deploy  
  `serverless deploy -v`

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessdeploy.png)

### Serverless offline

https://github.com/dherault/serverless-offline

```
serverless plugin install --name serverless-offline
serverless offline start
```

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessOffline.png)

### Insomnia

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessMongo.png)

### Serverless dashbird

https://app.dashbird.io/

### Mongodb

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/mongodb.png)

```
$ npm init -y
$ npm i --save-dev serverless-offline
$ npm i --save mongoose dotenv
sls offline start --skipCacheInvalidation
```