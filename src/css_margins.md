# Margins

Margins即外边距, 简单来说就是给元素的上下左右加空格

```css
p {
  /* 给p元素左边加空格, 其余的属性还有margin-top, margin-right, margin-bottom */
  margin-left: 20px;
  /* 简化设置margin, 顺序是上、右、下、左 */
  margin: 50px 50px 50px 50px;
  /* 更简化设置margin, 但必须满足上下margin值相同、左右margin值也相同, 顺序是上下、左右 */
  margin: 50px 50px;
  /* 最简化设置margin, 但必须满足上下左右的margin值全相同 */
  margin: 50px;
}
```
