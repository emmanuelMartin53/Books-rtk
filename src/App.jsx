// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './app/components/NavBar';
import Footer from './app/components/footer';
import BooksView from './app/features/library/BooksView';
import './App.css'
// import SearchView from './app/features/fetchBooks/SearchView';

const App = () => {


  return (
    <div>
        <NavBar />
          <BooksView />
        <Footer />
    </div>
  )
}

export default App
