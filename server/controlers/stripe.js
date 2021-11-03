import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const payWithStripe = (req, res) => {
  console.log(req.body);
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
        res.status(500).json({ payment: stripeResponse });
      }
    }
  );
};
