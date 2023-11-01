---
id: google1
title: Get Started
sidebar_label: Get Started
---

## Google cloud sketch
[SketchNotes](https://thecloudgirl.dev/)   

## Example repository
[GitHub](https://github.com/rosera/pet-theory.git)

### Activate project

```bash
export PROJECT_ID=""
gcloud config list project
gcloud config set project $PROJECT_ID
gcloud config set project $(gcloud projects list --format='value(PROJECT_ID)' --filter='qwiklabs-gcp')
```

### Create cloud pubsub topic
```bash
export TOPIC_NAME=""
export TOPIC_SUBSCRIPTION_NAME=""
export SERVICE_ACCOUNT_NAME=""
export SERVICE_URL=""
#pubsub create topic
gcloud pubsub topics create $TOPIC_NAME
#pubsub subscription
gcloud pubsub subscriptions create $TOPIC_SUBSCRIPTION_NAME --topic $TOPIC_NAME --push-endpoint=$SERVICE_URL --push-auth-service-account=$SERVICE_ACCOUNT_NAME@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com
```

### Create service account & add roles

```bash
export SERVICE_ACCOUNT_NAME=""
export SERVICE_NAME=""
export DISPLAY_NAME=""

gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME --display-name $DISPLAY_NAME

gcloud run services add-iam-policy-binding $SERVICE_NAME --member=serviceAccount:$SERVICE_ACCOUNT_NAME@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com --role=roles/run.invoker --region us-central1 --platform managed
```

### Enable the project to create Pub/Sub authentication tokens
```bash
PROJECT_NUMBER=$(gcloud projects list --filter="qwiklabs-gcp" --format='value(PROJECT_NUMBER)')

gcloud projects add-iam-policy-binding $GOOGLE_CLOUD_PROJECT --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com --role=roles/iam.serviceAccountTokenCreator

curl -X GET -H "Authorization: Bearer $(gcloud auth print-identity-token)" $SERVICE_URL
```

### Cloud storage trigger
```bash
gcloud pubsub subscriptions create $TOPIC_SUBSCRIPTION \
  --topic $TOPIC_NAME \
  --push-endpoint=$SERVICE_URL \
  --push-auth-service-account=$SERVICE_ACCOUNT@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com
```

### Deploy to container registry
```bash
export DOCKER_TAG="rest-api:0.1"
gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/$DOCKER_TAG
```

### Build and deploy to cloud run
```bash
export SERVICE_NAME=""
export DOCKER_TAG="rest-api:0.1"
gcloud beta run deploy $SERVICE_NAME \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/$DOCKER_TAG \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Get deployment url
```bash
export LAB_REPORT_SERVICE_URL=$(gcloud run services describe lab-report-service --platform managed --region us-central1 --format="value(status.address.url)")
```