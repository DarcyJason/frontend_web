# CSS 表格

## index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Tony</td>
        <td>18</td>
      </tr>
      <tr>
        <td>Tim</td>
        <td>20</td>
      </tr>
    </table>
  </body>
</html>
```

## styles.css

```css
table,th, td {
  /* 为表格增加边框 */
  border: 2px solid;
  /* 将表格的默认双横线边框设置为单实线 */
  border-collapse: collapse;
  /* 将表格隐藏 */
  visibility: hidden;
  /* 移除表格 */
  display: none;
}
/* 当鼠标悬停在某行上, 显示高亮 */
tr:hover {
  background-color: blue;
}
```
