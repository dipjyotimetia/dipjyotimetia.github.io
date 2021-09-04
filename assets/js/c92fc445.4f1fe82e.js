(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[5977],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7393:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o={slug:"kafka",title:"Kafka",author:"Dipjyoti Metia",author_title:"Lead Software Engineer",author_url:"https://github.com/dipjyotimetia",author_image_url:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4",tags:["kafka","tech","java"],description:"This blog talked about kafka using java",image:"../static/img/blog/kafka/kafka_title.png",hide_table_of_contents:!0},l=void 0,s={permalink:"/blog/kafka",editUrl:"https://github.com/dipjyotimetia/blog/blog/blog/2021-04-17-kafka.md",source:"@site/blog/2021-04-17-kafka.md",title:"Kafka",description:"This blog talked about kafka using java",date:"2021-04-17T00:00:00.000Z",formattedDate:"April 17, 2021",tags:[{label:"kafka",permalink:"/blog/tags/kafka"},{label:"tech",permalink:"/blog/tags/tech"},{label:"java",permalink:"/blog/tags/java"}],readingTime:6.315,truncated:!1,authors:[{name:"Dipjyoti Metia",title:"Lead Software Engineer",url:"https://github.com/dipjyotimetia",imageURL:"https://avatars3.githubusercontent.com/u/18288720?s=400&u=168a31a123ff5c1c44afc29a579f91d13813da54&v=4"}],prevItem:{title:"function",permalink:"/blog/function"},nextItem:{title:"Github Eyes",permalink:"/blog/github"}},c={authorsImageUrls:[void 0]},p=[{value:"What is Apache Kafka?",id:"what-is-apache-kafka",children:[]},{value:"Topics, Partitions and Offsets",id:"topics-partitions-and-offsets",children:[]},{value:"Brokers &amp; Topics",id:"brokers--topics",children:[]},{value:"Topics replication",id:"topics-replication",children:[]},{value:"Producer",id:"producer",children:[]},{value:"Consumer",id:"consumer",children:[]},{value:"Zookeeper",id:"zookeeper",children:[]},{value:"Schema Registry",id:"schema-registry",children:[]},{value:"Avro",id:"avro",children:[]},{value:"Kafka Rest Proxy",id:"kafka-rest-proxy",children:[]}],u={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-apache-kafka"},"What is Apache Kafka?"),(0,i.kt)("p",null,"Apache Kafka is a framework implementation of a software bus using stream-processing. It is an open-source software platform developed by the Apache Software Foundation written in Scala and Java.\nThe project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds.\nBehind the scenes, Kafka is distributed, scales well, replicates data across brokers (servers), can survive broker downtime, and much more.\n",(0,i.kt)("img",{alt:"img.png",src:a(1172).Z})),(0,i.kt)("h2",{id:"topics-partitions-and-offsets"},"Topics, Partitions and Offsets"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Topics: A particular stream of data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Similar to a table of the database"),(0,i.kt)("li",{parentName:"ul"},"You can have as many topics you can"),(0,i.kt)("li",{parentName:"ul"},"A topic is identified by its name")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Topics are split in partitions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each partition is ordered"),(0,i.kt)("li",{parentName:"ul"},"Each message in partition will get an incremental ID called offset"),(0,i.kt)("li",{parentName:"ul"},"Partition 0, 1, 2 ...."),(0,i.kt)("li",{parentName:"ul"},"Order only guaranteed within a partition, not across partitions"),(0,i.kt)("li",{parentName:"ul"},"Data is kept only for a limited time."),(0,i.kt)("li",{parentName:"ul"},"Once the data is written to a partition it cannot be changed.")),(0,i.kt)("p",null,"Example Scenario :\nYou can have multiple cabs, and each cabs reports its GPS location to kafka. You can have a topic cabs_gps that contains\nthe position of all cabs. Each cab will send a message to kafka every 20 sec, each message will contain the cabID, and\nthe cab location(lat/long)"),(0,i.kt)("h2",{id:"brokers--topics"},"Brokers & Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A kafka cluster is composed of multiple brokers(servers)"),(0,i.kt)("li",{parentName:"ul"},"Each broker is identified by its ID(integer)"),(0,i.kt)("li",{parentName:"ul"},"Each broker contains certain topic partitions"),(0,i.kt)("li",{parentName:"ul"},"After connecting to any broker(called a bootstrap broker), you will be connected to the entire cluster"),(0,i.kt)("li",{parentName:"ul"},"A good number to get start is 3 brokers, but some big clusters have more than 100 brokers")),(0,i.kt)("p",null,"Example of topic A with 3 partitions",(0,i.kt)("br",{parentName:"p"}),"\n","Example of topic B with 2 partitions",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"img.png",src:a(4597).Z})),(0,i.kt)("h2",{id:"topics-replication"},"Topics replication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Topics should have a replication factor >1 (Usually between 2 and 3)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This way if one broker is down another broker can serve the data. Example of topic A with replication factor 2\n",(0,i.kt)("img",{alt:"img.png",src:a(3206).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At any time only ONE broker can be a leader for a given partition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only that leader can receive and serve data for a partition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The other broker will synchronize the data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"So each partition has one leader and multiple ISR (in-sync-replica)\n",(0,i.kt)("img",{alt:"img.png",src:a(4743).Z})))),(0,i.kt)("h2",{id:"producer"},"Producer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producer write data to topics(which is made of partitions)"),(0,i.kt)("li",{parentName:"ul"},"Producer automatically know to which broker and partition to write."),(0,i.kt)("li",{parentName:"ul"},"In case broker failure, Producers will automatically recover\n",(0,i.kt)("img",{alt:"img.png",src:a(6147).Z})),(0,i.kt)("li",{parentName:"ul"},"Producers can choose to receive acknowledgment of data writes.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"acks=0 Producer won't wait for acknowledgment (Possible data loss)"),(0,i.kt)("li",{parentName:"ul"},"acks=1 Producer will wait for leader acknowledgment (Limited data loss)"),(0,i.kt)("li",{parentName:"ul"},"acks=2 Leader & Replica acknowledgment (no data loss)"))),(0,i.kt)("li",{parentName:"ul"},"Producer can choose to send a key with the message(string,num etc.)"),(0,i.kt)("li",{parentName:"ul"},"If key==null data will sent round robin(broker 101 then 102 then 103)"),(0,i.kt)("li",{parentName:"ul"},"If key is sent then all message for that key will send to same partition"),(0,i.kt)("li",{parentName:"ul"},"A key is sent if we need a message ordering for a specific field as cabID.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="producer.java"',title:'"producer.java"'},'@Slf4j\npublic static void main(String[] args) {\n    String topic = "second-topic";\n    String value = "hello kafka";\n    String bootstrapServer = "127.0.0.1:9092";\n    // Create producer properties\n    Properties properties = new Properties();\n    properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);\n    properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\n    properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\n    // Create the producer\n    KafkaProducer<String, String> producer = new KafkaProducer<>(properties);\n    ProducerRecord<String, String> record = new ProducerRecord<>(topic, value);\n    log.info("Creating producer");\n    // Send Data\n    producer.send(record, (metadata, e) -> {\n        // Execute every time record is successfully send\n        if (e == null) {\n            log.info((metadata.timestamp()));\n            log.info(topic, metadata.topic());\n            log.info(metadata.hasOffset());\n            log.info(metadata.hasTimestamp());\n        } else {\n            e.printStackTrace();\n        }\n    });\n    producer.flush();\n    producer.close();\n}\n')),(0,i.kt)("h2",{id:"consumer"},"Consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consumer read data from a topic(identified by name)"),(0,i.kt)("li",{parentName:"ul"},"Consumer knows which broker to read from"),(0,i.kt)("li",{parentName:"ul"},"In case of broker failure, consumer know how to recover"),(0,i.kt)("li",{parentName:"ul"},"Data is read in order with in each partition\n",(0,i.kt)("img",{alt:"img.png",src:a(9742).Z})),(0,i.kt)("li",{parentName:"ul"},"Consumer read data in consumer groups"),(0,i.kt)("li",{parentName:"ul"},"Each consumer within a group reads form exclusive partitions"),(0,i.kt)("li",{parentName:"ul"},"If you have more consumers than partitions, some consumers will be inactive"),(0,i.kt)("li",{parentName:"ul"},"Kafka stores the offset at which a consumer group has been reading"),(0,i.kt)("li",{parentName:"ul"},"The offsets committed live in a kafka topic named _consumer_offsets"),(0,i.kt)("li",{parentName:"ul"},"When a consumer in a group has processed the data received from kafka, it should be committing the offsets."),(0,i.kt)("li",{parentName:"ul"},"If a consumer dies, it will be able to read back from where it left off.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="consumer.java"',title:'"consumer.java"'},'public static void main(String[] args) {\n\n    String bootstrapServer = "127.0.0.1:9092";\n    String groupId = "my-sixth-application";\n    String topic = "second-topic";\n\n    // Create consumer config\n    Properties properties = new Properties();\n    properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);\n    properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());\n    properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());\n    properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);\n    properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");\n\n    // Create consumer\n    KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);\n\n    // subscribe consumer to our topic\n    consumer.subscribe(Arrays.asList(topic));\n\n    // poll for the new data\n    while (true) {\n        ConsumerRecords<String, String> records =\n                consumer.poll(Duration.ofMillis(100));\n        for (ConsumerRecord<String, String> record : records) {\n            log.info("Key: " + record.key() + ", Value: " + record.value());\n            log.info("Partition: " + record.partition() + ", Offset: " + record.offset());\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"zookeeper"},"Zookeeper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zookeeper manager brokers(keeps a list of them)"),(0,i.kt)("li",{parentName:"ul"},"Zookeeper helps in performing leader election for partition"),(0,i.kt)("li",{parentName:"ul"},"Zookeeper send notifications to kafka in case of any changes.")),(0,i.kt)("h2",{id:"schema-registry"},"Schema Registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kafka takes bytes as an input and publishes them"),(0,i.kt)("li",{parentName:"ul"},"No data verification"),(0,i.kt)("li",{parentName:"ul"},"Schema registry rejects bat data"),(0,i.kt)("li",{parentName:"ul"},"A common data format must be agreed upon",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"img.png",src:a(3770).Z})),(0,i.kt)("li",{parentName:"ul"},"Apache avro as data format",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data is fully typed"),(0,i.kt)("li",{parentName:"ul"},"Date is compressed automatically"),(0,i.kt)("li",{parentName:"ul"},"Schema comes along with the data"),(0,i.kt)("li",{parentName:"ul"},"Documentation is embedded in the schema"),(0,i.kt)("li",{parentName:"ul"},"Data can be read across any language"),(0,i.kt)("li",{parentName:"ul"},"Schema can be evolved over time in safe manner")))),(0,i.kt)("h2",{id:"avro"},"Avro"),(0,i.kt)("p",null,"Apache Avro is a data serialization system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avro provides:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rich data structures."),(0,i.kt)("li",{parentName:"ul"},"A compact, fast, binary data format."),(0,i.kt)("li",{parentName:"ul"},"A container file, to store persistent data."),(0,i.kt)("li",{parentName:"ul"},"Remote procedure call (RPC)."),(0,i.kt)("li",{parentName:"ul"},"Simple integration with dynamic languages. Code generation is not required to read or write data files nor to use or implement RPC protocols. Code generation as an optional optimization, only worth implementing for statically typed languages.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-avroschema"},'{"namespace": "dip.avro",\n  "type": "record",\n  "name": "User",\n  "fields": [\n    {"name": "name", "type": "string"},\n    {"name": "favorite_number",  "type": ["int", "null"]},\n    {"name": "favorite_color", "type": ["string", "null"]}\n  ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Common Fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Name of the schema"),(0,i.kt)("li",{parentName:"ul"},"Namespace: (equivalent of package in java)"),(0,i.kt)("li",{parentName:"ul"},"Doc: Documentation to explain your schema"),(0,i.kt)("li",{parentName:"ul"},"Aliases: Optional other name for schema"),(0,i.kt)("li",{parentName:"ul"},"Fields",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Name of field"),(0,i.kt)("li",{parentName:"ul"},"Doc: Documentation for that field"),(0,i.kt)("li",{parentName:"ul"},"Type: Data type for that field"),(0,i.kt)("li",{parentName:"ul"},"Default: Default value for that field"))),(0,i.kt)("li",{parentName:"ul"},"Complex types:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enums",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-avroschema"},'{\n  "type": "enum",\n  "name": "Customer Status",\n  "symbols": ["BRONZE","SILVER","GOLD"]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Arrays",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-avroschema"},'{\n  "type": "array",\n  "items": "string"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Maps",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-avroschema"},'{\n  "type": "map",\n  "values": "string"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Unions",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-avroschema"},'{\n  "name": "middle_name",\n  "type": [\n    "null",\n    "string"\n  ],\n  "default": "null"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Calling other schema as type")))))),(0,i.kt)("h2",{id:"kafka-rest-proxy"},"Kafka Rest Proxy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kafka is great for java based consumers/producers"),(0,i.kt)("li",{parentName:"ul"},"Avro support for some languages isn't great, where JSON/HTTP requests are great."),(0,i.kt)("li",{parentName:"ul"},"Reporting data to Kafka from any frontend app built in any language not supported by official Confluent clients"),(0,i.kt)("li",{parentName:"ul"},"Ingesting messages into a stream processing framework that doesn\u2019t yet support Kafka",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"img.png",src:a(109).Z})),(0,i.kt)("li",{parentName:"ul"},"Perform a comprehensive set of administrative operations through REST APIs, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Describe, list, and configure brokers"),(0,i.kt)("li",{parentName:"ul"},"Create, delete, describe, list, and configure topics"),(0,i.kt)("li",{parentName:"ul"},"Delete, describe, and list consumer groups"),(0,i.kt)("li",{parentName:"ul"},"Create, delete, describe, and list ACLs"),(0,i.kt)("li",{parentName:"ul"},"List partition reassignments")))))}m.isMDXComponent=!0},4597:function(e,t,a){"use strict";t.Z=a.p+"assets/images/broker-47961d19ebc7401c22aa9c9d8aa34c5d.png"},9742:function(e,t){"use strict";t.Z="data:image/png;base64,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"},1172:function(e,t,a){"use strict";t.Z=a.p+"assets/images/kafka_desc-3b6593e69e25d2573d66a320f172c586.png"},6147:function(e,t,a){"use strict";t.Z=a.p+"assets/images/producer-f693135d019231adfc99806be3b675a7.png"},4743:function(e,t,a){"use strict";t.Z=a.p+"assets/images/replica_leader-7ed14bc8b49afbb8054fb13fad88549b.png"},3206:function(e,t,a){"use strict";t.Z=a.p+"assets/images/replication-76b7d2b205633bcf8985a7e2518cb1f8.png"},109:function(e,t,a){"use strict";t.Z=a.p+"assets/images/restproxy-d23d9256c22457822c2645e2f3eb0bbb.png"},3770:function(e,t,a){"use strict";t.Z=a.p+"assets/images/schema_registry-5d2bc22ab467d1c63dd41f0a70529c51.png"}}]);