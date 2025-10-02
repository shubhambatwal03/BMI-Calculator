import { useState } from "react";
import "./App.css";

useState;
function App() {
  //making states
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic
  let handleOnSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = weight / height * height; // Logic of BMI Calculation (formula BMI = w(kg)/h(m)^2 )
      setBmi(bmi.toFixed(1));

      // Message logic
      if (bmi < 25) {
        setMessage("Your UnderWeight");
      } else if (bmi >= 25 && bmi > 30) {
        setMessage("Your Healthy!");
      } else {
        setMessage("Your OverWeight");
      }
    }
    setWeight("");
    setHeight("");
  };

  // Reload Logic
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="weight">Weight(kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Enter Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)} // for getting input value of the user
          required
        />

        <label htmlFor="height">Height(m):</label>
        <input
          type="number"
          id="height"
          name="height"
          placeholder="Enter Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <button type="submit" className="btn" onClick={handleOnSubmit}>
          Submit
        </button>
        <button type="submit" className="btn btn-outline" onClick={reload}>
          Reload
        </button>
        <div className="center">
          <h2>Your BMI is: {bmi}</h2>
          <h3>{message}</h3>
        </div>
      </form>
    </div>
  );
}

export default App;
