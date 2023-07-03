import mongoose from "mongoose";
import env from "./utils/validateEnv";
import colors from "colors";
import users from "./seed/users";
import products from "./seed/products";

import userModel from "./models/userModel";
import productModel from "./models/productModel";
import orderModel from "./models/orderModel";
import connectDB from "./config/db";

connectDB();

const importData = async () => {
  try {
    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();

    const samleUsers = await userModel.insertMany(users);
    const adminUser = samleUsers[0]._id;

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    await productModel.insertMany(sampleProducts);

    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();

    console.log("all data destroyed".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
