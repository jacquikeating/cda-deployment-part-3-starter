// import seed data files, arrays of objects
import inventoryData from "../seed_data/inventory.js";
import warehouseData from "../seed_data/warehouse.js";

export const seed = async function (knex) {
  await knex("warehouse").del();
  await knex("warehouse").insert(warehouseData);
  await knex("inventory").del();
  await knex("inventory").insert(inventoryData);
};
