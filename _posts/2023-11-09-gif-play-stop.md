---
title: gif 정지 버튼 만들기
excerpt: css로 애니메이션 만들기

categories:
  - Playground
tags:
  - [css, gif]

toc: true
toc_sticky: true
 
date: 2023-11-09
last_modified_at: 2023-11-09
---

<details markdown="1">
  <summary>참고한 사이트</summary>
<https://sshin4882.tistory.com/95>{:target="blank"}\\
<https://ezgif.com/gif-to-sprite>{:target="blank"}\\
<https://ezgif.com/loop-count>{:target="blank"}\\
<https://codepen.io/zjun/pen/dGPqzQ>{:target="blank"}\\
<https://emojipedia.org>{:target="blank"}\\
<https://velog.io/@dirn0568/Github-ReadMe-작성법표-뱃지-이미지-첨부-토글>{:target="blank"}
</details>



<style>
.step {
  height: 550px;
  background: var(--main-bg);
  position: relative;
}
.step .stepbox {
  width: 512px;
  height: 512px;
  background: url(/assets/img/1f47e-sprite-sheet.png);
  border-radius: 0;
  position: absolute;
  background-size: cover;

/*
ChatGPT 답변
이 CSS 코드는 요소를 수평 및 수직 중앙으로 정렬하는데 사용됩니다. 각 속성의 역할은 다음과 같습니다:

1. `left: 50%;` 및 `top: 50%;`: 요소의 왼쪽과 위를 각각 50%로 설정합니다. 이는 요소의 왼쪽 상단 모서리가 부모 요소의 왼쪽 상단에서 50%의 위치에 있는 것을 의미합니다.

2. `transform: translate(-50%, -50%);`: `translate` 함수는 요소를 현재 위치에서 이동시킵니다. 여기서 `-50%`는 요소의 가로와 세로 크기의 50% 만큼 이동한다는 것을 의미합니다. 따라서 이 부분은 요소를 수평 및 수직으로 정확히 가운데로 이동시키는 역할을 합니다.

이렇게 함으로써 `left: 50%;` 및 `top: 50%;`로 설정된 초기 위치에서 `transform` 속성을 사용하여 정확한 가운데 정렬이 이루어집니다. 이것은 주로 모달 창과 같이 동적으로 크기가 변하는 요소를 가운데 정렬하는 데 자주 사용됩니다.
*/
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* 여기서 3s는 3초이고 애니메이션의 시간(0%부터 100%까지)이다. 즉, 작을수록 빠르다. 45는 프레임 수이다. */
  animation: ani 3s steps(45, start) infinite;
}
.step .stepbox.start {
  animation-play-state: running;
}
.step .stepbox.stop {
  animation-play-state: paused;
}
@keyframes ani {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -23040px 0;
  }
}
.stepBtn {
  position: absolute;
  left: 15px;
  top: 20px;
}
.stepBtn button {
  background: #e16162;
  color: var(--main-bg);
  font-weight: bold;
  padding: 0 10px;
  margin: 3px;
  border-radius: 3px;
}
</style>

---

<div class="timing step">
  <div class="stepbox"></div>
  <span class="stepBtn">
    <button class="stepBtnStart">Start</button>
    <button class="stepBtnStop">Stop</button>
  </span>
</div>

---
[이미지 출처](https://emojipedia.org/telegram/telemoji-march-2023/alien-monster){:target="blank"}
<details>
	<summary>소스코드 접기/펼치기</summary>
<hr>
  	<div markdown="1">
# CSS
{: data-toc-skip='' .mermaid }
```css
.step {
  height: 550px;
  background: var(--main-bg);
  position: relative;
}
.step .stepbox {
  width: 512px;
  height: 512px;
  background: url(/assets/img/1f47e-sprite-sheet.png);
  border-radius: 0;
  position: absolute;
  background-size: cover;

/*
ChatGPT 답변
이 CSS 코드는 요소를 수평 및 수직 중앙으로 정렬하는데 사용됩니다. 각 속성의 역할은 다음과 같습니다:

1. `left: 50%;` 및 `top: 50%;`: 요소의 왼쪽과 위를 각각 50%로 설정합니다. 이는 요소의 왼쪽 상단 모서리가 부모 요소의 왼쪽 상단에서 50%의 위치에 있는 것을 의미합니다.

2. `transform: translate(-50%, -50%);`: `translate` 함수는 요소를 현재 위치에서 이동시킵니다. 여기서 `-50%`는 요소의 가로와 세로 크기의 50% 만큼 이동한다는 것을 의미합니다. 따라서 이 부분은 요소를 수평 및 수직으로 정확히 가운데로 이동시키는 역할을 합니다.

이렇게 함으로써 `left: 50%;` 및 `top: 50%;`로 설정된 초기 위치에서 `transform` 속성을 사용하여 정확한 가운데 정렬이 이루어집니다. 이것은 주로 모달 창과 같이 동적으로 크기가 변하는 요소를 가운데 정렬하는 데 자주 사용됩니다.
*/
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* 여기서 3s는 3초이고 애니메이션의 시간(0%부터 100%까지)이다. 즉, 작을수록 빠르다. 45는 프레임 수이다. */
  animation: ani 3s steps(45, start) infinite;
}
.step .stepbox.start {
  animation-play-state: running;
}
.step .stepbox.stop {
  animation-play-state: paused;
}
@keyframes ani {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -23040px 0;
  }
}
.stepBtn {
  position: absolute;
  left: 15px;
  top: 20px;
}
.stepBtn button {
  background: #e16162;
  color: var(--main-bg);
  font-weight: bold;
  padding: 0 10px;
  margin: 3px;
  border-radius: 3px;
}
```
# HTML
{: data-toc-skip='' .mermaid }
```html
<div class="timing step">
  <div class="stepbox"></div>
  <span class="stepBtn">
    <button class="stepBtnStart">Start</button>
    <button class="stepBtnStop">Stop</button>
  </span>
</div>
```
# Javascript
{: data-toc-skip='' .mermaid }
```javascript
document.addEventListener("DOMContentLoaded", function() {
  var startBtn = document.querySelector(".stepBtnStart");
  var stopBtn = document.querySelector(".stepBtnStop");
  var stepbox = document.querySelector(".stepbox");

  startBtn.addEventListener("click", function(e) {
    e.preventDefault();
    stepbox.classList.remove("stop");
    stepbox.classList.add("start");
  });

  stopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    stepbox.classList.remove("start");
    stepbox.classList.add("stop");
  });
});
```
</div>
<hr style="bor">
</details>



<script>
document.addEventListener("DOMContentLoaded", function() {
  var startBtn = document.querySelector(".stepBtnStart");
  var stopBtn = document.querySelector(".stepBtnStop");
  var stepbox = document.querySelector(".stepbox");

  startBtn.addEventListener("click", function(e) {
    e.preventDefault();
    stepbox.classList.remove("stop");
    stepbox.classList.add("start");
  });

  stopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    stepbox.classList.remove("start");
    stepbox.classList.add("stop");
  });
});
</script>