const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HYrjyAOYTsqZFaDNPr6WCASAJ2jKLTW264k3R5yLLh9QYgYD5NtqGacKkBfkI4JNQhIlZWZCFWQdOl0BalklD0x00wWmBkzWX"
);

// - API -

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received BOOOOOOM >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/feruzjon-amzn/us-central1/api
