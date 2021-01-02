
import saree from "../src/images/saree.jpg"
import top from "../src/images/top.jpg"
import footwear from "../src/images/footwear.jpg"
import grlpants from "../src/images/Pants.jpg"

const path = window.location.host

const Womendata = [
    {
        imgsrc: saree,
        title: "Sarees",
         links:`http://${path}/womensaree`
    },
    {
        imgsrc: top,
        title: "Tops",
         links:"http://${path}/womentop"
    },
    {
        imgsrc: grlpants,
        title: "Pants",
         links:`http://${path}/womenpant`

    },

    {
        imgsrc: footwear,
        title: "Footwear",
         links:`http://${path}/womenfootwear`
    },
 

]
export default Womendata;