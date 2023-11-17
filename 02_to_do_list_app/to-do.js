


let inputbox = document.querySelector('#input-box');

let addbtn = document.querySelector('#addbtn');

let list = document.querySelector('#list-container');

let value = "Enter";

addbtn.addEventListener('click',function(){
    
    if(inputbox.value == ""){
        alert('must you right here somthing...');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;

        // if(value == "Enter"){
        //     list.appendChild(li);

        //     let  span = document.createElement('span');
    
        //     span.innerHTML = "\u00d7";
          
        //     // span = "\u00d7";
    
        //     li.appendChild(span);

     
        list.appendChild(li);

        let  span = document.createElement('span');

        span.innerHTML = "\u00d7";
      
        // span = "\u00d7";

        li.appendChild(span);
    }

   inputbox.value = "";
   savedata()
})

// {
//     if(inputbox.value == ""){
//         alert('must you right here somthing...');
//     }else{
//         let li = document.createElement('li');
//         li.innerHTML = inputbox.value;
//         list.appendChild(li);

//     }

//     inputbox.value = "";

// }

// addbtn.addEventListener('click',function(){

// if(inputbox.value === ""){
//     alert('You need to right something here...');
// }else{
//     let li = document.createElement('li');

//     li.innerHTML = inputbox.value;

//     list.appendChild(li);

//     // inputbox.value === ""
// }
// // inputbox.value = " ";


    

// })
// console.log(inputbox)
// console.log(addbtn)
// console.log(list)
// addbtn.addEventListener('click',function(){
// //     if(inputbox.value == ''){
// //         alert('enter something here...');
// //     }else{
      
// //     //   let create = document.createElement('li');


// //     // list.push(inputbox.value)

       
// //        inputbox.value = " ";
// //     }
// })

// list.innerHTML = " ";


// function addtask(){

   

//     if(inputbox.value == ""){
//        alert('you have mustt write here...') 
//     }else{
//         let li =  document.createElement("li");
//         li.innerHTML  = inputbox.value;

//         list.appendChild(li)

//         // let newarr = Array.from(list);

//         // newarr.push(li)

//         // list.push(li);

//     }
// }
// ul .cheked{


list.addEventListener('click',function(e){

    // console.log(e)
  if(e.target.tagName == "li"){
    e.target.classList.toggle("cheked");
    console.log(e)
    savedata()

  }else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    savedata()
  }
},false)





function savedata(){

    localStorage.setItem("data",list.innerHTML);





}


function showdata(){

    list.innerHTML = localStorage.getItem("data");


}

showdata()