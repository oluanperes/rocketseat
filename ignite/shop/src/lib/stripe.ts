import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "A variável de ambiente STRIPE_SECRET_KEY não está definida."
  );
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
  appInfo: {
    name: "Ignite Shop",
  },
});
