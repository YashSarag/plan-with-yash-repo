import React , {useState} from "react";
import data from './data';
import Tours from './components/Tours.js';
import Refresh from './components/Refresh.js';
const App = () => {
  const [tours,setTour] = useState(data);

  function interestHandler(id){
      const newTours = tours.filter((tour)=>tour.id !== id);
      setTour(newTours);
  }

  function refreshHandler(){
    setTour(data);
  }

  if(tours.length === 0){
    return(
      <Refresh onRefreshHandler = {refreshHandler}/>
    );
  }

  
  return (
    <Tours data={tours} onInterestHandler = {interestHandler}/>
  );
};

export default App;
