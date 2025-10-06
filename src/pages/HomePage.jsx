import HeroSection from "../components/home/HeroSection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import PatientMessage from "../components/home/PatientMessage";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ExpertiseSection />
      <PatientMessage />
    </div>
  );
}
