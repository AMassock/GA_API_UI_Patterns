import React from "react";

export default function Modal({open, onClose}) {
    if(!open) return null

    return(
        <div>
            <h1>test</h1>
            <p onClick={onClose}className="closeBtn">X</p>
            <h1 className="pokeName">Pokemon Name</h1>
            <p className="pokeDesc">Pokemon Description</p>
        </div>
    )
}