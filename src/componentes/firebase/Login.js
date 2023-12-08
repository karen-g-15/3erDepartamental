// Importación de los módulos necesarios de React y Firebase
import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Importación específica de la función 'initializeApp' de Firebase
import{initializeApp} from 'firebase/app';

// Configuración de Firebase con las credenciales de la aplicación
const firebaseConfig = {
  apiKey: "AIzaSyAYkpRW4Kx8xj3WZOGrnXWjiiyC4zJl7HE",
  authDomain: "grupo15601-c06ab.firebaseapp.com",
  projectId: "grupo15601-c06ab",
  storageBucket: "grupo15601-c06ab.appspot.com",
  messagingSenderId: "526486037279",
  appId: "1:526486037279:web:4a02f2d2d727087ecc062a"
};
// Inicialización de la aplicación Firebase con la configuración proporcionada
firebase.initializeApp(firebaseConfig);

// Definición del componente funcional Login
const Login = () => {
    // Estados para gestionar el email y la contraseña del usuario
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    // Efecto secundario que asegura la inicialización de Firebase cuando el componente se monta
    useEffect(() => {
        if(!firebase.apps.length){
            initializeApp(firebaseConfig);
        }
    }, []);

    // Función para manejar el intento de inicio de sesión
const handleLogin = async () => {
    try {
        // Intento de inicio de sesión con Firebase Authentication
        const response =await firebase.auth().signInWithEmailAndPassword(email, password);
        // Alerta de inicio de sesión exitoso
        alert('Bienvenido, inicio de sesion exitoso');
        // Registro en la consola del usuario que ha iniciado sesión
        console.log('Inicio de sesion exitoso: ', response.user);
    } catch (error){
        // Alerta en caso de error durante el inicio de sesión
        alert('Usuario y/o contraseña invalidos');
        // Registro en la consola del mensaje de error
        console.error ('Error durante el inicio de sesion', error.message);
    }
};
  // Renderizado del componente
  return (
    <div>
      {/* Encabezado del formulario de inicio de sesión */}
      <h2>Login</h2>
      {/* Campo de entrada para el email del usuario */}
      <label>Email:</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      {/* Campo de entrada para la contraseña del usuario */}
      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      {/* Botón para iniciar sesión, con un evento onClick que llama a la función handleLogin */}
      <button className='botones' onClick={handleLogin}>Login</button>
    </div>
  );
};

// Exportación del componente Login para su uso en otras partes de la aplicación
export default Login;