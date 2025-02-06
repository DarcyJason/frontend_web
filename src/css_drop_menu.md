# 下拉菜单

## index.html

```html
<div class="dropdown">
  <button class="dropdownbutton"></button>
  <div class="dropdown-menu">
    <a href="#">List</a>
    <a href="#">List</a>
    <a href="#">List</a>
    <a href="#">List</a>
  </div>
</div>
```

## styles.css

```css
.dropdownbutton {
  background-color: blue;
  color: white;
  padding: 13px;
  font-size: 16px;
  border: none;
  /* 将鼠标设置为一只小手 */
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: light-blue;
  min-width: 150px;
}

.dropdown-menu a {
  color: black;
  padding: 11px 15px;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown:hover .dropdownbutton {
  background-color: grey;
}
```
