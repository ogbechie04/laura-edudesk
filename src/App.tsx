import NavBar from "./components/NavBar";
import FeaturesSection from "./sections/FeaturesSection";
import IncomeReportSection from "./sections/IncomeReportSection";
import SalaryPaymentsSection from "./sections/SalaryPaymentsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import PlansSection from "./sections/PlansSection";
import FaqAccordion from "./components/FaqAccordion";
import FaqCard from "./components/FaqCard";

function App() {
  return (
    <>
      <NavBar />
      <IncomeReportSection />
      <FeaturesSection />
      <SalaryPaymentsSection />
      <PlansSection />
      <HowItWorksSection />
      <FaqAccordion />
      <FaqCard />
    </>
  );
}

export default App;
