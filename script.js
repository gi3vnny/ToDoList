const textContainer = document.querySelector('#display'); //grabs display container
const enterButton = document.querySelector('.enterBtn'); //grabs button 
const newContainer = document.querySelector('.newTaskContainer'); //grab new container
const inputContainer = document.querySelector('.inputContainer'); //grabs input container
 
//outputs display when we click the button
enterButton.addEventListener('click', () => buttonClick());

//logic when the enter key is pressed
textContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        buttonClick();
    }
})

function buttonClick() { 
    //logic checks if the value is empty when they add a task
    if (textContainer.value === ''){
        if (!document.querySelector('.errorMsg')) {
            inputContainer.classList.replace('newInputContainer', 'inputContainer');
            const errorMsg = document.createElement('p');
            errorMsg.classList.add('errorMsg');
            errorMsg.innerText = 'Please enter a task!';
            document.body.append(errorMsg);

            //fades the error msg
            setTimeout(() => {
                errorMsg.classList.add('show');
            }, 10); 
            //fade out after 3 seconds
            setTimeout(() =>{
                errorMsg.classList.remove('show');
            }, 1500);
            //removes the dom element after
            setTimeout(() => {
                errorMsg.remove();
            }, 2500);
        }
        return;
    } else {
        if (document.querySelector('.errorMsg')) {
            document.querySelector('.errorMsg').remove();
        }
    }

    //creates new section to put all the btns inside
    const newSection = document.createElement('div');
    newSection.classList.add('newTaskSection');
    const newText = document.createElement('div'); //creates new element 
    newText.classList.add('newText'); //adds styling to the new task thats added
    newText.innerText = textContainer.value; //the text from the display will be put inside the new element
    newContainer.appendChild(newSection); //the container takes the element, makes it their child
    //creates btn to check off tasks
    const checkoffButton = document.createElement('button');
    checkoffButton.innerText = 'Complete';
    checkoffButton.classList.add('checkoffBtn');
    newSection.appendChild(checkoffButton);

  
    const successMsg = document.createElement('p');
    successMsg.innerText = 'New Task Added!';
    successMsg.classList.add('successMsg');
    newContainer.appendChild(successMsg);

            //fades the success msg
            setTimeout(() => {
                successMsg.classList.add('show');
            }, 10); 
            //fade out after 3 seconds
            setTimeout(() =>{
                successMsg.classList.remove('show');
            }, 1000);
            //removes the dom element after
            setTimeout(() => {
                successMsg.remove();
            }, 2000);

    //adds x btn to delete tasks
    const deleteTaskBTN = document.createElement('button');
    deleteTaskBTN.innerText = 'X';
    deleteTaskBTN.classList.add('deleteBtn');
    newSection.appendChild(newText);
    newSection.appendChild(deleteTaskBTN);
    //moves input to the top of the page when input is added 
    inputContainer.classList.replace('inputContainer', 'newInputContainer');
    textContainer.value = ''; //removes the value of the input when task is added
    
    //logic, delete btn removes task when its clicked
    deleteTaskBTN.addEventListener('click', (event) => {
        event.target.parentElement.remove(); 
        //if theres no containers on the pg, reset positioning of the input
        if (document.querySelectorAll('.newTaskSection').length === 0){
            inputContainer.classList.replace('newInputContainer', 'inputContainer');
        }
    });

    //logic when the completed btn gets clicked
    checkoffButton.addEventListener('click', () => {
        newText.classList.toggle('click');
        checkoffButton.innerText = newText.classList.contains('click') ? 'Completed': 'Complete';
    });

}