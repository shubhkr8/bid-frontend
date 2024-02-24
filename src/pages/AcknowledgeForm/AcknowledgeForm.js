import React, { useState } from "react";
import "./AcknowledgeForm.css";
import axios from "axios";
import InputBox from "../../components/InputBox/InputBox";
// import InputSelect from "../../components/InputSelect/InputSelect";
// import InputCheckbox from "../../components/InputCheckbox/InputCheckbox";
// import { BID_TYPE_OPTION, MATERIAL_SERIES_LIST } from "../../utils/Constant";
import Loader from "../../loader/Loader";

const intialFormData = {
  rfq_no: "",
  rfq_start_date: "",
  rfq_end_date: "",
  buyer: "",
  buyer_no: "",
  scope: "",
  material_series: [],
  bid_type: "",
  buyer_type: "",
};

const AcknowledgeForm = () => {
  const [formData, setFormData] = useState(intialFormData);
  const [isLoading, setIsLoading] = useState(false);

  // const handleCheckboxChange = (value) => {
  //   const updatedMaterialSeries = [...formData.material_series];

  //   if (updatedMaterialSeries.includes(value)) {
  //     // If the value is already present, remove it
  //     updatedMaterialSeries.splice(updatedMaterialSeries.indexOf(value), 1);
  //   } else {
  //     // If the value is not present, add it
  //     updatedMaterialSeries.push(value);
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     material_series: updatedMaterialSeries,
  //   }));
  // };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // await axios.post("http://localhost:5000/api/acknowledge-form", formData);
      await axios.post(
        "https://giant-cyan-camel.cyclic.app/api/acknowledge-form",
        formData
      );
      console.log("Form submitted successfully!");
      // Add any additional logic or redirect here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsLoading(false);
    alert("Form Submitted");
    setFormData(intialFormData);
  };
  return (
    <form onSubmit={handleSubmit} className="Rfq_form">
      <h1>RFQ Acknowledgement</h1>
      {isLoading && <Loader />}
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
          type="type"
          value={formData.rfq_start_date}
          onChange={(e) => handleInputChange("rfq_start_date", e.target.value)}
        />
        <InputBox
          label="RFQ END"
          id="rfq_end_date"
          type="text"
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
        <InputBox
          label="BID TYPE"
          id="buyer_no"
          type="text"
          value={formData.buyer_type}
          onChange={(e) => handleInputChange("buyer_type", e.target.value)}
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

export default AcknowledgeForm;
