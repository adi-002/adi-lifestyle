import shirt from "../src/images/menshirt.jpg"
import tshirt from "../src/images/mentshirt.jpg"
import pant from "../src/images/menpant.jpg"
import shoes from "../src/images/menshoes.jpg"

const path = window.location.host + '/adi-lifestyle';
console.log(path);
const Mendata = [
    {
        imgsrc: {shirt},
        title: "Shirts",
        links:`http://${path}/menshirt`
    },
    {
        imgsrc: {tshirt},
        title: "T-Shirts",
        links:`http://${path}/mentshirt`

    },
    {
        imgsrc: {pant},
        title: "Pants",
        links:`http://${path}/menpant`
    },
  
    {
        imgsrc: {shoes},
        title: "Shoes",
        links:`http://${path}/menshoes`
    },

]
export default Mendata;