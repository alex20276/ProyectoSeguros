import React, { useState } from 'react';
import { 
	Box, 
	Button, 
	Modal, 
	Typography, 
	TextField 
} from '@mui/material';

export const ModalEliminarUsuario = ({ open, onClose, onEliminar }) => {
  const [idUsuario, setIdUsuario] = useState('');

  const handleEliminar = async () => {
    try {
      const response = await fetch(`http://localhost:3030/usuario/eliminar/${idUsuario}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (response.ok) {
        alert('Usuario eliminado correctamente');
        onEliminar(); // Actualizar lista
        onClose();
      } else {
        alert(data.mensaje || 'Error al eliminar usuario');
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
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24
        }}
      >
        <Typography variant="h6" mb={2}>Eliminar Usuario</Typography>

        <TextField
          label="ID del usuario"
          variant="outlined"
          fullWidth
          value={idUsuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>Cancelar</Button>
          <Button variant="contained" color="error" onClick={handleEliminar}>Eliminar</Button>
        </Box>
      </Box>
    </Modal>
  );
};

ModalEliminarUsuario.propTypes = {};