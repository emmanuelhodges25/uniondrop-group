import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// PRICE MAP (backend controlled)
const PRICES = {
  standard: 500, // $5
  premium: 1000, // $10
};

app.post("/api/stripe/create-checkout", async (req, res) => {
  try {
    const { plan } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${plan.toUpperCase()} Plan - UnionDrop`,
            },
            unit_amount: PRICES[plan],
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/dashboard`,
      cancel_url: `${process.env.CLIENT_URL}/payments`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Stripe session failed" });
  }
});

app.listen(5000, () => {
  console.log("Stripe backend running on port 5000");
});