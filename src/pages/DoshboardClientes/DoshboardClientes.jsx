"use client";
import React, { useState } from 'react';
import './DoshboardClientes.css';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import { DashboardContent } from '../../components/Doshboard/DashboardContent';
import { PolizasContent } from '../../components/Doshboard/PolizasContent';
import { ClientesContent } from '../../components/Doshboard/ClientesContent';
import { SidebarCliente } from '../../components/Sidebar/SidebarCliente';

export const DoshboardClientes = ({}) => {
	const [seccionActiva, setSeccionActiva] = useState('Dashboard');

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Reportes':
        return <h2>Visualización de Reportes</h2>;
      case 'Cerrar Sesión':
        return <h2>Sesión cerrada</h2>;
      default:
        return <h2>Selecciona una opción</h2>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarCliente seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderContenido()}
      </Box>
    </Box>
  );
};

DoshboardClientes.propTypes = {};