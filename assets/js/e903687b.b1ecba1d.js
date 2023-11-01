"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[7021],{1529:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=e(5893),i=e(1151);const a={id:"arrays",title:"DSA Arrays",sidebar_label:"DSA_Arrays"},s=void 0,o={id:"snippets/programming/java/arrays",title:"DSA Arrays",description:"",source:"@site/docs/snippets/programming/java/arrays.mdx",sourceDirName:"snippets/programming/java",slug:"/snippets/programming/java/arrays",permalink:"/docs/snippets/programming/java/arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/dipjyotimetia/Docs/docs/snippets/programming/java/arrays.mdx",tags:[],version:"current",frontMatter:{id:"arrays",title:"DSA Arrays",sidebar_label:"DSA_Arrays"},sidebar:"Docs",previous:{title:"Get Started",permalink:"/docs/snippets/programming/java/java1"},next:{title:"React",permalink:"/docs/snippets/programming/react/react1"}},l={},c=[];function p(n){const r={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"\n    /**\n     * Big o of n time, array search if array in un-sorted O(n)\n     * Linear search\n     * In worst case it will traverse the whole array\n     * search in sorted way O(logn)\n     */\n    public int search(int arr[], int element) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == element) {\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    /**\n     * Time complexity of insert operation is O(n)\n     * time complexity if insert os O(1)\n     */\n    public int insert(int arr[], int element, int capacity, int position) {\n        if (arr.length == capacity) {\n            return arr.length;\n        }\n        int index = position - 1;\n        for (int i = arr.length - 1; i >= index; i--) {\n            arr[i + 1] = arr[i];\n            arr[index] = element;\n        }\n        return element + 1;\n    }\n\n    public int delete(int arr[], int element) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == element) {\n                break;\n            }\n            if (i == arr.length) {\n                return arr.length;\n            }\n            for (int j = i; j < arr.length - 1; j++) {\n                arr[j] = arr[j + 1];\n            }\n        }\n        return arr.length - 1;\n    }\n\n    /**\n     * Find the largest element of an array\n     * Time complexity of this approach is O(n^2)\n     */\n    public int getLargestElement(int arr[]) {\n        for (int i = 0; i < arr.length; i++) {\n            boolean flag = true;\n            for (int j = 0; j < arr.length; j++) {\n                if (arr[j] > arr[i]) {\n                    flag = false;\n                    break;\n                }\n            }\n            if (flag == true) {\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    /**\n     * Find the largest element of an array\n     * Time complexity of this approach is O(n)\n     */\n    public int getLargestElementEfficient(int arr[]) {\n        int res = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] > arr[res]) {\n                res = i;\n            }\n        }\n        return res;\n    }\n\n    public int getSecondLargestElement(int arr[]) {\n        int res = -1;\n        int largest = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] > arr[largest]) {\n                res = largest;\n                largest = i;\n            } else if (arr[i] != arr[largest]) {\n                if (res == -1 || arr[i] > arr[res]) {\n                    res = i;\n                }\n            }\n        }\n        return res;\n    }\n\n    /**\n     * Time complexity is O(n^2)\n     */\n    public boolean checkArrayIsSorted(int arr[]) {\n        boolean flag = true;\n        for (int i = 0; i < arr.length; i++) {\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j] < arr[i]) {\n                    return false;\n                }\n            }\n        }\n        return flag;\n    }\n\n    /**\n     * Time complexity is O(n), understand auxilary space?\n     */\n    public boolean checkArrayIsSortedEfficient(int arr[]) {\n        boolean flag = true;\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] < arr[i - 1]) {\n                return false;\n            }\n        }\n        return flag;\n    }\n\n    /**\n     * Reverse an array problem\n     */\n\n    public void reverseArray(int arr[]) {\n        int low = 0;\n        int high = arr.length - 1;\n        while (low < high) {\n            int temp = arr[low];\n            arr[low] = arr[high];\n            arr[high] = temp;\n            low++;\n            high--;\n        }\n    }\n\n"})})}function g(n={}){const{wrapper:r}={...(0,i.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>o,a:()=>s});var t=e(7294);const i={},a=t.createContext(i);function s(n){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:r},n.children)}}}]);