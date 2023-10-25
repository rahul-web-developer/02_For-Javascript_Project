
let signupbtn = document.querySelector('#sign-up')
let signinbtn = document.querySelector('#sign-in')

let namefiled = document.querySelector('#namefiled');


let title = document.querySelector('#title')



signinbtn.addEventListener('click',function(){
    namefiled.style.maxHeight = "0";
    title.innerHTML = "sign in"
    signupbtn.classList.add('disabled')
    signinbtn.classList.remove('disabled')
})

signupbtn.addEventListener('click',function(){
    namefiled.style.maxHeight = "65px";
    title.innerHTML = "sign up"
    signupbtn.classList.remove('disabled')
    signinbtn.classList.add('disabled');

});

// console.log(signupbtn);
// console.log(signinbtn);
// console.log(namefiled);
// console.log(title);