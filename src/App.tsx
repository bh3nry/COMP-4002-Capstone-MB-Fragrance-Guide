import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import SearchBar from './components/searchbar/SearchBar' 
import NoteTable from './components/notes/noteList'
import { ScentNotes } from './components/notes/notes-data'
import Header from './components/commons/header/Header'
 
import './App.css'

const App = () => {

  return (
    <>
      <Header />
      <SearchBar
        onSearch={(query) => console.log("query:", query)}
      />
      <ProductCard 
        perfumeObj={testPerfume}
      />

      <NoteTable 
        notes={ScentNotes}
      />
    </>
  );
}

export default App
