import { useState } from "react";
// import components
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormSelectInput from "./FormSelectInput";
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
      <FormHeader />
      <FormSelectInput
        label="From"
        id="fromCurrency"
        selectValue={fromCurrency}
        onChange={(e) => handleFromCurrencyChange(e.target.value)}
        options={[
          { optionInnerText: "Iranian Rial (IRR)", optionValue: "IRR" },
          { optionInnerText: "US Dollar", optionValue: "USD" },
        ]}
      />
      <FormSelectInput
        label="To"
        id="toCurrency"
        selectValue={toCurrency}
        onChange={(e) => handleToCurrencyChange(e.target.value)}
        options={[
          { optionInnerText: "US Dollar", optionValue: "USD" },
          { optionInnerText: "Iranian Rial (IRR)", optionValue: "IRR" },
        ]}
      />
      <FormInput
        label="Amount"
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeHolder="Enter a numeric value"
      />
      <div>
        <button onClick={calculateResult}>Convert</button>
      </div>
      <FormInput
        label="Result"
        id="result"
        type="text"
        value={result}
        disabled={true}
      />
      <FormFooter />
    </div>
  );
}

export default Form;
