import React from 'react'

const Cafe = (props) => {
    const {cafes} = props
    return (
        <div>
            {
                cafes.map(cafe => {
                    const {name, photoURL} = cafe.data()
                    return (
                        <div>
                            <h2>{name}</h2>
                            <img src = {photoURL}></img>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cafe