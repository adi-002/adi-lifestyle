import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/dist/button';
import Cards from "./Cards"
import Mendata from "./Mendata"
import Womendata from "./Womendata"
import Kiddata from "./Kiddata";
import Slide from "./Slide";


function Home() {
    return (
        <>
           
            <Slide/>
            <div className="my-5">
                <h1 className="homePgContainer px-5"> MEN</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" mx-auto ">
                        <div className="row  px-5">
                            {
                                Mendata.map((val, ind) => {
                                    return <Cards
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        links={val.links}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="px-5"> WOMEN</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" mx-auto ">
                        <div className="row  px-5">
                            {
                                Womendata.map((val, ind) => {
                                    return <Cards
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        links={val.links}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="px-5"> KIDS</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" mx-auto ">
                        <div className="row  px-5">
                            {
                                Kiddata.map((val, ind) => {
                                    return <Cards
                                        imgsrc={val.imgsrc}
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
    );
}

export default Home;
