import app from "./app.ts"

// get the server object from the http module
import { Server } from "http";

const PORT: string | number = process.env.PORT || 3000;

// imported app listens for requests on given server
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server