const baseEndpoint = `https://api.github.com`;
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
// Eliminar location y sus usos
//Cambiar comillas simples por backticks

async function displayUser(username) {
  // Agregé el try catch y convertí la función en asíncrona
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(typeof response);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
