const express = require("express");
const app = express();
const PORT = 8080;
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);
const path = require("path");

app.use(express.static(path.join(__dirname, './build')));
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

// allData
app.get("/allData", async (req, res) => {
    const data = await knex.select("*").from("purecures").orderBy("id", "asc");
    console.log(data)
    res.send(data)
})
// SeriesFilterData
app.get("/filterData/:Series", async (req, res) => {
    const Series = req.params.Series;
    console.log("シリーズ：", Series);
    const data = await knex
        .select("*")
        .from("purecures")
        .where("purecure_series", Series)
        .orderBy("id", "asc");
    console.log(data);
    res.send(data);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})