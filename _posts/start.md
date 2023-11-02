---
title:  # 타이틀을 작성한다. 예시) "[Github 블로그] 깃허브(Github) 블로그를 생성해 보자." 
excerpt: # 포스트 목록에서 보여지는 글이다. 예시) "Jekyll로 깃허브 블로그를 만들어 보았다."

categories:
  - # 카테고리를 작성한다. 예시) Blog
tags:
  - # 태그를 작성한다. 예시) [Blog, jekyll, Github, Git, minimal-mistake]

toc: # Table of Contents. 포스트의 헤더들만 보여주는 목차로 true이면 목차가 보인다.
toc_sticky: # true로 해주면 목차가 스크롤을 따라 움직이게 된다! 스크롤을 내리면 목차도 따라 내려오게 됨. 이 밖에도 이 포스트의 toc_icon, toc_label 도 설정할 수 있다.

date: # 작성날짜 yyyy-mm-dd 형식
last_modified_at: # 수정날짜 yyyy-mm-dd 형식
---
---
[[Github 블로그] 블로그 포스팅하는 방법](https://ansohxxn.github.io/blog/posting)과 
> 위 블로그의 [깃허브 저장소](https://github.com/ansohxxn/ansohxxn.github.io)

[GitHub 블로그 시작하기](https://honbabzone.com/jekyll/start-gitHubBlog)를 참고하였습니다.
> 위 블로그의 [깃허브 저장소](https://github.com/7271kim/7271kim.github.com)
---

## 1. Markdown 을 지원하는 에디터 실행

**ex)** `Visual Studio Code`

<br>

## 2. _posts 폴더 생성

`깃허브아이디.github.io` 이름의 로컬 폴더 위치에 **_posts** 폴더가 이미 있다면 냅두고 없다면 **_posts** 라는 이름의 폴더를 생성해 준다. 

    모든 포스트 파일은 이 _posts 내에 위치하여야 한다.

<br>

## 3. yyyy-mm-dd-title.md 형식의 파일 생성

포스트 파일의 확장자는 `md`이어야 한다. **yyyy-mm-dd** 형식의 날짜와 함께 **-포스트 제목**을 붙여 준다. 포스트 제목은 영어로 쓸 것을 추천한다. 

*ex) 2020-05-23-my-first-post.md*

<br>

## 4. 머릿말(Front-Matter)을 게시글 상단에 작성

이제 md 파일에 포스트를 작성해보자. 내용을 작성하기 전에 이 포스트의 정보를 머릿말로 적어주어야 한다.

우선 위 아래에 `---` 를 써서 머릿말 쓰는 영역을 구분해주어야 한다.
<br>

- **title** : 포스트의 제목을 큰 따옴표로 적어 준다. 이 title을 적어주지 않으면 .md 파일 이름으로 적어주었던 title 부분이 제목으로 업로드 된다.

- **excerpt** : 포스트 목록에서 보여지는 블로그 소개 글로 들어간다.

- **categories** : 이 포스트의 카테고리는 `Blog`로 정했다.

- **tags** : 태그와 카테고리의 차이점은 카테고리는 sub url이 붙는 페이지가 있지만 태그는 없다는 것이다. 카테고리 보다 좀 더 세부적.
  - [] 대괄호 안에서 , 콤마로 구분해주어 여러개의 태그를 포스트에 지정할 수 있다.

- **toc** : Table of Contents. 포스트의 헤더들만 보여주는 목차를 사용할 것인지의 여부. ture 로 해주면 포스트의 목차가 보이게 된다.

- **toc_sticky** : true로 해주면 목차가 스크롤을 따라 움직이게 된다! 스크롤을 내리면 목차도 따라 내려오게 됨.
  - 이 밖에도 이 포스트의 toc_icon, toc_label 도 설정할 수 있다.

- **date** : 글을 처음 작성한 날짜. yyyy-mm-dd 형식으로 작성.

- **last_modified_at** : 이 글을 수정한 날짜.

<br>

이 밖에도 `layout`, `permalink`, `published`, `author_profile` 등등 머릿말에 쓰이는 여러 변수들이 있다.\
**그리고 내가 원하는 변수를 머릿말에 지정해서 사용할 수도 있다.**


머릿말에 쓰인 변수는 `page` Liquid 변수로 사용될 수 있다. 예를 들어 머릿말에 적힌 categories 변수 값은 "Blog"이므로 Liquid 언어로 "{% raw %}{{page.categories}}{% endraw %}" 를 본문 내에 쓰면 "Blog"값이 출력된다. [Liquid 언어 문서](https://shopify.github.io/liquid/)

<br>

## 5. 포스트 내용을 Markdown 문법으로 작성

머릿말이 `---`로 끝난 이후부터는 포스트 본문 영역이다.
jekyll은 `HTML`과 `Markdown`을 지원하는데 마크다운이 HTML보다 더 간략하고 편한 문법이다. 따라서 마크다운 문법으로 포스트를 작성해준다. 마크다운 문법에 대해서는 추후 포스팅 할 것! 

<br>

## 6. 마크다운으로 쓴 포스트 내용을 미리 보기 

마크다운 문법으로 포스트 본문을 작성하기 때문에 쓰는 것과 보이는 것은 많이 다르다. Visual Studio Code 내에서 설치하여 사용할 수 있는 `Preview` 기능과 `로컬 서버`로 내가 작성한 마크다운 글이 어떻게 보여지는지 확인해보며 포스팅 하자.  

### Markdown Preview Enhanced

Visual Studio code `확장(extension)`에서 Markdown Preview Enhanced를 설치하여 마크다운 문법으로 글을 작성하면서 동시에 웹에서 어떻게 보여질지 확인할 수 있다.


### 로컬 서버에서 블로그에 적용될 모습 확인
#### ChatGPT 답변 내용
>로컬 환경에서 Jekyll을 실행하여 GitHub Pages와 동일한 결과를 얻으려면 다음 단계를 따를 수 있습니다:
>
>1. Jekyll 설치: 먼저 컴퓨터에 Jekyll을 설치해야 합니다. Jekyll을 설치하려면 Ruby가 필요하며 Ruby가 설치되어 있어야 합니다. Ruby를 설치한 후, 다음 명령을 사용하여 Jekyll을 설치할 수 있습니다:
>>```bash
>>gem install jekyll bundler
>>```
>2. 로컬 Jekyll 사이트 생성: Jekyll로 작성한 사이트의 복제본을 로컬 환경에 생성합니다. GitHub Pages 리포지토리를 클론한 후 해당 디렉터리로 이동하여 다음 명령을 실행합니다:
>>```bash
>>bundle install
>>```
>>이 명령은 필요한 Jekyll 플러그인과 종속성을 설치합니다.
>3. 로컬에서 Jekyll 실행: 다음 명령을 사용하여 로컬에서 Jekyll을 실행합니다:
>>```bash
>>bundle exec jekyll serve
>>```
>이렇게 하면 로컬에서 Jekyll 서버가 실행되며, 웹 브라우저에서 <http://localhost:4000> 또는 <http://127.0.0.1:4000>에 접속하여 로컬로 생성된 GitHub Pages와 동일한 내용을 확인할 수 있습니다.

**+** 참고사항 [bundle install and bundle update](https://medium.com/@pk60905/bundle-install-and-bundle-update-80f3d6f52214)

<br>

## 7. 작성한 포스트 파일을 git push 하여 Github Pages 서버에 업로드

깃허브계정아이디.github.io 폴더 내의 현재 변동 사항을 git push 해주어 Github Pages 원격 서버에 올려주어야 한다. 그럼 이제 내 블로그 페이지에 포스트가 올라온 것을 확인할 수 있을 것이다. 

<br>

## 8. 관리자 페이지로 게시글 작성
**Gemfile**을 열고 아래 코드를 추가한다.
```
gem 'jekyll-admin', group: :jekyll_plugins
```

추가하고 나서, bundle install을 하고, 서버를 시작해준다.

```bash
bundle install
```
```bash
bundle exec jekyll serve
```
이제 <http://localhost:4000/admin> 또는 <http://127.0.0.1:4000/admin>에 접속하여 게시글을 작성할 수 있다.

<br>

## 참고 사항
### 지킬(Jekyll)로 깃허브페이지 구성시 Markdown, YAML, Liquid 언어가 사용된다.
**Markdown**과 **Liquid**는 게시글의 페이지에서 사용되고, **YAML**은 `_config.yml` 같은 구성 파일과\
각 게시글 페이지(`~~~.md`) 상단의 `---` , `---` 사이에서 **머릿말**로 변수 등을 지정할 때 사용된다.

<br>

**참고할 만한 사이트**
> [Jekyll-Docs-컨텐츠-데이터 파일]({{"https://jekyllrb-ko.github.io/docs/datafiles"}}){:target="_blank"}\
> [YAML-📚-yaml-개념-문법-이해하기-💯-총정리]({{"https://inpa.tistory.com/entry/YAML-%F0%9F%93%9A-yaml-%EA%B0%9C%EB%85%90-%EB%AC%B8%EB%B2%95-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC"}}){:target="_blank"}\
> [Liquid 문법 개념과 사용법]({{"https://goodgid.github.io/What-is-Liquid-Grammer"}}){:target="_blank"}\
> [liquid-basics-introduction]({{"https://shopify.github.io/liquid/basics/introduction"}}){:target="_blank"}

<br>

### Markdown문법 . &nbsp; ` ``` ` &nbsp; ( + 탭 두번 or 스페이스 네번 )
`` ` `` **:** 하나씩 글자 양쪽 끝에 사용하면, \`abc\` => `abc`\
`` ``` `` **:** 세개씩 글 위아래에 적용하면 아래와 같이 사용 가능하다.
<br>
<br>
\```***언어명***

이 사이에 글 작성하면 코드 입력하기 좋음.\
***언어명 ( cpp, c, python, java 등 )*** 을 입력하지 않으면 글 작성 박스 생성된다.

\```

# 예시 ( 언어명 ❌ )
>```
>여기에 작성하면
>    이렇게 보인다.
>```
><br>
>
>>위의 코드는 아래와 같이 작성되었다.\
>>\
>>\```\
>>여기에 작성하면\
>>&nbsp;&nbsp;&nbsp;&nbsp;이렇게 보인다.\
>>\```

**+ 예시 ( 탭 두번 or 스페이스 네번 )**

    이렇게
     도 사용가능
위 글은 각 줄의 앞에 탭 두번( or 스페이스 네번 )을 사용했다.

<br>

# 예시 ( 언어명 ⭕ ) 
>### ***출처: [C++ Chapter 6.1 : 배열 기초](https://ansohxxn.github.io/cpp/chapter6-1)***
>## 배열은 동일한 크기의 연속된 메모리 공간 
>
>```cpp
>int a = 1;
>int b = 2;
>int c = 3;
>
>int num[3] = {1, 2, 3}; // num[0] -> 1, num[1] ->2, num[2] -> 3
>```
>
>- 변수 하나 하나에 대입하는 것 보다는 `num`이라는 배열로 한번에 1, 2, 3 값에 접근하는게 더 효율적
>- int를 담을 수 있는 4byte 크기의 메모리 공간이 연속으로 3개 붙어있는 공간을 빌려오는 것.(총 12byte)
><br>
>
>>위의 코드는 아래와 같이 작성되었다.\
>>\
>>\```cpp\
>>int a = 1;\
>>int b = 2;\
>>int c = 3;\
>>\
>>int num[3] = {1, 2, 3}; // num[0] -> 1, num[1] ->2, num[2] -> 3\
>>\```\
>>\
>>\- 변수 하나 하나에 대입하는 것 보다는 \`num\`이라는 배열로 한번에 1, 2, 3 값에 접근하는게 더 효율적\
>>\- int를 담을 수 있는 4byte 크기의 메모리 공간이 연속으로 3개 붙어있는 공간을 빌려오는 것.(총 12byte)

<br>

***
    🌜 개인 공부 기록용 블로그입니다. 오류나 틀린 부분이 있을 경우 
    언제든지 댓글 혹은 메일로 지적해주시면 감사하겠습니다! 😄

[맨 위로 이동하기](#){: .btn .btn--primary }{: .align-right}
