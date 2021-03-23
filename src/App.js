import React, { useState } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import StripeForm from "./components/StripeForm";

function App() {
  const [showItem, setShowItem] = useState(false);

  const [product, setProduct] = useState({
    name: "Gameboy",
    price: 20,
    currency: "CHF",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Conent-Type": "application/json",
    };

    return fetch(`http://localhost:4000/checkout`, {
      method: postMessage,
      headers,
      obdy: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("status", status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <header className="App-header">
        <StripeCheckout
          stripeKey="pk_test_51IWOAMEb6PUzIM470UmulFgR44n1bcf4Qb0hG2oGNA4rO1pURNSnf39t9tBCRZMDpbCUG6e9rYG46mtqNjvrmARi00QtqTwc1w"
          token={makePayment}
          name="buy gameboy"
          amount={product.price * 100}
          currency="CHF"
        >
          <button className="btn-large blue">
            Buy Gameboy for (with popup) {product.price} {product.currency}
          </button>
        </StripeCheckout>
        <br></br>
        {showItem ? (
          <StripeForm />
        ) : (
          <>
            <button onClick={() => setShowItem(true)}>
              {" "}
              Buy Gameboy (without popup){" "}
            </button>{" "}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
