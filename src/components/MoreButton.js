import React from "react";

function MoreButton({ onMoreClick }) {

function moreButtonClicked() {
  console.log("More Button Clicked")
  onMoreClick()
}

  return <button onClick={moreButtonClicked}>More sushi!</button>;
}

export default MoreButton;
