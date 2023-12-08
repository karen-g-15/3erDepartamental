import React from "react";

const EdadPerro = (props) =>{
    return(
        <ul>
            {props.resultados.map((elemento)=>
            <li>Su edad de perro es: {elemento.resultado}</li>
            )}
        </ul>
    )
}

export default EdadPerro