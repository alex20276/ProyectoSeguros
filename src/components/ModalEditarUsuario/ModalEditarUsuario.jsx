import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField
} from '@mui/material';

export const ModalEditarUsuario = ({ open, onClose, usuario, onGuardar }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    username: '',
    password: '',
    apellido: '',
    tipo: '',
    activo: '',
    cedula: '',
    rol: ''
  });

  // Cargar datos cuando se abre el modal
  useEffect(() => {
    if (usuario) {
      setFormData(usuario);
    }
  }, [usuario]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGuardar = async () => {
    try {
      const response = await fetch(`http://localhost:3030/usuario/editar/${usuario.id_usuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Usuario editado correctamente');
        onGuardar(); // actualizar lista
        onClose();   // cerrar modal
      } else {
        alert(data.mensaje || 'Error al editar usuario');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <Typography variant="h6" mb={2}>Editar Usuario</Typography>

        <TextField label="Correo" name="correo" value={formData.correo} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Tipo" name="tipo" value={formData.tipo} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Activo" name="activo" value={formData.activo} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Cédula" name="cedula" value={formData.cedula} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Rol" name="rol" value={formData.rol} onChange={handleChange} fullWidth sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>Cancelar</Button>
          <Button variant="contained" color="primary" onClick={handleGuardar}>Guardar</Button>
        </Box>
      </Box>
    </Modal>
  );
};

ModalEditarUsuario.propTypes = {};