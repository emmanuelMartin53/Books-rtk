import { useState } from "react";
import {addBook as addBookAction} from "../features/library/librarySlice";
import { useDispatch } from "react-redux";


const Card = ({ booksArray }) => {


  const [clickedIds, setClickedIds] = useState([])
  const dispatch = useDispatch()


  const handleSave = (id, title, author) => {
    const bookToSave = {title, author}
    dispatch(addBookAction(bookToSave))
    setClickedIds([...clickedIds, id])
  }

  const handleIsDisabled = (id) => {
    return clickedIds.includes(id)
  }

  if (!Array.isArray(booksArray)) return null; // sécurité

  return (
    <div id="accordion">
      {booksArray.map(({ id, volumeInfo }) => {

        const safeId = `book-${id}`; // évite conflits

        return (
          <div className="card mb-2" key={id}>
            <div className="card-header">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${safeId}`}
                  aria-expanded="false"
                >
                  {volumeInfo?.title || "Titre inconnu"}
                </button>
              </h5>
            </div>

            <div className="collapse" id={safeId} data-bs-parent="#accordion">
              <div className="card-body">

                {
                  volumeInfo?.imageLinks?.thumbnail && (
                    <img
                      src={volumeInfo.imageLinks.thumbnail}
                      alt={volumeInfo.title}
                    />
                    )
                }

                <h4 className="card-title">Titre: {volumeInfo?.title}</h4>

                <h5 className="card-title">
                  Auteur : {volumeInfo?.authors?.[0] || "Auteur inconnu"}
                </h5>

                <p className="card-text">
                  Description: {volumeInfo?.description || "Aucune description disponible."}
                </p>

                <a
                  href={volumeInfo?.previewLink}
                  className="btn btn-outline-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plus d'infos
                </a>

                {
                  !handleIsDisabled(id) &&
                  <button className="btn btn-outline-info ms-3" onClick={() => handleSave(id, volumeInfo.title, volumeInfo.authors[0])}>
                    Enregistrer
                  </button>
                }

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
