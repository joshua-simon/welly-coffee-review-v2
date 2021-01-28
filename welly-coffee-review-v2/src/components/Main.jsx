import React from 'react'
import AddReview from './AddReview'
import CafeList from './CafeList'
import Nav from './Nav'

const Main = () => {
    return(
    <div className="main-container">
        <Nav/>
        <div className = 'main-block-one'>
            <CafeList/>
            <AddReview/>
        </div>
    </div>
    )
}

export default Main