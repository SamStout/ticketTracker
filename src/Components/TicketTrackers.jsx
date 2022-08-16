import { useState } from "react";
import "./TicketTrackers.scss";


const TicketTrackers = (props) =>{ 

    const {name, role} = props.id;
    const [counter, setCounter] = useState(0);


    console.log(props)

  const handleIncrement = () => {
      setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      console.log("hi");
    } else {
      setCounter(counter - 1);
    }
  };

    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{role}</p>
            <div className="counter">
                <p>{counter}</p>
                <div className="buttons">
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default TicketTrackers;