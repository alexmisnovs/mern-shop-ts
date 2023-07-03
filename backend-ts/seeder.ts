import mongoose from "mongoose";
import users from "./seed/users";
import products from "./seed/products";

import dotenv from "dotenv";
dotenv.config();

import userModel from "./models/userModel";
import productModel from "./models/productModel";
import orderModel from "./models/orderModel";

import connectDB from "./config/db";

const importData = async () => {
  try {
    await connectDB();
    console.log("Connected, trying to import data");

    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();

    const samleUsers = await userModel.insertMany(users);
    const adminUser = samleUsers[0]._id;

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    await productModel.insertMany(sampleProducts);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    console.log("Connected, trying to destroy data");
    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
