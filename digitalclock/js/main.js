/**
 * Crea un reloj que se actualice en tiempo real:
 *
 *  - La hora debe ir en el <h1>
 *  - La fecha debe ir en el <h2>
 *
 * En función de la hora del día la imagen de fondo debe cambiar.
 * Para este punto puedes ayudarte de las clases:
 *
 *  - morning: a partir de las 7:00.
 *
 *  - afternoon: a partir de las 13:00.
 *
 *  - night: a partir de las 21:00.
 *
 */

// Definir un setInterval para que la actualizacion automatica

setInterval(() => {
  // Creamos la variable con la fecha y hora actual
  const hora = document.querySelector('h1');
  const fecha = document.querySelector('h2');
  const body = document.body;
  const formatDate = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const now = new Date();

  //Creamos las constantes par ala hora, segundos y minutos

  let hours = now.getHours();

  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  hora.textContent = `${hours}:${minutes}:${seconds}`;
  fecha.textContent = now.toLocaleDateString('es-ES', formatDate);

  if (hours >= 21 || hours < 7) {
    body.setAttribute('class', 'night');
  } else if (hours >= 13 && hours < 21) {
    body.setAttribute('class', 'afternoon');
  } else if (hours >= 7 && hours < 13) {
    body.setAttribute('class', 'morning');
  }
}, 1000);
