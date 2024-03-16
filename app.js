let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;



    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    

    
    item.appendChild(delbtn);
     ul.appendChild(item);
    inp.value = "";


});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("delete");
    }
    
})


// ul.addEventListener("click",function(event){
//     console.dir(event.target);
//     console.log("button clicked");

// })








// let delbtn = document.querySelectorAll("button");
// for(delbtn of delbtn){
//     // delbtn.addEventListener("click" , function(){           all button will be work as delete
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }



// let inp = document.querySelector("input");
//       let btn = document.querySelector("button");
//       let ul = document.querySelector("ul"); // Changed to querySelector

//       btn.addEventListener("click", function () {
//         let item = document.createElement("li");
//         item.innerText = inp.value;
//         ul.appendChild(item); // Corrected method name
//         inp.value = "";
//       });