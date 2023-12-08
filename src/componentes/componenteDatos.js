import React from "react";

const Datos = (props) =>{
    return(
        <div>
            <p>Tu nombre es: {props.nombre}</p>
            <p>La materia que estás cursando es: {props.materia}</p>
        </div>
    );
}

export default Datos;
