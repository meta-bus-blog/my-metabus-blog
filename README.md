# Youngble Metabus Blog

## description

- 나만의 메타버스 공간을 활용하는 블로그로 개인게시물, 미니게임, 채팅 등 다양한 컨텐츠 도입 및 개인 운영 서비스
- 홀로 운영하며 자유롭게 여러 Tech stack을 적용해보자는 취지와 나만의 게임 제작 및 1인개발 목표
- 성능최적화를 위한 여러가지 테스트

## architectures
정의: 폴더의 구조, 컴포넌트 구조를 비즈니스 로직과 단순 컴포넌트를 어떤 패턴을 사용할지 정의.
해당 프로젝트의 특성상(여러가지 시도하려는 목적) 여러가지 패턴을 써볼려고함.
- Custom Hook Pattern 
- Presentation / Container Component Pattern
- 다른 패턴 이해후 추후 추가(State Reducer Pattern, Props Getters Pattern 등)

## Contents/Function

- 나의 경력 history 온보딩 페이지
- 블로그 게시물 페이지 (기존 tistory 글 이관) : 페이지네이션
- 프로젝트 구현/성과 기록 포스트잇 : 무한스크롤
- 채팅 페이지
- 미니게임 페이지
- 테스트 토스페이먼츠 결제 기능
- Todo 리스트 페이지 
- 화상/영상 스트리밍 페이지
- 로그인 JWT/소셜
- 구글 Ads 광고
- 자신의 캐릭터 : 360회전, 숨쉬기애니메이션 / 랜덤 뽑기 아이템 장착 



## as-is Tech Stack

- next.js
- typescript
- css-module
- scss

## to-be Tech Stack

(when I apply one of these stacks, I will move it up on 'as-is Tech Stack')

- react-query *MUST
- storybook for CDD (Component Driven Development) *MUST
- jest for TDD (Test Driven Development)
- Three.js
- canvas
- websocket/socket.io
- webrtc
- graphQL
- recoil / context API
- view transitions API (페이지 이동간 에니메이션)
## Optimization
- 컴포넌트 재사용
- 사용자경험 개선 List : Intersection Observer를 사용 전 후 

