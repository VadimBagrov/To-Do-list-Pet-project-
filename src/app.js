const item = document.querySelector('.item') // Получаем класс Один item
const placeholders = document.querySelectorAll('.placeholder') // Получаем Все классы placeholder

// Добавляем событие передвижения элементов
item.addEventListener('dragstart' , dragstart) // Перестаскивание началось
item.addEventListener('dragend' , dragend) // Закончили перетаскивание

for ( const placeholder of placeholders) {
    placeholder.addEventListener('dragover' , dragover) // Вызывается когда элемент который перестаскиваемн находится непосредственно над placeholder
    placeholder.addEventListener('dragenter' , dragenter) // Заходим на территорию конкретного placeholder
    placeholder.addEventListener('dragleave' , dragleave) // Выходим с территории
    placeholder.addEventListener('drop' , dragdrop) // Когда отпустили
} // На каждой итерации цикла будем создавать placeholder

function dragstart(event) {
    event.target.classList.add('hold') //Добавляем класс когда начинаем перестакивать

    setTimeout(() => event.target.classList.add ('hide'), 0) // Для того чтобы при перестакивании элемент оставался на экране 'В руках',а в колонке пропал
}

function dragend() {
    event.target.classList.remove('hold') //Когда возвращается обратно класс пропадает
    event.target.classList.remove('hide') // При отпускании из 'рук' появится обратно в колонке

    // Или можно сделать так
    // event.target.className = 'item' // Проверит чтобы везде остался только item

}

function dragover(event) {
    event.preventDefault() //По умолчанию dragover отменяет возмонжость перетаскивать,но preventDefault это отменит
}

function dragenter(event) {
    event.target.classList.add('hovered') //Добавляем класс 'Наведенное '
}

function dragleave(event) {
    event.target.classList.remove('hovered') //Удаляем класс 'Наведенное '
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item) //Перекидываем item в другой placeholder (перетаскиваем в другое место)
}
