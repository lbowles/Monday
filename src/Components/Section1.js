import React from 'react'
import "./Section1.css"

const Section = () => {
    return (
        <div className="container" style={{overflow:"visible",paddingBottom:"40px"}}>
            <div className="boarder2">
                <div className="boarder">
                    <h1 style={{marginLeft : "25px", maxWidth:"230px", marginTop:"-10px"}}>How many mondays are there in a week?</h1>
                    <h2 style={{marginLeft : "25px", marginTop:"-0px", marginBottom:"0px"}}>1?</h2>
                    <h1 style={{marginLeft : "25px", maxWidth:"230px", marginTop:"-0px"}}>No.</h1>
                    <h2 style={{marginLeft : "25px", marginTop:"-10px", marginBottom:"-30px"}}>5</h2>
                </div>
            </div>
        </div>
    )
}

export default Section
