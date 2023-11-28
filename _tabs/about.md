---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<!-- > Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip } -->

<hr>
## Ye0ngjin의 깃허브 블로그
{: data-toc-skip=''}
<!-- <span>👾</span>{:style="font-size: 5em"} -->

<br>
개발이 즐거운 사람\
조금씩 발전 중
<br>
<br>

![alien](/assets/img/1f47e.png){: w="300" .no-popup .light .shadow .rounded-20P}
![dance](/assets/img/1f47e.webp){: w="300" .no-popup .dark .shadow .rounded-20P}

<script>

document.addEventListener('DOMContentLoaded', function () {
  /* no-popup 클래스를 가진 요소에 대해 처리 */
  var noPopupElements = document.querySelectorAll('.no-popup');
  noPopupElements.forEach(function (element) {
    /* popup 클래스를 가지고 있는 경우에만 처리 */
    if (element.classList.contains('popup')) {
      /* popup 클래스를 제거 */
      element.classList.remove('popup');
    }
    /* shimmer 클래스를 가지고 있는 경우에만 처리 */
    if (element.classList.contains('shimmer')) {
      /* shimmer 클래스를 제거 */
      element.classList.remove('shimmer');
    }
    /* href 속성이 있는 경우 해당 속성을 삭제 */
    if (element.getAttribute('href')) {
      element.removeAttribute('href');
    }

    /* 해당 태그를 span 태그로 변경 */
    var spanElement = document.createElement('span');
    spanElement.innerHTML = element.innerHTML;

    /* 기존 태그가 가진 클래스를 모두 span 태그에 추가 */
    var classes = element.classList;
    for (var i = 0; i < classes.length; i++) {
      spanElement.classList.add(classes[i]);
    }

    element.parentNode.replaceChild(spanElement, element);
  });
});

</script>