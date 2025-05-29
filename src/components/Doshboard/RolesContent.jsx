import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const RolesContent = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    obtenerRoles();
  }, []);

  const obtenerRoles = async () => {
    try {
      const response = await fetch("http://localhost:3030/usuario/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Roles obtenidos:", data);
        setRoles(data);
      } else {
        alert(data.mensaje || "Error al obtener los roles");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("No se pudo conectar al servidor");
    }
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Gestión de roles
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Nombre completo</b></TableCell>
              <TableCell><b>Tipo de usuario</b></TableCell>
              <TableCell><b>Rol Asignado</b></TableCell>
              <TableCell><b>Editar rol</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={0}>
            {roles.map(p => (
              <TableRow key={p.id_usuario}>
                <TableCell key={`${p.id_usuario}_1`}><strong>{p.id_usuario}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_2`}><strong>{p.nombre}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_3`}><strong>{p.tipo}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_4`}><strong>{p.rol}</strong></TableCell>
                <TableCell>
                  <IconButton>
                   <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
);
};