const form = document.querySelector('form');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

const allTask = JSON.parse(localStorage.getItem('task')) || [];

const todo = new Todo(allTask);

window.addEventListener('DOMContentLoaded', function(){
    todo.render();
})

//Скрипт обработки добовления задачи
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Формируем уникальный id для каждой таски
    //что бы избежать переиндексации массива с случае его изминения
    let id = 0;
    if(allTask.length > 0){
        let currentTask = allTask[allTask.length - 1];
        let currentId = currentTask.id;
        id = currentId += 1;
    }
    //Формируем объект 
    const task = {
        name: input.value,
        isChecked: false,
        id: id,
    }
    //Пушим обьект в массив с обьектами
    allTask.push(task);
    //сохраняем данных в LocalStorage
    saveToLS(allTask);
    //Сброс значения формы после добовления таски
    form.reset();
    todo.render();
})
//Функция для сохранения данных в LocalStorage
function saveToLS(){
    localStorage.setItem('task', JSON.stringify(allTask));
}

//обработчики событий
container.addEventListener('click', function(e){
    //скрипт для удаления таски
    if(e.target.classList.contains('task-delete')){
        const target = todo.deleteTask(e.target.dataset.id);
        todo.render(target);
        saveToLS();
    }

    if(e.target.classList.contains('task-check')){
        const target = e.target;
    }
})


