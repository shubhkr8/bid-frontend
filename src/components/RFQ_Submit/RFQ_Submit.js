import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RFQ_Submit.css";
import axios from "axios";
import InputBox from "../InputBox/InputBox";
import InputSelect from "../InputSelect/InputSelect";

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

  const FRIEGHT_OPTION = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  const BID_CLASS_OPTION = ["Public", "Private"];

  const BID_TYPE_OPTION = ["Fresh Bid", "Re-Quote", "Dummy Bid"];

  const VENDOR_ID_OPTION = [
    "LZ",
    "HT",
    "AZ",
    "GY",
    "PT",
    "BMC",
    "UNO",
    "HINA",
    "SGT",
    "RSC",
    "OW",
    "OG",
    "JEW",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // try {
    //   await axios.post(
    //     "https://giant-cyan-camel.cyclic.app/api/submit-form",
    //     formData
    //   );
    //   console.log("Form submitted successfully!");
    //   // Add any additional logic or redirect here
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };
  return (
    <div className="rfq__submit">
      <h1>RFQ Submitted</h1>
      <InputBox
        label="RFQ NO"
        name="rfq_no"
        id="rfq_no"
        type="date"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="BUYER"
        name="buyer"
        id="buyer"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="BUYER NUMBER"
        name="buyer_no"
        id="buyer_no"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputSelect
        label="Bid Class"
        name="bid_class"
        options={BID_CLASS_OPTION}
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="SCOPE"
        name="scope"
        id="scope"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="MATERIALS LINE ITEMS"
        name="material_line_items"
        id="material_line_items"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="DELIVERY PIN CODE"
        name="delivery_pin"
        id="delivery_pin"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputBox
        label="LANDING COST WITH TAX"
        name="landing_cost"
        id="landing_cost"
        type="text"
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputSelect
        label="FRIEGHT"
        name="frieght"
        options={FRIEGHT_OPTION}
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputSelect
        label="BID TYPE"
        name="bid_type"
        options={BID_TYPE_OPTION}
        initialValue={formData}
        updateValue={setFormData}
      />
      <InputSelect
        label="VENDOR ID"
        name="vendor_id"
        options={VENDOR_ID_OPTION}
        initialValue={formData}
        updateValue={setFormData}
      />
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RFQ_Submit;
