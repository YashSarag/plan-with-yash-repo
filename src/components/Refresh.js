function Refresh({onRefreshHandler}){
    return(
        <div className="refresh-wrapper">
            <div className="refresh-title">No Tours Left</div>
            <button onClick = {()=>onRefreshHandler()} className="refresh-btn">Refresh</button>
        </div>
    );
}

export default Refresh;