// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="html.html"><strong aria-hidden="true">1.</strong> HTML</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="heading.html"><strong aria-hidden="true">1.1.</strong> 标题</a></li><li class="chapter-item expanded "><a href="paragraph.html"><strong aria-hidden="true">1.2.</strong> 段落</a></li><li class="chapter-item expanded "><a href="space_and_seperate_line.html"><strong aria-hidden="true">1.3.</strong> 换行和分割线</a></li><li class="chapter-item expanded "><a href="font-size.html"><strong aria-hidden="true">1.4.</strong> 字体样式</a></li><li class="chapter-item expanded "><a href="html_color.html"><strong aria-hidden="true">1.5.</strong> HTML 内嵌样式</a></li><li class="chapter-item expanded "><a href="html_comments.html"><strong aria-hidden="true">1.6.</strong> HTML 注释</a></li><li class="chapter-item expanded "><a href="html_links.html"><strong aria-hidden="true">1.7.</strong> HTML 链接</a></li><li class="chapter-item expanded "><a href="html_title_and_favicon.html"><strong aria-hidden="true">1.8.</strong> title和favicon</a></li><li class="chapter-item expanded "><a href="html_tables.html"><strong aria-hidden="true">1.9.</strong> HTML 表格</a></li><li class="chapter-item expanded "><a href="html_lists.html"><strong aria-hidden="true">1.10.</strong> HTML 列表</a></li><li class="chapter-item expanded "><a href="html_block_and_inline.html"><strong aria-hidden="true">1.11.</strong> 块元素和内联元素</a></li><li class="chapter-item expanded "><a href="html_iframe.html"><strong aria-hidden="true">1.12.</strong> iframe</a></li><li class="chapter-item expanded "><a href="html_symbols.html"><strong aria-hidden="true">1.13.</strong> 符号</a></li><li class="chapter-item expanded "><a href="html_form.html"><strong aria-hidden="true">1.14.</strong> HTML 表单</a></li></ol></li><li class="chapter-item expanded "><a href="css.html"><strong aria-hidden="true">2.</strong> CSS</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="install_css.html"><strong aria-hidden="true">2.1.</strong> 引入CSS文件至HTML中</a></li><li class="chapter-item expanded "><a href="css_comments.html"><strong aria-hidden="true">2.2.</strong> CSS 注释</a></li><li class="chapter-item expanded "><a href="css_selectors.html"><strong aria-hidden="true">2.3.</strong> CSS 选择器</a></li><li class="chapter-item expanded "><a href="css_background.html"><strong aria-hidden="true">2.4.</strong> 背景</a></li><li class="chapter-item expanded "><a href="css_margins.html"><strong aria-hidden="true">2.5.</strong> 外间距</a></li><li class="chapter-item expanded "><a href="css_borders.html"><strong aria-hidden="true">2.6.</strong> 边框</a></li><li class="chapter-item expanded "><a href="css_padding.html"><strong aria-hidden="true">2.7.</strong> 行内间距</a></li><li class="chapter-item expanded "><a href="css_text.html"><strong aria-hidden="true">2.8.</strong> 文本</a></li><li class="chapter-item expanded "><a href="css_fonts.html"><strong aria-hidden="true">2.9.</strong> 字体</a></li><li class="chapter-item expanded "><a href="css_icon.html"><strong aria-hidden="true">2.10.</strong> icon</a></li><li class="chapter-item expanded "><a href="css_tables.html"><strong aria-hidden="true">2.11.</strong> CSS 表格</a></li><li class="chapter-item expanded "><a href="css_combinators.html"><strong aria-hidden="true">2.12.</strong> Combinators</a></li><li class="chapter-item expanded "><a href="css_drop_menu.html"><strong aria-hidden="true">2.13.</strong> 下拉菜单</a></li><li class="chapter-item expanded "><a href="css_attribute_selectors.html"><strong aria-hidden="true">2.14.</strong> 属性选择器</a></li></ol></li><li class="chapter-item expanded "><a href="javascript.html"><strong aria-hidden="true">3.</strong> JavaScript</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="js_variable.html"><strong aria-hidden="true">3.1.</strong> 变量</a></li><li class="chapter-item expanded "><a href="js_event.html"><strong aria-hidden="true">3.2.</strong> 触发事件</a></li><li class="chapter-item expanded "><a href="js_function.html"><strong aria-hidden="true">3.3.</strong> 函数</a></li><li class="chapter-item expanded "><a href="js_compare_operators.html"><strong aria-hidden="true">3.4.</strong> 比较符号</a></li><li class="chapter-item expanded "><a href="js_converse.html"><strong aria-hidden="true">3.5.</strong> 类型转换</a></li><li class="chapter-item expanded "><a href="js_if.html"><strong aria-hidden="true">3.6.</strong> if语句</a></li><li class="chapter-item expanded "><a href="js_switch.html"><strong aria-hidden="true">3.7.</strong> switch语句</a></li><li class="chapter-item expanded "><a href="js_for.html"><strong aria-hidden="true">3.8.</strong> for语句</a></li><li class="chapter-item expanded "><a href="js_while.html"><strong aria-hidden="true">3.9.</strong> while语句</a></li><li class="chapter-item expanded "><a href="js_do_while.html"><strong aria-hidden="true">3.10.</strong> do-while语句</a></li><li class="chapter-item expanded "><a href="js_logic.html"><strong aria-hidden="true">3.11.</strong> 逻辑运算符</a></li><li class="chapter-item expanded "><a href="js_arrays.html"><strong aria-hidden="true">3.12.</strong> 数组</a></li><li class="chapter-item expanded "><a href="js_objects.html"><strong aria-hidden="true">3.13.</strong> 对象</a></li><li class="chapter-item expanded "><a href="js_json.html"><strong aria-hidden="true">3.14.</strong> Json</a></li><li class="chapter-item expanded "><a href="js_date_and_time.html"><strong aria-hidden="true">3.15.</strong> 日期与时间</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
