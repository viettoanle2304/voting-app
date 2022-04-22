import "./App.css";
import ProductList from "./components/ProductList.js";

function App() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="w-2/3 mx-auto py-1 text-3xl font-bold text-center border-b border-gray-300 mb-10">
        Popular Products Changing Testing
      </h1>
      <div id="content">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
