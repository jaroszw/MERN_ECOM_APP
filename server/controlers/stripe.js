import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const payWithStripe = (req, res) => {
  console.log("PAYMENT IN PROGRESS");
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        res.status(500).json({ payment: stripeError });
      } else {
        res.status(200).json({ payment: stripeResponse });
      }
    }
  );
};
