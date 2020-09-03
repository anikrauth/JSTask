/*//Define UI element
let form = document.querySelector('#form_data');
let input = document.querySelector('#input_data');
let filter = document.querySelector('#filter_data');
let allDataList = document.querySelector('#text_data_list');
let clearAllBtn = document.querySelector('#all_data_clear_btn');

//Define addEventListener
form.addEventListener('submit', addTask);

allDataList.addEventListener('click', removeData);

clearAllBtn.addEventListener('click', clearAllTask);

//define function
function addTask(e) {
    if (input.value === '') {
        alert('please fill the input box!');
    } else {
        let createLi = document.createElement('li');
        createLi.appendChild(document.createTextNode(input.value + ''));
        allDataList.appendChild(createLi);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = ' x';
        createLi.appendChild(link);
        input.value = '';
    }
    e.preventDefault();
}

function removeData(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let lel = e.target.parentElement;
            lel.remove();
        }
    }
}
function clearAllTask(e) {
    //if (confirm('Are you sure clear all?')) {
    // allDataList.innerHTML = '';
    // }
    while (allDataList.firstChild) {
        allDataList.removeChild(allDataList.firstChild);
    }

}
//from function
function addTask(formData) {
    if (input.value === '') {
        alert('add a task');
    } else {
        let createLi = document.createElement('li');
        createLi.appendChild(document.createTextNode(input.value + ' '));
        allDataList.appendChild(createLi);

        input.value = '';

    }
    formData.preventDefault();
}
function addTask(e) {
    if (input.value === '') {
        alert('please add some text');
    } else {
        let createLi = document.createElement('li');
        createLi.appendChild(document.createTextNode(input.value + ' '));
        allDataList.appendChild(createLi);
        input.value = ' ';
    }
    e.preventDefault();
}
function addTask(e) {
    if (input.value === '') {
        alert('Please fill the input box');
    } else {
        let createLi = document.createElement('li');
        createLi.appendChild(document.createTextNode(input.value + ''));
        allDataList.appendChild(createLi);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = '✂';
        createLi.appendChild(link);

        input.value = '';
    }
    e.preventDefault();
}
//remove Task
/*
function removeData(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}
function removeData(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}
*/

//define UI Element
let formData = document.querySelector('#form_data');
let input = document.querySelector('#input_data');
let filter = document.querySelector('#filter_data');
let taskList = document.querySelector('#text_data_list');
let clearBtn = document.querySelector('#all_data_clear_btn');


//Define addEnventListener

formData.addEventListener('submit', addTask);
taskList.addEventListener('click', removeData);
clearBtn.addEventListener('click', allClearTask);
filter.addEventListener('keyup', filterTask)
document.addEventListener('DOMContentLoaded', getTaskFromLocalStroage)


//define function

function addTask(e) {
    if (input.value === '') {
        alert('Please fill the box');
    } else {
        let crateLi = document.createElement('li');
        crateLi.appendChild(document.createTextNode(input.value + ''));
        taskList.appendChild(crateLi);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = '  X'
        crateLi.appendChild(link);

        //local store
        taskInLocalStroage(input.value);

        input.value = '';
    }
    e.preventDefault();
}

//remove function
function removeData(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you Sure?')) {
            let ele = e.target.parentElement;
            ele.remove();
            //remove from ls
            removeTaskfromLocalStore(ele);
        }
    }
}

//All Clear BTn

function allClearTask(e) {
    if (confirm('Are you sure to clear all your Task?')) {
        //taskList.innerHTML = '';
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
}




//filter task
function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {

        let item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}


// local stroage function
function taskInLocalStroage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);


    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//get data from local stroage

function getTaskFromLocalStroage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let crateLi = document.createElement('li');
        crateLi.appendChild(document.createTextNode(task + ''));
        taskList.appendChild(crateLi);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = '  X'
        crateLi.appendChild(link);
    })
}


//remove from  task ls
function removeTaskfromLocalStore(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild); //(<a> X </a>) lastchild
    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem(localStorage.setItem('tasks', JSON.stringify(tasks)))
}