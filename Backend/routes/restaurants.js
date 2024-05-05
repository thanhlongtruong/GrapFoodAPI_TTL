const express = require("express");
const {
  createRestaurant,
  getAllRestaurant,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
} = require("../Controller/restaurantController");
const router = express.Router();

router.get("/", getAllRestaurant);

router.get("/:id", getRestaurant);

//Post a new restaurant
router.post("/", createRestaurant);

//Delete a restaurant
router.delete("/:id", deleteRestaurant);

//Update a restaurant
router.patch("/:id", updateRestaurant);

module.exports = router;
