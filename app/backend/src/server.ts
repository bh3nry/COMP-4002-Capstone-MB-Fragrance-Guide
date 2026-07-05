<<<<<<< HEAD
import app from "./app.ts"

// get the server object from the http module
=======
>>>>>>> e2a736c (feat: Updated the backend to integrate express, and neon db. updated the prisma schema to use a simple table from neon that will eventually be called from the front end. Tested integration between prisma, neon, and express with success returning data from neon.)
import { Server } from "http";
import app from "./app";

const PORT: string | number = process.env.PORT || 3000;

// imported app listens for requests on given server
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;