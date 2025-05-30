"use client";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export const AuthGuard = ({}) => {
	const{usuario, setUsuario} = useContext(UserContext);
	const validar = usuario.id_usuario && usuario.activo;

	return validar ? <Outlet/> : <Navigate to="/login"/>;
		
};

