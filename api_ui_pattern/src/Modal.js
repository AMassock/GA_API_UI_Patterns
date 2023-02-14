import React from "react";

export default function Modal({open}) {
    if(!open) return null

    return(
        <div>
            <img src="https://www.akc.org/wp-content/uploads/2017/11/Affenpinscher-running-outdoors.jpg"></img>
        </div>
    )
}