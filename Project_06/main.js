// 사용자 텍스트 인풋
// 엔터를 누르면 아이템을 등록한다.
// 삭제버튼

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 1. 사용자가 입력한 텍스트 받아옴
  const text = input.value;
  // 2. 새로운 아이템을 만든다. (텍스트+ 삭제아이콘)
  const item = createItem();
  // 3. items 컨테이너 안에 새로운 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 인풋을 초기화한다.
  input.value = '';
  input.focus();
}

function createItem() {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.innerHTML = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  })

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;


  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

}

addBtn.addEventListener('click', () => {
  onAdd();
})