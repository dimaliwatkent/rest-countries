import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:ccn3" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;
