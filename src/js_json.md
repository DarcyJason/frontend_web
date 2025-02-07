# Json

```javascript
// 将javascript对象转换成json, 用JSON.stringify()
const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    zipCode: "10001",
  },
};
const jsonString = JSON.stringify(person);

// 将如下的json转换成javascript对象, 用JSON.parse()
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "isSubscribed": true,
  "hobbies": ["Reading", "Running", "Cooking"],
  "address": {
    "city": "New York",
    "zipCode": "10001"
  }
}
const parsedObject = JSON.parse(jsonString);
```
