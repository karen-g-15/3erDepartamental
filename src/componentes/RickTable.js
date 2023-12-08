// Importación de los módulos necesarios de React y Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importación de estilos desde el archivo CharacterList.css
import './CharacterList.css';

// Definición del componente funcional CharacterList
const CharacterList = () => {
  // Estados para gestionar la lista de personajes y el número de página actual
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  // Efecto secundario que se ejecuta al cargar el componente o cuando cambia la página
  useEffect(() => {
    // Función asíncrona para obtener datos de personajes desde la API
    const fetchData = async () => {
      try {
        // Petición GET a la API de Rick and Morty con el número de página actual
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        // Actualización del estado con la lista de personajes obtenida
        setCharacters(response.data.results);
      } catch (error) {
        // Manejo de errores en caso de fallo al obtener los datos
        console.error('Error fetching data:', error);
      }
    };

    // Llamada a la función fetchData
    fetchData();
  }, [page]); // Dependencia del efecto secundario: page

  // Función para manejar el evento de retroceso a la página anterior
  const handlePrevPage = () => {
    // Actualización del estado de la página, asegurándose de que no sea menor que 1
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Función para manejar el evento de avanzar a la siguiente página
  const handleNextPage = () => {
    // Actualización del estado de la página
    setPage((prevPage) => prevPage + 1);
  };

  // Renderizado del componente
  return (
    <div className='rick'>
      {/* Encabezado del componente */}
      <h2>Rick and Morty Characters</h2>

      {/* Sección de navegación de páginas */}
      <div>
        {/* Botón para retroceder a la página anterior, desactivado si está en la primera página */}
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous Page
        </button>
        {/* Texto que muestra el número de página actual */}
        <span> Page {page} </span>
        {/* Botón para avanzar a la siguiente página */}
        <button onClick={handleNextPage}>Next Page</button>
      </div>

      {/* Contenedor de personajes */}
      <div className="character-container">
        {/* Mapeo de la lista de personajes para mostrar cada uno */}
        {characters.map((character) => (
          <div key={character.id} className="character-box">
            {/* Imagen del personaje */}
            <img src={character.image} alt={character.name} />
            {/* Nombre del personaje */}
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exportación del componente CharacterList para su uso en otras partes de la aplicación
export default CharacterList;
