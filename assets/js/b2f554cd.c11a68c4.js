"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[301],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"function","metadata":{"permalink":"/blog/function","editUrl":"https://github.com/dipjyotimetia/blog/blog/blog/2021-07-30-functions.md","source":"@site/blog/2021-07-30-functions.md","title":"function","description":"This blog talked about serverless mocking using cloud function","date":"2021-07-30T00:00:00.000Z","formattedDate":"July 30, 2021","tags":[{"label":"cloud function","permalink":"/blog/tags/cloud-function"},{"label":"tech","permalink":"/blog/tags/tech"},{"label":"golang","permalink":"/blog/tags/golang"},{"label":"serverless","permalink":"/blog/tags/serverless"}],"readingTime":3.27,"hasTruncateMarker":false,"authors":[{"name":"Dipjyoti Metia","title":"Lead Software Engineer","url":"https://github.com/dipjyotimetia","imageURL":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],"frontMatter":{"slug":"function","title":"function","author":"Dipjyoti Metia","author_title":"Lead Software Engineer","author_url":"https://github.com/dipjyotimetia","author_image_url":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4","tags":["cloud function","tech","golang","serverless"],"description":"This blog talked about serverless mocking using cloud function","image":"../static/img/blog/cloudfunctions.png","hide_table_of_contents":false},"nextItem":{"title":"Kafka","permalink":"/blog/kafka"}},"content":"## What is serverless\\n\\nServerless computing is a method of providing backend services on an as-used basis. A serverless provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure. code executes in a fully managed environment and no need to provision any infrastructure.\\n\\n## Introduction to cloud functions\\n\\nGoogle Cloud Functions is a serverless execution environment for building and connecting cloud services. With Cloud Functions you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your Cloud Function is triggered when an event being watched is fired. Your code executes in a fully managed environment. There is no need to provision any infrastructure or worry about managing any servers.\\n\\n## Functions Framework\\n\\nThe Functions Framework lets you write lightweight functions that run in many different environments. [Functions framework](https://github.com/GoogleCloudPlatform/functions-framework)\\n\\n```go\\npackage main\\n\\nimport (\\n \\"github.com/GoogleCloudPlatform/functions-framework-go/funcframework\\"\\n p \\"github.com/cloudmock\\"\\n \\"golang.org/x/net/context\\"\\n \\"log\\"\\n \\"os\\"\\n)\\n\\nfunc main() {\\n ctx := context.Background()\\n if err := funcframework.RegisterHTTPFunctionContext(ctx, \\"/\\", p.GoMock); err != nil {\\n  log.Fatalf(\\"funcframework.RegisterHTTPFunctionContext: %v\\\\n\\", err)\\n }\\n port := \\"8080\\"\\n if envPort := os.Getenv(\\"PORT\\"); envPort != \\"\\" {\\n  port = envPort\\n }\\n if err := funcframework.Start(port); err != nil {\\n  log.Fatalf(\\"funcframework.Start: %v\\\\n\\", err)\\n }\\n}\\n\\n```\\n\\n```go\\npackage db\\n\\nimport (\\n \\"context\\"\\n \\"fmt\\"\\n \\"log\\"\\n \\"os\\"\\n \\"time\\"\\n\\n \\"github.com/cloudmock/config\\"\\n \\"github.com/cloudmock/secret\\"\\n \\"go.mongodb.org/mongo-driver/mongo\\"\\n \\"go.mongodb.org/mongo-driver/mongo/options\\"\\n)\\n\\nconst ENV = \\"ENVIRONMENT\\"\\n\\nfunc NewDatabaseConnection() *mongo.Collection {\\n var err error\\n log.Print(\\"Connecting to mongodb\\")\\n conf, err := config.LoadConfigPath(\\"config/app\\")\\n if err != nil {\\n  log.Fatalf(\\"\\")\\n }\\n env := os.Getenv(ENV)\\n var client *mongo.Client\\n\\n conn, err := secret.GetSecrets()\\n if err != nil {\\n  log.Fatalf(\\"mongo db secret url failed %v\\", err)\\n }\\n if env == \\"dev\\" {\\n  fmt.Println(\\"Connecting to localdb\\")\\n  client, err = mongo.NewClient(options.Client().SetAuth(\\n   options.Credential{\\n    Username: conf.DBuser,\\n    Password: conf.DBpassword,\\n   }).ApplyURI(conf.DBurl))\\n } else {\\n  client, err = mongo.NewClient(options.Client().ApplyURI(conn))\\n }\\n\\n if err != nil {\\n  log.Fatalf(\\"mongo db client failed %v\\", err)\\n }\\n ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\\n defer cancel()\\n err = client.Connect(ctx)\\n if err != nil {\\n  log.Fatalf(\\"mongo db connection failed %s\\", err) //nolint:gocritic\\n }\\n return client.Database(\\"function\\").Collection(\\"payments\\")\\n}\\n\\n```\\n\\n```go\\npackage router\\n\\nimport (\\n \\"encoding/json\\"\\n \\"github.com/brianvoe/gofakeit/v6\\"\\n \\"net/http\\"\\n)\\n\\ntype UserDetails struct {\\n Name     string `json:\\"name\\"`\\n Email    string `json:\\"email\\"`\\n Phone    string `json:\\"phone\\"`\\n Address  string `json:\\"address\\"`\\n Company  string `json:\\"company\\"`\\n JobTitle string `json:\\"jobTitle\\"`\\n}\\n\\nfunc NewUserWrite() *[]UserDetails {\\n var usr []UserDetails\\n for i := 0; i < gofakeit.RandomInt([]int{5, 10, 12, 4, 11}); i++ {\\n  usr = append(usr, UserDetails{\\n   Name:     gofakeit.Name(),\\n   Email:    gofakeit.Email(),\\n   Phone:    gofakeit.Phone(),\\n   Address:  gofakeit.Address().Address,\\n   Company:  gofakeit.Company(),\\n   JobTitle: gofakeit.JobTitle(),\\n  })\\n }\\n return &usr\\n}\\n\\nfunc User() func(w http.ResponseWriter, r *http.Request) {\\n return func(w http.ResponseWriter, r *http.Request) {\\n  w.Header().Set(\\"Content-Type\\", \\"application/json\\")\\n  jData, err := json.Marshal(NewUserWrite())\\n  if err != nil {\\n   http.Error(w, err.Error(), http.StatusInternalServerError)\\n   return\\n  }\\n  w.WriteHeader(http.StatusOK)\\n  w.Write(jData)\\n }\\n}\\n\\n```\\n\\n```go\\npackage p\\n\\nimport (\\n \\"github.com/cloudmock/router\\"\\n \\"github.com/go-chi/chi/v5\\"\\n \\"github.com/go-chi/chi/v5/middleware\\"\\n \\"github.com/go-chi/httprate\\"\\n \\"github.com/rs/cors\\"\\n \\"net/http\\"\\n \\"time\\"\\n)\\n\\nfunc GoMock(w http.ResponseWriter, r *http.Request) {\\n rc := chi.NewRouter()\\n conn := db.NewDatabaseConnection()\\n\\n rc.Use(middleware.RealIP)\\n rc.Use(middleware.Logger)\\n rc.Use(httprate.Limit(\\n  2,\\n  1*time.Second,\\n  httprate.WithLimitHandler(func(w http.ResponseWriter, r *http.Request) {\\n   http.Error(w, \\"too many requests\\", http.StatusTooManyRequests)\\n  }),\\n ))\\n\\n rc.Route(\\"/api/v1\\", func(rc chi.Router) {\\n  rc.Get(\\"/users\\", router.User())\\n  rc.Get(\\"/categories\\", router.Category())\\n })\\n\\n cors.Default().Handler(rc).ServeHTTP(w, r)\\n}\\n\\n```\\n\\n### Deploy cloud function\\n\\n```yaml\\nname: Build and Deploy to CloudFunction\\n\\non:\\n  push:\\n    branches: [ main ]\\n\\njobs:\\n  deploy:\\n    name: deploy\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: google-github-actions/setup-gcloud@master\\n        with:\\n          project_id: ${{ secrets.GCP_PROJECT_ID }}\\n          service_account_key: ${{ secrets.gcp_credentials }}\\n          export_default_credentials: true\\n      - uses: actions/checkout@v2\\n      - name: Deploy serverless function\\n        run: |\\n          gcloud functions deploy \\"GoMock\\" \\\\\\n            --runtime go113 --trigger-http \\\\\\n            --allow-unauthenticated \\\\\\n            --region australia-southeast1 \\\\\\n            --update-env-vars MONGODB=${{ secrets.mongo_secret }} \\\\\\n            --max-instances 2 \\\\\\n            --memory 128mb \\\\\\n            --service-account=${{ secrets.service_account }} \\\\\\n            --no-user-output-enabled\\n```\\n\\n## Why Mocking using cloud function\\n\\n## Use cases of mocking using cloud function\\n\\n### System Testing\\n\\n### Performance testing\\n\\nPerformance tests check the behaviors of the system when it is under significant load. These tests are non-functional and can have the various form to understand the reliability, stability, and availability of the platform. For instance, it can be observing response times when executing a high number of requests, or seeing how the system behaves with a significant of data.\\n\\n![img.png](../static/img/blog/K6Result.png)\\n![img.png](../static/img/blog/function.png)"},{"id":"kafka","metadata":{"permalink":"/blog/kafka","editUrl":"https://github.com/dipjyotimetia/blog/blog/blog/2021-04-17-kafka.md","source":"@site/blog/2021-04-17-kafka.md","title":"Kafka","description":"This blog talked about kafka using java","date":"2021-04-17T00:00:00.000Z","formattedDate":"April 17, 2021","tags":[{"label":"kafka","permalink":"/blog/tags/kafka"},{"label":"tech","permalink":"/blog/tags/tech"},{"label":"java","permalink":"/blog/tags/java"}],"readingTime":6.315,"hasTruncateMarker":false,"authors":[{"name":"Dipjyoti Metia","title":"Lead Software Engineer","url":"https://github.com/dipjyotimetia","imageURL":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],"frontMatter":{"slug":"kafka","title":"Kafka","author":"Dipjyoti Metia","author_title":"Lead Software Engineer","author_url":"https://github.com/dipjyotimetia","author_image_url":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4","tags":["kafka","tech","java"],"description":"This blog talked about kafka using java","image":"../static/img/blog/kafka/kafka_title.png","hide_table_of_contents":true},"prevItem":{"title":"function","permalink":"/blog/function"},"nextItem":{"title":"Github Eyes","permalink":"/blog/github"}},"content":"## What is Apache Kafka?\\n\\nApache Kafka is a framework implementation of a software bus using stream-processing. It is an open-source software platform developed by the Apache Software Foundation written in Scala and Java.\\nThe project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds.\\nBehind the scenes, Kafka is distributed, scales well, replicates data across brokers (servers), can survive broker downtime, and much more.\\n![img.png](../static/img/blog/kafka/kafka_desc.png)\\n\\n## Topics, Partitions and Offsets\\n\\n**Topics: A particular stream of data**\\n\\n* Similar to a table of the database\\n* You can have as many topics you can\\n* A topic is identified by its name\\n\\n**Topics are split in partitions**\\n\\n* Each partition is ordered\\n* Each message in partition will get an incremental ID called offset\\n* Partition 0, 1, 2 ....\\n* Order only guaranteed within a partition, not across partitions\\n* Data is kept only for a limited time.\\n* Once the data is written to a partition it cannot be changed.\\n\\nExample Scenario :\\nYou can have multiple cabs, and each cabs reports its GPS location to kafka. You can have a topic cabs_gps that contains\\nthe position of all cabs. Each cab will send a message to kafka every 20 sec, each message will contain the cabID, and\\nthe cab location(lat/long)\\n\\n## Brokers & Topics\\n\\n* A kafka cluster is composed of multiple brokers(servers)\\n* Each broker is identified by its ID(integer)\\n* Each broker contains certain topic partitions\\n* After connecting to any broker(called a bootstrap broker), you will be connected to the entire cluster\\n* A good number to get start is 3 brokers, but some big clusters have more than 100 brokers\\n\\nExample of topic A with 3 partitions\\nExample of topic B with 2 partitions\\n![img.png](../static/img/blog/kafka/broker.png)\\n\\n## Topics replication\\n\\n* Topics should have a replication factor >1 (Usually between 2 and 3)\\n* This way if one broker is down another broker can serve the data. Example of topic A with replication factor 2\\n  ![img.png](../static/img/blog/kafka/replication.png)\\n\\n* At any time only ONE broker can be a leader for a given partition\\n* Only that leader can receive and serve data for a partition.\\n* The other broker will synchronize the data.\\n* So each partition has one leader and multiple ISR (in-sync-replica)\\n  ![img.png](../static/img/blog/kafka/replica_leader.png)\\n\\n## Producer\\n\\n* Producer write data to topics(which is made of partitions)\\n* Producer automatically know to which broker and partition to write.\\n* In case broker failure, Producers will automatically recover\\n  ![img.png](../static/img/blog/kafka/producer.png)\\n* Producers can choose to receive acknowledgment of data writes.\\n  * acks=0 Producer won\'t wait for acknowledgment (Possible data loss)\\n  * acks=1 Producer will wait for leader acknowledgment (Limited data loss)\\n  * acks=2 Leader & Replica acknowledgment (no data loss)\\n* Producer can choose to send a key with the message(string,num etc.)\\n* If key==null data will sent round robin(broker 101 then 102 then 103)\\n* If key is sent then all message for that key will send to same partition\\n* A key is sent if we need a message ordering for a specific field as cabID.\\n\\n```java title=\\"producer.java\\"\\n@Slf4j\\npublic static void main(String[] args) {\\n    String topic = \\"second-topic\\";\\n    String value = \\"hello kafka\\";\\n    String bootstrapServer = \\"127.0.0.1:9092\\";\\n    // Create producer properties\\n    Properties properties = new Properties();\\n    properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);\\n    properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\\n    properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\\n    // Create the producer\\n    KafkaProducer<String, String> producer = new KafkaProducer<>(properties);\\n    ProducerRecord<String, String> record = new ProducerRecord<>(topic, value);\\n    log.info(\\"Creating producer\\");\\n    // Send Data\\n    producer.send(record, (metadata, e) -> {\\n        // Execute every time record is successfully send\\n        if (e == null) {\\n            log.info((metadata.timestamp()));\\n            log.info(topic, metadata.topic());\\n            log.info(metadata.hasOffset());\\n            log.info(metadata.hasTimestamp());\\n        } else {\\n            e.printStackTrace();\\n        }\\n    });\\n    producer.flush();\\n    producer.close();\\n}\\n```\\n\\n## Consumer\\n\\n* Consumer read data from a topic(identified by name)\\n* Consumer knows which broker to read from\\n* In case of broker failure, consumer know how to recover\\n* Data is read in order with in each partition\\n  ![img.png](../static/img/blog/kafka/consumer.png)\\n* Consumer read data in consumer groups\\n* Each consumer within a group reads form exclusive partitions\\n* If you have more consumers than partitions, some consumers will be inactive\\n* Kafka stores the offset at which a consumer group has been reading\\n* The offsets committed live in a kafka topic named _consumer_offsets\\n* When a consumer in a group has processed the data received from kafka, it should be committing the offsets.\\n* If a consumer dies, it will be able to read back from where it left off.\\n\\n```java title=\\"consumer.java\\"\\npublic static void main(String[] args) {\\n\\n    String bootstrapServer = \\"127.0.0.1:9092\\";\\n    String groupId = \\"my-sixth-application\\";\\n    String topic = \\"second-topic\\";\\n\\n    // Create consumer config\\n    Properties properties = new Properties();\\n    properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);\\n    properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());\\n    properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());\\n    properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);\\n    properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, \\"earliest\\");\\n\\n    // Create consumer\\n    KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);\\n\\n    // subscribe consumer to our topic\\n    consumer.subscribe(Arrays.asList(topic));\\n\\n    // poll for the new data\\n    while (true) {\\n        ConsumerRecords<String, String> records =\\n                consumer.poll(Duration.ofMillis(100));\\n        for (ConsumerRecord<String, String> record : records) {\\n            log.info(\\"Key: \\" + record.key() + \\", Value: \\" + record.value());\\n            log.info(\\"Partition: \\" + record.partition() + \\", Offset: \\" + record.offset());\\n        }\\n    }\\n}\\n```\\n\\n## Zookeeper\\n\\n* Zookeeper manager brokers(keeps a list of them)\\n* Zookeeper helps in performing leader election for partition\\n* Zookeeper send notifications to kafka in case of any changes.\\n\\n## Schema Registry\\n\\n* Kafka takes bytes as an input and publishes them\\n* No data verification\\n* Schema registry rejects bat data\\n* A common data format must be agreed upon\\n  ![img.png](../static/img/blog/kafka/schema_registry.png)\\n* Apache avro as data format\\n  * Data is fully typed\\n  * Date is compressed automatically\\n  * Schema comes along with the data\\n  * Documentation is embedded in the schema\\n  * Data can be read across any language\\n  * Schema can be evolved over time in safe manner\\n\\n## Avro\\n\\nApache Avro is a data serialization system.\\n\\n* Avro provides:\\n  * Rich data structures.\\n  * A compact, fast, binary data format.\\n  * A container file, to store persistent data.\\n  * Remote procedure call (RPC).\\n  * Simple integration with dynamic languages. Code generation is not required to read or write data files nor to use or implement RPC protocols. Code generation as an optional optimization, only worth implementing for statically typed languages.\\n\\n```avroschema\\n{\\"namespace\\": \\"dip.avro\\",\\n  \\"type\\": \\"record\\",\\n  \\"name\\": \\"User\\",\\n  \\"fields\\": [\\n    {\\"name\\": \\"name\\", \\"type\\": \\"string\\"},\\n    {\\"name\\": \\"favorite_number\\",  \\"type\\": [\\"int\\", \\"null\\"]},\\n    {\\"name\\": \\"favorite_color\\", \\"type\\": [\\"string\\", \\"null\\"]}\\n  ]\\n}\\n```\\n\\n* Common Fields:\\n  * Name: Name of the schema\\n  * Namespace: (equivalent of package in java)\\n  * Doc: Documentation to explain your schema\\n  * Aliases: Optional other name for schema\\n  * Fields\\n    * Name: Name of field\\n    * Doc: Documentation for that field\\n    * Type: Data type for that field\\n    * Default: Default value for that field\\n  * Complex types:\\n    * Enums\\n\\n          ```avroschema\\n          {\\n            \\"type\\": \\"enum\\",\\n            \\"name\\": \\"Customer Status\\",\\n            \\"symbols\\": [\\"BRONZE\\",\\"SILVER\\",\\"GOLD\\"]\\n          }\\n          ```\\n    * Arrays\\n\\n          ```avroschema\\n          {\\n            \\"type\\": \\"array\\",\\n            \\"items\\": \\"string\\"\\n          }\\n          ```\\n    * Maps\\n\\n          ```avroschema\\n          {\\n            \\"type\\": \\"map\\",\\n            \\"values\\": \\"string\\"\\n          }\\n          ```\\n    * Unions\\n\\n          ```avroschema\\n          {\\n            \\"name\\": \\"middle_name\\",\\n            \\"type\\": [\\n              \\"null\\",\\n              \\"string\\"\\n            ],\\n            \\"default\\": \\"null\\"\\n          }\\n          ```\\n    * Calling other schema as type\\n\\n## Kafka Rest Proxy\\n\\n* kafka is great for java based consumers/producers\\n* Avro support for some languages isn\'t great, where JSON/HTTP requests are great.\\n* Reporting data to Kafka from any frontend app built in any language not supported by official Confluent clients\\n* Ingesting messages into a stream processing framework that doesn\u2019t yet support Kafka\\n  ![img.png](../static/img/blog/kafka/restproxy.png)\\n* Perform a comprehensive set of administrative operations through REST APIs, including:\\n  * Describe, list, and configure brokers\\n  * Create, delete, describe, list, and configure topics\\n  * Delete, describe, and list consumer groups\\n  * Create, delete, describe, and list ACLs\\n  * List partition reassignments"},{"id":"github","metadata":{"permalink":"/blog/github","editUrl":"https://github.com/dipjyotimetia/blog/blog/blog/2021-01-26-githubapi.md","source":"@site/blog/2021-01-26-githubapi.md","title":"Github Eyes","description":"This is a blog talked about github apis using golang","date":"2021-01-26T00:00:00.000Z","formattedDate":"January 26, 2021","tags":[{"label":"github","permalink":"/blog/tags/github"},{"label":"tech","permalink":"/blog/tags/tech"},{"label":"golang","permalink":"/blog/tags/golang"}],"readingTime":2.6,"hasTruncateMarker":false,"authors":[{"name":"Dipjyoti Metia","title":"Lead Software Engineer","url":"https://github.com/dipjyotimetia","imageURL":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],"frontMatter":{"slug":"github","title":"Github Eyes","author":"Dipjyoti Metia","author_title":"Lead Software Engineer","author_url":"https://github.com/dipjyotimetia","author_image_url":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4","tags":["github","tech","golang"],"description":"This is a blog talked about github apis using golang","image":"../static/img/blog/gogithub.png","hide_table_of_contents":true},"prevItem":{"title":"Kafka","permalink":"/blog/kafka"},"nextItem":{"title":"Serverless Framework","permalink":"/blog/serverless"}},"content":"Presenting github eyes, a golang implementation of the github rest apis using [Google GitHub](https://github.com/google/go-github) sdk to interact with the [Github Api](https://docs.github.com/en/rest), using github apis we can crawl over multiple repository and automate different tasks from creating repo, creating labels, adding milestones, get latest commits, updating workflows, get the project build status etc, below is the basic demonstration of getting list of issues from multiple repos.\\n\\n![image](../static/img/blog/gogithub.png)\\n\\nThe go-github library does not directly handle authentication. The easiest and recommended way to do this is using the OAuth2 library, If you have an OAuth2 access token (for example, a personal API token), you can use it with the OAuth2 library.\\nTo get the personal api token follow the [documentation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and\\nBelow is the code snippet for authentication using [oauth2](https://github.com/golang/oauth2).\\n\\n```go title=\\"auth.go\\"\\npackage github\\n\\nimport (\\n \\"context\\"\\n\\n \\"github.com/google/go-github/v33/github\\"\\n \\"golang.org/x/oauth2\\"\\n)\\n\\nAUthenticating using github access token\\n// AuthGithubAPI authentication of github api\\nfunc AuthGithubAPI(ctx context.Context) *github.Client {\\n ts := oauth2.StaticTokenSource(\\n  &oauth2.Token{AccessToken: \\"XXXXXXXXXXXXXXXXXXXXXXX\\"},\\n )\\n tc := oauth2.NewClient(ctx, ts)\\n return github.NewClient(tc)\\n}\\n```\\n\\nGetting the list of issues in a repository, here we have created a struct named `Issues` with the required fields and then created a function `ListIssues` where we are passing the github api authentication and then `client.Issues.ListByRepo` is doing the job where underneath its calling [Github Issues Api](https://docs.github.com/en/free-pro-team@latest/rest/reference/issues/#list-repository-issues).\\nWe can also extend this function by adding filters to get open/closed issues and so on.\\n\\n```go title=\\"issues.go\\"\\npackage github\\n\\nimport (\\n \\"context\\"\\n \\"log\\"\\n \\"time\\"\\n)\\n\\ntype Issues struct {\\n ID        int64\\n Title     string\\n State     string\\n CreatedAt time.Time\\n URL       string\\n}\\n\\n// ListIssues get list of issues\\nfunc ListIssues(repos string) interface{}{\\n ctx := context.Background()\\n client := AuthGithubAPI(ctx)\\n issues, _, err := client.Issues.ListByRepo(ctx, \\"dipjyotimetia\\", repos, nil)\\n if err != nil {\\n  log.Println(err)\\n }\\n\\n var issueList []interface{}\\n for _, v := range issues {\\n  issueList = append(issueList,&Issues{\\n   ID:        v.GetID(),\\n   Title:     v.GetTitle(),\\n   State:     v.GetState(),\\n   CreatedAt: v.GetCreatedAt(),\\n   URL:       v.GetHTMLURL(),\\n  })\\n }\\n return issueList\\n}\\n```\\n\\nMain function to drive the show, here we are passing the repo names in an array called `repoNames` and in a loop calling the the function derived above `ListIssues` and then generating the result in a json file in local path.\\n\\n```go title=\\"main.go\\"\\npackage main\\n\\nimport (\\n \\"encoding/json\\"\\n \\"github.com/goutils/pkg/github\\"\\n \\"io/ioutil\\"\\n)\\n\\nfunc main() {\\n repoNames := []string{\\"HybridTestFramewrok\\", \\"MobileTestFramework\\"}\\n var result []interface{}\\n for _, repoName := range repoNames {\\n  result = append(result, repoName, github.ListIssues(repoName))\\n }\\n\\n file, _ := json.MarshalIndent(result, \\"\\", \\"\\")\\n _ = ioutil.WriteFile(\\"test.json\\", file, 0644)\\n}\\n\\n```\\n\\nExample of the exported json data of the `ListIssues` function for the two repos.\\n\\n```json\\n[\\n  \\"HybridTestFramewrok\\",\\n  [\\n    {\\n      \\"ID\\": 690950907,\\n      \\"Title\\": \\"Add reddis tests support\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2020-09-02T11:42:07Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/HybridTestFramewrok/issues/65\\"\\n    },\\n    {\\n      \\"ID\\": 690950833,\\n      \\"Title\\": \\"Add ssh login builder\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2020-09-02T11:42:01Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/HybridTestFramewrok/issues/64\\"\\n    },\\n    {\\n      \\"ID\\": 690950781,\\n      \\"Title\\": \\"Add file reader validations\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2020-09-02T11:41:55Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/HybridTestFramewrok/issues/63\\"\\n    },\\n    {\\n      \\"ID\\": 690950708,\\n      \\"Title\\": \\"add kafka testing\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2020-09-02T11:41:48Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/HybridTestFramewrok/issues/62\\"\\n    },\\n    {\\n      \\"ID\\": 690950641,\\n      \\"Title\\": \\"add rabitmq testing support\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2020-09-02T11:41:43Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/HybridTestFramewrok/issues/61\\"\\n    }\\n  ],\\n  \\"MobileTestFramework\\",\\n  [\\n    {\\n      \\"ID\\": 793821012,\\n      \\"Title\\": \\"Add AWS Device Farm support\\",\\n      \\"State\\": \\"open\\",\\n      \\"CreatedAt\\": \\"2021-01-26T00:19:55Z\\",\\n      \\"URL\\": \\"https://github.com/dipjyotimetia/MobileTestFramework/issues/88\\"\\n    }\\n  ]\\n]\\n```\\n\\nProject structure\\n![image](../static/img/blog/gogithubstruct.png)"},{"id":"serverless","metadata":{"permalink":"/blog/serverless","editUrl":"https://github.com/dipjyotimetia/blog/blog/blog/2020-05-16-serverless.md","source":"@site/blog/2020-05-16-serverless.md","title":"Serverless Framework","description":"This is a blog about serverless framework using nodejs","date":"2020-05-16T00:00:00.000Z","formattedDate":"May 16, 2020","tags":[{"label":"serverless","permalink":"/blog/tags/serverless"},{"label":"tech","permalink":"/blog/tags/tech"},{"label":"aws","permalink":"/blog/tags/aws"}],"readingTime":0.485,"hasTruncateMarker":false,"authors":[{"name":"Dipjyoti Metia","title":"Lead Software Engineer","url":"https://github.com/dipjyotimetia","imageURL":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],"frontMatter":{"slug":"serverless","title":"Serverless Framework","author":"Dipjyoti Metia","author_title":"Lead Software Engineer","author_url":"https://github.com/dipjyotimetia","author_image_url":"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4","tags":["serverless","tech","aws"],"description":"This is a blog about serverless framework using nodejs","image":"https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png","hide_table_of_contents":true},"prevItem":{"title":"Github Eyes","permalink":"/blog/github"}},"content":"![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png)\\n\\n### [Where to start?](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)\\n\\n`npm install -g serverless`\\n\\n![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverless.png)\\n\\n- [Create IAM user](https://serverless.com/framework/docs/providers/aws/guide/iam/)\\n\\n- Setup user access  \\n  serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx\\n\\n- Create project  \\n  serverless create --template aws-nodejs --path my-service\\n\\n- [Serverless yml](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)  \\n\\n- Serverless Deploy  \\n  `serverless deploy -v`\\n\\n![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessdeploy.png)\\n\\n### Serverless offline\\n\\nhttps://github.com/dherault/serverless-offline\\n\\n```bash\\nserverless plugin install --name serverless-offline\\nserverless offline start\\n```\\n\\n![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessOffline.png)\\n\\n### Insomnia\\n\\n![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessMongo.png)\\n\\n### Serverless [dashbird](https://app.dashbird.io/)\\n\\n### Mongodb\\n\\n![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/mongodb.png)\\n\\n```bash\\n$ npm init -y\\n$ npm i --save-dev serverless-offline\\n$ npm i --save mongoose dotenv\\nsls offline start --skipCacheInvalidation\\n```"}]}')}}]);