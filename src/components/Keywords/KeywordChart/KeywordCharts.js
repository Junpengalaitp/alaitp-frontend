import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ShowingCharts from "./ShowingCharts";
import HidingCharts from "./HidingCharts";

const KeywordCharts = () => {
  const [hiding, setHiding] = useState(true)
  const handleClick = () => {
    if (hiding) {
      setHiding(false);
    } else {
      setHiding(true);
    }
  }
  const buttonText = hiding ? "See More" : "See Less";
  return (
    <div>
      <h4>The Most Wanted Skills in Search Result (Click to See Correlated skills)</h4>
      <ShowingCharts />
      <HidingCharts hiding={hiding}/>
      <Button variant={"outline-primary"} onClick={() => handleClick()}>{buttonText}</Button>
    </div>
  );
}

export default KeywordCharts;