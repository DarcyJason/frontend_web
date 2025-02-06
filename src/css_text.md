# Text

```css
p {
  /* 文本出现的位置, 文本默认是left, 其值可以为left, right, center justify(自动调整单词之间的间距, 使得左边和右边都对齐) */
  text-align: right;
  /* 仅调整段落的最后一行 */
  text-align-last: center;
  /* 文本的高度对齐 */
  vertical-align: center;
  /* 文本下横线 */
  text-decoration-line: underline;
  /* 文本中间横线 */
  text-decoration-line: line-through;
  /* 文本顶部一条横线 */
  text-decoration-line: overline;
  /* 三条文本上的线条可以任意同时存在 */
  text-decoration-line: underline line-through overline;
  /* 文本上的线条设置颜色 */
  text-decoration-color: green;
  /* 文本上的线条设置样式 */
  text-decoration-style: dashed;
  /* 调整文本上线条的粗细 */
  text-decoration-thickness: 10px;
  /* 简写上面的内容, 按照line, color, style, thickness的顺序写 */
  text-decoration: overline purple solid 6px;
  /* 去除所有的文本样式, 例如去除a标签的下横线等 */
  text-decoration: none;
  /* 将文本转换成全小写 */
  text-transform: lowercase;
  /* 将文本转换成全大写 */
  text-transform: uppercase;
  /* 将文本中每个单词的首字母大写 */
  text-transform: capitalize;
  /* 文本缩进 */
  text-indent: 20px;
  /* 调整文本中每个字母的间距 */
  letter-spacing: 20px;
}
```
