// Добавь скрипт после загрузки DOM
const teacherContainer = document.querySelector('.teachers_list')
const openModalBtn = document.querySelectorAll('.openModalBtn')

document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы
  const leftScrollButton = document.getElementById('leftScroll')
  const rightScrollButton = document.getElementById('rightScroll')

  // Добавляем обработчик события для отслеживания изменений в скролле
  teacherContainer.addEventListener('scroll', function () {
    // Тут ты можешь добавить дополнительные действия при скролле, если это нужно
  })

  rightScrollButton.addEventListener('click', function () {
    teacherContainer.scrollLeft += 200
  })

  leftScrollButton.addEventListener('click', function () {
    teacherContainer.scrollLeft -= 200
  })
})

for (let i = 0; i <= openModalBtn.length - 1; i++) {
  openModalBtn[i].addEventListener('click', () => {
    const modalWindow = document.querySelector('.modal')
    const closeModalBtn = document.querySelector('.closeModalBtn')

    modalWindow.style.display = 'block'

    closeModalBtn.addEventListener('click', function () {
      modalWindow.style.display = 'none'
    })
  })
}
