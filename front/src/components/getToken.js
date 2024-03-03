// Obtener el token del localStorage
const token = localStorage.getItem('auth');

// Realizar una solicitud con el token en las cabeceras
fetch('https://api.ejemplo.com/recurso-protegido', {
  method: 'GET',
  headers: {
    'Authorization': token, // Añadir el token al encabezado de autorización
    'Content-Type': 'application/json'
    // Otras cabeceras según sea necesario
  },
})
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta del servidor
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error en la solicitud:', error);
  });
