import React from 'react'
import InnerCards from "./InnerCard";
import KidFootwearD from "./KidFootwearD";
const KidFootwear = () =>{
return(
    <>
   
    <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" mx-auto ">
                        <div className="row  px-5">
                            {
                                KidFootwearD.map((val, ind) => {
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
export default KidFootwear;