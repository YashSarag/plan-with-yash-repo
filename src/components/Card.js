import { useState } from "react";

function Card({data,interestHandler}){
    const [readMore, setReadMore] = useState(false);
    let desc = readMore ? data.info : data.info.slice(0,200)+'...';
    function readMoreHandler(){
        setReadMore(!readMore);
    }
    return(
        <div className="card">
            <img src={data.image} className="card-image"/>
            <div className="card-info">
                <div className="card-price">₹ {data.price}</div>
                <div className="card-name">{data.name}</div>
                <div className="card-desc">
                    {desc}
                    <span onClick={readMoreHandler} className="read-more">
                        {readMore?'Show less':'Read more'}
                    </span>
                </div>
                <button onClick={()=>interestHandler(data.id)} className="interest-btn">
                    Not Interested
                </button>
            </div>
        </div>
    );
}

export default Card;