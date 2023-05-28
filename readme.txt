Pasos realizados para la desarrollar la API REST

iniciar el proyecto
	npm init -y
instalar express
	npm install express --save
instalar sequelize
	pm install sequelize --save
instalar driver posgree para poder concetar a la base de datos
	npm install pg pg-hstore --save
instalar nodemon
	npm install nodemon --save 
instalar dotenv para cargar  las variables de entorno
	npm install dotenv --save
instalar cors para permitir llegar peticiones desde otro servidor
	npm install cors --save

crear carpeto src
crear el archivo app.js
crear el archivo .env
modificar el archivo package.json
adicionando 
 "dev":"nodemon src/app.js",
crear carpeta config
crear el archivo config.js
exportar
crear la carpeta db/models
crear el archivo persons.model.js
exportar
crear el archivo index.js dentrol de la carpeta models para crear la tabla
exportar modulo
crear en SRC una nueva carpeta para librerias llamada libs
crear el archivo sequelize,js
exportar
crear en SRC una carpeta services
crear el archivo persons.service.js
con los métodos sobre la tabla
exportar
crear dentro SRC la carpeta controllers
crear el archivo persons.controller.js
donde se tiene los controladores de  metodos sobre la tabla
exportamos
crear en SRC la carpeta routers
crear el archivo persons.routers.js donde se maneja todo el API REST
crear dentro de routers el archivo index.js donde esta la ruta principal
Añadir a la aplicacion principal APP.JS el routerApi

Probamos la Api en Postman








