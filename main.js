const imageSlider = [{
    img: "images/bee.jpg",
    text:"LIGHT"
},
{
    img: "images/Wakacje.jpg",
    text:"VACATION"
},
{
    img: "images/gryl.jpg",
    text:"GRILL"
},
{
    img: "images/dom.jpg",
    text:"HOUSE"
},
{
    img: "images/zboze.jpeg",
    text:"GRAIN"
}]


const imgs = document.querySelector("img");
const h1 = document.querySelector("h1");
const dots = [...document.querySelectorAll('.dots span')]


const time = 5500;
let active = 0;


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}


const changeBanner = () => {
active++;
if(active === imageSlider.length){
    active = 0;
}
imgs.src = imageSlider[active].img;
h1.textContent = imageSlider[active].text;
changeDot()
}
let indexInterval = setInterval(changeBanner, time)

const changeKeySlide = (e) => {
    if(e.keyCode == 37 || e.keyCode == 39){
        e.keyCode == 37 ? active-- : active++;
        
        if(active === imageSlider.length){
            active = 0;
        } 
        else if (active < 0){
            active = imageSlider.length - 1;
          }
    

imgs.src = imageSlider[active].img;
h1.textContent = imageSlider[active].text;
changeDot()
indexInterval = setInterval(changeBanner, time);
}

}

window.addEventListener("keydown", changeKeySlide)


//*//////////////////////////////////////////////////////*
//*//////////////////////////////////////////////////////*
//*//////////////////////////////////////////////////////*




