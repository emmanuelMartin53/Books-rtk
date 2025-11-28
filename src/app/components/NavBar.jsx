// import { Link } from "react-router-dom";
const NavBar = () => {
  return (

   <header>
      <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
          <h4 className="mr-md-auto">
          <a href="/" className="text-decoration-none text-white">BOOKS</a>
          </h4>

        <nav className="btn-group ms-md-auto">
          <a href="/" className="btn btn-light">Accueil</a>
          <a href="/search" className="btn btn-light">Rechercher</a>
        </nav>
      </div>
   </header>
  )
}

export default NavBar;
