import kidshirt from "../src/images/kidshirt.jpg"
import kidtshirt from "../src/images/kidtshirt.jpg"
import kidpant from "../src/images/kidpant.jpg"
import kidfootwear from "../src/images/kidfootwear.jpg"

const path = window.location.host + '/adi-lifestyle'
const Kiddata = [
    {
        imgsrc: kidtshirt,
        title: "T-Shirts",
        links:`http://${path}/kidtshirt`

    }, {
        imgsrc: kidshirt,
        title: "Shirts",
        links:`http://${path}/kidshirt`
    },
    {
        imgsrc: kidpant,
        title: "Pants",
        links:`http://${path}/kidpant`
    },
    {
        imgsrc: kidfootwear,
        title: "Footwear",
        links:`http://${path}/kidfootwear`
    },


]
export default Kiddata;