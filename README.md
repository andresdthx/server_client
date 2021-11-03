# Backend prueba node-react MVM -

Este proyecto es la solución del lado del backend a la prueba para el cargo de desarrollador node/react en la empresa MVM Ingeniería de software

## Correr el proyecto

1. Descargar o clonar el proyecto
3. Ejecutar el siguiente comando `npm install` en la ruta del proyecto para instalar las dependencias necesarias para correr el programa
4. una vez instaladas las dependencias ejecutamos el comando `npm start` para correr la aplicación en el puerto 3001

## Modulos

1. El proyecto sigue una estructura por capas estando ubicado en la carpeta `src/`
2. la carpeta `src/components` es en la que estarán los componentes de la aplicación, en este caso solo "users"
3. para cada componente se tendrían 3 archivos:
    - `controller`: sera el encargado de la lógica de negocio antes de realizar el almacenamiento (en el archivo `src/db/users.json`)
    - `routes`: será el encargado de definir los endpoints y procesar las peticiones y enviar las respuestas
    - `store`: será el encargado de realizar el almacenamiento en el archivo `src/db/users.json`
4. La carpeta de `db` contendrá los archivos para almacenamiento `users.json y valores.txt`
5. La carpeta `network` se encargará de estandarizar las peticiones y las rutas
6. la carpeta `utils` será encargada de tener una serie de funciones que nos ayudará a desacoplar la logica
7. `index.js` será el encargado de levantar nuestra aplicación y realizar la configuración inicial
8. `socket.js` será encargado de realizar la configuración del socket para manter conexion con el modulo de `valores`
