import app from "./app.ts"

const PORT: string | number = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

export default server;