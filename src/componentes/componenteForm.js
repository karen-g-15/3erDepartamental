import React, {useState} from "react";

const ComponenteForm = ({onFormSubmit}) =>{
    const [nombre, setNombre] = useState('');
    const [materia, setMateria] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        onFormSubmit({nombre, materia});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </label>
            <br/>
            <label>
                Materia:
                <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)}/>
            </label>
            <br/>
            <button class='botones' type="submit">Enviar</button>
        </form>
    );
}

export default ComponenteForm