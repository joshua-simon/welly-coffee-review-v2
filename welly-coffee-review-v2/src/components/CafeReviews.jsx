import React, { useState,useEffect } from 'react'
import CafeHeader from './CafeHeader'
import Review from './Review'
import db from '../fbConfig'

const CafeReviews = ({match}) => {

    const [cafe,setCafe] = useState({name:'',photoURL:'',address:'',phoneNumber:'', website:''})
    const [reviews,setReviews] = useState([])
    let id = match.params.id

 useEffect(() => {
     
     let reviewArray = []
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
        db.collection('reviews')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                reviewArray.push(doc)
            })
            setReviews(reviewArray)
        })
    },[])
    


    let filteredReviews = reviews.filter(review => {
        return review.data().cafeName === cafe.name
    })

    return(
        <div>
           <CafeHeader cafe = {cafe}/>
           <Review reviews = {filteredReviews}/>
        </div>
    )
}

export default CafeReviews

