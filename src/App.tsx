import SearchBar from './components/searchbar/SearchBar' 
import './App.css'

function App() {

  return (
    <>
      <SearchBar
        onSearch={(query) => console.log("query:", query)}
      />
    </>
  );
}

export default App
