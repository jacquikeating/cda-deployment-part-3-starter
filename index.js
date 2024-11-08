import "dotenv/config";
import express from "express";
import warehouseRoutes from "./routes/warehouseRoute.js";
import inventoryRoutes from "./routes/inventoryRoute.js";
import cors from "cors";
import knex from "knex";
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

const corsOptions = {
  origin: [
    "https://warm-woodland-54729-516b83a873b7.herokuapp.com/",
    "https://venerable-praline-20eaaf.netlify.app/",
  ],
  credentials: true,
};
