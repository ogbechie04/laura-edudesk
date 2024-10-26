import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import FeaturesSection from "./sections/FeaturesSection";
import IncomeReportSection from "./sections/IncomeReportSection";
import AngledCard from "./components/AngledCard";
import SalaryPaymentsSection from "./sections/SalaryPaymentsSection";
import HowItWorksSteps from "./components/HowItWorksSteps";
import HowItWorksSection from "./sections/HowItWorksSection";
import PlanCard from "./components/PlanCard";

function App() {
  return (
    <>
      <NavBar />
      <FeaturesSection />
      <IncomeReportSection />
      <AngledCard />
      <SalaryPaymentsSection />
      <HowItWorksSteps />
      <HowItWorksSection />
      <PlanCard />
    </>
  );
}

export default App;
