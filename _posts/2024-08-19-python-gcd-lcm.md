---
title: 파이썬으로 최대공약수 최소공배수 구하는 법
categories:
- Python
tags:
- python
---

## 파이썬으로 최대공약수 최소공배수 구하는 법
파이썬에서 math 라이브러리를 import 해도 최대공약수(gcd)와 최소공배수(lcm)를 구하는 함수를 바로 사용 가능하지만, 직접 구현해보고 싶어서 여러 블로그를 토대로 만들어봤다.

```python
# 유클리드 호제법
# 2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b),
# a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
# https://devum.tistory.com/128

def gcd_(*nums):
  b = 0 # 0은 모든 수의 배수이므로, 모든 수를 약수로 가진다. 따라서 n과 0의 최대공약수는 n이다. https://maramarathon.tistory.com/54
  for a in nums:
    while b != 0 : # b가 0이 아닌 동안 반복
      a, b = b, a % b # a에 b를, b에 a와 b를 나눈 나머지를 교환하여 저장(스왑)
      # 참고로 코드를 짤 때 대소관계를 생각하지 않아도 된다. 왜냐하면 b가 a보다 크다면 첫번째 사이클에서 a와 b가 서로 바뀌기 때문이다.
    b = a
  return a

def lcm_(*nums):
  LCM = 1
  for num in nums:
    if num == 0:
      return 0
    GCD = gcd_(LCM, num) # GCD에 LCM과 num의 최대공약수를 저장
    LCM = LCM * num // GCD # LCM에 LCM과 num의 최소공배수를 저장
  return LCM

# 참고: https://kimhaksung.tistory.com/entry/python3LCM
```
