import React, { useState } from "react";
import { FormGroup, FormWrapper, StyledButton } from "../style.jsx";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      navigate("/contactsuccess");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    if (formData.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.body.length < 3) {
      errors.body = "Body must be at least 3 characters";
    }

    return errors;
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          {errors.body && <p>{errors.body}</p>}
        </FormGroup>
        <div>
          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
