import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomepageContent from "./pages/HomepageContent";
import Catalog from "./pages/Catalog";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomepageContent />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/product-detail' element={<ProductDetail />} />

        {/* <Route path='/footer' element={<Footer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
