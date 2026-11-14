import express from 'express';
import bookRoutes from "./routes/bookRoutes.js";
import errorHandler from "./middlewares/error.middleware.js";
import {dbConnection, sequelize} from "./config/database.js";
import {syncModels} from "./models/index.js";

const app = express();

app.use(express.json());

app.use(bookRoutes);
app.use(errorHandler);

app.use((req, res) => res.status(404).type('text/plain;charset=UTF-8').send('Not Found'));

async function startServer() {
    await dbConnection();
    await syncModels();
    app.listen(process.env.PORT || 8080, () => console.log(`Server is running on port ${process.env.PORT || 8080}`));
}

startServer();