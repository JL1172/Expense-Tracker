require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT || 8005;

server.listen(port,() => {
    console.log(`server listening on ${port}`);
})