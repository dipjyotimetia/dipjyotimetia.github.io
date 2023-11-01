---
id: testcafe
title: Testcafe Test Framework
---

![TestCafeCI](https://github.com/TestautoDev/TestCafeTestFramework/workflows/TestCafeCI/badge.svg)  

![img](https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png)

### Installation

- Install [nodejs 14.5.1 lts](https://nodejs.org/en/download/)
- Install [VS_Code](https://code.visualstudio.com/download)

### Project Setup

```bash
git clone repo https://github.com/dipjyotimetia/TestCafeTestFramework.git
npm install
```

### Write Code

- Add new spec file with the format `TC00*\_SampleTest*\_spec.ts`

```typescript
import { Selector } from "testcafe";
import * as selector from "../src/selectors/index";
import * as pages from "../src/pageObjects/index";

fixture('Test TodoMVC App')
    .page('http://todomvc.com/examples/vanillajs/')

test.skip('Create todo', async t => {
    await t
        .maximizeWindow()
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

    await t
        .maximizeWindow()
        .expect(selector.todoItems.count)
        .eql(1)

    await t
        .maximizeWindow()
        .expect(selector.firstTodoItem.textContent)
        .contains('write blog post about JS')
})
```

### Test

- `test:chrome` run tests in chrome browser

### Configurations

```typescript title="runner.config.ts"
.filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
    return fixturePath.startsWith('D') &&
        testName.match(someRe) &&
        fixtureName.match(anotherRe) &&
        testMeta.mobile === 'true' &&
        fixtureMeta.env === 'staging';
});

.browsers(['chrome', 'firefox'])
.browsers('chrome:headless')
.browsers('chrome:headless --no-sandbox --disable-gpu')
.concurrency(3);

.screenshots({
    path: 'reports/screenshots/',
    takeOnFails: true,
    pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png'
});

.video('reports/videos/', {
    singleFile: true,
    failedOnly: true,
    pathPattern: '${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4'
}, {
    r: 20,
    aspect: '4:3'
});

```

### Full Configurations

```json title=".testcaferc.json"
{
    "browsers": ["chrome","edge", "firefox"],
    "reporter": {
        "name": "xunit",
        "output": "reports/report.xml"
    },
    "screenshots": {
        "takeOnFails": true,
        "fullPage": true,
        "path": "screenshot",
        "pathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"
    },
    "videoOptions": {
        "singleFile": true,
        "failedOnly": true,
        "pathPattern": "${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4"
    },
    "debugMode": true,
    "debugOnFail": true,
    "skipJsErrors": true,
    "skipUncaughtErrors": true,
    "filter": {
        "test": "Click a label",
        "testGrep": "Click.*",
        "fixture": "Sample fixture",
        "fixtureGrep": "Page.*",
        "testMeta": {
            "device": "mobile",
            "env": "production"
        },
        "fixtureMeta": {
            "device": "mobile",
            "env": "production"
        }
    },
    "debugMode": false,
    "debugOnFail": false,
    "skipJsErrors": true,
    "skipUncaughtErrors": true,
    "appInitDelay": 3000,
    "concurrency": 1,
    "selectorTimeout": 3000,
    "assertionTimeout": 1000,
    "pageLoadTimeout": 1000,
    "hostname": "localhost",
    "developmentMode": false,
    "tsConfigPath": "tsconfig.json",
    "disablePageCaching": true,
    "color": true,
    "appCommand": "node server.js",
    "speed": 0.1,
    "proxy": "proxy.corp.mycompany.com",
    "ssl": {
        "pfx": "path/to/file.pfx",
        "rejectUnauthorized": true
    }
}
```
