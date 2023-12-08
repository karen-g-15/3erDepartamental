import React from "react";

const Fecha= () =>{
    const fecha = new Date();
    return(
      <p>{fecha.toString()}</p>
    )
  }

  export default Fecha