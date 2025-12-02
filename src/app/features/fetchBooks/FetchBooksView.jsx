import BootstrapComponent from "../../components/BootstrapComponent";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks as fetchBooksAsyncAction} from "./fetchBooksSlice";

const FetchBooksView = () => {

  const [title, setTitle] = useState("");


  const booksSliceData = useSelector((state) => state.search);
  console.log(booksSliceData)

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchBooksAsyncAction(title));
  };

  return (
    <>
      <BootstrapComponent subtitle="Recherchez un livre sur Google">
        <form className="row g-3 justify-content-center mt-4"  onClick={handleSubmit}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 m-2">
                <input
                  type="text"
                  value={title}
                  className="form-control"
                  placeholder="Rechercher un livre ..."
                  required
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
          </div>
            <div className="row justify-content-center mt-2">
              <button className="btn btn-warning col-lg-2">Rechercher</button>
            </div>
        </form>
      </BootstrapComponent>
    </>
  );
};

export default FetchBooksView;
