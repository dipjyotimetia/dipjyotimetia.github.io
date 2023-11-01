---
id: godoc3
title: Go Concepts
sidebar_label: Go Concepts
---

## Go Concurrency
```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 4*time.Second)
	_ = cancel // Discard the cancel function, it's not used in this example.

	go func() {
		<-ctx.Done()
		fmt.Println("Context done!")
	}()

	go func() {
		time.Sleep(1 * time.Second)
		fmt.Println("After 1 second:", ctx.Err())
	}()

	go func() {
		time.Sleep(3 * time.Second)
		fmt.Println("After 3 seconds:", ctx.Err())
	}()

	go func() {
		time.Sleep(5 * time.Second)
		fmt.Println("After 5 seconds:", ctx.Err())
	}()

	time.Sleep(6 * time.Second)
}

func returnAfterNSecond(ctx context.Context, n int, err error) chan error {
	ch := make(chan error)
	go func() {
		select {
		case <-ctx.Done():
			ch <- ctx.Err()
		case <-time.After(time.Duration(n) * time.Second):
			ch <- err
		}
	}()
	return ch
}

```
## Mutex
```go
package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

type cache struct {
	mu sync.Mutex
	m  map[string]int
}

var inMemoryCache = &cache{m: make(map[string]int)}

func main() {
	rand.Seed(time.Now().UnixNano())
	wg := &sync.WaitGroup{}
	wg.Add(100)
	for i := 0; i < 100; i++ {
		go save(fmt.Sprintf("user_id%d", rand.Intn(100)), rand.Intn(100), wg)
	}
	wg.Wait()
	fmt.Println(inMemoryCache.m)
}

func save(k string, v int, wg *sync.WaitGroup) {
	inMemoryCache.mu.Lock()
	inMemoryCache.m[k] = v
	inMemoryCache.mu.Unlock()
	wg.Done()
}

func saveSlow(k string, v int) {
	inMemoryCache.m[k] = v
}

```

## Generics Queue

```go
package main

import "fmt"

type Queue[T any] []T

func (q *Queue[T]) enqueue(v T) {
	*q = append(*q, v)
}

func (q *Queue[T]) dequeue() (T, bool) {
	if len(*q) == 0 {
		var v T
		return v, false
	}
	v := (*q)[0]
	*q = (*q)[1:]
	return v, true
}

// Queue
func main() {
	q := new(Queue[string])
	q.enqueue("item-1")
	q.enqueue("item-2")
	q.enqueue("item-3")
	fmt.Println(q)
	fmt.Println(q.dequeue())
	fmt.Println(q.dequeue())
	fmt.Println(q)
}
```

## Generics Stack
```go
package main

import "fmt"

type Stack[T any] []T

func (s *Stack[T]) push(v T) {
	*s = append([]T{v}, (*s)...)
}

func (s *Stack[T]) pop() (T, bool) {
	if len(*s) == 0 {
		var v T
		return v, false
	}
	v := (*s)[0]
	*s = (*s)[1:]
	return v, true
}

// Stack
func main() {
	s := new(Stack[int])
	s.push(1)
	s.push(2)
	s.push(3)
	fmt.Println(s)
	fmt.Println(s.pop())
	fmt.Println(s.pop())
	fmt.Println(s)
}
```

## Generics LinkedList
```go
package main

import "fmt"

type Node[T any] struct {
	data T
	next *Node[T]
}

type LinkedList[T any] struct {
	head *Node[T]
}

func (l *LinkedList[T]) add(data T) {
	node := &Node[T]{data: data}
	if l.head == nil {
		l.head = node
		return
	}
	current := l.head
	for current.next != nil {
		current = current.next
	}
	current.next = node
}

func (l *LinkedList[T]) print() {
	current := l.head
	for current != nil {
		fmt.Println(current.data)
		current = current.next
	}
}

// LinkedList
func main() {
	ll := new(LinkedList[float32])
	ll.add(1.01)
	ll.add(2.02)
	ll.add(3.03)
	ll.print()
}

```
