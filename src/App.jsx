import "./App.css";
import { AiCoachSection } from "./components/AiCoachSection";
import { Courses } from "./components/Courses";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

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
    </>
  )
}

export default App
