/*
  OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const buttonsCarousel = document.querySelectorAll('.button')
const images = document.querySelectorAll('.image')

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
buttonsCarousel.forEach((button, index) => {
  button.addEventListener('click', () => {
    markOffSelectedButton()

    markSelectedButton(button)

    hideActiveImage()

    showNextActiveImage(index)
  })
})
// - passo 3 - desmarcar o botão selecionado anterior
function showNextActiveImage(index) {
  images[index].classList.add('active')
}

// - passo 4 - marcar o botão clicado como se estivesse selecionada
function hideActiveImage() {
  const activeImage = document.querySelector('.active')
  activeImage.classList.remove('active')
}

// - passo 5 - esconder a imagem ativa do fundo anterior
function markSelectedButton(button) {
  button.classList.add('selected')
}

// - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
function markOffSelectedButton() {
  const selectedButton = document.querySelector('.selected')
  selectedButton.classList.remove('selected')
}
