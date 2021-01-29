import React from 'react'
import {Link} from 'react-router-dom'

const Cafe = (props) => {
  const { cafes } = props
  return (
    <div className="cafe-grid">
      {
      cafes.map((cafe) => {
        const { name, photoURL } = cafe.data()
        return (
          <Link
            to={`/cafe-reviews/${cafe.id}`}
            style={{ textDecoration: "none", color: "#686262" }}
          >
            <div className="cafe-container">
              <h3>{name}</h3>
              <img src={photoURL}></img>
            </div>
          </Link>
        )
      })
      }
    </div>
  )
}
export default Cafe