import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer, NavBar } from "./components";


function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
