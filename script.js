const textContainer = document.querySelector('#display'); //grabs display container
const enterButton = document.querySelector('.enterBtn'); //grabs button 
const newContainer = document.querySelector('.newTaskSection'); //grab new container
const inputContainer = document.querySelector('.inputContainer'); //grabs input container
 
//outputs display when we click the button
enterButton.addEventListener('click', () => buttonClick());

function buttonClick() { 
    const newText = document.createElement('div'); //creates new element 
    newText.classList.add('newText'); //adds styling to the new task thats added
    newText.innerText = textContainer.value; //the text from the display will be put inside the new element
    newContainer.appendChild(newText); //the container takes the element, makes it their child
    //adds x btn to delete tasks
    const deleteTaskBTN = document.createElement('button');
    deleteTaskBTN.innerText = 'X';
    newContainer.appendChild(deleteTaskBTN);
    deleteTaskBTN.classList.add('deleteBtn');

    //moves input to the top of the page when input is added 
    inputContainer.classList.replace('inputContainer', 'newInputContainer');
    textContainer.value = ''; //removes the value of the input when task is added
}