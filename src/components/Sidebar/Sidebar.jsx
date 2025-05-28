"use client";
import React from 'react';
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Polizas', icon: <DescriptionIcon /> },
  { text: 'Clientes', icon: <PeopleIcon /> },
  { text: 'Gestión de Roles', icon: <AdminPanelSettingsIcon /> },
  { text: 'Reportes', icon: <AssessmentIcon /> },
  { text: 'Cerrar Sesión', icon: <LogoutIcon /> },
];

export const Sidebar = ({ seccionActiva, setSeccionActiva }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#25004D',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar />
        <Box>
          <Typography variant="body2" fontWeight="bold">Seguros de Vida</Typography>
          <Typography variant="body2" fontWeight="bold">y Salud</Typography>
        </Box>
      </Box>

      <List>
        {menuItems.map(({ text, icon }) => (
          <ListItemButton key={text} onClick={() => setSeccionActiva(text)}>
            <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
            <ListItemText
              primary={<Typography fontWeight="bold" sx={{ color: 'white' }}>{text}</Typography>}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};