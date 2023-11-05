import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is Running on Port 3000 !");
});

app.use("/api/user", userRouter);