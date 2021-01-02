import React from 'react';
const Cards = (props) => {
 
    return (
        <>
        <div className="px-3 py-3 justify-content-center">
            <div className="outerCard">
            <a href={props.links} className="cardLink">
                <div  style={{width:'16rem'}}>
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                </div>
                </a>
            </div>
            </div>
        </>
    )
}
export default Cards;