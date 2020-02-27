require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 4000;
server.listen(port, () => console.log('The api is running on', port));