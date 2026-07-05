<<<<<<< HEAD
import app from "./app.ts"

// get the server object from the http module
import { Server } from "http";
=======
import { Server } from "http";
import app from "./app.ts";
>>>>>>> 4cb3b3a (feat: updating branch to coincide with dev)

// get port number from the .env file
const PORT: string | 3000 = process.env.PORT || 3000;

// imported app listens for requests on given server
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server