import app from "./app.ts";
// get the server object from the http module
import { Server } from "http";

// get port number from the .env file
const PORT: string | 3000 = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

export default server;