const input = document.querySelector('.taskName');
const ul = document.querySelector('.list');
const clear = document.querySelector('.clear');

const addTask = () => {
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = input.value;


    ul.appendChild(li);
    li.appendChild(check);
    li.appendChild(span);

    input.value = '';
}

input.addEventListener('keyup', (event) => {
    if (event.keyCode == 13){
        if (input.value == ''){
        alert('Пустое поле!!!')
    }else addTask();
    }
});

clear.addEventListener('click', () => {
    ul.innerHTML = '';
})