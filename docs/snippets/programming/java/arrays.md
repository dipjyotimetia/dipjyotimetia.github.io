---
id: arrays
title: DSA Arrays
sidebar_label: DSA_Arrays
---

```java

    /**
     * Big o of n time, array search if array in un-sorted O(n)
     * Linear search
     * In worst case it will traverse the whole array
     * search in sorted way O(logn)
     */
    public int search(int arr[], int element) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Time complexity of insert operation is O(n)
     * time complexity if insert os O(1)
     */
    public int insert(int arr[], int element, int capacity, int position) {
        if (arr.length == capacity) {
            return arr.length;
        }
        int index = position - 1;
        for (int i = arr.length - 1; i >= index; i--) {
            arr[i + 1] = arr[i];
            arr[index] = element;
        }
        return element + 1;
    }

    public int delete(int arr[], int element) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                break;
            }
            if (i == arr.length) {
                return arr.length;
            }
            for (int j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
        }
        return arr.length - 1;
    }

    /**
     * Find the largest element of an array
     * Time complexity of this approach is O(n^2)
     */
    public int getLargestElement(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            boolean flag = true;
            for (int j = 0; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Find the largest element of an array
     * Time complexity of this approach is O(n)
     */
    public int getLargestElementEfficient(int arr[]) {
        int res = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > arr[res]) {
                res = i;
            }
        }
        return res;
    }

    public int getSecondLargestElement(int arr[]) {
        int res = -1;
        int largest = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > arr[largest]) {
                res = largest;
                largest = i;
            } else if (arr[i] != arr[largest]) {
                if (res == -1 || arr[i] > arr[res]) {
                    res = i;
                }
            }
        }
        return res;
    }

    /**
     * Time complexity is O(n^2)
     */
    public boolean checkArrayIsSorted(int arr[]) {
        boolean flag = true;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    return false;
                }
            }
        }
        return flag;
    }

    /**
     * Time complexity is O(n), understand auxilary space?
     */
    public boolean checkArrayIsSortedEfficient(int arr[]) {
        boolean flag = true;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return flag;
    }

    /**
     * Reverse an array problem
     */

    public void reverseArray(int arr[]) {
        int low = 0;
        int high = arr.length - 1;
        while (low < high) {
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high--;
        }
    }

```