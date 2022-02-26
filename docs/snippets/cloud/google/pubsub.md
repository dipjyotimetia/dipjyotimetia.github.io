---
id: pubsub
title: PubSub
sidebar_label: PubSub
---

Ingest events for streaming into BigQuery, data lakes or operational databases.

### Ingestion user interaction and server events. 
To make use of user interaction events from end-user apps or server events from your system, you may forward them to Pub/Sub and then use a stream processing tool (such as Dataflow) which delivers them to BigQuery, Bigtable, Cloud Storage and other databases. Pub/Sub allows you to gather events from many clients. simultaneously.

### Real-time event distribution. 
Events, raw or processed, may be made available to multiple applications across your team and organization for real time processing. This supports an "enterprise event bus" and event-driven application design patterns. Pub/Sub allows you to integrate with many Google systems that export events to Pub/Sub.

### Replicating data among databases. 
Pub/Sub is commonly used to distribute change events from databases. These events can be used to construct a view of the database state and state history in BigQuery and other data storage systems.

### Parallel processing and workflows. 
You can efficiently distribute a large number of tasks among multiple workers--such as compressing text files, sending email notifications, evaluating AI models, or reformatting images--by using Pub/Sub messages to connect to Cloud Functions.

### Enterprise event bus. 
You can create an enterprise-wide real-time
data sharing bus, distributing business events, database updates, and analytics events across your organization.
Data streaming from IoT devices. For example, a residential sensor can stream data to backend servers hosted in the cloud.
Refreshing distributed caches. For example, an application can publish invalidation events to update the IDs of objects that have changed.

### Load balancing for reliability. 
For example, instances of a service may be deployed on Compute Engine in multiple zones but subscribe to a common topic. When the service fails in any zone, the others can pick up the load automatically.
