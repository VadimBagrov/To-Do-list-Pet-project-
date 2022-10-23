const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

let todos = [];

//Добавление
function addTodo(text) {
    const todo = {
        text,
        done : false,
        id: `${Math.random}` //Предоставляет уникальный индификатор
    } ;

    todos.push(todo);
}

//Удаление
function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true ;
        }
    })
}

function render () { //
    console.log(todos);
    let html ='';

    todos.forEach (todo => {
        if(todo.done) { //Если сделана,то выводить не будем
            return;
        };

        html += `
        <div>
            ${todo.text}
            <button data-id='${todo.id}'> Сделано </button>
        </div>
        `;
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);

    render() //Обновит актуальное состояние интерфейса
})

todosNode.addEventListener('click',(event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render(); //Перерисовка
})

render()
