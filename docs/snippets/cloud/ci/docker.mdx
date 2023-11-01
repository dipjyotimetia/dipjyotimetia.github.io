---
id: docker
title: Docker
sidebar_label: Docker
---

Docker with jenkins is present in the [jenkins](./jenkins)   

:::tip

You do not have to write out the `CONTAINER_ID` in full. The partial `CONTAINER_ID` specified need only uniquely identify the container. Given a container 'aa151b912448' and 'aa153cd14238', `docker logs aa15` will not work, but `docker logs aa151` will.

:::

### Build docker image with tag
```bash
docker build -t node-app:0.1 .
```

### Docker run and stop
```bash
docker run -p 4000:80 --name my-app -d node-app:0.1
docker ps

docker logs [CONTAINER_ID]
```

### Docker stop and remove all containers
```bash
docker stop my-app && docker rm my-app
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
```

### Docker login to container
``
docker exec -it <mycontainer> bash    
``
### Docker login to image
``
docker run -it <image> bash  
``
### Docker login to image with entry point
``
docker run -it --entrypoint bash <image>
``
### Docker conatainer run with priviledge
``
--privileged
``
  
### Docker containers:
```bash
docker container ls
# List all containers
docker ps
# Docker container already exited
docker ps -a 
```
### Docker images:
``
docker images
``

### Starting an interactive shell

```bash
docker exec -it [CONTAINER_ID] bash
```

### Stopping and removing containers

```bash
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
```
`docker ps` options:

- `-q`: Only display numeric IDs
- `-a`: Show all containers (default shows just running)

### Inspecting container metadata

```bash
docker inspect [CONTAINER_ID]

docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' [CONTAINER_ID]
```

### Viewing container logs

**Typical command:**

```bash
docker logs [CONTAINER_ID]
```

**Follow log output for a specified duration:**

```bash
docker logs -f --until=[TIME]
```

**Docker compose logs**
```bash
docker-compose logs --no-color --tail=1000 [service_name] > logs.txt
```

TIME can be a TIMESTAMP or relative (e.g. '10m' or '5s')

## Docker and Github

### Deploy script

This script assumes that the working directory contains a `.git` directory, `Dockerfile` and `package.json`. A `.gitignore` and a `.dockerignore` file may be useful too. It is also assumed that the project dependencies have been installed using `npm install`.

**deploy.sh**

```bash
IMAGE_NAME=""
VERSION="" # Can be left blank
CONTAINER_NAME=""
CONTAINER_PORT="" # To be mapped to HOST_PORT
HOST_PORT="" # The port clients will access

docker stop $CONTAINER_NAME # Stop the running container
docker system prune -af # Removes the container and all unused images
git pull origin master # Pulls latest source files and image
docker build -t $IMAGE_NAME .
docker run --name $CONTAINER_NAME -p $CONTAINER_PORT:$HOST_PORT -d $IMAGE_NAME:$VERSION
```

Before the script can be used, replace the following placeholders:

- `IMAGE_NAME` : The name of your image.
- `VERSION` : The version of your image. Can be left blank.
- `CONTAINER_NAME` : The desired name of your container.
- `CONTAINER_PORT` : The port of your container which your application is running on.
- `HOST_PORT` : The host port your container port will be mapped to. This is the port that is exposed on the host system.

### Resources

- [Docker get Started](http://realestate-com-au.github.io/intro-to-docker/#1)
- [How To Build a Node.js Application with Docker](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker#step-4-%E2%80%94-using-a-repository-to-work-with-images)
- [docker logs](https://docs.docker.com/engine/reference/commandline/logs/)
- [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)
- [Docker VNC](https://qxf2.com/blog/view-docker-container-display-using-vnc-viewer/)

### AWS Docker Jenkins
```bash
sudo yum install java-1.8.0 -y
sudo yum remove java-1.7.0-openjdk -y

Update the packages on your instance

[ec2-user ~]$ sudo yum update -y

Install Docker

[ec2-user ~]$ sudo yum install docker -y

Start the Docker Service

[ec2-user ~]$ sudo service docker start

Add the ec2-user to the docker group so you can execute Docker commands without using sudo.

[ec2-user ~]$ sudo usermod -a -G docker ec2-user
```