"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[8667],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var m=a.createContext({}),s=function(n){var e=a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=s(n.components);return a.createElement(m.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,m=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=s(t),f=r,g=u["".concat(m,".").concat(f)]||u[f]||p[f]||i;return t?a.createElement(g,o(o({ref:e},c),{},{components:t})):a.createElement(g,o({ref:e},c))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1115:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"godoc1",title:"Get Started",sidebar_label:"Get Started"},m=void 0,s={unversionedId:"snippets/programming/go/godoc1",id:"snippets/programming/go/godoc1",title:"Get Started",description:"Return two variables",source:"@site/docs/snippets/programming/go/godoc1.md",sourceDirName:"snippets/programming/go",slug:"/snippets/programming/go/godoc1",permalink:"/docs/snippets/programming/go/godoc1",editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/programming/go/godoc1.md",tags:[],version:"current",frontMatter:{id:"godoc1",title:"Get Started",sidebar_label:"Get Started"},sidebar:"Docs",previous:{title:"Hyper-V",permalink:"/docs/snippets/generic/hyperv"},next:{title:"Get Started",permalink:"/docs/snippets/programming/java/java1"}},c=[{value:"Return two variables",id:"return-two-variables",children:[],level:3},{value:"Naked Return",id:"naked-return",children:[],level:3},{value:"var can be used as packages or in functions",id:"var-can-be-used-as-packages-or-in-functions",children:[],level:3},{value:"if a initializer is present , type can be omitted",id:"if-a-initializer-is-present--type-can-be-omitted",children:[],level:3},{value:"the := the short assignment statement can be used in place of var, inside a function only",id:"the--the-short-assignment-statement-can-be-used-in-place-of-var-inside-a-function-only",children:[],level:3}],p={toc:c};function u(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"return-two-variables"},"Return two variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc swap(x ,y string)(string,string)  {\n    return y,x\n}\n\nfunc main() {\n    a,b := swap("hello","world")\n    fmt.Println(a,b)\n}\n')),(0,i.kt)("h3",{id:"naked-return"},"Naked Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\npackage main\n\nimport "fmt"\n\nfunc split(sum int)(x,y int)  {\n    x= sum *4/9\n    y=sum - x\n    return  //known as naked return, not good for using in long functions\n}\n\nfunc main() {\n    fmt.Println(split(17))\n}\n')),(0,i.kt)("h3",{id:"var-can-be-used-as-packages-or-in-functions"},"var can be used as packages or in functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nvar c, python, java bool\n\nfunc main() {\n    var i int\n    fmt.Println(i, c, python, java)\n}\n\n')),(0,i.kt)("h3",{id:"if-a-initializer-is-present--type-can-be-omitted"},"if a initializer is present , type can be omitted"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\npackage main\n\nimport "fmt"\n\nvar i, j int = 2, 4\n\nfunc main() {\n    var c, python, java = true, false, "no!"\n    fmt.Println(i, j, c, python, java)\n}\n\n')),(0,i.kt)("h3",{id:"the--the-short-assignment-statement-can-be-used-in-place-of-var-inside-a-function-only"},"the := the short assignment statement can be used in place of var, inside a function only"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    var i, j int = 1, 2\n    k := 3\n    c, python, java := true, false, "no!"\n    fmt.Println(i, j, k, c, python, java)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//go basic types\npackage main\n\nimport (\n    "fmt"\n    "math/cmplx"\n)\n\nvar (\n    ToBe   bool       = false\n    MaxInt uint64     = 1<<64 - 1\n    Z complex128 = cmplx.Sqrt(-5 + 12i)\n)\n\nfunc main() {\n    fmt.Printf("Type: %T Value: %v\\n", ToBe, ToBe)\n    fmt.Printf("Type: %T Value: %v\\n", MaxInt, MaxInt)\n    fmt.Printf("Type: %T Value: %v\\n", Z, Z)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// variables without and explicit value initialized are given their zero value \npackage main\n\nimport "fmt"\n\nfunc main() {\n    var i int\n    var f float64\n    var b bool\n    var s string\n    fmt.Printf("%v %v %v %q\\n", i, f, b, s)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//Expression T(v) change the type of v\npackage main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc main() {\n    var x, y int = 3, 4\n    var f float64 = math.Sqrt(float64(x*x + y*y))\n    var z uint = uint(f)\n    fmt.Println(x, y, z)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//when declaring a variable without a specific type the default right side will be considered\npackage main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    v := 2546546546464\n    fmt.Printf("v is of type %T\\n", v)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// const can be declared as var but with const keyword\npackage main\n\nimport "fmt"\n\nconst Pi = 3.14\n\nfunc main() {\n    const word = "fwefwe"\n    fmt.Println("Hello", word)\n    fmt.Println("Happy", Pi, "Day")\n\n    const Truth = true\n    fmt.Println("Go Rules?", Truth)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//for loop\npackage main\n\nimport "fmt"\n\nfunc main() {\n    sum := 0\n    for i:=0; i<100;i++ {\n        sum += i\n    }\n    fmt.Println(sum)\n}\n// init and post statements are optional\n\nfunc main() {\n    sum := 1\n    for ; sum<1000; {\n        sum += sum\n    }\n    fmt.Println(sum)\n}\n// can remove the semicolon as well, for is Go\'s while\nfunc main() {\n    sum := 1\n    for sum < 1000{\n        sum += sum\n    }\n    fmt.Println(sum)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//if loop\npackage main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc sqrt(x float64) string {\n    if x < 0 {\n        return sqrt(-x) + "i"\n    }\n    return fmt.Sprint(math.Sqrt(x))\n}\n\nfunc main() {\n    fmt.Println(sqrt(2), sqrt(-4))\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//if with a short statement\npackage main\n\nimport (\n    "fmt"\n    "math"\n)\n//if\nfunc pow(x, n, lim float64) float64 {\n    if v := math.Pow(x, n); v < lim {\n        return v\n    }\n    return lim\n}\n//if-else\nfunc pow(x, n, lim float64) float64 {\n    if v := math.Pow(x, n); v < lim {\n        return v\n    } else {\n        fmt.Printf("%g >= %g\\n", v, lim)\n    }\n    return lim\n}\n\nfunc main() {\n    fmt.Println(\n        pow(3, 2, 10),\n        pow(3, 3, 20),\n    )\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// implementation\npackage main\n\nimport (\n    "fmt"\n)\n\nfunc Sqrt(x float64) float64 {\n    z := float64(1)\n    fmt.Printf("Sqrt approximation of %v:\\n",x)\n    for i:=1;i<=10;i++ {\n        z -= (z*z -x)/(2*z)\n        fmt.Printf("Iteration %v,value = %v\\n",i,z)\n    }\n    return z\n}\n\nfunc main() {\n    fmt.Println(Sqrt(2))\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//switch\npackage main\n\nimport (\n    "fmt"\n    "runtime"\n    "time"\n)\n\nfunc main()  {\n    switch os:= runtime.GOOS; os {\n\n    case "darwin":\n        fmt.Println("OS x.")\n    case "linux":\n        fmt.Println("Linux")\n    default:\n        fmt.Printf("%s.\\n",os)\n    }\n}\n\nfunc main() {\n    today := time.Now().Weekday()\n    switch time.Sunday {\n\n    case today + 0:\n        fmt.Println("Today")\n    case today + 1:\n        fmt.Println("Tomorrow")\n    case today + 2:\n        fmt.Println("In two days")\n    default:\n        fmt.Println("Too far away")\n    }\n}\n// switch with no condition, same as switch true\nfunc main() {\n    t := time.Now()\n    switch  {\n    case t.Hour()<12:\n        fmt.Println("Good morning")\n    case t.Hour()<17:\n        fmt.Println("Good afternoon")\n    default:\n        fmt.Println("Good evening")\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// defer statement defers the execution until surrounding function returns\npackage main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    defer fmt.Println("World")\n    fmt.Println("Hello")\n}\n\n//Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.\nfunc main() {\n\n    fmt.Println("counting")\n    for i:=0;i<10;i++ {\n        defer fmt.Println(i)\n    }\n    fmt.Println("done")\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//pointers\npackage main\n\nimport "fmt"\n\nfunc main() {\n\n    i,j := 42,2701\n    p := &i         //point to i\n    fmt.Println(*p) //read i through the pointer (hex address stored 0xc0000a0068)\n    *p = 21         //set i through the pointer\n    fmt.Println(i)  // see the new value of i\n\n    p = &j          //point to j\n    *p = *p/37      //divide j thought he pointer\n    fmt.Println(j)  // see the new value of j\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\n\n\n//Structs is a collection of fields\n\npackage main\n\nimport "fmt"\n\ntype Vertex struct {\n    x int\n    y int\n}\n\nfunc main() {\n    fmt.Println(Vertex{1,2})\n}\n// structs filed can be accessed using dot\nfunc main() {\n    v := Vertex{1,2}\n    v.x = 4\n    fmt.Println(v.x)\n}\n//pointer to struct\nfunc main() {\n    v := Vertex{1,2}\n    p := &v\n    p.x = 1e9\n    fmt.Println(v)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//struct literals\npackage main\n\nimport "fmt"\n\ntype Vertex struct {\n    X, Y int\n}\n\nvar (\n    v1 = Vertex{1, 2}  // has type Vertex\n    v2 = Vertex{X: 1}  // Y:0 is implicit\n    v3 = Vertex{}      // X:0 and Y:0\n    p  = &Vertex{1, 2} // has type *Vertex\n)\n\nfunc main() {\n    fmt.Println(v1, p, v2, v3)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// arrays\npackage main\n\nimport "fmt"\n\nfunc main() {\n    var a [2]string\n    a[0] = "Hello"\n    a[1] = "world"\n    fmt.Println(a[0], a[1])\n    fmt.Println(a)\n\n    primes := [6]int{2, 3, 5, 6, 7, 8}\n    fmt.Println(primes)\n}\n//slices\nfunc main() {\n    primes := [6]int{2, 3, 5, 7, 11, 13}\n    var s []int = primes[1:4]\n    fmt.Println(s)\n}\n\n//A slice does not store any data, it just describes a section of an underlying array.\nfunc main() {\n    names := [4]string{\n        "John",\n        "Paul",\n        "George",\n        "Ringo",\n    }\n\n    fmt.Println(names)\n    a := names[0:2]\n    b := names[1:3]\n    fmt.Println(a, b)\n\n    b[0] = "XXX"\n    fmt.Println(a, b)\n    fmt.Println(names)\n\n}\n//slice literals\n\nfunc main() {\n    q := []int{2, 3, 5, 7, 11, 13}\n    fmt.Println(q)\n\n    r := []bool{true, false, true, false, true}\n    fmt.Println(r)\n\n    s := []struct {\n        i int\n        b bool\n    }{\n        {2, true},\n        {3, false},\n        {5, true},\n        {7, true},\n        {11, false},\n        {13, true},\n    }\n    fmt.Println(s)\n}\n\n//slice defaults\nfunc main() {\n    s := []int{2, 3, 5, 7, 11, 13}\n\n    s = s[1:4]\n    fmt.Println(s)\n\n    s = s[:2]\n    fmt.Println(s)\n\n    s = s[1:]\n    fmt.Println(s)\n}\n\n// the zero value of a slice is nil\nfunc main() {\n    var s []int\n    fmt.Println(s, len(s), cap(s))\n    if s == nil {\n        fmt.Println("nil!")\n    }\n}\n\n// creating slice with make\nfunc printSlice(s string, x []int) {\n    fmt.Printf("%s len=%d cap=%d%v\\n", s, len(x), cap(x), x)\n}\n\nfunc main() {\n    a := make([]int, 5)\n    printSlice("a", a)\n\n    b := make([]int, 0, 5)\n    printSlice("b", b)\n\n    c := b[:2]\n    printSlice("c", c)\n\n    d := c[2:5]\n    printSlice("d", d)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//slices of slices\n\npackage main\n\nimport (\n    "fmt"\n    "strings"\n)\n\nfunc main() {\n    board := [][]string{\n        []string{"_", "_", "_"},\n        []string{"_", "_", "_"},\n        []string{"_", "_", "_"},\n    }\n    board[0][0] = "X"\n    board[2][2] = "O"\n    board[1][2] = "X"\n    board[1][0] = "O"\n    board[0][2] = "X"\n\n    for i := 0; i < len(board); i++ {\n        fmt.Printf("%s\\n", strings.Join(board[i], ""))\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//appending to a slice\npackage main\n\nimport (\n    "fmt"\n)\n\nfunc printSlice(s []int) {\n    fmt.Printf("len=%d cap=%d %v\\n", len(s), cap(s), s)\n}\n\nfunc main() {\n    var s []int\n    printSlice(s)\n\n    //append works on nil slices\n    s = append(s, 0)\n    printSlice(s)\n\n    //the slice grows as needed\n    s = append(s, 1)\n    printSlice(s)\n\n    // we can add more than one element at a time\n    s = append(s, 2, 3, 4)\n    printSlice(s)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//range\n\npackage main\n\nimport "fmt"\n\nvar pow = []int{1, 2, 4, 8, 16, 32, 64, 128}\n\nfunc main() {\n\n    for i, v := range pow {\n        fmt.Printf("2**%d = %d\\n", i, v)\n    }\n}\n// we can skip the index or value by assigning _\n\nfunc main() {\n\n    pows := make([]int, 10)\n\n    for i := range pows {\n        pows[i] = 1 << uint(i) // == 2**i\n    }\n    for _, value := range pows {\n        fmt.Printf("%d\\n", value)\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//Map\n\npackage main\n\nimport "fmt"\n\ntype Vertex struct {\n    Lat, Long float64\n}\n\nvar m map[string]Vertex\n\nfunc main() {\n    m = make(map[string]Vertex)\n    m["Bell Labs"] = Vertex{\n        40.68433, -74.39967,\n    }\n    m["Key Tar"] = Vertex{\n        34.0908,-44.56464,\n    }\n    fmt.Println(m["Key Tar"])\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Map literals\npackage main\n\nimport "fmt"\n\ntype Vertex struct {\n    Lat, Long float64\n}\n\nvar m = map[string]Vertex{\n    "Bell Labs": {\n        40.78433, -74.39967,\n    },\n    "Google": {\n        37.42202, -122.08408,\n    },\n}\n\nfunc main() {\n    fmt.Println(m)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Mutating Maps\npackage main\n\nimport "fmt"\n\nfunc main() {\n    m := make(map[string]int)\n\n    m["Answer"] = 42\n    fmt.Println("The value:", m["Answer"])\n\n    m["Answer"] = 48\n    fmt.Println("The Value:", m["Answer"])\n\n    delete(m, "Answer")\n    fmt.Println("The value:", m["Answer"])\n\n    v, ok := m["Answer"]\n    fmt.Println("The value:", v, "Present?", ok)\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//function values\npackage main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc compute(fn func(float64, float64) float64) float64 {\n    return fn(3, 4)\n}\n\nfunc main() {\n    hypot := func(x, y float64) float64 {\n        return math.Sqrt(x*x + y*y)\n    }\n    fmt.Println(hypot(5, 12))\n\n    fmt.Println(compute(hypot))\n    fmt.Println(compute(math.Pow))\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//function closures\n\npackage main\n\nimport "fmt"\n\nfunc addr() func(int) int {\n    sum := 0\n    return func(x int) int {\n        sum += x\n        return sum\n    }\n}\n\nfunc main() {\n    pos, neg := addr(), addr()\n    for i := 0; i < 100; i++ {\n        fmt.Println(\n            pos(i),\n            neg(-2*i),\n        )\n    }\n}\n\n')))}u.isMDXComponent=!0}}]);