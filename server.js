const express = require("express");
const app = express();
const PORT = 8080;
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);
const path = require("path");

app.use(express.static(path.join(__dirname, './build')));
app.use(express.json())
app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://puricure.onrender.com"
    );
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
// create_newPirecure
app.post("/createPurecure", async (req, res) => {
    console.log(req.body)
    let maxId = await knex('purecures').max('id')
    maxId = await maxId[0].max;

    const obj = req.body;
    try {
        await knex("purecures").insert({
            id: Number(maxId) + 1,
            purecure_name: obj.purecure_name,
            purecure_human_name: obj.purecure_human_name,
            voice_actor: obj.voice_actor,
            purecure_img: obj.purecure_img,
            purecure_series: obj.purecure_series,
            purecure_remarks: obj.purecure_remarks,
            // purecure_startday: obj.purecure_startday,
            // purecure_endday: obj.purecure_endday,
        });
        const result = await knex.select("*").from("purecures");
        res.status(200).json(result);
    } catch (e) {
        console.error("Error", e);
        res.status(500);
    }

})
// put
app.put("/putPurecure", async (req, res) => {
    console.log(req.body);
    const obj = req.body;
    try {
        await knex("purecures").update({
            purecure_name: obj.purecure_name,
            purecure_human_name: obj.purecure_human_name,
            voice_actor: obj.voice_actor,
            purecure_img: obj.purecure_img,
            purecure_series: obj.purecure_series,
            purecure_remarks: obj.purecure_remarks,
            // purecure_startday: obj.purecure_startday,
            // purecure_endday: obj.purecure_endday,
        }).where("id", obj.id);
        const result = await knex.select("*").from("purecures");
        res.status(200).json(result);
    } catch (e) {
        console.error("Error", e);
        res.status(500);
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})