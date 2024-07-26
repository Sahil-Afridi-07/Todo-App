var btn=document.querySelector('#add');
var inp=document.querySelector('input');
var task=document.querySelector('#task');

btn.addEventListener("click",function(){
    if(inp.value===""){
        alert("Enter any task");
    }
    else{
        var p=document.createElement('p');
        p.innerHTML=`${inp.value} <i class="fa-solid fa-trash"></i>`
        task.appendChild(p);
        inp.value="";
        p.querySelector("i").addEventListener("click",function(){
            p.remove();
        })
    }
})
