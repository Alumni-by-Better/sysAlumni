'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // Locale em Português

// Tipagem dos agendamentos
interface Appointment {
  time: string;
  course: string;
  students: number;
}

const appointmentsData: Record<string, Appointment[]> = {
  '2024-10-04': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '18:00 - 18:45', course: 'Apex', students: 2 },
  ],
  '2024-10-05': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '10:00 - 11:00', course: 'Confidence Building', students: 4 },
  ],
  '2024-10-07': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '10:00 - 11:00', course: 'Confidence Building', students: 4 },
  ],
  '2024-10-08': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '10:00 - 11:00', course: 'Confidence Building', students: 4 },
  ],
  // Mais dados aqui...
};

const AdminDashboardPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Appointment | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date] | null>(new Date());
  const [tabValue, setTabValue] = useState<number>(0);

  // Função para manipular a mudança de data e setar no estado corretamente
  const handleDateChange = (value: Date | [Date, Date] | null) => {
    setSelectedDate(value); // Atualiza o estado com o valor retornado
  };

  const handleOpenModal = (session: Appointment) => {
    setModalContent(session);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  // Ajusta a formatação da data
  const formatDate = (date: Date | [Date, Date] | null): string => {
    if (date instanceof Date) {
      return moment(date).format('YYYY-MM-DD');
    } else if (Array.isArray(date)) {
      return moment(date[0]).format('YYYY-MM-DD'); // Exemplo para pegar a primeira data de um intervalo
    }
    return '';
  };

  const appointmentsForDate: Appointment[] = appointmentsData[formatDate(selectedDate)] || [];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Agendamentos
      </Typography>

      {/* Tabs para navegação */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Aulas agendadas" />
        <Tab label="Histórico de agendamentos" />
      </Tabs>

      {tabValue === 0 && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              width: '100%',
              '.react-calendar': {
                width: '100%',
                maxWidth: '100%',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1px solid #ddd',
                padding: '20px',
              },
              '.react-calendar__tile': {
                maxWidth: 'initial',
              },
            }}
          >
            <Calendar
              locale="pt-BR"

              value={selectedDate}
              tileContent={({ date }) => {
                const hasAppointments = appointmentsData[formatDate(date)];
                return hasAppointments ? (
                  <Box
                    sx={{
                      backgroundColor: '#1976d2',
                      borderRadius: '50%',
                      height: '10px',
                      width: '10px',
                      margin: 'auto',
                    }}
                  />
                ) : null;
              }}
            />
          </Box>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {appointmentsForDate.length > 0 ? (
              appointmentsForDate.map((session, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {session.time}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Curso: {session.course}
                        <br />
                        Alunos agendados: {session.students}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mr: 1 }}
                          onClick={() => handleOpenModal(session)}
                        >
                          Fazer check-in
                        </Button>
                        <Button variant="text" color="secondary">
                          Cancelar aula
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ mt: 4 }}>
                Não há agendamentos para esta data.
              </Typography>
            )}
          </Grid>
        </>
      )}

      {tabValue === 1 && (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Histórico de agendamentos ainda não implementado.
        </Typography>
      )}

      {/* Modal para check-in */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {modalContent && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Check-in para {modalContent.course}
              </Typography>
              <Typography variant="body1">Horário: {modalContent.time}</Typography>
              <Typography variant="body1">Número de alunos: {modalContent.students}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseModal}
                sx={{ mt: 3 }}
              >
                Confirmar Check-in
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminDashboardPage;
