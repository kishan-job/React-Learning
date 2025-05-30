import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  currencyInfo,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd", // default value if user didn't pass the selectedCurrency when call this component
  amountDisable = false,
}) {
  const uid = useId();

  return (
    <>
      <div className="flex justify-between p-3 rounded-lg bg-white mb-2">
        <div className="w-1/3 ">
          <label htmlFor={uid}>{label}</label>
          <input
            type="number"
            name=""
            placeholder={amount}
            id={uid}
            disabled={amountDisable}
            className={``}
            onChange={(e) => {
              onAmountChange(Number(e.target.value));
            }}
          />
        </div>
        <div className="w-1/3">
          <p className="mb-1"> currency Type</p>
          <select
            name=""
            id=""
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {Object.keys(currencyInfo).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
