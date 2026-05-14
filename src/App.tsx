import ProductCard from './components/ProductCard'
import { testPerfume } from './components/product-data-test'
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
