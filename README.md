# Devlights Bootcamps

### En esta oportunidad realizamos una app de ejemplo

---

**La aplicacion debera contar con los siguientes requisitos:**

1. #### Landing
    * La página de Landing debe mostrar un título y descripción de que se trata la aplicación.
    * La ruta debe ser `/`

1. #### Login
    * La página de Login debe mostrar un formulario con campos de email y clave.
    * Solo va a ser accesible si el usuario no está logueado. En caso de estar logueado, debe mostrar una página de `Not Found` o redireccionar a la página principal.
    * La ruta debe ser `/login`.
    * Definir datos del usuario de éxito.
    * Mostrar mensaje de error en caso de ingresar datos incorrectos.
    * Guardar el usuario de éxito en el Local Storage.

1. #### List
    * La página de List debe mostrar cuando el usuario ha sido logueado exitosamente.
    * Mostrar un listado de Pokemones (Nombre e Imagen).
    * Imagen Ilustrativa
    * El listado de Pokemones deben traer del endpoint `https://pokeapi.co/api/v2/pokemon`. Ref: https://pokeapi.co/
    * Las imagenes podran obtener de la siguiente ruta: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png (Donde 1.png es el indice que tiene el arreglo obtenido en el endpoint de `/v2/pokemon`.
    * La ruta debe ser `/`.

1. #### View
    * La página View debe mostrar más detalles del Pokémon seleccionado en el listado.
    * Mostrarlo en forma de carta.
    * La ruta debe ser `/pokemon/:id`.
    * El endpoint a consumir es: https://pokeapi.co/api/v2/pokemon/1 (1 es el índice del arreglo obtenido en el endpoint `/v2/pokemon`.

### Requisitos complementarios:

* Agregar paginado a la lista, es decir que se pueda ir navegando a través de dos botones (Siguiente o Anterior).
* Agregar página de Locations que liste todos los locations que se obtienen del siguiente endpoint: https://pokeapi.co/api/v2/location.
* Utilizar un Framework CSS (Tailwind, Material UI o Bootstrap).

---

    Consigna original:
    https://docs.google.com/document/d/1HytallQ311VmzyeZFYSNwDGtjGs9H0297Sl19HpYG04/edit#
    
    Sebastián Atlántico Rodríguez Capurro