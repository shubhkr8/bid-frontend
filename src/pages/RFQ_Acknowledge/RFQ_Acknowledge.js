import React, { useState } from "react";
import "./RFQ_Acknowledge.css";
import axios from "axios";
import InputBox from "../../components/InputBox/InputBox";
import InputSelect from "../../components/InputSelect/InputSelect";
import InputCheckbox from "../../components/InputCheckbox/InputCheckbox";
import { BID_TYPE_OPTION, MATERIAL_SERIES_LIST } from "../../utils/Constant";

const intialFormData = {
  rfq_no: "",
  rfq_start_date: "",
  rfq_end_date: "",
  buyer: "",
  buyer_no: "",
  scope: "",
  material_series: [],
  material_line_items: "",
  shipping_address: "",
  delivery_pin: "",
  bid_type: "",
};

const RFQ_Acknowledge = () => {
  const [formData, setFormData] = useState(intialFormData);

  const handleCheckboxChange = (value) => {
    const updatedMaterialSeries = [...formData.material_series];

    if (updatedMaterialSeries.includes(value)) {
      // If the value is already present, remove it
      updatedMaterialSeries.splice(updatedMaterialSeries.indexOf(value), 1);
    } else {
      // If the value is not present, add it
      updatedMaterialSeries.push(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      material_series: updatedMaterialSeries,
    }));
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
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

    alert("Form Submitted");
    setFormData(intialFormData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>RFQ Acknowledgement</h1>
      <div className="rfq__submit">
        <InputBox
          label="RFQ NO"
          id="rfq_no"
          type="text"
          value={formData.rfq_no}
          onChange={(e) => handleInputChange("rfq_no", e.target.value)}
        />
        <InputBox
          label="RFQ START"
          id="rfq_start_date"
          type="date"
          value={formData.rfq_start_date}
          onChange={(e) => handleInputChange("rfq_start_date", e.target.value)}
        />
        <InputBox
          label="RFQ END"
          id="rfq_end_date"
          type="date"
          value={formData.rfq_end_date}
          onChange={(e) => handleInputChange("rfq_end_date", e.target.value)}
        />
        <InputBox
          label="BUYER"
          id="buyer"
          type="text"
          value={formData.buyer}
          onChange={(e) => handleInputChange("buyer", e.target.value)}
        />
        <InputBox
          label="BUYER NUMBER"
          id="buyer_no"
          type="text"
          value={formData.buyer_no}
          onChange={(e) => handleInputChange("buyer_no", e.target.value)}
        />

        <InputBox
          label="SCOPE"
          id="scope"
          type="text"
          value={formData.scope}
          onChange={(e) => handleInputChange("scope", e.target.value)}
        />
        <InputBox
          label="MATERIALS LINE ITEMS"
          id="material_line_items"
          type="text"
          value={formData.material_line_items}
          onChange={(e) =>
            handleInputChange("material_line_items", e.target.value)
          }
        />
        <div className="rfq_material_series">
          <label>Material Series</label>
          <div className="rfq_material_series_list">
            {MATERIAL_SERIES_LIST.map((item, index) => (
              <InputCheckbox
                key={index}
                label={item}
                id="material_series"
                type="checkbox"
                value={item}
                checked={formData.material_series.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
            ))}
          </div>
        </div>
        <InputBox
          label="SHIP TO"
          id="shipping_address"
          type="text"
          value={formData.basic_value}
          onChange={(e) =>
            handleInputChange("shipping_address", e.target.value)
          }
        />
        <InputBox
          label="DELIVERY PIN CODE"
          id="delivery_pin"
          type="text"
          value={formData.delivery_pin}
          onChange={(e) => handleInputChange("delivery_pin", e.target.value)}
        />
        <InputSelect
          label="BID TYPE"
          options={BID_TYPE_OPTION}
          value={formData.bid_type}
          onChange={(e) => handleInputChange("bid_type", e.target.value)}
        />
        <div className="rfq__submit_button">
          <button type="submit" className="submit_button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default RFQ_Acknowledge;
