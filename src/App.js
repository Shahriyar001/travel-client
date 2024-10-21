import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Ways from "./Components/Ways/Ways";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Home />
      <Ways />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
