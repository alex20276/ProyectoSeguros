"use client";
import React from 'react';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';

export const DashboardContent = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Seguros de Vida y Salud
      </Typography>

      {/* Métricas */}
      <Grid container spacing={2} mb={3}>
        {[
          { label: 'Activos', value: 5 },
          { label: 'Polizas de salud', value: 2 },
          { label: 'Polizas de vida', value: 3 },
          { label: 'Monto Total', value: '$ 1.500.000' },
        ].map(({ label, value }) => (
          <Grid item xs={12} sm={6} md={3} key={label}>
            <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
              <Typography fontWeight="bold">{label}</Typography>
              <Typography variant="h6">{value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Actividad Reciente */}
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <Typography fontWeight="bold" mb={1}>
          Actividad Reciente
        </Typography>
        <Box mb={2}>
          <Typography fontWeight="bold">Poliza de vida adquirida</Typography>
          <Typography>Abril 10 2025</Typography>
        </Box>
        <Divider />
        <Box mt={2}>
          <Typography fontWeight="bold">Poliza de salud</Typography>
          <Typography>Marzo 15 2025</Typography>
        </Box>
      </Paper>

      {/* Beneficiarios */}
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography fontWeight="bold" mb={1}>
          Beneficiarios
        </Typography>
        {[
          { user: 'Usuario 1', tipo: 'Poliza de vida', monto: '15000$' },
          { user: 'Usuario 2', tipo: 'Poliza de salud', monto: '25000$' },
          { user: 'Usuario 3', tipo: 'Poliza de salud', monto: '35000$' },
        ].map(({ user, tipo, monto }, i) => (
          <Box key={i} display="flex" justifyContent="space-between" py={0.5}>
            <Typography>{user}</Typography>
            <Typography>{tipo}</Typography>
            <Typography>Monto: {monto}</Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
