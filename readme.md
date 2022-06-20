
# MERN Stack Notes App

This is the backend of the MERN Stack Notes App. The backend is built out of Express JS and mongoDB is used as the database.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`


## API Reference

#### Get all notes

```http
  GET /api/notes
```
#### POST notes

```http
  POST /api/notes
```
#### UPDATE note

```http
  PATCH /api/notes/:id
```
#### DELETE note

```http
  DELETE /api/notes/:id
```







## Run Locally

Clone the project

```bash
  git clone https://github.com/gauravfs-14/MERN-Stack-Notes-App-Backend
```

Go to the project directory

```bash
  cd MERN-Stack-Notes-App-Backend
```

Install dependencies

### Using npm

```bash
  npm install
```
### Using yarn
```bash
  yarn
```

Start the server

### Using npm

```bash
  npm run rundev
```
### Using yarn
```bash
  yarn rundev
```

