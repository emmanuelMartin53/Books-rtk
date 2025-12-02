import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './app/components/NavBar';
import Footer from './app/components/footer';
import LibraryView from './app/features/library/LibraryView';
import BootstrapComponent from './app/components/BootstrapComponent';
import './App.css'
import FetchBooksView from './app/features/fetchBooks/FetchBooksView';
// import SearchView from './app/features/fetchBooks/SearchView';
const App = () => {


  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LibraryView />}/>
          <Route path="/search" element={<FetchBooksView />} />
        </Routes>
       
      <Footer />
    </Router>
    </div>
  )
}

export default App
