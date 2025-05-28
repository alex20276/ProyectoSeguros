"use client";
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { DashboardContent } from '../components/Doshboard/DashboardContent';
import { PolizasContent } from '../components/Doshboard/PolizasContent'; 
import { ClientesContent } from '../components/Doshboard/ClientesContent';
import { RolesContent } from '../components/Doshboard/RolesContent';

export const DoshboardLayout = () => {
  const [seccionActiva, setSeccionActiva] = useState('Dashboard');

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Polizas':
        return <PolizasContent />;
      case 'Clientes':
        return <ClientesContent/>;
      case 'Gestión de Roles':
        return <RolesContent/>;
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
      <Sidebar seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderContenido()}
      </Box>
    </Box>
  );
};