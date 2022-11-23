import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
const isOdd = require("is-odd");

function App() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);
  const [message, setMessage] = useState("");

  // display message if number of guesses is odd
  useEffect(() => {
    if (isOdd(names.length)) {
      setMessage("What an odd number of guesses!");
    } else {
      setMessage("");
    }
  }, [names]);

  return (
    <>
      <h1 className="header">Name Age Guesser</h1>
      <div className="body">
        <div className="bodyTop">
          <h3 className="guesses">Total Guesses: {names.length}</h3>
          <p className="message">{message}</p>
        </div>
        <Form
          input={input}
          setInput={setInput}
          names={names}
          setNames={setNames}
        />
      </div>
    </>
  );
}

export default App;
