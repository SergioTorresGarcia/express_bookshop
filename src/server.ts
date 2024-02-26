import "dotenv/config";
import { app } from "./app";

const PORT = process.env.PORT || 4001;


const startServer = () => {
    // al final hay que decirle a la aplicación que se ponga en marcha y escuche a todas las rutas
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);

    })
}

startServer();
// "npm run dev" in terminal to start the server