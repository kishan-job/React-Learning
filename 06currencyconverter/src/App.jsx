import React, { useState } from "react";
import useCurrecyinfo from "./hooks/useCurrecyinfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrecyinfo(from);

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg')] bg-cover bg-no-repeat ">
        <div className="p-[2vw] bg-slate-300  bg-opacity-50 text-black-400 border border-gray-60 rounded-lg backdrop-blur-sm">
          <form
            className="bg-re"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              amount={amount}
              currencyInfo={currencyInfo}
              label={"from"}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
            <div className="relative">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
              >
                SWAP
              </button>
            </div>

            <InputBox
              amount={convertedAmount}
              currencyInfo={currencyInfo}
              label={"to"}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
            />
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
          </form>
        </div>
        <div>1</div>
      </div>
    </>
  );
}

export default App;
