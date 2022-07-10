import "./App.css";
import Uniform from "./components/uniform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
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
            <Route path="/" element={<Uniform />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
