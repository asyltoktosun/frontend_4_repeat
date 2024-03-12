import React from "react";


function About({aboutObject}){

    return(
        <ul>
            {
                Object.keys(aboutObject).map((key)=>(<li key={key}>{aboutObject[key]}</li>))
            }
        </ul>
    )

}

export default About;