const input = document.getElementById("input")

function createTask(){
    const value = input.value;
    const p = document.createElement('p');
    const node = document.createTextNode(value);
    p.appendChild(node);
    const element = document.getElementById("taskManager");
    element.appendChild(p);
}