import "./Section3.css"

const Section3 = ({days}) => {
    return (
        <div className="container" style={{overflow:"visible",padding:"40px",paddingBottom:"80px"}}>
            <div className="boarder2">
                <div className="boarder">
                    <div className="horizontal">
                    <h1 style={{marginLeft : "25px", display: "inline-block", alignSelf: "flex-end", marginBottom:"0px"}}>Did you know that there’s</h1>
                    <h2 style={{marginLeft : "25px", marginTop:"-40px", marginBottom:"-40px"}}>{days}</h2>
                    <h1 style={{marginLeft : "25px", display: "inline-block", alignSelf: "flex-end", marginBottom:"0px"}}>mondays left this year.</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Section3
