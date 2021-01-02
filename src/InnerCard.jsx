import React, { useState } from 'react';
const InnerCards = (props) => {

    return (
        <>
            <div className=" py-3 px-3">
                <div className="innerCard ">

                    <div style={{ width: '16rem' }}>
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">{props.subtitle}</h6>
                            <h4 className='py-3'>{props.title}</h4>
                            <button className="btn btn-success mx-5"> Add to Cart </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InnerCards;