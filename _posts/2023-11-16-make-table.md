---
title: 마크다운으로 표 만들기
excerpt: md table

categories:
  - Playground
tags:
  - [markdown, blog]

toc: true
toc_sticky: true
 
date: 2023-11-16
last_modified_at: 2023-11-16
---

## 체스판
{: data-toc-skip='' .mermaid }

|--|--|--|--|--|--|--|--|
|♜| |♝|♛|♚|♝|♞|♜|
| |♟|♟|♟| |♟|♟|♟|
|♟| |♞| | | | | |
| |♗| | |♟| | | |
| | | | |♙| | | |
| | | | | |♘| | |
|♙|♙|♙|♙| |♙|♙|♙|
|♖|♘|♗|♕|♔| | |♖|
{:.table-with-border .table-width-unset .m-auto}

<br>
출처: <https://github.com/jeffreytse/jekyll-spaceship>{:target="blank"}
<hr>

## 방통대 과제
{: data-toc-skip='' .mermaid }

<br>

1\. 다음 그림을 보고 유효주소와 AC에 적재되는 값을 넣고, 어떻게 계산이 되는지 상세히 설명하시오.


>|&emsp;PC=550{:.md4}	|
>|&emsp;R1=600{:.md4}	|
>|&emsp;AC{:.md4}		|
>|&ensp;연산코드:<br>AC에 적재하라{:.md4}|
>{:.table-width-unset .position-absolute .top-50 .start-0 .translate-middle-y .ms-4 .table-with-outline-border .border-row-bottom-2 .noborder-row-3}
>
>
>
>| |<center>기억장치</center>||
>|:-:|:-:|:-:|
>|550		|연산코드	|주소지정방식	|
>|551		|ADRS, NBR=700		||
>|552		|다음 명령어			||
>| ...	|		...		||
>|600		|700					||
>|	...	|		...		||
>|700		|900					||
>|	...	|		...		||
>|900		|950					||
>|	...	|		...		||
>|1252	|1300				||
>|	...	|		...		||
>|1300	|1400				||
>{:.table-with-border .table-width-unset .position-absolute .top-50 .start-50 .translate-middle .inner_box .noborder-col-0}
{: .position-relative .clearfix .outer_box .blockquote-unset}

|<center>주소지정방식</center>|<center>유효주소</center>|<center>AC 내용</center>|
| ------------ | ----------------------------- | ------------------------ |
| 직접주소       | 700(ADRS)                     | 메모리 주소 700에 있는 값 900  |
| 즉치주소       | 551                           | 700(NBR)                  |
| 간접주소       | 900(M[ADRS])                  | 메모리 주소 900에 있는 값 950  |
| 인덱스주소      | ADRS + R1 = 700 + 600 = 1300  | 메모리 주소 1300에 있는 값 1400|
| 상대주소       | ADRS + PC = 700 + 552 = 1252  | 메모리 주소 1252에 있는 값 1300|
| 레지스터간접    | 600(R1)                       | 메모리 주소 600에 있는 값 700  |
| 레지스터주소    | 없음                           | 600(R1)                   |
{:.table-with-border .table-width-unset}

2\. 교재의 제어단어 내역표를 보고 제어단어를 완성하고, 풀이에 대해 상세히 설명하시오.

|       :마이크로연산:      |                                     :2진 제어단어:                                                   |||||
|^^                     | <center>A</center> | <center>B</center> | <center>D</center> | <center>F</center> | <center>H</center> |
| --------------------- | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: |
| R4 <- shr(R5+R6)      | 101<br>(R5)        | 110<br>(R6)        | 100<br>(R4)        | 0010<br>(F = A + B)| 010<br>(SHR)       |
| R7 <- R7+1            | 111<br>(R7)        | 000<br>(없음)       | 111<br>(R7)        | 0001<br>(F = A + 1)| 000<br>(시프트없음)   |
| Output <- R3          | 011<br>(R3)        | 000<br>(없음)       | 000<br>(NONE)      | 0000<br>(F = A)    | 000<br>(시프트없음)   |
| R4 <- rol R4          | 100<br>(R4)        | 000<br>(없음)       | 100<br>(R4)        | 0000<br>(F = A)    | 110<br>(ROL)       |
| R5 <- 0               | 000<br>(없음)       | 000<br>(없음)       | 101<br>(R5)        | 0000<br>(없음)      | 011<br>(bus = 0)   |
{:.table-with-border .table-width-unset}

참고: <https://booolean.tistory.com/554>{:target="blank"}
<br>
<br>

```

|--|--|--|--|--|--|--|--|
|♜| |♝|♛|♚|♝|♞|♜|
| |♟|♟|♟| |♟|♟|♟|
|♟| |♞| | | | | |
| |♗| | |♟| | | |
| | | | |♙| | | |
| | | | | |♘| | |
|♙|♙|♙|♙| |♙|♙|♙|
|♖|♘|♗|♕|♔| | |♖|


|<center>주소지정방식</center>|<center>유효주소</center>|<center>AC 내용</center>|
| ------------ | ----------------------------- | ------------------------ |
| 직접주소       | 700(ADRS)                     | 메모리 주소 700에 있는 값 900  |
| 즉치주소       | 551                           | 700(NBR)                  |
| 간접주소       | 900(M[ADRS])                  | 메모리 주소 900에 있는 값 950  |
| 인덱스주소      | ADRS + R1 = 700 + 600 = 1300  | 메모리 주소 1300에 있는 값 1400|
| 상대주소       | ADRS + PC = 700 + 552 = 1252  | 메모리 주소 1252에 있는 값 1300|
| 레지스터간접    | 600(R1)                       | 메모리 주소 600에 있는 값 700  |
| 레지스터주소    | 없음                           | 600(R1)                   |


|       :마이크로연산:      |                                     :2진 제어단어:                                                   |||||
|^^                     | <center>A</center> | <center>B</center> | <center>D</center> | <center>F</center> | <center>H</center> |
| --------------------- | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: |
| R4 <- shr(R5+R6)      | 101<br>(R5)        | 110<br>(R6)        | 100<br>(R4)        | 0010<br>(F = A + B)| 010<br>(SHR)       |
| R7 <- R7+1            | 111<br>(R7)        | 000<br>(없음)       | 111<br>(R7)        | 0001<br>(F = A + 1)| 000<br>(시프트없음)   |
| Output <- R3          | 011<br>(R3)        | 000<br>(없음)       | 000<br>(NONE)      | 0000<br>(F = A)    | 000<br>(시프트없음)   |
| R4 <- rol R4          | 100<br>(R4)        | 000<br>(없음)       | 100<br>(R4)        | 0000<br>(F = A)    | 110<br>(ROL)       |
| R5 <- 0               | 000<br>(없음)       | 000<br>(없음)       | 101<br>(R5)        | 0000<br>(없음)      | 011<br>(bus = 0)   |

```