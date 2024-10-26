import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import FeaturesSection from "./sections/FeaturesSection";
import IncomeReportSection from "./sections/IncomeReportSection";
import AngledCard from "./components/AngledCard";

function App() {
  return (
    <>
      <NavBar />
      <FeaturesSection />
      <IncomeReportSection />
      <AngledCard />
    </>
  );
}

export default App;
