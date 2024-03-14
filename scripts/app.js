import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')

let obj1 = {
    title   : "Shih Tzu",
    par     : "An affectionate and playful companion that loves being around people. Literally translated as 'little lion', the Shih Tzu's temperament is affectionate, playful and a little bit feisty. Shih Tzus are generally accepted to have originated as temple dogs in China or Tibet and fall into the Utility and Toy categories.",
    button  : "Contact me",
    img     : "./images/l.jpg"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "./images/h.jpg",
    desc    : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius fugit facilis odit voluptatem provident, fuga asperiores possimus perferendis deserunt perspiciatis, architecto mollitia atque! Debitis, saepe! Sint inventore incidunt sequi.",
    button1 : "Learn More",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

sec1.append(infofunc(title, par, button))
sec1.append(imgfun(img))
sec3.append(infofunc2(title2))
sec2.append(cardfunc(image, desc, button1))
sec2.append(cardfunc(image, desc, button1))
sec2.append(cardfunc(image, desc, button1))

