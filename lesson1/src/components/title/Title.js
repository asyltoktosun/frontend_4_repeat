import React from "react";


function Title({titleObject}){

    return(
        <ul>
            {
                Object.keys(titleObject).map((key)=>(<li key={key}>{titleObject[key]}</li>))
            }
        </ul>
    )

}

export default Title;