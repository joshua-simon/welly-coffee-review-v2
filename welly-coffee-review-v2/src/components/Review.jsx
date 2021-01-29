import React from 'react'
import {convertToStars} from '../helperFunctions'

const Review = (props) => {
    const{reviews} = props

    return (
        <div>
            {
                reviews.map(review => {  
                    let {title,blurb,stars,userName} = review.data()
                    const starRating = convertToStars(stars)
                    return(
                        <div className = 'review-container'>
                             <h1>{title}</h1>
                             {
                                 starRating.map(item => {
                                     return item
                                 })
                             }
                             <h2>{`Review by: ${userName}`}</h2>
                             <p>{blurb}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Review