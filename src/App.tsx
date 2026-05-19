import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import SearchBar from './components/searchbar/SearchBar' 
import './App.css'

const App = () => {

  return (
    <>
      <SearchBar
        onSearch={(query) => console.log("query:", query)}
      />
      <ProductCard 
        perfumeObj={testPerfume}
      />
    </>
  );
}

export default App
