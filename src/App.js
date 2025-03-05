import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./pages/CarsList/CarList";
import CarOverview from "./components/caroverview"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/car/:id" element={<CarOverview />} /> 
      </Routes>
    </Router>
  );
}

export default App;
