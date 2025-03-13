let plusButton = document.querySelector(".plus");
let addWork= document.querySelector(".addWork");

    addWork.addEventListener("click", () => {
        let inputTask = document.querySelector("#inputTask").value.trim();
        if(inputTask!== ""){
 let list = document.createElement("div");
list.classList.add('listStyle');
list.textContent = inputTask;
let checkbox = document.createElement("input");
checkbox.type="checkbox";
list.appendChild(checkbox);
list.style.marginTop = "1rem";
document.body.appendChild(list);

document.querySelector("#inputTask").value="";

checkbox.addEventListener("click", ()=>{
list.style.opacity="0.5";
});
// checkbox.addEventListener("dblclick", () =>{
//     list.style.opacity="1";
// });
        }
    });

// plus button function
plusButton.addEventListener("click", ()=>{
    let inputTask = document.querySelector("#inputTask").value.trim();
    if(inputTask!== ""){
    let list = document.createElement("div");
list.classList.add('listStyle');
list.style.marginTop = "1rem";
list.textContent = inputTask;
document.body.appendChild(list);
document.querySelector("#inputTask").value="";
    }
});
 // let listContainer = document.querySelector("#taskList");
            // if(!listContainer){
            //     listContainer=document.createElement("div");
            //     listContainer.id="taskList";
            //     document.body.appendChild(listContainer);
            // }

        // let list = document.createElement("div");