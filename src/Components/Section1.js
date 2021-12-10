import React from 'react'
import "./Section1.css"

const Section = () => {
    return (
        <div className="container" style={{overflow:"visible"}}>
        
            <div className="boarder2">
                <div className="boarder">
                    <h1 style={{marginLeft : "25px", maxWidth:"230px"}}>How many mondays are there is a week?</h1>
                    <h2 style={{marginLeft : "25px", marginTop:"-0px", marginBottom:"0px"}}>1?</h2>
                    <h1 style={{marginLeft : "25px", maxWidth:"230px", marginTop:"-0px"}}>No.</h1>
                    <h2 style={{marginLeft : "25px", marginTop:"-10px", marginBottom:"-10px"}}>5</h2>
                </div>
            </div>
            <h1>Here, look at the week.</h1>

        </div>
    )
}

export default Section
