# 函数

## 传统函数

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

## 函数表达式

```javascript
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 2))
```

## 箭头函数

```javascript
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

// 如果函数只有一行可以简写
const divide = (a, b) => a / b;
console.log(divide(8, 2));
```

## 立即执行函数

```javascript
(function () {
  console.log("立即执行");
})();

//简化版
(() => {
  console.log("立即执行");
})();
```

## 构造函数

```javascript
const add = new Function("a", "b", "return a + b");
console.log(add(2, 3));
```

## 对象方法

```javascript
// 对象方法中不要使用箭头函数
const obj = {
    name: "Tom",
    sayHello: function () {
        return `Hello, I'm ${this.name}`;
    }
};
console.log(obj.sayHello());
```

## 类中的方法

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}
const p = new Person("Alice");
console.log(p.sayHello());
```

## 生成器函数

```javascript
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```
