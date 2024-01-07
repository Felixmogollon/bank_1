import express from "express";
import { router } from "./routes/index.js";
// este archivo configura una aplicación Express básica con middleware para manejar datos en formato 
//JSON y URL-encoded, y establece rutas prefijadas para la versión 1 de la API ("/api/v1").

const app = express();

//middlewares para aceptar cuerpos en json y url-encoded

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use("/api/v1", router);

export default app;
