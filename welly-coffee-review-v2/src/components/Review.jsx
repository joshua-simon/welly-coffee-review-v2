import React from 'react'

const Review = (props) => {
    const{reviews} = props

    return (
        <div>
            {
                reviews.map(review => {  
                    let {title,blurb,stars,userName} = review.data()
                    return(
                        <div className = 'review-container'>
                             <h1>{title}</h1>
                             <h2>{`Review by: ${userName}`}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Review