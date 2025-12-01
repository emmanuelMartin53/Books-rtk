import { addBook as addBookAction, getLocalStorageData as getLocalStorageDataAction} from "./librarySlice"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BootstrapComponent from "../../components/BootstrapComponent";
import List from "../../common/List";
import DeleteAllBtn from "../../common/DeleteAllBtn";


const LibraryView = () => {

  const initialState = {
    title: "",
    author: ""
  }

  const [newData, setNewData] = useState(initialState)
  // console.log(newData)

  const libraryData = useSelector((state) => state.library.books)
  console.log(libraryData)

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("bookData")) {
      dispatch(getLocalStorageDataAction())
    }
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newData)
    dispatch(addBookAction(newData))
    setNewData(initialState);
  }



  return (
      <>
        <BootstrapComponent subtitle ="Ajoutez un livre à votre bibliothèque">
          <form className="row g-3 justify-content-center mt-4" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 m-2">
                    <input
                      type="text"
                      value={newData.title}
                      className="form-control"
                      placeholder="Titre"
                      required
                      onChange={(event) => setNewData({...newData, title: event.target.value})}
                    />
                  </div>

                   <div className="col-lg-4 m-2">
                    <input
                      type="text"
                      value={newData.author}
                      className="form-control"
                      placeholder="Auteur"
                      required
                      onChange={(event) => setNewData({...newData, author: event.target.value})}
                    />
                  </div>
                </div>
                  <div className="justify-content-center m-2">
                    <button className="btn btn-warning">Ajouter un livre</button>
                  </div>
              </div>

          </form>
        </BootstrapComponent>
        <main className="container">
          <List data={libraryData}/>
          <DeleteAllBtn />
        </main>
      </>
  );
};



export default LibraryView;
