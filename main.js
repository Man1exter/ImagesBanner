const ImageSlider = [{
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

const time = 3500;
let active = 0;

const changeBanner = () => {
active++;
if(active === ImageSlider.length){
    active = 0;
}
image.src = ImageSlider[active].img;
h1.textContent = ImageSlider[active].text;
}



setInterval(changeBanner, time)