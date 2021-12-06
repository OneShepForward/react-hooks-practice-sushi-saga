import React, {useState} from "react";

function Sushi({ sushi, onSushiClick, moneyRemaining }) {

    const [eatenStatus, setEatenStatus] = useState(false)

    const { name, price, img_url, eaten } = sushi;

    function sushiClick(e) {
      console.log(price)
      console.log(moneyRemaining)
      if (moneyRemaining >= price) {
      setEatenStatus(true);
      onSushiClick({sushi})
      }
    }

  return (
    <div className="sushi">
      <div className="plate" onClick={sushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenStatus ? null : (
          <img
            src={img_url}
            alt={`Sushi ${name}`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
