import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RFQ_Submit.css";
import axios from "axios";

const RFQ_Submit = () => {
  const [formData, setFormData] = useState({
    rfq_no: "",
    buyer: "",
    buyer_no: "",
    bid_class: "",
    scope: "",
    material_line_items: "",
    delivery_pin: "",
    landing_cost: "",
    frieght: "",
    vendor_id: "",
    bid_type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post(
        "https://giant-cyan-camel.cyclic.app/api/submit-form",
        formData
      );
      console.log("Form submitted successfully!");
      // Add any additional logic or redirect here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="rfq__submit">
      <h1>RFQ Submitted</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>RFQ NO</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="rfq_no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>BUYER</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="buyer"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>BUYER NUMBER</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="buyer_no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>Bid Class</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="bid_class"
          >
            <option>Open this select menu</option>
            <option value="public">public</option>
            <option value="private">private</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>SCOPE</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="scope"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>MATERIALS LINE ITEMS</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="material_line_items"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>Material Series</Form.Label>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>DELIVERY PIN CODE</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="delivery_pin"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>LANDING COST WITH TAX</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
            name="landing_cost"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>FRIEGHT</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="frieght"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>VENDOR ID</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="vendor_id"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>BID TYPE</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="bid_type"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RFQ_Submit;
