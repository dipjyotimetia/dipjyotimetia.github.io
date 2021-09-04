---
id: taurus
title: Taurus
sidebar_label: Taurus
---

 ### Taurus install linux
 
 ```bash
 sudo yum install java-1.8.0  
 sudo yum remove java-1.7.0-openjdk  
 sudo yum install python default-jre-headless python-tk python-pip python-dev \ libxml2-dev libxslt-dev zlib1g-dev net-tools  
 sudo yum -y install gcc  
 sudo yum install bzt  
```

### Docker command
```bash
docker run --rm -v C:\ccviews\taurus:/bzt-configs -v C:\ccviews\taurus\artifact:/tmp/artifacts blazemeter/taurus taurus_execution.yml
```

### Demo Script 1
```yml
execution:
- scenario: testlogin
  concurrency: 170
  hold-for: 50s
  duration: 60
scenarios:
  testlogin:
    headers:
      Content-type: application/json
      User-Agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36'
    requests:
    - url: https://
      method: POST
      label: '/signin'
      body:
        'username': 
        'password': 
      assert-jsonpath:
        - jsonpath: "$.ErrorNo" # path to value, validation fails if path not exists
          validate: true # validate against expected value
          expected-value: "0" # the value we are expecting to validate, default: false
          regexp: true  # if the value is regular expression, default: true
          expect-null: false  # expected value is null
          invert: false # invert condition 

reporting:
- module: console
- module: final-stats
  summary: true
  percentiles: true
  failed-labels: false   
  test-duration: true

```
### Demo Script 2
```yml
execution:
- scenario: testlogin
  concurrency: 300
  hold-for: 3000s
  duration: 1000
scenarios:
  testlogin:
    headers:
      Content-type: application/json
      User-Agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'
    requests:
    - url: https://
      method: POST
      body:
        'username': 
        'password': 
        
reporting:
- final-stats
- console        

```
### Demo Script 3
```yml
execution:
- scenario: test
  concurrency: 2
  hold-for: 10s
  duration: 2
scenarios:
  test:
    headers:
      Content-type: application/json
    requests:
    - url: https://******/api/
      method: GET
      extract-jsonpath:   
        masterEventIds: $.result.
        eventIds: $.result.
    - url: https://******/api/
      method: GET
      label: bpe
      assert-jsonpath:
        - "$[0].quantity"
    
reporting:
#- module: blazemeter
#  report-name: testbpe
#  test: testbpe
#  project: testbpe
- module: passfail
  criteria:
  - avg-rt of bpe>100ms for 10s, stop as failed
  - rc4?? of bpe>1, stop as failed
  - rc5?? of bpe>1, stop as failed
```

https://www.blazemeter.com/blog/how-to-create-a-lightweight-performance-monitoring-solution-with-docker-grafana-and-influxdb

https://www.blazemeter.com/blog/gatling-tests-monitoring-with-grafana-and-influxdb

### Taurus for docker:
- Create folder name taurus
- Create sub folder name artifact
```
docker run --rm -v C:\ccviews\taurus:/bzt-configs -v C:\ccviews\taurus\artifact:/tmp/artifacts blazemeter/taurus taurus_execution1.yml