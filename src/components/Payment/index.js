import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

export const stripePromise = loadStripe(
  "pk_test_51KBw4EH8miGnakuDvMuAzgbci8p5SpRcFmGSJlx1SfJDK8o0DSKvYl45ME9CJcHDzLsCtsoRm9njZR1d54Ubtf9300pmrsfxQ2"
);

const Payment = ({ donate, price }) => {
  const { event } = useParams();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm event={event} donate={donate} price={price} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
