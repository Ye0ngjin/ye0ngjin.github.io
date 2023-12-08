---
title: 플러터로 간단한 웹앱 만들기
categories:
- Playground
tags:
- flutter
- dart
- webapp
---

<style>
    .relative {
        position: relative;
    }

    .overflow-hidden {
        overflow: hidden;
    }
    .max-h-\[700px\] {
        max-height: 700px;
    }

    .h-1\/5 {
        height: 20%;
    }

    .absolute {
        position: absolute;
    }

    .bottom-0 {
        bottom: 0;
    }

    .w-full {
        width: 100%;
    }
    
    .w-half {
        width: 50%;
    }

    .bg-gradient-to-t {
        background: linear-gradient(to top, var(--main-bg), transparent);
    }

    .flex {
        display: flex;
    }

    .items-end {
        align-items: flex-end;
    }

    .sm\:items-center {
        align-items: center;
    }

    .justify-center {
        justify-content: center;
    }

    .mt-8 {
        margin-top: 2rem;
    }

    .sm\:mt-12 {
        margin-top: 3rem;
    }

    .w-40 {
        width: 10rem;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }
    .shadow-xs {
        --tw-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
        --tw-shadow-colored: 0 1px 1px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    }

    .leading-none {
        line-height: 1;
    }
    .font-normal {
        font-weight: 400;
    }
    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255/var(--tw-bg-opacity));
    }
    .border {
        border-width: 1px;
    }
    .rounded-md {
        border-radius: 0.375rem;
    }
    .justify-center {
        justify-content: center;
    }
    .items-center {
        align-items: center;
    }
    .w-full {
        width: 100%;
    }
    .h-12 {
        height: 3rem;
    }
    .flex {
        display: flex;
    }
    .justify-center {
        justify-content: center;
    }

    .items-end {
        align-items: flex-end;
    }
    .flex {
        display: flex;
    }
    .mt-8 {
        margin-top: 2rem;
    }

    .w-4 {
        width: 1rem;
    }
    .h-4 {
        height: 1rem;
    }
    .ml-1 {
        margin-left: 0.25rem;
    }
    #app svg {
        display: block;
        vertical-align: middle;
    }
</style>

<details markdown="1">
  <summary>참고한 사이트 및 결과물 링크</summary>
<https://gist.github.com/Ye0ngjin/d4970f7f8400978068801f7d843a550f>{:target="blank"}\\
<https://dartpad.dev/?id=d4970f7f8400978068801f7d843a550f>{:target="blank"}\\
<https://github.com/joeyhwangGit/exchange_rate_calculator>{:target="blank"}\\
<https://joeyhwang.tistory.com/20>{:target="blank"}\\
<https://stackoverflow.com/questions/72851548/permission-denied-to-github-actionsbot>{:target="blank"}\\
<https://github.com/subosito/flutter-action>{:target="blank"}
</details>

<hr>{: style="margin-top: 2.5rem;"}
## 강의 보며 따라 만든 프로필 앱
{: style="margin-top: 0;"}
<br>
<iframe class="mermaid" src="https://ye0ngjin.github.io/udemy-festival-flutter-tutorial/" title="프로필 웹 앱" style="margin-left: 2rem; box-shadow: var(--language-border-color) 0 0 0 0.4rem; border-radius: 0.625rem; width: 80vw; height: 140vw; max-height: 700px; max-width: 400px"></iframe>
<hr>

## 유데미 코딩 페스티벌
즐겨보는 유튜브 채널인 조코딩 채널에서 **유데미 코딩 페스티벌**에 대해서 알게되었고, 실습을 해볼 수 있는 **라이브 실습 강의**도 많이 포함되어 있어서 프리패스(3만원)를 신청했었다.\
7개의 라이브 실습 강의가 준비되어 있고, 지금까지 3개를 들었는데, 정말 3만원이라는 돈이 아깝지가 않았다.\
물론 유튜브에 무료 강의들이 있고, 인프런이나 유데미에도 저렴한 강의나 무료 강의들이 있다.\
하지만 4시간 동안 미니프로젝트를 완성시킬 수 있다는 것과 실시간 채팅으로 물어보면서 배울 수 있다는 것이 큰 장점으로 느껴진다.\
그리고 이런 짧은 실습을 통해서 해당 분야의 기초적인 것들을 습득할 수 있고, 관심이 있는 분야에 첫 발을 내딛는 경험을 할 수 있었다.\
<br>
다만 아쉬운 점이 있다면, 스트리밍 서비스 중 세션이 종료 되었다고 뜬다거나, 동시접속 되었다고 뜨는 경우가 있어서 가끔 새로고침을 해줘야하는 번거로움이 있다는 것이다.\
그래도 1월 중에 다시보기 유데미 VOD 강의를 제공해주기 때문에 아쉬운 점이 보완될 것이라고 생각한다.\
<br>
지금까지 빵형의 개발도상국, 임효성, 홍드로이드의 실습 강의를 들었는데,\
빵형의 개발도상국을 제외하고는 처음 들어본 강사들이어서, 사실 조금 걱정은 되었다.\
하지만 실습 강의 모두 훌륭했다.👍🏻 그래서 남은 라이브 실습 강의들도 기대가 된다.

<hr>
유데미 코딩 페스티벌 정보
<div id="app">

<div class="m-auto" style="min-width: 375px; width: 40vw; max-width: 70%;">
    <div class="relative">
        <div class="max-h-[700px] overflow-hidden">
            <div class="sandbox">
              <img class="no-popup" src="/assets/img/udemyfestival.jpg" alt="유데미코딩페스티벌">
            </div>
        </div>
        <div class="h-1/5 absolute bottom-0 w-full bg-gradient-to-t from-white"></div>
    </div>
    <div class="flex items-end sm:items-center justify-center mt-8 sm:mt-12">
        <div class="w-half sm:w-40">
            <button class="flex justify-center items-center px-4 w-full rounded-md border bg-white font-normal shadow-xs h-12 leading-none btn btn-outline-secondary" style="color: var(--heading-color); background-color: var(--bs-btn-bg)!important; padding-right: 0.5rem!important; padding-left: 0.5rem!important; border-color: var(--blockquote-text-color)!important;">
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1" style="">
                    <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</div>
	
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var isDetailMore = false;
        updatePageContent()

        function toggleDetail() {
            isDetailMore = !isDetailMore;
            
            updatePageContent();

            console.log("isDetailMore is now:", isDetailMore);
        }

        function updatePageContent() {
            /* "행사 소개" 뒤에 "접기" 또는 "더보기" 갱신 */
            var buttonText = isDetailMore ? '접기' : '더보기';
            document.querySelector('#app button span').textContent = "행사 소개 "+ buttonText;

            /* "접기" 또는 "더보기" 아이콘 회전 갱신 */
            var rotation = isDetailMore ? '180deg' : '0deg';
            document.querySelector('#app svg').style.transform = 'rotate(' + rotation + ')';

            if(isDetailMore){
                document.querySelector('#app .from-white').style = "margin-top: auto; display: none;";
            }else{
                document.querySelector('#app .from-white').style = "";
            }

            var imgContent = document.querySelector('#app .relative > :first-child');
            
            if(!isDetailMore){
                imgContent.classList.add('max-h-[700px]');
                imgContent.classList.add('overflow-hidden');
            }else{
                imgContent.classList.remove('max-h-[700px]');
                imgContent.classList.remove('overflow-hidden');
            }
        }

        /* 페이지 로드 후 이벤트 핸들러 연결 */
        document.querySelector("#app button").addEventListener("click", function() {
            toggleDetail();
        });
    });
</script>
