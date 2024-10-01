import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductCart from "./components/ProductCart/ProductCart";
import SelectedImage1 from "./components/SelectedImages";

function App() {
  return (
    <div>
      <ProductCart />
      <Header />
      <Main />
      <SelectedImage1 />
    </div>
  );
}

export default App;
