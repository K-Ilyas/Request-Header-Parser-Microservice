
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const middleware = require("./middleware");
const cors = require("cors");
// .env config
dotenv.config();

const port = process.env.PORT || 3000;
// config cors
app.use(cors({ optionsSuccessStatus: 200 }));
// config static assets public
app.use("/public", express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.use("/api/whoami", middleware, (req, res) => {
    res.json(req.result);
});


app.listen(port, () => {
    console.log(`server listening on port : ${port}`)
})