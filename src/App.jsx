import "./App.css";
import { AiCoachSection } from "./components/AiCoachSection";
import { Courses } from "./components/Courses";
import { FaqSection } from "./components/FaqSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TestimonialSection } from "./components/TestimonialSection";

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(103,151,255,0.3)] to-[rgba(255,111,185,0.1)] ">
        <div className="w-[1440px] mx-auto ">
          <Header />
          <HeroSection />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-800 to-blue-700 ">
        <AiCoachSection />
      </div>

      <Courses />
      <FaqSection />
      <TestimonialSection />

      <div className="bg-[#FAFAFA]">

      </div>
    </>
  )
}

export default App
