import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allSushi, setAllSushi] = useState([]);
  const [plates, setPlates] = useState([])

  const moneyStart = 100;
  let moneySpent = plates.reduce(function(element, accumulator) { return element + accumulator}, 0);
  let moneyRemaining = moneyStart - moneySpent;
  

  function handleEatSushi(sushi) {
    console.log(sushi)
    setPlates([...plates, sushi.sushi.price])
  }

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setAllSushi(data))
  }, []);

  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} onSushiClick={handleEatSushi} moneyRemaining={moneyRemaining} />
      <Table plates={plates} moneyRemaining={moneyRemaining} />
    </div>
  );
}

export default App;
