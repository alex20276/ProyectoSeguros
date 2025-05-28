"use client";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import './Login.css';
import { FormControl } from '@mui/material';

export const Login = ({}) => {

	//creamos las constantes con sus valores
	const [correo, setCorreo] = useState('');
	const [contrasenia, setContrasenia] = useState('');

	//creo la variable que me muestra el error
	const [correoError, setCorreoError] = useState(false);
	const [contraseniaError, setContraseniaError] = useState(false);

	const navigate = useNavigate();
	const { usuario, setUsuario } = useContext(UserContext);

	const redireccionHome = () => {
		navigate('/home', { replace: true })
	};

	const cambioDatos = () => {
		setUsuario(
			{
				...usuario,
				nombre: "luis"

			}
		);
	}

	//creo una funcion para validar el correo
	const validarCorreo = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	//esta es mi funcion de logeo
	const usuarioLogeo = async () => {
		const correoValido = validarCorreo(correo); //retorna true o false
		const contraseniaValida = contrasenia.length >= 8; //retorna un true o false

		setCorreoError(!correoValido);
		setContraseniaError(!contraseniaValida);

		if (!correoValido || !contraseniaValida) return;

	try {
		const response = await fetch("http://localhost:3030/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ correo, contrasenia })
		});

		const data = await response.json();

		if (response.ok) {
			console.log("Login exitoso:", data);
			setUsuario({...usuario, nombre:data.usuario.nombres}); // Guarda los datos en el context
			//navigate('/home', { replace: true });
		} else {
			alert(data.mensaje || "Error en login");
		}
	} catch (error) {
		console.error("Error de conexión con el servidor:", error);
		alert("No se pudo conectar al servidor");
	}
	};

	return (
		<div className='login'>
			<useNavigate />
			<h1>Este es el login</h1>
			<h2>valor del usuario: {usuario.nombre || "sin datos"}</h2>
			<button onClick={cambioDatos}>cambiar datos</button>
			<button onClick={redireccionHome} >boton home</button>
			<br />

			<FormControl variant="standard" sx={{ m: 1, width: '300px' }}>
				<InputLabel error={correoError} htmlFor="correo" >Correo</InputLabel>
				<Input id="correo" error={correoError} value={correo} onChange={(e) => setCorreo(e.target.value)} />
				{correoError && <FormHelperText error={correoError} >Correo no válido</FormHelperText>}
			</FormControl>

			<FormControl variant="standard" sx={{ m: 1, width: '300px' }}>
				<InputLabel error={contraseniaError} htmlFor="contrasenia">Contraseña</InputLabel>
				<Input id="contrasenia" error={contraseniaError} type="password" value={contrasenia} onChange={(e) => setContrasenia(e.target.value)} />
				{contraseniaError && <FormHelperText error={contraseniaError}>Debe tener al menos 8 caracteres</FormHelperText>}
			</FormControl>

			<br />

			<Button variant="contained" color="primary" onClick={usuarioLogeo}>
				Iniciar sesión
			</Button>
			<h1>{correo}</h1>
		</div>
	);
};