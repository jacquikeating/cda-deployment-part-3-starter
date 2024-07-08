import express from "express";
import * as warehouseController from "../controllers/warehouseController.js";

const router = express.Router();

router
  .route("/")
  .get(warehouseController.index)
  .post(warehouseController.addWarehouse);

router
  .route("/:id")
  .get(warehouseController.singleWarehouse)
  .patch(warehouseController.updateWarehouse)
  .delete(warehouseController.deleteWarehouse);

router.route("/:id/inventories").get(warehouseController.warehouseInventories);

export default router;
