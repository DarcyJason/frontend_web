# 数组

```javascript
const mylist = [];
const numberArray = [2, 4, 6, 8];
const stringArray = ["eat", "work", "sleep"];
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];
console.log(myArray[0]); // "h"

// 数组中常用的方法
// concat() 合并数组
// includes() 检查数组中是否包含该元素
// push() 在数组尾部添加一个元素, 返回数组的新长度
// unshift() 在数组头部添加一个元素, 返回数组的新长度
// pop() 弹出数组中最后一个元素, 返回新的数组
// shift() 弹出数组中第一个元素, 返回新的数组
// sort() 将数组中的元素进行排序
// slice() 选择数组中的一部分作为新的数组并返回新的数组
// splice() 移除或替换已存在的元素或添加未存在的元素
// reverse() 反转数组

const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];
console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");
console.log(fruits)

let pl = ["JavaScript", "Golang", "Python", "php"];
let numbers = [3, 5, 2, 4, 1];
console.log(pl.includes("Golang"));
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 3));
console.log(pl.sort());
```
