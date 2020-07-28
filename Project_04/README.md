## DOM 큰 그림 이해하기

1. DOM : Document Object Model
- HTML tag >> JavaSctipt Node 
- EventTarget >> Node >> Document, Element, Text
- 

DOM : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

DOM API : https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

HTML  
  ├─head─┬─title  
  |      ├─link  
  |      └─meta  
  |  
  └─body─┬─section─┬─h1──TextNode  
         |         ├─h3──TextNode  
         |         └─img  
         |  
         |  
         └─span──TextNode  
  
2. WINDOW

[ WINDOW ]  
  ├─────[ DOM ]───────[ document ... ]  
  |  
  ├─────[ BOM ]───────[ navigator, location, fetch, storage ... ]  
  |  
  └─────[ JavaScript ]───────[ Array, Map, Date ... ]  


## Node의 조상 EventTarget

- EventTarget <<  Node : Node는 EventTarget를 상속한다.
  - EventTarget.addEventListener()
  - EventTarget.removeEventListener()
  - EventTarget.dispatchEvent()

  Node : https://developer.mozilla.org/en-US/docs/Web/API/Node
  Event Target : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget


## 성능 보장 렌더링 순서
### DOM + CSS = CSSOM : CSS Object Model

CSSOM : https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

### DOM + CSSDOM => Render Tree

## 모르면 후회하는 레이어 데모 
### Critical Rendering Path

## 즐겨찾기 필수 사이트

## 성능 개선 증거

## DOM 조작하기
