import { useEffect, useState,useCallback,useRef } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [specChar, setSpecCharInclude] = useState(false);
  let [number, setNumberInclude] = useState(false);
  let [cap, setCapInclude] = useState(false);
  let [password, setPassword] = useState("");
  let passwordref=useRef(null)

  // Here directly we use useCallbackhook to variable
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (cap) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specChar) str += "!@#$%^&*()";
    if (number) str += "1234567890";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, specChar, number, cap]);
  // Here inside arrow funciton we use useCallbackhook
  // const generatePassword=()=>{
  //   return useCallback(() => {
  //     let pass = "";
  //     let str = "abcdefghijklmnopqrstuvwxyz";
  //     if (cap) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //     if (specChar) str += "!@#$%^&*()";
  //     if (number) str += "1234567890";

  //     for (let i = 0; i < length; i++) {
  //       pass += str.charAt(Math.floor(Math.random() * str.length));
  //     }
  //     setPassword(pass);
  //   }, [length, specChar, number, cap]);
  // }

  useEffect(() => {
    generatePassword();
  }, [length, specChar, number, cap]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 px-4 py-8 rounded-lg bg-gray-600 text-orange-300">
        <h1 className="text-center font-bold">Paasword Generator</h1>
        <div className="flex flex-row  m-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Password..."
            readOnly
            className="w-full"
            value={password}
            ref={passwordref}
          />
          <button className="bg-blue-500 px-3 py-2 " onClick={() => {
            window.navigator.clipboard.writeText(passwordref.current.value);
            // window.navigator.clipboard.writeText(password);
            passwordref.current.select()
          }}>Copy</button>
        </div>
        <div className="flex flex-row justify-evenly my-8">
          <div className="flex gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Range {length}</label>
          </div>

          <div className="flex gap-x-1">
            <input
              type="checkbox"
              onChange={(e) => setNumberInclude(e.target.value)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              onChange={(e) => setSpecCharInclude(e.target.checked)}
            />
            <label htmlFor="">Char</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              onChange={() => setCapInclude((prev) => !prev)}
            />
            <label htmlFor="">Cap</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;