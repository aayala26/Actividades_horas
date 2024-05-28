'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Box, TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


const SamplePage = () => {
  return (
    <PageContainer title="Consulta de Horas por Actividades y Proyectos" description="this is Sample page">

      <DashboardCard title="Consultar Horas">
        <Box>
          {/* <Typography variant="h6">Consulta de Horas por Actividades y Proyectos</Typography> */}
          <Typography variant="body2">Seleccione los filtros para refinar la búsqueda:</Typography>
       
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <TextField label="Usuario" variant="outlined" />
          <TextField label="Proyecto" variant="outlined" />
          <TextField label="Actividad" variant="outlined" />
          <TextField label="Fecha" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Consultar</Button>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Resultados:</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Proyecto</TableCell>
                  <TableCell>Actividad</TableCell>
                  <TableCell>Horas</TableCell>
                  <TableCell>Fecha</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Aquí se mostrarán los resultados de la consulta */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

