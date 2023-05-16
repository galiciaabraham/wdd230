const input = document.querySelector("input");

const button = document.querySelector("button");

const list = document.querySelector("#list");

button.addEventListener('click',()=>{
    
    const newChapter = input.value;
    input.value = "";

    const newLine = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton =  document.createElement('button');

    newLine.appendChild(listText);
    listText.textContent = newChapter;
    newLine.appendChild(deleteButton);
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = "Delete chapter";
    list.appendChild(newLine);

    deleteButton.addEventListener('click',()=>{
        list.removeChild(newLine);
    });

    input.focus();

    input.value =  "";
});


