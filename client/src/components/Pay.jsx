import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_KEY =
  "pk_test_51HeH52LSYGGA5Tg8D7mKt9ky0Ws0ODcKknL5xZz0Alxg2vpM8GNOwiK6Wa81vYgvvJ749Daxhim64CqnWuisJjp200syBAJ8Bg";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token.id);
  };

  useEffect(() => {
    console.log("RENDER");
    const makeRequest = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/checkout/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenId: stripeToken.id, amount: 2000 }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Pan W."
        billingAddress
        shippingAddress
        description="Your shoppings"
        amount={2000}
        token={onToken}
        stripeKey={STRIPE_KEY}
      >
        ;
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
