import React, {useState, useEffect} from 'react'
import db from './fbConfig'



const TestComponent = () => {

    const [cafe,setCafe] = useState([])

    useEffect(() => {
    let arr = []
    db.collection('cafes')
    .get()
    .then(snapshot=> {
       snapshot.forEach(item => {
           arr.push(item)
        })
        setCafe(arr)
    })
},[])
    
return(
    <div>
        {
            cafe.map(item => {
                return <h1>{item.data().name}</h1>
            })
        }
    </div>
    )
}

export default TestComponent