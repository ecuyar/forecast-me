import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavigationBar />}>
            <Route index exact path="" element={<HomePage />} />
            <Route exact path="city" element={<CityPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
