import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ allSushi, onSushiClick, moneyRemaining }) {

  

const menuStartNumber = 1;
const menuStopNumber = 4;
const sushiPerTable = 4;

const [beltLow, setBeltLow] = useState(menuStartNumber);
const [beltHigh, setBeltHigh] = useState(menuStopNumber);

function handleMoreClick() {
    setBeltLow(beltLow + sushiPerTable)
    setBeltHigh(beltHigh + sushiPerTable)
}



function renderSushi() {
  const displayedSushi = allSushi.filter(sushi => {
    return sushi.id >= beltLow && sushi.id <= beltHigh;
  })
  console.log(displayedSushi);
  return displayedSushi.map(sushi => {
    return <Sushi 
    key={sushi.id} 
    sushi={sushi}
    eaten={false}
    onSushiClick={onSushiClick} 
    moneyRemaining={moneyRemaining}
    />})
}

  return (
    <div className="belt">
      {renderSushi()}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
