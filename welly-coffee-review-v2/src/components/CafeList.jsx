import React, { useState,useEffect } from 'react'
import db from '../fbConfig'
import Cafe from './Cafe'

const CafeList = () => {
    const [cafes,setCafe] = useState([])

    useEffect(() => {
        let cafeArray = []
        db.collection('cafes')
        .get()
        .then(snapshot => {
            snapshot.forEach(cafe => {
                cafeArray.push(cafe)
            })
            setCafe(cafeArray)
        })
    },[])

    return(
        <div>
            <Cafe cafes = {cafes}/>
        </div>
    )
}

export default CafeList