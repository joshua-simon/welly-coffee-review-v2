import React from 'react'
import AddReview from './AddReview'
import CafeList from './CafeList'

const Main = () => {
    return(
        <div className = 'main-block-one'>
            <CafeList/>
            <AddReview/>
        </div>
    )
}

export default Main