# HTML 表单

```html
<form>
  <!-- 收集文本 -->
  <input type="text">
  <!-- 收集数字 -->
  <input type="number">
</form>
```

```html
<form>
  <!-- for属性值需要与input中的name相同, 即可完成绑定 -->
  <label for="username">Name</label>
  <br>
  <!-- name属性值是为了将输入的内容存储起来成为一个变量, 便于后端获取输入框的值 -->
  <input type="text" name="username" id="username">
</form>
```

## 复选框

```html
<form>
  <label for="username">Tony</label>
  <br>
  <input type="checkbox" name="username" id="username" value="tony">
  <br>
  <label for="username2">Tim</label>
  <br>
  <input type="checkbox" name="username2" id="username2" value="tim">
  <br>
</form>
```

## 单选框

```html
<form>
  <label for="username">Tony</label>
  <input type="radio" name="username" id="username" value="tony">
  <br>
  <label for="username2">Tim</label>
  <input type="radio" name="username2" id="username2" value="tim">
</form>
```

## 提交

```html
<!-- form表单中的action属性值即为表单提交到的位置, method属性值决定了表单的方法, 如果不指定method的属性值, 默认采用GET方法 -->
<form action="https://sample.com/api/form" method="POST">
  <label for="username">Tony</label>
  <input type="radio" name="username" id="username" value="tony">
  <br>
  <label for="username2">Tim</label>
  <input type="radio" name="username2" id="username2" value="tim">
  <br>
  <input type="submit" value="Send">
</form>
```
