import React, { useState } from "react";
import { FormGroup, FormWrapper, StyledButton } from "../style";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart/CartProvider";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const { clearCart } = useCart();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (name.length < 3) {
      validationErrors.name = "Name must be at least 3 characters long";
    }
    if (billingAddress.length < 3) {
      validationErrors.billingAddress =
        "Billing address must be at least 3 characters long";
    }
    if (isNaN(creditCardNumber) || creditCardNumber.length < 8) {
      validationErrors.creditCardNumber =
        "Credit card number must be a number with a minimum of 8 digits";
    }

    if (!expirationDate) {
      validationErrors.expirationDate = "Please select an expiration date";
    } else if (expirationDate < today) {
      validationErrors.expirationDate =
        "Expiration date must be after today's date";
    }

    if (isNaN(cvc) || cvc.length < 3) {
      validationErrors.cvc = "CVC must be a number with a minimum of 3 digits";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    clearCart();

    navigate("/checkoutsuccess");
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="billingAddress">Billing Address:</label>
          <input
            type="text"
            id="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
          {errors.billingAddress && (
            <span className="error">{errors.billingAddress}</span>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNumber"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
          {errors.creditCardNumber && (
            <span className="error">{errors.creditCardNumber}</span>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            value={expirationDate}
            min={today}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
          {errors.expirationDate && (
            <span className="error">{errors.expirationDate}</span>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="cvc">CVC:</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
          {errors.cvc && <span className="error">{errors.cvc}</span>}
        </FormGroup>
        <StyledButton type="submit">Complete Purchase</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default CheckoutForm;
