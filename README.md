# Express-handlebars-test

## :scroll: Consigna:

Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. <br>
Se

- Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
- Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
- Ambas páginas contarán con un botón que redirija a la otra.
- Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
- En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

Cada producto estará representado por un objeto con el siguiente formato:

<pre><code>{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url al logo o foto del producto)
}</code></pre>

Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.

### :computer: Herramientas utilizadas:
:ballot_box_with_check: Express
:ballot_box_with_check: Postman :rocket:
:ballot_box_with_check: VScode
:ballot_box_with_check: Handlebars
:ballot_box_with_check: Pug
:ballot_box_with_check: Ejs

## 💻 Programa:
- El servidor se corre con "npm run dev".
- Se deje un archivo txt con el nombre "productos.txt" como ejemplo. 

