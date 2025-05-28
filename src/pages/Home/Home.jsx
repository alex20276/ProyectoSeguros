"use client";
import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserContext } from '../../context/UserContext';
import { useState } from 'react';

export const Home = ({}) => {
	const navigate = useNavigate();
	const [usuario, setUsuario] = useState(UserContext);

	const redireccionLogin = () => {
		navigate('/login', {replace: true});
	};
	const cambioDatos = () => {
		setUsuario({nombre: "Alex", edad: 30});
	};

	return (
		<div className='home'>
 			<h1>Este es el boton del Home</h1>
			 <h2>valor del usuario: {usuario.nombre || "sin datos"}</h2>
			 <h2>valor del usuario: {usuario.edad || "sin datos"}</h2>
			 <button onClick={cambioDatos}>cambio de datos</button>
			 <button onClick={redireccionLogin }>boton Login</button>
			 <Button variant="contained" color="success" onClick={redireccionLogin }>Success</Button>
 		</div>
	);
};

Home.propTypes = {};

