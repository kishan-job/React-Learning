import Person from "./components/Person";
import { AppContextProvider } from "./context/AppContextProvider";
import 
function App() {
  return (
    <>
      <AppContextProvider>
      <Person/>
      </AppContextProvider>
    </>
  );
}
export default App