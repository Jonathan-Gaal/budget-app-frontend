import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Components/Transactions";
import Show from "./Pages/Show";
import FourOFour from "./Pages/Four0Four";
import New from "./Pages/New";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
