import mongoose from "mongoose";

interface OrderItem {
  name: String;
  qty: Number;
  image: String;
  price: Number;
  product: {};
}
interface ShippingAddress {
  address: String;
  city: String;
  postalCode: String;
  country: String;
}
interface PaymentResult {
  id: String;
  status: String;
  update_time: String;
  email_address: String;
}
interface Order {
  orderItems: OrderItem[];
  user: any;
  shippingAddress: ShippingAddress;
  paymentMethod: String;
  paymentResult: PaymentResult;
  itemsPrice: Number;
  taxPrice: Number;
  shippingPrice: Number;
  totalPrice: Number;
  isPaid: Boolean;
  paidAt: Date;
  isDelivered: Boolean;
  deliveredAt: Date;
}

const OrderSchema = new mongoose.Schema<Order>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
