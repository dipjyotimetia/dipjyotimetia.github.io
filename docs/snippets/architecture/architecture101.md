---
id: architecture101
title: Architecture101
sidebar_label: Architecture101
---

# Full serverless architecture using cloud functions

kubectl apply -f k8s/production -n production

kubectl scale deployment gceme-frontend-production -n production --replicas 4


gcloud container clusters create jenkins-cd \
--num-nodes 2 \
--machine-type n1-standard-1 \
--scopes "https://www.googleapis.com/auth/source.read_write,cloud-platform"