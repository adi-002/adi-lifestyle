import React from 'react'
import InnerCards from "./InnerCard";
import MenPantD from "./MenPantD";
const Men = () =>{
return(
    <>
   
    <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" mx-auto ">
                        <div className="row  px-5">
                            {
                                MenPantD.map((val, ind) => {
                                    return <InnerCards
                                        imgsrc={val.imgsrc}
                                        subtitle={val.subtitle}
                                        title={val.title}
                                        links={val.links}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

    </>
)
}
export default Men;