/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("purecures", (table) => {
        table.increments("id").primary();
        table.string("purecure_name", 50);
        table.string("purecure_human_name", 50);
        table.string("voice_actor", 50);
        table.string("purecure_img", 2000);
        table.string("purecure_series", 50);
        table.string("purecure_remarks", 50);
        table.date("purecure_startday");
        table.date("purecure_endday");

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("purecures");
};
