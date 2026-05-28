import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import SearchBar from './components/searchbar/SearchBar' 
import NoteTable from './components/notes/noteList'
import { Patchouli, Sandalwood, Juniper } from './components/notes/notes-data'
import patchouli_img from './assets/noteimg/Patchouli_img.webp'
import sandalwood_img from './assets/noteimg/Sandalwood_img.webp'
import juniper_img from './assets/noteimg/picture.webp'
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
        notes={Patchouli}
        pics={patchouli_img}
      />

      <NoteTable 
        notes={Sandalwood}
        pics={sandalwood_img}
      />

      <NoteTable 
        notes={Juniper}
        pics={juniper_img}
      />
    </>
  );
}

export default App
