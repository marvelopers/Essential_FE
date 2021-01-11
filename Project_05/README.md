## DOM 큰 그림 이해하기

1. DOM : Document Object Model

- HTML tag >> JavaSctipt Node
- EventTarget >> Node >> Document, Element, Text

DOM : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

DOM API : https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

```
HTML
  ├─head─┬─title
  │      ├─link
  │      └─meta
  │
  └─body─┬─section─┬─h1──TextNode
         │         ├─h3──TextNode
         │         └─img
         │
         │
         └─span──TextNode
```

2. WINDOW

```
[ WINDOW ]
  ├─────[ DOM ]───────[ document ... ]
  │
  ├─────[ BOM ]───────[ navigator, location, fetch, storage ... ]
  │
  └─────[ JavaScript ]───────[ Array, Map, Date ... ]
```

## Node의 조상 EventTarget

- EventTarget << Node : Node는 EventTarget를 상속한다.

  - EventTarget.addEventListener()
  - EventTarget.removeEventListener()
  - EventTarget.dispatchEvent()

  Node : https://developer.mozilla.org/en-US/docs/Web/API/Node
  Event Target : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

## CSSOM

DOM + CSS = CSSOM : CSS Object Model

CSSOM : https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

### DOM + CSSDOM => Render Tree

```
opacity : 0; //render tree 포함
visibility : hidden ; //render tree 포함
display : none; // render tree 포함 X
```

[CSS_MODEL](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

## 모르면 후회하는 레이어 데모

## 성능 보장 렌더링 순서 : Critical Rendering Path

```
requests/reaponse => loading => scripting => rendering => layout => pointing

───────────────construction────────────── ────────────Operation───────────

        DOM / CSSCOM / RenderTree           layout / paint / composition
```

> paint : 이미지를 비트맵 데이터로 변환 / Z-index를 통해 레이어 그룹핑

- css wil-change : 속성 이렇게 변경될지도 몰라

- js나 CSS로 DOM 요소를 조작할 때? composition 만 이루어지는 경우가 BEST >> paint SOSO >> layout WORST!

## 모르면 후회하는 레이어 데모

- will change

## 즐겨찾기 필수 사이트

https://csstriggers.com/

## 성능 개선 증거

## DOM 조작하기
