# Contact API

## Descripción

Esta es una API RESTful para gestionar contactos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una tabla de contactos en memoria. Está construida usando Node.js y Express.js, siguiendo el patrón de arquitectura MVC. La documentación de la API está disponible a través de Swagger.

## Estructura del Proyecto

- **`src/`**: Carpeta principal del código fuente.
  - **`controllers/`**: Contiene los controladores que manejan la lógica de negocio.
  - **`models/`**: Contiene los modelos que representan los datos.
  - **`routes/`**: Define las rutas de la API.
  - **`services/`**: Contiene la lógica de negocio que interactúa con los modelos.
  - **`config/`**: Configuración adicional (actualmente vacío).

## Endpoints

### Obtener todos los contactos

- **Método**: `GET`
- **Ruta**: `/api/contacts`
- **Descripción**: Obtiene una lista de todos los contactos.

### Obtener un contacto por ID

- **Método**: `GET`
- **Ruta**: `/api/contacts/{id}`
- **Descripción**: Obtiene un contacto específico por su ID.

### Agregar un nuevo contacto

- **Método**: `POST`
- **Ruta**: `/api/contacts`
- **Descripción**: Agrega un nuevo contacto.
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "string",
    "phone": "string"
  }
  ```

### Actualizar un contacto

- **Método**: `PUT`
- **Ruta**: `/api/contacts/{id}`
- **Descripción**: Actualiza un contacto existente por su ID.
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "string",
    "phone": "string"
  }
  ```

### Eliminar un contacto
- **Método**: `DELETE`
- **Ruta**: `/api/contacts/{id}`

- **Descripción**: Elimina un contacto por su ID.

## Instalación

- **Clona el repositorio**:
- `git clone https://github.com/JuacCrack/ContactAPI.git`


- **Navega al directorio del proyecto**:
- `cd ContactAPI`

- **Instala las dependencias**:
- `npm install`

- **Inicia el servidor**:
- `node src/index.js`
- `Abre tu navegador y visita http://localhost:3000/api-docs para ver la documentación de Swagger.`

## Gracias por Leer!

