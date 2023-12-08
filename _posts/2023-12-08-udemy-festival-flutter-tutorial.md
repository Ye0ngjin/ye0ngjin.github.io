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



https://gist.github.com/Ye0ngjin/d4970f7f8400978068801f7d843a550f

https://dartpad.dev/?id=d4970f7f8400978068801f7d843a550f

https://github.com/joeyhwangGit/exchange_rate_calculator

https://joeyhwang.tistory.com/20

https://stackoverflow.com/questions/72851548/permission-denied-to-github-actionsbot

https://github.com/subosito/flutter-action
<hr>{: style="margin-top: 2.5rem;"}
## 강의 보며 따라 만든 프로필 앱
{: style="margin-top: 0;"}
<br>
<iframe class="mermaid" src="https://ye0ngjin.github.io/udemy-festival-flutter-tutorial/" title="프로필 웹 앱" style="margin-left: 2rem; box-shadow: var(--language-border-color) 0 0 0 0.4rem; border-radius: 0.625rem; width: 80vw; height: 140vw; max-height: 700px; max-width: 400px"></iframe>
<hr>




<div id="app">

<div class="m-auto" style="min-width: 375px; width: 40vw; max-width: 70%;">
    <div class="relative">
        <div class="max-h-[700px] overflow-hidden">
            <div class="sandbox"><img class="no-popup" src="https://eventusstorage.blob.core.windows.net/evs/Image/udemy/73376/ProjectInfo/b4e2ea94b7ac4d1bb60230127493be44.jpg" alt="유데미페스티벌"></div>
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
            // 변수 변경에 따른 로직 추가
            
            updatePageContent();

            console.log("isDetailMore is now:", isDetailMore);
        }

        function updatePageContent() {
            // "행사 소개" 뒤에 "접기" 또는 "더보기" 갱신
            var buttonText = isDetailMore ? '접기' : '더보기';
            document.querySelector('#app button span').textContent = "행사 소개 "+ buttonText;

            // "접기" 또는 "더보기" 아이콘 회전 갱신
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

        // // 페이지 로드 후 이벤트 핸들러 연결
        document.querySelector("#app button").addEventListener("click", function() {
            toggleDetail();
        });
    });
</script>
