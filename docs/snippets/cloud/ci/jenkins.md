---
id: jenkins
title: Jenkins
sidebar_label: Jenkins
---

### To Allow html css in html publisher
Go to jenkins script console and run the below command  
```bash   
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "sandbox allow-same-origin allow-scripts; default-src 'self'; script-src * 'unsafe-eval'; img-src *; style-src * 'unsafe-inline'; font-src *")
```    
or   
```  
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "sandbox allow-scripts; default-src 'self'; img-src *; style-src 'self' 'unsafe-inline'; script-src * 'unsafe-inline';")
```  
### Running different dockerfile in jenkins pipeline in different dir
```groovy
pipeline {
   agent none
   stages {
       stage("Only Dockerfile in Project") {
	     agent { dockerfile true }
	      steps {
		 sh 'npm start'
	      }
	}
        stage("Docker file under build folder") {
	     agent {
		dockerfile {
		    dir 'build'
		  }
	      }
	      steps {
		 sh 'npm start'
	      }
	}
	stage("Docker file for test under Tests folder") {
	     agent {
		dockerfile {
		    dir 'E2ETests'
		  }
	      }
	      steps {
		 sh 'npm test'
	      }
	}
   }
}   
```

### Demo jenkisnfile for multibranch javascript
```groovy
def buildVersion = ''

pipeline {
  agent  { label 'win' }
	triggers { cron('15 09 * * *') }

    parameters {
        string(name: 'exec_config', defaultValue: 'ENV', description: 'Default execution environment is ENV headless')
    }

	options {
			buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
		}

    stages {
	 stage("Test ENV") {
			steps {
				echo 'run tests'
				sh 'npm run test:headless'
				echo "${params.exec_config}"
				sh "npm run test:e2e:${params.exec_config}"
			}
		}

	}
	post {
		always {
              allure includeProperties: false, jdk: '', results: [[path: 'allure-xml-results']]
              publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'allure-report', reportFiles: 'index.html', reportName: 'Allure Report', reportTitles: ''])
		}
	}
```
### Emailable Report
```html
Hi All,
<br/>
Please find the execution detail and buildlog in attachment.
<br/>
Report url: /<br/>
<br/>
<pre>
${FILE, path="build/testngOutput/emailable-report.html"}
</pre>
```
Attachments: Reports/*.html