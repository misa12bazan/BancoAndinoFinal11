
export const TURNOS = {
  mañana: { inicio: 6, fin: 14 },   
  tarde:  { inicio: 14, fin: 22 },  
  noche:  { inicio: 22, fin: 6 }    
};


export function estaEnTurno(turno) {
  if (!turno || !TURNOS[turno]) return false;
  const ahora = new Date();
  const hora = ahora.getHours();
  const { inicio, fin } = TURNOS[turno];

  if (inicio < fin) {
    
    return hora >= inicio && hora < fin;
  } else {
    
    return hora >= inicio || hora < fin;
  }
}

export function getHorarioTurno(turno) {
  if (!turno || !TURNOS[turno]) return 'Turno no asignado';
  const { inicio, fin } = TURNOS[turno];
  const fmt = h => `${h.toString().padStart(2, '0')}:00`;
  return `${fmt(inicio)} a ${fmt(fin)}`;
}