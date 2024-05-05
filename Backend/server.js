//! Install App Express: tạo ứng dụng web và API, express giúp định tuyến và xử lý các yêu cầu và phản hồi từ client-side
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/restaurants");
// express app
const app = express();
app.use(express.json());
//! middleware, là các hàm được chạy trước khi xử lý các yêu cầu, middleware giúp xử lý các yêu cầu và phản hồi từ client-side
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // next là hàm để chạy middleware tiếp theo
});

//! routes, để định tuyến các yêu cầu và phản hồi
//! request: yêu cầu từ client-side
//! response: phản hồi từ server-side
app.use("/api/restaurants", router);

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server started on port 4001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
