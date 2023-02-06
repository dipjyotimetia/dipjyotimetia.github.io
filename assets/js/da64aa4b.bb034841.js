"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4360],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?n.createElement(k,i(i({ref:a},u),{},{components:t})):n.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7514:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={id:"aws7",title:"Databases",sidebar_label:"Databases"},i="Databases on AWS",o={unversionedId:"snippets/cloud/aws/aws7",id:"snippets/cloud/aws/aws7",title:"Databases",description:"Database_Types",source:"@site/docs/snippets/cloud/aws/05_Databases AWS.md",sourceDirName:"snippets/cloud/aws",slug:"/snippets/cloud/aws/aws7",permalink:"/docs/snippets/cloud/aws/aws7",draft:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/cloud/aws/05_Databases AWS.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"aws7",title:"Databases",sidebar_label:"Databases"},sidebar:"Docs",previous:{title:"EC2",permalink:"/docs/snippets/cloud/aws/aws6"},next:{title:"Route53",permalink:"/docs/snippets/cloud/aws/aws8"}},s={},p=[{value:"Databases 101",id:"databases-101",level:2},{value:"RDBMS",id:"rdbms",level:3},{value:"NoSQL DBs",id:"nosql-dbs",level:3},{value:"Data Warehousing",id:"data-warehousing",level:3},{value:"ElastiCache",id:"elasticache",level:3},{value:"Database Migration Service",id:"database-migration-service",level:3},{value:"RDS \u2013 Back Ups, Multi AZs &amp; Read Replicas",id:"rds--back-ups-multi-azs--read-replicas",level:2},{value:"Backups",id:"backups",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Multi-AZ Deployment",id:"multi-az-deployment",level:3},{value:"Read Replica Databases.",id:"read-replica-databases",level:3},{value:"DynamoDB",id:"dynamodb",level:2},{value:"RDS v/s DynamoDB",id:"rds-vs-dynamodb",level:3},{value:"Redshift",id:"redshift",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Performance",id:"performance",level:3},{value:"Pricing",id:"pricing",level:3},{value:"Security",id:"security",level:3},{value:"Availability",id:"availability",level:3},{value:"ElastiCache",id:"elasticache-1",level:2},{value:"Memcached",id:"memcached",level:3},{value:"Redis",id:"redis",level:3},{value:"Aurora",id:"aurora",level:2},{value:"Performance",id:"performance-1",level:3},{value:"Scaling",id:"scaling",level:3},{value:"Fault Tolerance",id:"fault-tolerance",level:3},{value:"Replicas",id:"replicas",level:3},{value:"Exam Tips",id:"exam-tips",level:2}],u={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databases-on-aws"},"Databases on AWS"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8856857/62659991-366ce680-b9b0-11e9-98be-c36f0573ed2d.png",alt:"Database_Types"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8856857/62659707-6f588b80-b9af-11e9-826c-448ac6f8fd9b.png",alt:"AWS_Database_Use_Cases"})),(0,r.kt)("h2",{id:"databases-101"},"Databases 101"),(0,r.kt)("h3",{id:"rdbms"},"RDBMS"),(0,r.kt)("p",null,"RDBMS Types - ",(0,r.kt)("strong",{parentName:"p"},"MOMMAP")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MS-SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Oracle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PostgreSQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aurora")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MariaDB"))),(0,r.kt)("h3",{id:"nosql-dbs"},"NoSQL DBs"),(0,r.kt)("p",null,"Document Oriented"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CouchDB,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MongoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamo DB"))),(0,r.kt)("p",null,"Collection = Table, Document = Row, Keys-Value Pairs = Fields"),(0,r.kt)("h3",{id:"data-warehousing"},"Data Warehousing"),(0,r.kt)("p",null,"OLTP(Online transaction processing) (pulls out specific / narrow record set) vs OLAP( Online Analytical Processing) \u2013 (pulls in large number of records). It uses different architecture and infrastructure layer.  Differ in terms of queries run on top of data. OLAP is more about aggregation."),(0,r.kt)("h3",{id:"elasticache"},"ElastiCache"),(0,r.kt)("p",null,"In memory cache in cloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Memcached")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redis"))),(0,r.kt)("p",null,"Exam \u2013 Improve database performance \u2013 e.g. top 10 deals of the day."),(0,r.kt)("h3",{id:"database-migration-service"},"Database Migration Service"),(0,r.kt)("p",null,"Migrate production database to AWS. AWS manages all complexities of migration process. ",(0,r.kt)("strong",{parentName:"p"},"Source database remains fully operational"),". Both ",(0,r.kt)("strong",{parentName:"p"},"homogenous (Oracle to Oracle)")," as well as ",(0,r.kt)("strong",{parentName:"p"},"heterogeneous migrations are supported (Oracle to Aurora or Microsoft SQL)"),". Can also be used for continuous data replication with high availability"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AWS Schema migration tool makes heterogeneous database"),"  - migrations  - easy by automatically converting the source database schema and a majority of the custom code, including views, stored procedures, and functions, to a format compatible with the target database. Any code that cannot be automatically converted is clearly marked so that it can be manually converted."),(0,r.kt)("h2",{id:"rds--back-ups-multi-azs--read-replicas"},"RDS \u2013 Back Ups, Multi AZs & Read Replicas"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OLTP systems")),(0,r.kt)("h3",{id:"backups"},"Backups"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Automated Backups")," \u2013 full daily snapshot & will also store transaction logs.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enabled by default. Stored in S3. ",(0,r.kt)("strong",{parentName:"p"},"Free backup storage in S3 upto the RDS Instance size."),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can define backup window. Choose wisely.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Backups are deleted when the RDS Instance is deleted.")))),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Done manually. They are stored even after you delete the instance."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can copy snapshots across regions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can publish the snapshot to make it publically available.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Restoring Backups/ Snapshots \u2013 The restored version will be a new RDS instance with new end point."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can check the instance size to restore.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You cannot restore to existing instance"))),(0,r.kt)("h3",{id:"encryption"},"Encryption"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encryption at rest is supported for MySQL, SQL Server, Oracle and PostgreSQL & MariaDB.")," relational databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Managed by AWS KMS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cannot encrypt an already present instance.")," To encrypt, create new instance with encryption enabled and then migrate your data to it."))),(0,r.kt)("h3",{id:"multi-az-deployment"},"Multi-AZ Deployment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A standby copy is created in another AZ. AWS handles replication and auto-failover")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"AWS can automatically failover RDS instance to another instance."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In case of failover, No need to change connection string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This can be used for ",(0,r.kt)("strong",{parentName:"p"},"DR purpose only"),". This option has to be selected at instance creation time. ",(0,r.kt)("strong",{parentName:"p"},"This option is not useful for improving performance / scaling.")))),(0,r.kt)("h3",{id:"read-replica-databases"},"Read Replica Databases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Read-replica")," \u2013 async data transfer to another RDS instance. You can actually read from these instances, unlike Multi-AZ deployments. You can also have read replicas of read-replicas up to 5 copies. ",(0,r.kt)("strong",{parentName:"p"},"(Watch out as async causes latency)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read-replicas can be used for Dev/Test environments, run certain workloads only against them and not against direct production deployment \u2013 Intensive workloads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MySQL , MariaDB, PostgreSQL only for read-replicas , no Oracle & SQL Server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You cannot have read-replicas that have multi-AZ. However, you can create read replicas of Multi AZ source databases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read replicas can be of a different size than source DB.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Each read-replica will have its own DNS end point"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Automatic backups must be turned on in order to deploy a read replica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read Replicas can be promoted to be their own databases. This breaks replication. E.g. Dev/Test can be connected to the replica by first promoting it as DB itself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read Replicas can be done in a second region for MySQL and MariaDB \u2013 no PostgreSQL.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Application re-architecture is required to make use of Read replicas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Read replicas are not used for DR. they are used for performance scaling only.")))),(0,r.kt)("h2",{id:"dynamodb"},"DynamoDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fast and flexible ",(0,r.kt)("strong",{parentName:"p"},"NoSQL database"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consistent, ",(0,r.kt)("strong",{parentName:"p"},"single digit millisecond latency."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fully managed DB \u2013 ",(0,r.kt)("strong",{parentName:"p"},"supports both document based & Key-value data models."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Great fit for mobile, IoT, web, gaming etc. applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stored on SSDs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stored on 3 geographically distinct DCs (not AZs).")," Built in redundancy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consistency")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Eventual consistent reads")," - Consistency reached up to 1 second (default)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Strongly Consistent reads")," - Consistency reached after writes to all copies are completed. <1 second"))),(0,r.kt)("p",null,"Select type based on application needs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pricing")," \u2013 Write Capacity Units and Read Capacity Units ($/hr.). Also Storage cost per month. You provision capacity in units/second. It can scale on the fly. Provisioned capacity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamo DB \u2013 ",(0,r.kt)("strong",{parentName:"p"},"Expensive for Writes. Cheap for Reads. Important point v/s RDS."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"You can dynamically add columns \u2013 without the need to update other rows with the column data. As this is no RDBMS."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reserved capacity is available for DynamoDB as well."))),(0,r.kt)("h3",{id:"rds-vs-dynamodb"},"RDS v/s DynamoDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use DynamoDB for Push button scaling. With RDS \u2013 to scale horizontally a new instance has to be created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DynamoDB is cheap for reads and expensive for writes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Observe workload characteristics and decide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use RDS if data requires joins and relationships.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"In RDBMS database structure cannot be dynamically altered. With DynamoDB you can.")))),(0,r.kt)("h2",{id:"redshift"},"Redshift"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Petabyte scale DW solution in cloud."),"  Used for OLAP \u2013 sum of various columns and joining the data."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Single Node")," \u2013 160 GB. Used by Small and Medium Size businesses.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Multi-Node")," \u2013 Leader Node (handles all incoming connections & receives queries) & compute Node (store data and perform queries and computations \u2013 up to 128 Compute Nodes)"))),(0,r.kt)("h3",{id:"performance"},"Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redshift is ",(0,r.kt)("strong",{parentName:"p"},"10 times faster than usual OLAP systems."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It uses Columnar Data Store.  Columnar data is stored sequentially on storage system. Hence low I/O required \u2013 improving performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Advanced Compression (easier to do it via Columns instead of via Rows \u2013 which have different data types). Columns have similar type of data. Doesn\u2019t use indexes and views \u2013 hence less storage required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Based on data, appropriate data compression scheme is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows for massive parallel processing"))),(0,r.kt)("h3",{id:"pricing"},"Pricing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Based on Compute Node hours (compute node only \u2013 no leader node).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backup and Data Transfer (only within VPC)"))),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transit encrypted via SSL,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At rest using AES-256 encryption")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Can use your own HSM or default AWSK Key management."))),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Not Multi-AZs. Can restore snapshots"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exam Tips \u2013 Database warehousing service, cheap, faster. Best seller AWS Service. Speed achieved due to columnar storage. And Data stored sequentially on disk \u2013 hence faster.")),(0,r.kt)("h2",{id:"elasticache-1"},"ElastiCache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Easy to deploy, operate and scale an in-memory cache in the cloud.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improve performance by avoiding repeated calls to DB.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improve latency and throughput for read-heavy applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Can be used for compute intensive data"))),(0,r.kt)("h3",{id:"memcached"},"Memcached"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Memcached tooling can be easily ported over.")),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supports Master / Slave replication and multi-AZ deployment to get redundancy."))),(0,r.kt)("p",null,"Exam Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ElastiCache is used if DB is primarily read-heavy and not frequently changing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use Redshift \u2013 if application is slow due to constant OLAP transactions on top of OLTP focused DB.")))),(0,r.kt)("h2",{id:"aurora"},"Aurora"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bespoke Database Engine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is MySQL compatible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However you ",(0,r.kt)("strong",{parentName:"p"},"can\u2019t download and install on your workstation.")))),(0,r.kt)("h3",{id:"performance-1"},"Performance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5 times better performance than MySQL. At a fraction of cost as compared to Oracle.")),(0,r.kt)("h3",{id:"scaling"},"Scaling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Outset 10 GB Storage, auto increment of storage up to 64 TB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No Push button scaling \u2013 unlike DynamoDB"))),(0,r.kt)("h3",{id:"fault-tolerance"},"Fault Tolerance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maintains 2 copies of your data in at least 3 availability zones. This is for the Data only not for the instances that runs the Database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2 copies lost \u2013 no impact on write availability.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3 copies lost \u2013 no impact on read availability.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Storage is self-healing."))),(0,r.kt)("h3",{id:"replicas"},"Replicas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL Read Replica can be created from the Aurora source DB.(up to 5 of them)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Aurora Replicas")," \u2013 up to 15 of them. If leader crashes, the replica with the highest tiers becomes the leader. While creating replicas, remember to assign different tier levels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster Endpoint vs Individual Endpoint")))),(0,r.kt)("p",null,"No Free Tier usage available. Also available only in select regions. Takes slightly longer to provision"),(0,r.kt)("h2",{id:"exam-tips"},"Exam Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Why you can\u2019t connect to DB Server from DMZ. Check the security group \u2013 if it is removed or added")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Have separate groups for EC2 Instance and RDS Instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multi-AZ for Disaster Recovery only. Not for performance improvement. For performance improvement use, multiple read-replicas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamo DB v/s RDS"))),(0,r.kt)("p",null,"If you want push button scaling, without any downtown, you will always want to use DynamoDB."),(0,r.kt)("p",null,"With RDS scaling is not so easy, you have to use a bigger instance or add read replicas (manual process)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using Amazon RDS Provisioned IOPS storage with a MySQL or Oracle database engine, what is the maximum size RDS volume you can have by default? \u2013 ",(0,r.kt)("strong",{parentName:"p"},"6TB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What data transfer charge is incurred when replicating data from your primary RDS instance to your secondary RDS instance? - ",(0,r.kt)("strong",{parentName:"p"},"There is no charge associated with this action"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you have deployed an RDS database into multiple availability zones, can you use the secondary database as an independent read node? \u2013 ",(0,r.kt)("strong",{parentName:"p"},"No"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RDS automatically creates RDS Security Group w/ TCP port # 3306 enabled.\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In VPC Security Group, the answer would be YES because you will have manually specify access to port & protocol."))))}c.isMDXComponent=!0}}]);