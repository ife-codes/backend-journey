## API Endpoints

### Get All Todos

- **URL:** `/todos`
- **Method:** GET
- **Auth required:** Yes
- **Response:**
  - `200 OK` on success
  - `500 Internal Server Error` on failure

### Update Todo

- **URL:** `/todos/:id`
- **Method:** PUT
- **Auth required:** Yes
- **Request Body:**
  - `title` (string): Updated title of the todo
  - `description` (string): Updated description of the todo
- **Response:**
  - `200 OK` on success
  - `403 Forbidden` if the user is not authorized
  - `404 Not Found` if the todo does not exist
  - `500 Internal Server Error` on failure
