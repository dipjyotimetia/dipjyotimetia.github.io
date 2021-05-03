---
id: godoc1
title: Get Started
sidebar_label: Get Started
---

### Tutorial
* https://go-course.org/gocourse-2019-05-melbourne.slide#39
* https://gobyexample.com/
* https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/
* https://golang.org/doc/effective_go

### Videos
* https://www.youtube.com/watch?v=oV9rvDllKEg
* https://www.youtube.com/watch?v=KBZlN0izeiY
* https://www.youtube.com/watch?v=YEKjSzIwAdA
* https://www.youtube.com/watch?v=cmkKxNN7cs4

### Testing Projects library
* https://github.com/smartystreets/goconvey
* https://github.com/stretchr/testify
* https://github.com/gavv/httpexpect
* https://github.com/golang/mock
* https://github.com/DATA-DOG/go-sqlmock

### Simple http test

```go
package main

import (
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"testing"

	rest "github.com/hashicorp/go-retryablehttp"
)

func TestService(t *testing.T) {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	url := os.Getenv("SERVICE_URL")
	if url == "" {
		url = "http://localhost:" + port
	}

	resp, err := rest.Get(url + "/")
	resp.Header.Add("", "")
	if err != nil {
		t.Fatalf("retry.Get: %v", err)
	}

	if got := resp.StatusCode; got != http.StatusOK {
		t.Errorf("HTTP Response: got %q, want %q", got, http.StatusOK)
	}

	out, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatalf("ioutil.ReadAll: %v", err)
	}

	want := "Congratulations, you successfully deployed a container image to Cloud Run"
	if !strings.Contains(string(out), want) {
		t.Errorf("HTTP Response: body does not include %q", want)
	}
}
```