# 日期与时间

```javascript
const currentDate = new Date();
// 年 月 日 小时 分钟 秒 毫秒
const date = new Date(2023, 7, 25, 12, 00, 0, 0);
// 获取时间中的每个参数
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
// 将日期输出为特定格式
console.log(date.toDateString()); // Output: Mon Jul 25 2023
console.log(date.toISOString()); // Output: 2023-07-25T00:00:00.000Z
console.log(date.toLocaleString()); // Output: 7/25/2023, 12:00:00 AM (based on the user's local timezone)
// 时间加减运算
date.setDate(date.getDate() + 1); // 当前日期基础上在加一天
date.setHours(date.getHours() - 2); // 当前日期基础上减去两小时
```
