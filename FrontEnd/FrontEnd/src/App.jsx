import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import "./App.css";
import { RecipesPage } from "./components/recipes";  // Import the Recipes page component

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<>
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Contact data={landingPageData.Contact} />
          </>} />
          <Route path="/recipes" element={<RecipesPage />} /> {/* Route for Recipes Page */}
        </Routes>
        <Footer data={landingPageData.Footer} /> {/* Render Footer here */}
      </div>
    </Router>
  );
};

export default App;
