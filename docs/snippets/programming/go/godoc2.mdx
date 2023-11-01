---
id: godoc2
title: Get Little bit deeper
sidebar_label: Get Little bit deeper
---

### Pattern of code calling

golang order of code execution
import --> const --> var --> init()

```go
package creature

import (
    "math/rand"
    "time"
)

var creatures = []string{"shark", "jellyfish", "squid", "octopus", "dolphin"}

func init() {
    rand.Seed(time.Now().UnixNano())
}

func Random() string {
    i := rand.Intn(len(creatures))
    return creatures[i]
}
```

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