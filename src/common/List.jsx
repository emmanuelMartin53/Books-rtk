import React from 'react'

const List = ({data}) => {
  return (
    <ul className="list-group">
      {
        data.length > 0 ?
        data.map((data) => {
            return (
              <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                <span>Titre: <strong> {data.title}</strong></span>
                <span>Auteur: <strong> {data.author}</strong></span>
                <button
                  className="btn btn-danger"
                  onClick={() => {}}
                >
                X
                </button>
              </li>
            )
        })
        : <p className="text-center">Aucun livre à afficher</p>
      }
    </ul>
  )
}

export default List
