import React, { useState,useEffect } from 'react'
import CafeHeader from './CafeHeader'
import db from '../fbConfig'

const CafeReviews = ({match}) => {

    const [cafe,setCafe] = useState({name:'',photoURL:'',address:'',phoneNumber:'', website:''})
    let id = match.params.id

 useEffect(() => {
        db.collection('cafes')
        .doc(id)
        .get()
        .then(snapshot => {
          setCafe({
              name: snapshot.data().name,
              photoURL: snapshot.data().photoURL,
              address: snapshot.data().address,
              phoneNumber: snapshot.data().phoneNumber,
              website: snapshot.data().website
          })
        })
    },[])

    return(
        <div>
           <CafeHeader cafe = {cafe}/>
        </div>
    )
}

export default CafeReviews