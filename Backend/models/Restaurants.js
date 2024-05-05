const e = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    src: { type: String },
    title: { type: String },
    moreInfo: { type: String },
    special: { type: String },
  },
  { timestamps: true }
);
// timestamps: true, tự động tạo thêm 2 trường là createdAt và updatedAt
// createdAt: thời gian tạo ra bản ghi
// updatedAt: thời gian cập nhật bản ghi

module.exports = mongoose.model("Restaurants", restaurantSchema);
