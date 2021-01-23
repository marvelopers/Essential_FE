const vertivcal = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  //mouse move 애니메이션 성능 최적화
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertivcal.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.innerHTML = `${x}px, ${y}px`;

  })
})

    //mouse move
    // vertivcal.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.innerHTML = `${x}px, ${y}px`;