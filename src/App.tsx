import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import './App.css'

const App = () => {

  return (
    <>
      <ProductCard 
        perfumeObj={testPerfume}
      />
    </>
  )
}

export default App
