/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                   Tarea Nº 8                     ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 02 de julio de 2023               ║
╚══════════════════════════════════════════════════╝
*/
// Clase para representar un personaje de Rick And Morty.
class Personaje {
  constructor(nombre, especie, image) {
    this._name = nombre;
    this._especie = especie;
    this._image = image;
  }

  // Getters para acceder a los atributos protegidos
  get nombre() {
    return this._nombre;
  }

  get especie() {
    return this._especie;
  }

  get image() {
    return this._image;
  }

  // Método para mostrar la card de cada personaje en el DOM.
  show() {
    // Nombre del contenedor HTML para mostrar los primeros 20 personajes de Rick and Morthy como card.
    const personajesContainer = document.getElementById('personajes-container');

    // Crear la estructura de la card utilizando Bootstrap.
    // Crear un elemento <div> para la card.
    const card = document.createElement('div');
    // Agregar clases CSS a la card.
    card.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-3');
    // Crear un elemento <div> para el cuerpo de la tarjeta.
    const cardBody = document.createElement('div');
    // Agregar clases CSS al cuerpo de la card.
    cardBody.classList.add('card', 'text-center');
    // Crear un elemento <img> para la imagen.
    const image = document.createElement('img');
    // Agregar clase CSS a la imagen.
    image.classList.add('card-img-top');
    // Establecer la fuente de la imagen.
    image.src = this._image;
    // Crear un elemento <h5> para el título de la card.
    const cardTitle = document.createElement('h5');
    // Agregar clase CSS al título de la card.
    cardTitle.classList.add('card-title');
    // Establecer el contenido de texto del título de la card.
    cardTitle.textContent = this._name;

    // Crear un elemento <p> para el texto de la card.
    const cardText = document.createElement('p');
    // Agregar clase CSS al texto de la card.
    cardText.classList.add('card-text');
    // Establecer el contenido de texto del texto de la card.
    cardText.textContent = `Especie: ${this._especie}`;

    // Agregar la imagen al cuerpo de la card.
    cardBody.appendChild(image);
    // Agregar el título de la card al cuerpo de la card.
    cardBody.appendChild(cardTitle);
    // Agregar el texto de la card al cuerpo de la card.
    cardBody.appendChild(cardText);
    // Agregar el cuerpo de la card a la card.
    card.appendChild(cardBody);

    // Agregar la card al contenedor de personajes.
    personajesContainer.appendChild(card);
  }
}

// Función para obtener los datos de los personajes y crear las cards.
async function buscarPersonajes() {
  try {
    // Realizar una solicitud para obtener los datos de los personajes desde la API.
    const rickandmortyEndpoint = await fetch('https://rickandmortyapi.com/api/character');
    const data = await rickandmortyEndpoint.json();

    // Crear instancias de la clase Personaje y mostrar las cards.
    const personajes = data.results.map(personaje => {
      // Extraer los atributos necesarios del objeto personaje.
      const { nombre, especie, image } = personaje;
      // Crear una instancia de la clase Personaje con los atributos extraídos.
      return new Personaje(nombre, especie, image);
    });

    // Mostrar las cards de los personajes en el DOM.
    personajes.forEach(personaje => personaje.show());
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llama a la función para que se carguen los personajes en el index.html.
buscarPersonajes();
