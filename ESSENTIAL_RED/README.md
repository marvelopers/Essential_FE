1. 정확한 용어와 명확한 근거

## Browser가 웹 페이지 표현하는 방법

1. 웹 페이지 로드 과정 (18:00)

```
[]네트워크 레벨
Prompt for unload =>[ Redirect => AppCache => DNS => TCP => Request&Response ]=> Processing => Load
```

- Processing : parsing & rendering

2. 브라우저 주요 구성 요소

```
  사용자 인터페이스 => 브라우저 엔진-(데이터 저장소) => 렌더링 엔진 => 통신/ JS해석기 / UI 백엔드
```

`브라우저는 어떻게 동작하는가` 모던 웹 브라우저 들여다보기

3. 렌더링 엔진의 동작 과정

- HTML, CSS, JS : 문서를 읽어 브라우저가 문법을 분석, 코드를 이해한다. <script>태그를 만나면 JS 해석할 때까지 파싱을 멈춘다.
- DOM, CSSOM 변환 : 브라우저에서 사용할 수 있는 구조로 변환
- RENDER TREE 구축
- RENDER TREE 배치 : 각 요소의 크기와 위치를 계산한다. (레이어 30개를 넘지 않는 것이 좋다)
- RENDER TREE 그리기 : Paint& Rasterize => Compositing

## HTML

1. HTML ㅈㅁㄴ ㅔ갸ㅡㅁ갸ㅣㅛ ㅇㄷ
