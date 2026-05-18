import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import SearchBar from './components/searchbar/SearchBar' 
import './App.css'

const App = () => {

  return (
    <>
      <ProductCard 
        perfumeObj={testPerfume}
      />
      <SearchBar
        onSearch={(query) => console.log("query:", query)}
      />
    </>
  );
}

export default App
