import React, { useState,useEffect } from 'react'
import db from '../fbConfig'

const CafeReviews = ({match}) => {

    const [cafe,setCafe] = useState([])
    let id = match.params.id

 useEffect(() => {
        db.collection('cafes')
        .doc(id)
        .get()
        .then(snapshot => {
          setCafe(snapshot)
        })
    },[])

    return(
        <div>
           <h1>{cafe.data().name}</h1> 
        </div>
    )
}

export default CafeReviews