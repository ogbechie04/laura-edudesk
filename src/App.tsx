import NavBar from "./components/NavBar";
import FeaturesSection from "./sections/FeaturesSection";
import IncomeReportSection from "./sections/IncomeReportSection";
import SalaryPaymentsSection from "./sections/SalaryPaymentsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import PlansSection from "./sections/PlansSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import TakeControlSection from "./sections/TakeControlSection";

function App() {
  return (
    <>
      <HeroSection />
      <NavBar />
      <IncomeReportSection />
      <FeaturesSection />
      <SalaryPaymentsSection />
      <PlansSection />
      <HowItWorksSection />
      <FaqSection />
      <TakeControlSection />
    </>
  );
}

export default App;
