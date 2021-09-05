---
id: bash
title: Get Started with bash
sidebar_label: Get Started
---

https://devhints.io/bash

## Adding permissions
Make a shell script executable by the user/owner
```bash
chmod u+x deploy.sh # You can then execute it like this: ./deploy.sh
chmod 444 file # - Allow read permission to owner and group and world
chmod 777 file # - Allow everyone to read, write, and execute file
```


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"id\": 12}" \
  $SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"id\": 34}" \
  $SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"id\": 56}" \
  $SERVICE_URL &
```