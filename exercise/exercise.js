const butt = document.getElementById('butt')
const ul = document.querySelector('ul')

class ToDoItem {
    constructor(input, list) {
        this.input = input;
        this.list = list;
    }

    setItem() {
        this.input = document.getElementById('input').value;
    }
    getItem() {
        return this.input;
    }
}





function addToList() {
    const input = document.getElementById('input')
    const list = document.getElementById('list')
    
    if (!input.value) {
        alert('Please type something!');
        return;
    } else {
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        innerHTML = `<li>${input.value}</li>`;
        input.value = '';
    }
}
