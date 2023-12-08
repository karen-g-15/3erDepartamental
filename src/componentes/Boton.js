import React from "react";

function Boton({tipo, actividad, texto}){
    return(
        <button className={tipo ? "boton_clic" : "boton_reiniciar"} onClick={actividad}>
            {texto}
        </button>
        );
}
export default Boton;