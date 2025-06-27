import Card from "./Card.js";

function Tours({data,onInterestHandler}){
    
    return(
        <div className='wrapper'>
            <h1 className="title">
                Plan With Yash
            </h1>
            <div className="cards">
                {
                    data.map((tour)=>{
                        return <Card key={tour.id} data={{...tour}} interestHandler={onInterestHandler}/>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;