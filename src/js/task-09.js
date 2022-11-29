function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  button:document.querySelector('button'),
  color:document.querySelector('span'),
}

refs.body.addEventListener('click', onClickButton)

function onClickButton(event) {
  let color = getRandomHexColor();
  refs.body.style.background = color
  refs.color.textContent = color
}
