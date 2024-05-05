const { mongoose } = require("mongoose");
const Restaurants = require("../models/restaurants");
// get all restaurants
const getAllRestaurant = async (req, res) => {
  const restaurants = await Restaurants.find().sort({ createdAt: -1 });
  res.status(200).json(restaurants);
};
// get single restaurant
const getRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Dont have restaurant" });
  }
  const restaurant = await Restaurants.findById(id);

  res.status(200).json(restaurant);
};
// patch new a restaurant
const createRestaurant = async (req, res) => {
  const { src, title, moreInfo, special } = req.body;
  try {
    const restaurant = await Restaurants.create({
      src,
      title,
      moreInfo,
      special,
    });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// update a restaurant
const updateRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Dont have restaurant" });
  }
  const newRestaurant = await Restaurants.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!newRestaurant) {
    return res.status(400).json({ error: "Update fail" });
  }
  res.status(200).json(newRestaurant);
};
// delete a restaurant
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Dont have restaurant" });
  }
  const deleteRes = await Restaurants.findOneAndDelete({ _id: id });
  if (!Restaurants) {
    return res.status(400).json({ error: "Not delete" });
  }
  res.status(200).json(Restaurants.find().sort({createAt : -1}));
};

module.exports = {
  createRestaurant,
  getAllRestaurant,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
};
