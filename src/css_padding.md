# Padding

padding即行内间距, 也就是在border内添加空白

```css
p {
  border: 3px solid purple;
  border-radius: 20px;
  /* 在border中设置空白 */
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  /* 简写padding, 顺序是上右下左 */
  padding: 20px 20px 20px 20x;
  /* 更简写padding, 但上下必须相同, 左右也必须相同, 顺序是上下、左右 */
  padding: 20px 20px;
  /* 最简写padding, 但上下左右必须相同 */
  padding: 20px;
}
```
