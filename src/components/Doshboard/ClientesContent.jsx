import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Modal } from '../Modal';

export const ClientesContent = () => {
  const [clientes, setClientes] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    consultarClientes();
  }, []);

  const consultarClientes = async () => {
    try {
      const response = await fetch("http://localhost:3030/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();

      if (response.ok) {
        setClientes(data);
      } else {
        alert(data.mensaje || "Error al obtener los clientes");
      }
    } catch (error) {
      console.error("Error de conexión con el servidor:", error);
      alert("No se pudo conectar al servidor");
    }
  };

  const guardarCliente = async (nuevoCliente) => {
    try {
      const response = await fetch("http://localhost:3030/usuario/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoCliente)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cliente agregado correctamente");
        setModalAbierto(false);
        consultarClientes(); // refrescar tabla
      } else {
        alert(data.mensaje || "Error al agregar cliente");
      }
    } catch (error) {
      console.error("Error al guardar cliente:", error);
      alert("No se pudo guardar el cliente");
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">Gestión de Clientes</Typography>
        <Button variant="contained" color="error" sx={{ mr: 1 }}>
            Eliminar cliente
          </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PersonAddAltIcon />}
          onClick={() => setModalAbierto(true)}
        >
          Añadir cliente
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Correo</strong></TableCell>
              <TableCell><strong>Teléfono</strong></TableCell>
              <TableCell><strong>Acción</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={0}>
            {clientes.map(p  => (
              <TableRow key={p.id_usuario}>
                <TableCell key={`${p.id_usuario}_1`}><strong>{p.id_usuario}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_2`}><strong>{p.nombre}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_3`}><strong>{p.correo}</strong></TableCell>
                <TableCell key={`${p.id_usuario}_4`}><strong>{p.telefono}</strong></TableCell>
                <TableCell key={`${p.id_seguro}_5`}><Button variant="outlined">Ver</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onGuardar={guardarCliente}
      />
    </Box>
  );
};