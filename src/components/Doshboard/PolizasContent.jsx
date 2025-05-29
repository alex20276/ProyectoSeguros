import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Modal } from '../Modal';

export const PolizasContent = () => {
  const [polizas, setPolizas] = useState([]);

  useEffect(() => {
    obtenerPolizas();
  }, []);

  const obtenerPolizas = async () => {
    try {
      const response = await fetch("http://localhost:3030/seguro/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Polizas obtenidas:", data);
        setPolizas(data);
      } else {
        alert(data.mensaje || "Error al obtener las pólizas");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("No se pudo conectar al servidor");
    }
  };

  const AñadirPoliza = async () => {
    try {
      const nuevaPoliza = {
        tiempo_pago:12,
        nombre: '99984564',
        tipo: 1,
        precio: 35000,
        descripcion: 'Poliza de vida'
      };

      const response = await fetch("http://localhost:3030/seguro/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaPoliza),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Poliza añadida:", data);
        obtenerPolizas(); 
      } else {
        alert(data.mensaje || "Error al añadir la póliza");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("No se pudo conectar al servidor");
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">Gestión de Polizas</Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PersonAddAltIcon />}
          onClick={AñadirPoliza}
        >
          Añadir poliza
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Cliente</strong></TableCell>
              <TableCell><strong>Número de Poliza</strong></TableCell>
              <TableCell><strong>Tipo de Poliza</strong></TableCell>
              <TableCell><strong>Información</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={0}>
            {polizas.map(p => (
              <TableRow key={p.id_seguro}>
                <TableCell key={`${p.id_seguro}_1`}><strong>{p.id_seguro}</strong></TableCell>
                <TableCell key={`${p.id_seguro}_2`}><strong>{p.nombre}</strong></TableCell>
                <TableCell key={`${p.id_seguro}_3`}><strong>{`00${p.id_seguro}`}</strong></TableCell>
                <TableCell key={`${p.id_seguro}_4`}><strong>{p.tipo}</strong></TableCell>
                <TableCell key={`${p.id_seguro}_5`}><Button variant="outlined">+</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal />
    </Box>
  );
};
