const express = require("express");
const app = express();
const PORT = 8080;
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);

app.use(express.static("./静的ファイルのフォルダ"))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader(
    //   "Access-Control-Allow-Origin",
    //   "https://bitcruiser.onrender.com"
    // );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
app.get("/", (req, res) => {
    res.send("返すもの")
})
app.get("/allData", async (req, res) => {
    const data = await knex.select("*").from("purecures");
    console.log(data)
    res.send(data)
})
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})