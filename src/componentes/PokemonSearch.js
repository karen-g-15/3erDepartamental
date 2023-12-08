// Importación de los módulos necesarios de React y Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definición del componente funcional PokemonSearch
const PokemonSearch = () => {
  // Estados para gestionar el nombre del Pokémon y los datos del Pokémon
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  // Efecto secundario que se ejecuta cuando cambia el nombre del Pokémon
  useEffect(() => {
    // Función asíncrona para obtener datos del Pokémon desde la API
    const fetchData = async () => {
      // Verificación de que el nombre del Pokémon no esté vacío
      if (pokemonName.trim() !== '') {
        try {
          // Petición GET a la API de Pokémon con el nombre proporcionado
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
          // Actualización del estado con los datos del Pokémon
          setPokemonData(response.data);
        } catch (error) {
          // Manejo de errores en caso de fallo al obtener los datos del Pokémon
          console.error('Error fetching data', error);
          // Establecimiento de los datos del Pokémon a null en caso de error
          setPokemonData(null);
        }
      } else {
        // Si el nombre del Pokémon está vacío, establecer los datos del Pokémon a null
        setPokemonData(null);
      }
    };

    // Llamada a la función fetchData
    fetchData();
  }, [pokemonName]); // Dependencia del efecto secundario: pokemonName

  // Renderizado del componente
  return (
    <div>
      {/* Etiqueta y entrada para buscar Pokémon */}
      <label>
        Search-Pokemon:
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </label>

      {/* Condición para renderizar los datos del Pokémon si existen */}
      {pokemonData && (
        <div>
          {/* Nombre del Pokémon */}
          <h2>{pokemonData.name}</h2>
          {/* Imagen del Pokémon */}
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />

          {/* Sección de habilidades del Pokémon */}
          <div>
            <strong>Abilities:</strong>
            <ul>
              {/* Mapeo de las habilidades del Pokémon */}
              {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>

          {/* Experiencia base del Pokémon */}
          <div>
            <strong>Base Experience:</strong> {pokemonData.base_experience}
          </div>
        </div>
      )}
    </div>
  );
};

// Exportación del componente PokemonSearch para su uso en otras partes de la aplicación
export default PokemonSearch;
