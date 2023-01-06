import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes></Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
