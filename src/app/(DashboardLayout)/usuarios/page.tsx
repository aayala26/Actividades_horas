"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Box,
  TextField,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const usuarios = () => {
  const [usuarios, setUsuarios] = useState<any>([
    {
      cedula: "12345678",
      nombre: "Juan",
      apellidos: "Pérez",
      estado: "Activo",
    },
    {
      cedula: "87654321",
      nombre: "Ana",
      apellidos: "Gómez",
      estado: "Inactivo",
    },
  ]);

  const [usuarioActual, setUsuarioActual] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState<any>(false);

  const handleOpenModal = (usuario: any) => {
    setUsuarioActual(usuario);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddUsuario = (nuevoUsuario: any) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    handleCloseModal();
  };

  const handleEditUsuario = (usuarioEditado: any) => {
    const updatedUsuarios = usuarios.map((usr: any) =>
      usr.cedula === usuarioEditado.cedula ? usuarioEditado : usr
    );
    setUsuarios(updatedUsuarios);
    handleCloseModal();
  };

  const UsuarioModal = () => (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={modalOpen}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {usuarioActual ? "Editar Usuario" : "Agregar Usuario"}
          </Typography>
          <TextField
            label="Cédula"
            defaultValue={usuarioActual ? usuarioActual.cedula : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Nombre"
            defaultValue={usuarioActual ? usuarioActual.nombre : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Apellidos"
            defaultValue={usuarioActual ? usuarioActual.apellidos : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select
              labelId="estado-label"
              defaultValue={usuarioActual ? usuarioActual.estado : ""}
            >
              <MenuItem value="Activo">Activo</MenuItem>
              <MenuItem value="Inactivo">Inactivo</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={() =>
              usuarioActual
                ? handleEditUsuario(usuarioActual)
                : handleAddUsuario(usuarioActual)
            }
          >
            Guardar
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
  return (
    <>
      <PageContainer
        title="Gestión de Usuarioss"
        description="this is Sample page"
      >
        <DashboardCard title="Gestión de Usuarios">
          <Box>
            <Typography variant="body2">Gestión de Usuarios:</Typography>

            <Button
              variant="contained"
              onClick={() => setModalOpen(true)}
              sx={{ mb: 2 }}
            >
              Crear Usuario
            </Button>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Cédula</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellidos</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usuarios.map((usuario: any) => (
                    <TableRow key={usuario.id}>
                      <TableCell>{usuario.cedula}</TableCell>
                      <TableCell>{usuario.nombre}</TableCell>
                      <TableCell>{usuario.apellidos}</TableCell>
                      <TableCell>{usuario.estado}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setUsuarioActual(usuario);
                            setModalOpen(true);
                          }}
                        >
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {UsuarioModal()}
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default usuarios;
