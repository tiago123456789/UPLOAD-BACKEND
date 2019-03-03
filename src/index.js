const app = require("./config/Server");

app.listen(process.env.PORT, () => console.log("Server stater in address http://localhost:3000"));