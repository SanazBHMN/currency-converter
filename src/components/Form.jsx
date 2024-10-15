import { useState } from "react";
import FormFooter from "./FormFooter";

const IRR_TO_USD = 0.000024; // 1 IRR = 0.000024 USD
const USD_TO_IRR = 1 / IRR_TO_USD; // 1 USD = 41666.67 IRR

function Form() {
  const [fromCurrency, setFromCurrency] = useState("IRR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="fromCurrency">From</label>
        <select
          name="fromCurrency"
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => handleFromCurrencyChange(e.target.value)}
        >
          <option value="irr">Iranian Rial (IRR)</option>
          <option value="usd">US Dollar</option>
        </select>
      </div>
      <div>
        <label htmlFor="toCurrency">To</label>
        <select
          name="toCurrency"
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => handleToCurrencyChange(e.target.value)}
        >
          <option value="usd">US Dollar</option>
          <option value="irr">Iranian Rial (IRR)</option>
        </select>
      </div>
      <div>
        <label htmlFor="result">Result</label>
        <input type="text" id="result" disabled />
      </div>
      <FormFooter />
    </div>
  );
}

export default Form;
