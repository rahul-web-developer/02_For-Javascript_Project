

let colorcode =document.querySelector('#color-code');

let bttn = document.querySelector('#color');


const getcolor = ()=>{

    const random =Math.floor(Math.random()*16777215)


    const randomcode = "#" + random.toString(16);
    console.log(random,randomcode);


    document.body.style.backgroundColor = randomcode;


    colorcode.innerHTML = randomcode;

    bttn.style.color = randomcode;
}



     bttn.addEventListener('click',function(){

        // colorcode.innerHTML = 
     getcolor();

})


getcolor();



window.addEventListener("load", (event) => {
    
    document.body.backgroundColor = `url('https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/04/WhatsApp-Image-2023-04-27-at-12.52.34-PM-1.jpeg?size=*:900)`;
  });