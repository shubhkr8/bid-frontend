import React, { useState } from "react";
import "./RFQ_Submit.css";
import axios from "axios";
import InputBox from "../InputBox/InputBox";
import InputSelect from "../InputSelect/InputSelect";
import InputCheckbox from "../InputCheckbox/InputCheckbox";

const RFQ_Submit = () => {
  const [formData, setFormData] = useState({
    rfq_no: "",
    rfq_start_date: "",
    rfq_end_date: "",
    buyer: "",
    buyer_no: "",
    bid_class: "",
    scope: "",
    material_series: [],
    material_line_items: "",
    basic_value: "",
    delivery_pin: "",
    landing_cost: "",
    gst_freight_tax: "",
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

  const MATERIAL_SERIES_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    <form onSubmit={handleSubmit}>
      <h1>RFQ Submitted</h1>
      <div className="rfq__submit">
        <InputBox
          label="RFQ NO"
          name="rfq_no"
          id="rfq_no"
          type="text"
          initialValue={formData}
          updateValue={setFormData}
        />
        <InputBox
          label="RFQ START"
          name="rfq_start_date"
          id="rfq_start_date"
          type="date"
          initialValue={formData}
          updateValue={setFormData}
        />
        <InputBox
          label="RFQ END"
          name="rfq_end_date"
          id="rfq_end_date"
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
        <div className="rfq_material_series">
          <label>Material Series</label>
          {MATERIAL_SERIES_LIST.map((item, index) => (
            <InputCheckbox
              key={index}
              label={item}
              name="material_series"
              id="material_series"
              type="checkbox"
              value={item}
              initialValue={formData}
              updateValue={setFormData}
            />
          ))}
        </div>
        <InputBox
          label="BASIC VALUE"
          name="basic_value"
          id="basic_value"
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
          label="LANDING COST/PO VALUE"
          name="landing_cost"
          id="landing_cost"
          type="text"
          initialValue={formData}
          updateValue={setFormData}
        />
        <InputBox
          label="GST VALUE+INCL FREIGHT(GST)"
          name="gst_freight_tax"
          id="gst_freight_tax"
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
          label="Bid Class"
          name="bid_class"
          options={BID_CLASS_OPTION}
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
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RFQ_Submit;
