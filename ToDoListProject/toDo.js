let addWork= document.querySelector(".addWork");

    addWork.addEventListener("click", () => {
        let inputTask = document.querySelector("#inputTask").value.trim();
         if(inputTask!== ""){
 let list = document.createElement("div");
list.classList.add('listStyle');
list.textContent = inputTask;       // text(work toDo mention here, taken from input)
let checkbox = document.createElement("input"); //creating checkbox
checkbox.type="checkbox";
checkbox.classList.add("check");
list.appendChild(checkbox); // append checkbox here
let deleteBtn = document.createElement("img"); // creating delete image
deleteBtn.src="./deleteBtn.png";
deleteBtn.classList.add("delBtn");  
list.appendChild(deleteBtn);       // appending delete btn on the list div
list.style.marginTop = "1rem";
document.body.appendChild(list);

document.querySelector("#inputTask").value="";

checkbox.addEventListener("click", ()=>{    //checkbox work
list.style.opacity="0.5";
});                        // closed function of checkbox function

deleteBtn.addEventListener("click", ()=>{  //delete btn work
   list.remove();
});  // function of delete btn closed here
         } //if loop closed here
         else{
            alert("enter the work first");  // alert is given when there is nothing in input
         }
    });
