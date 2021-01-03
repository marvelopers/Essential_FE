## load

1. 브라우저에서 html 파일을 먼저 읽는다.
2. 이미지나 폰트 등 필요한 리소스 다운한다.
3. 자바스크립트 파일도 다운 받는다.

#### DOMContentLoaded

document, html만 완료가 되면 호출된다.

```jsx
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});
```

#### load

resource도 완료가 되면 호출된다.

```jsx
window.addEventListener("load", () => {
  console.log("load");
});
```

#### beforeunload

html이 unload되면 호출된다.

```jsx
window.addEventListener("beforeunload", () => {
  console.log("beforeunload");
});
```

#### unload

resource도 unload되면 호출된다.

```jsx
window.addEventListener("unload", () => {
  console.log("unload");
});
```
