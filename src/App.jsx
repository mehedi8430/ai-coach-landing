import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(103,151,255,0.3)] to-[rgba(255,111,185,0.1)] ">
        <div className="px-[240px]">
          <Header />
          <Hero />
        </div>
      </div >
    </>
  )
}

export default App
