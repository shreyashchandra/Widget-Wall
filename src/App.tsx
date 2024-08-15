import "./App.css";
import ChartBox from "./components/ChartBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full flex flex-col relative">
        <div className="p-5 sticky top-0 bg-black/70">
          <Navbar />
        </div>
        <div className="p-20 md:p-10 bg-slate-950">
          <ChartBox />
        </div>
      </div>
    </>
  );
}

export default App;
