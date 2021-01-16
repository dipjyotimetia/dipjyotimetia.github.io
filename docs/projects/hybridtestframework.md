---
id: hybridtestframework
title: Hybrid Test Framework
sidebar_label: Hybrid Test Framework
slug: /
description: WEB, API and Security testing framework using selenium,ZAP OWASP proxy and rest-assured
keywords:
  - selenium
  - testing
  - api
  - rest-assured
  - OWASP
  - ZAP
image: ../../static/img/projects/selenium.png 
---
#### Full fledged WEB, API and Security testing framework using selenium,ZAP OWASP proxy and rest-assured

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2ffd9c97725645c2bcda860988dc0baf)](https://www.codacy.com/manual/dipjyotimetia/HybridTestFramewrok?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dipjyotimetia/HybridTestFramewrok&amp;utm_campaign=Badge_Grade)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/CypressTest/Selenium)
![CI](https://github.com/dipjyotimetia/HybridTestFramewrok/workflows/CI/badge.svg)
[![Build Status](https://dev.azure.com/dipjyoti/OpensourceProjects/_apis/build/status/dipjyotimetia.HybridTestFramewrok?branchName=master)](https://dev.azure.com/dipjyoti/OpensourceProjects/_build/latest?definitionId=7&branchName=master)  
[![SupportedBy JetBrains](../../static/img/projects/jetbrains.svg)](https://www.jetbrains.com/?from=HybridTestFramework)

![img](../../static/img/projects/selenium.png)      

### Supported Platforms  
This framework supports WebUi automation across a variety of browsers like Chrome, Firefox, IE, no only limited to this but extended to test rest api, security and visual testing.

### Capabilities
* Cross browser testing support
* Added BrowserStack support for CrossBrowser testing
* Running tests in docker containers selenium grid
* Running tests in AWS DeviceFarm selenium grid
* Running tests in selenium server in docker containers
* Security testing using OWASP, running in docker container
* Api testing support using RestAssured
* Visual regression testing using percy.io
* Accessibility testing using axe-selenium
* Stubbed api testing using WireMock
* Can send logs to ElasticSearch for kibana dashboard visualization
* Database testing support(Coming Soon...)
* Kubernetes support(Coming soon...)   
    
### Setup & Tools
* [Install intellij](https://www.jetbrains.com/idea/download/)
* [Install docker desktop](https://www.docker.com/products/docker-desktop)
* [Java JDK_8](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html) or any latest version.  
* [Gradle](https://gradle.org/next-steps/?version=6.4&format=bin)
* [Allure](https://github.com/allure-framework/allure2/archive/2.13.8.zip)    
* Set Environment variables      
    *JAVA_HOME: Pointing to the Java SDK folder\bin*   
    *GRADLE_HOME: Pointing to Gradle directory\bin*      
    *ALLURE_HOME: Pointing to allure directory\bin*  

### Getting Started
```shell
$ git clone 
$ cd 
$ import project from intellij as a gradle project
$ gradle clean
$ gradle build
$ gradle task E2E
$ gradle allureReport
$ gradle allureServe
```
### Docker Compose
> Spawns chrome, firefox, selenium hub and OWASP proxy server    
```shell
$ docker-compose up -d
```
> Complete infrastructure creation for local run
```shell
$ $ docker-compose -f docker-compose-infra up -d
```
> Spawns four additional node-chrome/firefox instances linked to the hub
```shell
$ docker-compose scale chrome=5
$ docker-compose scale firefox=5
```
:::tip
### Write your first user journey
Create new class and name as the TC00*_E2E_TEST-***
 - Provide jira link in @Link
 - Provide all the api components as @Feature
 - Provide test severity and description
 - Write test
 - Use CatchBlock in try/catch section
:::

### JenkinsExecution  
![image](../../static/img/projects/jenkinsExecution.png)  

### GridServer 2.0
![image](../../static/img/projects/seleniumGrid.png)    

### Allure Reporting
![image](../../static/img/projects/allureReport.png)    

### Gradle Report
![image](../../static/img/projects/gradleReport.png)  

### TestResults
![image](../../static/img/projects/testResults.png)    

### BrowserStack Dashboard
![image](../../static/img/projects/browserStack.png)      

### LogsView
![image](../../static/img/projects/logs.png)