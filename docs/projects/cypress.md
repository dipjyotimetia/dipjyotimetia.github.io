---
id: cypress
title: Cypress Test Framework
---

[![Build Status](https://github.com/dipjyotimetia/CypressTest/workflows/CypressCI/badge.svg)](https://github.com/dipjyotimetia/CypressTest/actions)

![img](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)

### Installation:

- Install [nodejs 14.5.1 lts](https://nodejs.org/en/download/)
- Install [VS_Code](https://code.visualstudio.com/download)

### Project Setup:
```bash
$ git clone https://github.com/dipjyotimetia/CypressTestFramework.git
$ npm i
```
### Configure/update/set Test Environments:

- Open config and update test environment urls,user,pass and update it to config.js
- Test environment json files names are case sensitive
- To run test on specific environment update `configFile=uat or configFile=prod`

### Write Code:

- Add `/// <reference types="Cypress" />` and `/// <reference types="../support" />` if required `/// <reference types="cypress-downloadfile"/>` reference on the top, to get typed reference.
- Add new spec file with the format TC00*\_SampleTest*\_spec.js
- Write functions in PageObjects as E.g login
- Write helper methods in `_support/actions.ts_`
- Add test data in `_data/testdata.ts_`
- Add mock data files in `_fixtures/_`

### Test Code

```typescript
/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import { loginPage } from "../pageObjects/login_page";
import { BASE_URL, USERNAME, PASSWORD } from "../config/config";

describe('Testing Web', function () {

    before(()=>{
        cy.mockGlobalFeeds();
        cy.mockTags();
    });

    it('Web Login', () => {
        loginPage.navigateToUrl(BASE_URL);
        loginPage.login(USERNAME, PASSWORD);
    });

});
```

### Test:

- `npm run cy:chrome` run tests in chrome browser
- `npm run cypress:open` for test development and run(_Test Watcher is set to false_)
- `npm run cy:test` run all tests in headless
- `npx cypress run --env configFile=test --headed --spec 'cypress/integration/TC002_Login_Spec.ts'` To run specific test in chrome

### Generate Report Locally

- `npm run combine-reports` to combine mocha json report
- `npm run generate-report` to generate html report

  <!-- https://hackernoon.com/cypress-io-docker-the-ultimate-e2e-stack-a20ee25654b1 -->

<!-- https://medium.freecodecamp.org/how-to-test-your-frontend-with-the-cypress-io-framework-f048070f4330 -->

<!-- [![Debugging](http://img.youtube.com/vi/H0XScE08hy/0.jpg)](https://www.youtube.com/watch?v=H0XScE08hy8&feature=youtu.be) -->