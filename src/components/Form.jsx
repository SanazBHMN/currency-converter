import { useState } from "react";
import FormFooter from "./FormFooter";

const IRR_TO_USD = 0.000024; // 1 IRR = 0.000024 USD
const USD_TO_IRR = 1 / IRR_TO_USD; // 1 USD = 41666.67 IRR

function Form() {
  const [fromCurrency, setFromCurrency] = useState("IRR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  const calculateResult = () => {
    if (!amount) {
      setResult("Please enter an amount");
      return;
    }
    let convertedAmount = 0;
    if (fromCurrency === "IRR" && toCurrency === "USD") {
      convertedAmount = parseFloat(amount) * IRR_TO_USD;
    } else if (fromCurrency === "USD" && toCurrency === "IRR") {
      convertedAmount = parseFloat(amount) * USD_TO_IRR;
    } else {
      convertedAmount = parseFloat(amount);
    }
    setResult(convertedAmount.toFixed(2));
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
          <option value="IRR">Iranian Rial (IRR)</option>
          <option value="USD">US Dollar</option>
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
          <option value="USD">US Dollar</option>
          <option value="IRR">Iranian Rial (IRR)</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateResult}>Convert</button>
      </div>
      <div>
        <label htmlFor="result">Result</label>
        <input type="text" id="result" disabled value={result} />
      </div>
      <FormFooter />
    </div>
  );
}

export default Form;
