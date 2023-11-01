---
id: kubernetes
title: kubernetes
sidebar_label: Kubernetes
---

:::tip

What can Kubernetes do for you?
With modern web services, users expect applications to be available 24/7, and developers expect to deploy new versions of those applications several times a day. Containerization helps package software to serve these goals, enabling applications to be released and updated without downtime. Kubernetes helps you make sure those containerized applications run where and when you want, and helps them find the resources and tools they need to work. Kubernetes is a production-ready, open source platform designed with Google's accumulated experience in container orchestration, combined with best-of-breed ideas from the community.

:::

### Learn kubernetes basiscs
https://kubernetes.io/docs/tutorials/kubernetes-basics/

### Create kubernetes cluser
```bash

gcloud container clusters create [CLUSTER-NAME]

gcloud container clusters get-credentials [CLUSTER-NAME]
```
## Create kubernetes deployment from a image
```bash
kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:1.0
```

## Create kubernetes service
```bash
kubectl expose deployment hello-server --type=LoadBalancer --port 8080
```
In this command:
--port specifies the port that the container exposes.
type="LoadBalancer" creates a Compute Engine load balancer for your container.

## Get Services
```bash
kubectl get service
```

## Creating POD

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: monolith
  labels:
    app: monolith
spec:
  containers:
    - name: monolith
      image: kelseyhightower/monolith:1.0.0
      args:
        - "-http=0.0.0.0:80"
        - "-health=0.0.0.0:81"
        - "-secret=secret"
      ports:
        - name: http
          containerPort: 80
        - name: health
          containerPort: 81
      resources:
        limits:
          cpu: 0.2
          memory: "10Mi"
```

```bash
kubectl create -f pods/monolith.yaml
kubectl get pods
kubectl describe pods monolith
```

### Port forwarding
```bash
kubectl port-forward monolith 10080:80
```

### Get logs
```bash
kubectl logs monolith
## Stream logs
kubectl logs -f monolith
```

### Interactive shell inside the pod
```bash
kubectl exec monolith --stdin --tty -c monolith /bin/sh

### Check the external connectivity
ping -c 3 google.com
```

### Check deployments

```bash
kubectl explain deployment
kubectl explain deployment --recursive
kubectl explain deployment.metadata.name
```

### Scale the deployment
```bash
kubectl scale deployment hello --replicas=5
## Verify the scale
kubectl get pods | grep hello- | wc -l
```

### Trigger rolling update
```bash
kubectl edit deployment hello

kubectl get replicaset

kubectl rollout history deployment/hello

kubectl rollout pause deployment/hello

kubectl rollout status deployment/hello

kubectl get pods -o jsonpath --template='{range .items[*]}{.metadata.name}{"\t"}{"\t"}{.spec.containers[0].image}{"\n"}{end}'

kubectl rollout resume deployment/hello

kubectl rollout undo deployment/hello
```

## Delete Cluster
```bash
gcloud container clusters delete [CLUSTER-NAME]
```