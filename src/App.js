// Importación de estilos desde el archivo App.css
import './fondo/App.css';

// Importación de componentes React
import React, { useState } from 'react';
import {auth, google} from './componentes/firebase/google';
// Importación de componentes personalizados
import ComponenteForm from './componentes/componenteForm';
import EdadPerro from './componentes/componenteEdadP';
import PokemonSearch from './componentes/PokemonSearch';
import RickTable from './componentes/RickTable';
import Login from './componentes/firebase/Login';
import Fecha from './componentes/componenteFecha';
import Datos from './componentes/componenteDatos';

// Definición del componente funcional App
function App() {
  const [user, setUser] = useState(null)
  const[photo, setPhoto]= useState(null)
  const [displayname, setDisplayName]=useState(null);
  const loginGoogle = () => {
    auth.signInWithPopup(google)
    .then(respuesta =>{
      setUser(respuesta.user)
      setPhoto(respuesta.user.photoURL)
      setDisplayName(respuesta.user.displayname)
    }).catch(err =>{
      console.log(err)
    })
  }

  // Estado para almacenar las operaciones de edad de perro
  const [operaciones, setOperacion] = useState([]);

  // Función para calcular la edad del perro y actualizar el estado
  function calcular(event) {
    event.preventDefault();
    const edadH = parseInt(event.target.valor1.value, 10);
    const edadP = edadH * 7;
    const nuevo = {
      resultado: edadP,
      valor1: edadH
    };
    setOperacion([nuevo, ...operaciones]);
    event.target.valor1.value = '';
  }

  // Estado para almacenar los datos del formulario
  const [datos, setDatos] = useState({ nombre: '', materia: '' });

  // Estados para habilitar/deshabilitar módulos
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState(false);
  const [isDateModuleEnabled, setDateModuleEnabled] = useState(false);
  const [isFormModuleEnabled, setFormModuleEnabled] = useState(false);
  const [isSearchModuleEnabled, setSearchModuleEnabled] = useState(false);
  const [isRickModuleEnabled, setRickModuleEnabled] = useState(false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState(false);

  // Funciones para cambiar el estado de habilitar/deshabilitar módulos
  const toggleLoginModule = () => {
    setLoginModuleEnabled(!isLoginModuleEnabled);
  };

  const toggleRickModule = () => {
    setRickModuleEnabled(!isRickModuleEnabled);
  };

  const toggleSearchModule = () => {
    setSearchModuleEnabled(!isSearchModuleEnabled);
  };

  const toggleAgeModule = () => {
    setAgeModuleEnabled(!isAgeModuleEnabled);
  };

  const toggleDateModule = () => {
    setDateModuleEnabled(!isDateModuleEnabled);
  };

  const toggleFormModule = () => {
    setFormModuleEnabled(!isFormModuleEnabled);
  };

  // Función para manejar el envío del formulario y actualizar los datos
  const handleFormSubmit = (data) => {
    setDatos(data);
  };

  // Renderizado del componente
  return (
    <div>
      {/* Encabezado */}
      <h1>
        <marquee behavior="scroll" direction="right" scrollamount="20">
          React 3er Departamental
        </marquee>
      </h1>
      <h2>
        <center>Hola esta es mi primera práctica en React</center>
      </h2>
      <center>

        <h1>Login con google</h1>
        <button className='boton' onClick={loginGoogle}>Login con google</button><br />
        {
          photo ?
          (
            <div>
              <img height="150" src={photo} alt='photo usuario'/>
              <p>{displayname}</p>
            </div>
          ):
          (
            <span></span>
          )
        }
        {/* Botones y módulos para habilitar/deshabilitar */}
        <button class='boton' onClick={toggleAgeModule}>
          {isAgeModuleEnabled ? 'Deshabilitar Módulo Edad Canina' : 'Habilitar Módulo Edad Canina'}
        </button>
        {isAgeModuleEnabled && (
          <>
            <form onSubmit={calcular}>
              <p>Ingrese su edad: <input type="text" name="valor1" /></p>
              <input class='botones' type="submit" value="Calcular" />
            </form>
            <EdadPerro resultados={operaciones} />
          </>
        )}

        <button class='boton' onClick={toggleDateModule}>
          {isDateModuleEnabled ? 'Deshabilitar Módulo Fecha' : 'Habilitar Módulo Fecha'}
        </button>
        {isDateModuleEnabled && <Fecha />}

        <button class='boton' onClick={toggleFormModule}>
          {isFormModuleEnabled ? 'Deshabilitar Módulo Formulario' : 'Habilitar Módulo Formulario'}
        </button>
        {isFormModuleEnabled && (
          <>
            <ComponenteForm onFormSubmit={handleFormSubmit} />
            <Datos nombre={datos.nombre} materia={datos.materia} />
          </>
        )}

        <button class='boton' onClick={toggleSearchModule}>
          {isSearchModuleEnabled ? 'Deshabilitar Módulo Search' : 'Habilitar Módulo Search'}
        </button>
        {isSearchModuleEnabled && <PokemonSearch />}

        <button class='boton' onClick={toggleRickModule}>
          {isRickModuleEnabled ? 'Deshabilitar Tabla Rick & Morty ' : 'Habilitar Tabla Rick & Morty'}
        </button>
        {isRickModuleEnabled && <RickTable />}

        <button class='boton' onClick={toggleLoginModule}>
          {isLoginModuleEnabled ? 'Deshabilitar Inicio de Sesion ' : 'Habilitar Inicio de Sesion'}
        </button>
        {isLoginModuleEnabled && <Login />}
      </center>
    </div>
  );
}

// Exportación del componente App para su uso en otras partes de la aplicación
export default App;
