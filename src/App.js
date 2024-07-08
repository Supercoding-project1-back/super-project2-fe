import './App.css';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductUpload from './pages/ProductUpload/ProductUpload';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetail />
      {/* <ProductUpload /> */}
    </div>
  );
}

export default App;
