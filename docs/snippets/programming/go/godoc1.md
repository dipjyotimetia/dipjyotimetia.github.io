---
id: godoc1
title: Get Started
sidebar_label: Get Started
---

### Return two variables
```go
package main

import "fmt"

func swap(x ,y string)(string,string)  {
	return y,x
}

func main() {
	a,b := swap("hello","world")
    fmt.Println(a,b)
}
```

### Naked Return
```go

package main

import "fmt"

func split(sum int)(x,y int)  {
	x= sum *4/9
	y=sum - x
	return	//known as naked return, not good for using in long functions
}

func main() {
	fmt.Println(split(17))
}
```

### var can be used as packages or in functions
```go
package main

import "fmt"

var c, python, java bool

func main() {
	var i int
	fmt.Println(i, c, python, java)
}

```

### if a initializer is present , type can be omitted
```go

package main

import "fmt"

var i, j int = 2, 4

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}

```

### the := the short assignment statement can be used in place of var, inside a function only
```go
package main

import "fmt"

func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"
	fmt.Println(i, j, k, c, python, java)
}

```
```go
//go basic types
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	Z complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", Z, Z)
}

```

```go
// variables without and explicit value initialized are given their zero value 
package main

import "fmt"

func main() {
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
}

```

```go
//Expression T(v) change the type of v
package main

import (
	"fmt"
	"math"
)

func main() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(x, y, z)
}

```

```go
//when declaring a variable without a specific type the default right side will be considered
package main

import (
	"fmt"
)

func main() {
	v := 2546546546464
	fmt.Printf("v is of type %T\n", v)
}

```

```go
// const can be declared as var but with const keyword
package main

import "fmt"

const Pi = 3.14

func main() {
	const word = "fwefwe"
	fmt.Println("Hello", word)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true
	fmt.Println("Go Rules?", Truth)
}

```
```go
//for loop
package main

import "fmt"

func main() {
	sum := 0
	for i:=0; i<100;i++ {
		sum += i
	}
	fmt.Println(sum)
}
// init and post statements are optional

func main() {
	sum := 1
	for ; sum<1000; {
		sum += sum
	}
	fmt.Println(sum)
}
// can remove the semicolon as well, for is Go's while
func main() {
	sum := 1
	for sum < 1000{
		sum += sum
	}
	fmt.Println(sum)
}
```
```go
//if loop
package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}
```
```go
//if with a short statement
package main

import (
	"fmt"
	"math"
)
//if
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	}
	return lim
}
//if-else
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

func main() {
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)
}

```
```go
// implementation
package main

import (
	"fmt"
)

func Sqrt(x float64) float64 {
	z := float64(1)
	fmt.Printf("Sqrt approximation of %v:\n",x)
	for i:=1;i<=10;i++ {
		z -= (z*z -x)/(2*z)
		fmt.Printf("Iteration %v,value = %v\n",i,z)
	}
	return z
}

func main() {
	fmt.Println(Sqrt(2))
}
```
```go
//switch
package main

import (
	"fmt"
	"runtime"
    "time"
)

func main()  {
	switch os:= runtime.GOOS; os {

	case "darwin":
		fmt.Println("OS x.")
	case "linux":
		fmt.Println("Linux")
	default:
		fmt.Printf("%s.\n",os)
	}
}

func main() {
	today := time.Now().Weekday()
	switch time.Sunday {

	case today + 0:
		fmt.Println("Today")
	case today + 1:
		fmt.Println("Tomorrow")
	case today + 2:
		fmt.Println("In two days")
	default:
		fmt.Println("Too far away")
	}
}
// switch with no condition, same as switch true
func main() {
	t := time.Now()
	switch  {
	case t.Hour()<12:
		fmt.Println("Good morning")
	case t.Hour()<17:
		fmt.Println("Good afternoon")
	default:
		fmt.Println("Good evening")
	}
}
```
```go
// defer statement defers the execution until surrounding function returns
package main

import (
	"fmt"
)

func main() {
	defer fmt.Println("World")
	fmt.Println("Hello")
}

//Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.
func main() {

	fmt.Println("counting")
	for i:=0;i<10;i++ {
		defer fmt.Println(i)
	}
	fmt.Println("done")
}

```
```go
//pointers
package main

import "fmt"

func main() {

	i,j := 42,2701
	p := &i 		//point to i
	fmt.Println(*p) //read i through the pointer (hex address stored 0xc0000a0068)
	*p = 21         //set i through the pointer
	fmt.Println(i)	// see the new value of i

	p = &j			//point to j
	*p = *p/37      //divide j thought he pointer
	fmt.Println(j)	// see the new value of j

}
```
```go



//Structs is a collection of fields

package main

import "fmt"

type Vertex struct {
	x int
	y int
}

func main() {
	fmt.Println(Vertex{1,2})
}
// structs filed can be accessed using dot
func main() {
	v := Vertex{1,2}
	v.x = 4
	fmt.Println(v.x)
}
//pointer to struct
func main() {
	v := Vertex{1,2}
	p := &v
	p.x = 1e9
	fmt.Println(v)
}
```

```go
//struct literals
package main

import "fmt"

type Vertex struct {
	X, Y int
}

var (
	v1 = Vertex{1, 2}  // has type Vertex
	v2 = Vertex{X: 1}  // Y:0 is implicit
	v3 = Vertex{}      // X:0 and Y:0
	p  = &Vertex{1, 2} // has type *Vertex
)

func main() {
	fmt.Println(v1, p, v2, v3)
}
```

```go
// arrays
package main

import "fmt"

func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "world"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	primes := [6]int{2, 3, 5, 6, 7, 8}
	fmt.Println(primes)
}
//slices
func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}
	var s []int = primes[1:4]
	fmt.Println(s)
}

//A slice does not store any data, it just describes a section of an underlying array.
func main() {
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}

	fmt.Println(names)
	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b)

	b[0] = "XXX"
	fmt.Println(a, b)
	fmt.Println(names)

}
//slice literals

func main() {
	q := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(q)

	r := []bool{true, false, true, false, true}
	fmt.Println(r)

	s := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(s)
}

//slice defaults
func main() {
	s := []int{2, 3, 5, 7, 11, 13}

	s = s[1:4]
	fmt.Println(s)

	s = s[:2]
	fmt.Println(s)

	s = s[1:]
	fmt.Println(s)
}

// the zero value of a slice is nil
func main() {
	var s []int
	fmt.Println(s, len(s), cap(s))
	if s == nil {
		fmt.Println("nil!")
	}
}

// creating slice with make
func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d%v\n", s, len(x), cap(x), x)
}

func main() {
	a := make([]int, 5)
	printSlice("a", a)

	b := make([]int, 0, 5)
	printSlice("b", b)

	c := b[:2]
	printSlice("c", c)

	d := c[2:5]
	printSlice("d", d)
}
```

```go
//slices of slices

package main

import (
	"fmt"
	"strings"
)

func main() {
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], ""))
	}
}
```

```go
//appending to a slice
package main

import (
	"fmt"
)

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

func main() {
	var s []int
	printSlice(s)

	//append works on nil slices
	s = append(s, 0)
	printSlice(s)

	//the slice grows as needed
	s = append(s, 1)
	printSlice(s)

	// we can add more than one element at a time
	s = append(s, 2, 3, 4)
	printSlice(s)
}
```
```go
//range

package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {

	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}
// we can skip the index or value by assigning _

func main() {

	pows := make([]int, 10)

	for i := range pows {
		pows[i] = 1 << uint(i) // == 2**i
	}
	for _, value := range pows {
		fmt.Printf("%d\n", value)
	}
}
```
```go
//Map

package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	m["Key Tar"] = Vertex{
		34.0908,-44.56464,
	}
	fmt.Println(m["Key Tar"])
}

```
```go
// Map literals
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {
		40.78433, -74.39967,
	},
	"Google": {
		37.42202, -122.08408,
	},
}

func main() {
	fmt.Println(m)
}
```
```go
// Mutating Maps
package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Answer"] = 42
	fmt.Println("The value:", m["Answer"])

	m["Answer"] = 48
	fmt.Println("The Value:", m["Answer"])

	delete(m, "Answer")
	fmt.Println("The value:", m["Answer"])

	v, ok := m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)
}

```
```go
//function values
package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```

```go
//function closures

package main

import "fmt"

func addr() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := addr(), addr()
	for i := 0; i < 100; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}

```
