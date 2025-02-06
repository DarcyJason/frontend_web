# Combinators

## index.html

```html
<h1>
  Hi
  <b>Hey</b>
  <p>
    <b>What's up</b>
  </p>
</h1>
<b>What?</b>
<b>What2?</b>
```

## styles.css

```css
/* 子代选择器 */
/* 只有Hey会变为红色, 因为这么写只会寻找其子标签而不会寻找其孙标签*/
h1 > b {
  color: red;
}
/* 相邻兄弟选择器 */
/* 只有What?会变为红色, 因为选择的是与h1相邻的b标签, 所以What?会变红*/
h1 + b {
  color: red;
}
/* 通用兄弟选择器 */
/* What?和What2?都会变为红色, 因为选中的是与h1同级的后续b标签
h1 ~ b {
  color: red;
}
```
