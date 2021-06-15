import React, { useState } from "react"

export default function App() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
  
    const calculate = (e) => {
      e.preventDefault();
      const formValid = +height > 0 && +mass > 0;
      if (!formValid) {
        return;
      }
      const bmi = +mass / (+height) ** 2;
      setBmi(bmi);
    };
    
    
        return(
            <div>
                <div className="calculator">
                    <p>Sprawdź swoje BMI</p>
                
                        <form className="form-bmi" onSubmit={calculate}>
                            <input 
                                className="input-number"
                                value={mass} 
                                onChange={(e) => setMass(e.target.value)}
                            /> kg
                            <br /><br />
                            <input 
                                className="input-number"
                                value={height} 
                                onChange={(e) => setHeight(e.target.value)}
                            /> m
                            <br /> <br />
                            <button type="submit">Sprawdź</button>
                        </form>
                </div>
                <div className="result">
                    <p>Twoje BMI: {bmi}</p>
                </div>
            </div>
  );
} 