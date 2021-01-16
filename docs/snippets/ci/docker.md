---
id: docker
title: Docker
sidebar_label: Docker
---

Docker with jenkins is present in the [jenkins](./jenkins)   

https://qxf2.com/blog/view-docker-container-display-using-vnc-viewer/

http://realestate-com-au.github.io/intro-to-docker/#1

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
``
docker container ls
docker ps
``
### Docker images:
``
docker images
``

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