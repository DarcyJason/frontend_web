# 属性选择器

## index.html

```html
<div class="test">
  <p>Hi</p>
</div>
<div class="test2">
  <p>Hello</p>
</div>
```

## styles.css

```css
/* 只有Hi会变红, 因为选中的是类名为test的div中的文本 */
div[class="test"] {
  color: red;
}
```
