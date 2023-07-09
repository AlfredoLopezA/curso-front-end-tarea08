Entrega 02 de julio de 2023. Este repositorio contiene un archivo html, un archivo de estilos css y 1 archivo javascript para realizar los puntos exigidos en la tarea Nº 8, que son los siguientes:

Consumir el siguiente endpoint https://rickandmortyapi.com/api/character y realizar lo siguiente:
Tarea Nº8
    1) Crear cards con la información de Nombre, Especie e Imagen.
    2) Debe utilizar el paradigma de orientación a objetos.
    3) Debe realizar una clase con la información necesaria (nombre, especie e imagen) y protegerlo con getters.
    4) Debe realizar un método llamado .show() que debe inyectar en el DOM las cards con la data necesaria.
    5) Debe inyectar al menos 20 personajes.

El archivo index.html muestra los resultados en una página web.
El archivo style.css es una hoja de estilos con el formato que tiene index.html
El archivo apirickmorty.js contiene lo siguiente:
    - La clase Personaje con su constructor, los getters y  el método show.
    - La constante rickandmortyEndpoint con la URL de la API Rick and Morty.
    - La constante personajes-container con el nombre del elemento html que será el contenedor de los resultados.
    - La función asincrona buscarPersonajes se encarga de ejecutar la petición GET y luego el filtro con los 20 primeros personajes.
    - Finalmente, la función buscarPersonajes crea cada una de las instancias de la clase Personajes con los resultados obtenidos.

Hecho por: Alfredo López A. 