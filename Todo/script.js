function getvalue(){
    let todo=document.getElementById("add").value;
    console.log(todo);
    if(todo.trim()==""){
alert("please enter a todo");
return;

    }
 let todos=JSON.parse(localStorage.getItem("todos"))||[];
 todos.push(todo);
 localStorage.setItem("todos",JSON.stringify(todos));
 document.getElementById("add").value="";
 showtodo();
 alert("Todo added successfully");

}

function showtodo(){
    let todos=JSON.parse(localStorage.getItem("todos"))||[];
    const listtodo=document.getElementById("todolist");
    
    listtodo.innerHTML="";
    if(todos.length==0){
        
    }
    todos.forEach((item,index)=>{
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.style.marginRight="10px";
        
        const span=document.createElement("span");
        span.textContent=item;
        const dltbtn=document.createElement("button");
        dltbtn.innerHTML='<i class="fas fa-trash"></i>';
        dltbtn.className="dltbtn";
        dltbtn.onclick=function(){
            let todos=JSON.parse(localStorage.getItem("todos"))||[];
            todos.splice(index,1);
            localStorage.setItem("todos",JSON.stringify(todos));
            showtodo();
            alert("todo deletd succefully");
        }
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(dltbtn);

        listtodo.appendChild(li);
        
        
    });
    

}
window.onload = showtodo;