'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Modal, Backdrop, Fade, Box,  TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


// import { Modal, Backdrop, Fade } from '@mui/material';



const HistoriasUsuario = () => {

const [modalOpen, setModalOpen] = useState(false);
const [newStory, setNewStory] = useState<any>([]);

const handleModalOpen = () => {
  setModalOpen(true);
};

const handleModalClose = () => {
  setModalOpen(false);
};

const handleAddStory = () => {
  // Aquí puedes agregar la lógica para añadir la nueva historia al estado global o a una base de datos
  console.log('Nueva historia agregada:', newStory);
  // Resetear el formulario
  setNewStory({
    titulo: '',
    descripcion: '',
    usuarios: [],
    estado: '',
    duracion: ''
  });
  handleModalClose();
};

const handleInputChange = (event:any) => {
  const { name, value } = event.target;
  setNewStory((prevStory:any) => ({
    ...prevStory,
    [name]: value,
  }));
};


const renderAddStoryModal = () => (
  <Modal
    open={modalOpen}
    onClose={handleModalClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={modalOpen}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          Agregar Nueva Historia
        </Typography>
        <TextField
          label="Título"
          name="titulo"
          value={newStory.titulo}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descripción"
          name="descripcion"
          value={newStory.descripcion}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="usuarios-label">Usuarios</InputLabel>
          <Select
            labelId="usuarios-label"
            name="usuarios"
            
            value={newStory.usuarios}
            onChange={handleInputChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {/* Aquí deberías reemplazar estos valores con los usuarios reales obtenidos de alguna fuente */}
            <MenuItem value="Usuario1">Usuario1</MenuItem>
            <MenuItem value="Usuario2">Usuario2</MenuItem>
            <MenuItem value="Usuario3">Usuario3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="estado-label">Estado</InputLabel>
          <Select
            labelId="estado-label"
            name="estado"
            value={newStory.estado}
            onChange={handleInputChange}
          >
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="En Progreso">En Progreso</MenuItem>
            <MenuItem value="Completado">Completado</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Duración (horas)"
          name="duracion"
          type="number"
          value={newStory.duracion}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleAddStory}>Agregar Historia</Button>
      </Box>
    </Fade>
  </Modal>
);


const [open, setOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState<any>(null);
const [hours, setHours] = useState('');

const initialTasks = {
  todo: [
    { id: '1', tarea: 'Implementar Login', descripcion: 'Crear la funcionalidad de inicio de sesión', fecha: '2023-10-01' },
    { id: '2', tarea: 'Diseñar Dashboard', descripcion: 'Crear el diseño del panel de control', fecha: '2023-10-02' },
  ],
  done: [
    { id: '3', tarea: 'Configurar Proyecto', descripcion: 'Inicializar el repositorio y configurar el entorno', fecha: '2023-09-30' },
  ],
};
const [tasks, setTasks] = useState<any>(initialTasks);

const onDragEnd = (result:any) => {
  const { source, destination } = result;

  if (!destination) return;

  const sourceColumn = tasks[source.droppableId];
  const destColumn = tasks[destination.droppableId];
  const [removed] = sourceColumn.splice(source.index, 1);
  destColumn.splice(destination.index, 0, removed);

  setTasks({
    ...tasks,
    [source.droppableId]: sourceColumn,
    [destination.droppableId]: destColumn,
  });
};

const handleOpen = (task:any) => {
  setSelectedTask(task);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setSelectedTask(null);
  setHours('');
};

const handleSave = () => {
  // Aquí puedes manejar la lógica para guardar las horas registradas
  console.log(`Horas registradas para la tarea ${selectedTask.tarea}: ${hours}`);
  handleClose();
};

const renderEditButton = (task:any) => (
  <Button variant="outlined" onClick={() => handleOpen(task)}>Editar</Button>
);
const [taskStatus, setTaskStatus] = useState('');
        const [taskUser, setTaskUser] = useState('');

const renderModal = () => (
  <Modal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          Registrar Horas para {selectedTask?.tarea}
        </Typography>
        <TextField
          label="Horas"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="estado-tarea-label">Estado de la Tarea</InputLabel>
          <Select
            labelId="estado-tarea-label"
            value={taskStatus}
            label="Estado de la Tarea"
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <MenuItem value="por_hacer">Por Hacer</MenuItem>
            <MenuItem value="terminada">Terminada</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="usuario-label">Usuario</InputLabel>
          <Select
            labelId="usuario-label"
            value={taskUser}
            label="Usuario"
            onChange={(e) => setTaskUser(e.target.value)}
          >
            <MenuItem value="usuario1">Usuario 1</MenuItem>
            <MenuItem value="usuario2">Usuario 2</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
          Guardar
        </Button>
      </Box>
    </Fade>
  </Modal>
);

return (
  <> 
    {renderModal()}
    <DragDropContext onDragEnd={onDragEnd}>
      <PageContainer title="Consulta de Horas por Actividades y Proyectos" description="this is Sample page">
        <DashboardCard title="Visualización de Tareas">
          <Box>
            <>
            {renderAddStoryModal()}
            <Button variant="contained" onClick={handleModalOpen}>Agregar Nueva Historia</Button>
            </>
            <Typography variant="body2">Visualización de tareas To Do y Done:</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {['todo', 'done'].map((columnId) => (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided:any) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{ flex: 1, minHeight: 200, border: '1px solid #ccc', borderRadius: 2, p: 2 }}
                    >
                      <Typography variant="h6">{columnId === 'todo' ? 'To Do' : 'Done'}</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Tarea</TableCell>
                              <TableCell>Descripción</TableCell>
                              <TableCell>Fecha</TableCell>
                              <TableCell>Acciones</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {tasks[columnId].map((task:any, index:number) => (
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided:any) => (
                                  <TableRow
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <TableCell>{task.tarea}</TableCell>
                                    <TableCell>{task.descripcion}</TableCell>
                                    <TableCell>{task.fecha}</TableCell>
                                    <TableCell>{renderEditButton(task)}</TableCell>
                                  </TableRow>
                                )}
                              </Draggable>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              ))}
            </Box>
          </Box>
        </DashboardCard>
      </PageContainer>
    </DragDropContext>
  </>
);

  

};

export default HistoriasUsuario;

