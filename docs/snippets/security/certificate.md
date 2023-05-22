---
id: sec1
title: Certificate generation
sidebar_label: Certificate generation
---

# Certificate Generator Dockerfile

This Dockerfile allows you to generate client-server certificates using CFSSL and export them to a local volume.

## Prerequisites

- Docker should be installed on your machine.

## Usage

1. Clone the repository and navigate to the project directory.

2. Place your configuration files (`ca-csr.json`, `ca-config.json`, `peer.json`, `server.json`, `client.json`) in the project directory.

3. Build the Docker image:

```shell
docker build -t certificate-generator .
```

4. Run a container from the image, mapping the `/certs_volume` directory to a local volume on your host machine:

```shell
docker run -v "$(pwd):/certs_volume" certificate-generator
```

5. After running the container, the generated certificates will be available in the specified local volume.

6. At the end verify the generated pem files

```shell
openssl x509 -in ca.pem -text -noout
openssl x509 -in server.pem -text -noout
openssl x509 -in client.pem -text -noout
```

7. Extract public key from a certificate

```shell
openssl x509 -in certificate.pem -pubkey -noout > public.pem
```

```Dockerfile
FROM cfssl/cfssl AS cfssl

LABEL author="Dipjyoti Metia"
LABEL version="1.0"


WORKDIR /app

COPY *.json /app/

# Generate the certificates
RUN cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
RUN cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=peer peer.json | cfssljson -bare peer
RUN cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=server server.json | cfssljson -bare server
RUN cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=client client.json | cfssljson -bare client

FROM debian:11-slim

COPY --from=cfssl /app/*.pem /app/*.csr /certs/

WORKDIR /certs

CMD ["cp", "-R", "/certs", "/certs_volume"]
```


```json
{
  "signing": {
      "default": {
          "expiry": "43800h"
      },
      "profiles": {
          "server": {
              "expiry": "43800h",
              "usages": [
                  "signing",
                  "key encipherment",
                  "server auth"
              ]
          },
          "client": {
              "expiry": "43800h",
              "usages": [
                  "signing",
                  "key encipherment",
                  "client auth"
              ]
          },
          "peer": {
              "expiry": "43800h",
              "usages": [
                  "signing",
                  "key encipherment",
                  "server auth",
                  "client auth"
              ]
          }
      }
  }
}
```

`ca-csr`

```json
{
    "CN": "docker.event",
    "key": {
      "algo": "rsa",
      "size": 2048
    },
    "names": [
      {
        "C": "Australia",
        "L": "Melbourne",
        "O": "Open Source",
        "OU": "IT Department",
        "ST": "VIC"
      }
    ]
  }
  
```

