import "./App.scss";
import Form from "./Components/Form";
import { useState } from "react";

const App = () => {
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [dateMM, setDateMM] = useState("00");
  const [dateYY, setDateYY] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <>
      <main>
        <div className="left">
          <div className="card front">
            <div className="logo"></div>
            <p className="card-number">{cardNumber || "0000 0000 0000 0000"}</p>
            <div className="front-info">
              <p className="name">{cardName || "Jane Appleseed"}</p>
              <p className="date">{`${dateMM || "00"}/${dateYY || "00"}`}</p>
            </div>
          </div>

          <div className="card back">
            <p className="cvc">{cvc || "000"}</p>
          </div>
        </div>
        <div className="right">
          <Form
            setCardName={setCardName}
            setCardNumber={setCardNumber}
            setDateMM={setDateMM}
            setDateYY={setDateYY}
            setCvc={setCvc}
          />
        </div>
      </main>
    </>
  );
};

export default App;
