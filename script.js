const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");

// onkeyup event for used to add (hide and unhide) button
inputbox.onkeyup = () => {
    let UserEnterValue = inputbox.value;//Store user entered value
    if (UserEnterValue.trim() != 0) {//the spaces will be there if the user isn't filled value
        add.style.display = "block"; //add show button 
    }
    else {
        add.style.display = "none";//add hide button 
    }
}

var item = [];
// Onclick Event is used to add task in an array
add.onclick = () => {
    item.push(inputbox.value)//Item Add In Array
    showcase(); // showcase call for add li tag in html 
}

// Showcase function display all the added task
function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class=" del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todolist.innerHTML = ListTag; //adding new li tag 
    inputbox.value = ""; //once task added the input field will get blank
    add.style.display = "none";//Add hide button 
    pendingTasks.textContent = item.length;//For total left task counting
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    item.splice(index, 1);//remove element from an array
    showcase();
}
// delete all tasks function is used for delete all task from your list
clearall.onclick = () => {
    item = []; //empty the array
    showcase();
}
// Clear Completed is used for which task complete delete from list.
document.querySelector('.clearcomtask').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); // click selected task from the list
    var temp = [] // cretae new array for to store completed task
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1);//if task store in temp array than remove from item array
            j++;
            i--;//Array.length -1 because 1 element splice than i-- use for back
        }
    }
    showcase();
}

// Complete all task is used for complete the all task
document.querySelector('.complete').onclick = () => {
    checked(true);
}
//Uncomplete all task is used for uncomplete the all task
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}
//Checked funtion is used for the task wheteher its checked or unchecked 
function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); // click selected task in list
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}