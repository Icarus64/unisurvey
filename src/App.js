import "./App.css";
import Uniform from "./components/uniform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState(false);
  const handleChange = (data) => {
    console.log("you called me?");
    setFormData(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <title>UniSurvey</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <p>Uni-Survey</p>

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Uniform appState={formData} setAppState={handleChange} />
              }
            />
            <Route
              path="/dashboard"
              element={<Dashboard appState={formData} />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
