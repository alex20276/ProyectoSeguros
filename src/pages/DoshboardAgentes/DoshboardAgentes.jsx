"use client";
import React from 'react';
import './DoshboardAgentes.css';
import { useState } from 'react';
import { DashboardContent } from '../../components/Doshboard/DashboardContent';
import { PolizasContent } from '../../components/Doshboard/PolizasContent';
import { ClientesContent } from '../../components/Doshboard/ClientesContent';
import { Box } from '@mui/material';
import { SidebarAgente } from '../../components/Sidebar/SidebarAgente';


export const DoshboardAgentes = ({}) => {
	const [seccionActiva, setSeccionActiva] = useState('Dashboard');

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Polizas':
        return <PolizasContent />;
      case 'Clientes':
        return <ClientesContent/>;
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
      <SidebarAgente seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderContenido()}
      </Box>
    </Box>
  );
};

DoshboardAgentes.propTypes = {};