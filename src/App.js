import logo from "./logo.svg";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import HomepageContent from "./pages/HomepageContent";
import Categories from "./pages/Categories";
import BestSeller from "./pages/BestSeller";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className='App'>
      <Homepage />
      <HomepageContent />
      <Categories />
      <BestSeller />
      <About />
      <Footer />
      {/* <Catalog/> */}
    </div>
  );
}

export default App;
