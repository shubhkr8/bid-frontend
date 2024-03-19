import React, { useState } from 'react';
import './SubmitForm.css';
import axios from 'axios';
import InputBox from '../../components/InputBox/InputBox';
import InputSelect from '../../components/InputSelect/InputSelect';
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox';
import {
  BID_CLASS_OPTION,
  BID_TYPE_OPTION,
  FRIEGHT_OPTION,
  MATERIAL_SERIES_LIST,
  VENDOR_ID_OPTION,
} from '../../utils/Constant';
import { renderApiSubmit } from '../../utils/apiEndPoints';

const intialFormData = {
  rfq_no: '',
  rfq_start_date: '',
  rfq_end_date: '',
  buyer: '',
  buyer_no: '',
  bid_class: '',
  scope: '',
  material_series: [],
  material_line_items: '',
  basic_value: '',
  delivery_pin: '',
  landing_cost: '',
  gst_freight_tax: '',
  frieght: '',
  vendor_id: '',
  bid_type: '',
};

const SubmitForm = () => {
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
      await axios.post(renderApiSubmit, formData);
      console.log('Form submitted successfully!');
      // Add any additional logic or redirect here
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    alert('Form Submitted');
    setFormData(intialFormData);
  };
  return (
    <form onSubmit={handleSubmit} className='Rfq_form'>
      <h1>RFQ Submitted</h1>
      <div className='rfq__submit'>
        <InputBox
          label='RFQ NO'
          id='rfq_no'
          type='text'
          value={formData.rfq_no}
          onChange={(e) => handleInputChange('rfq_no', e.target.value)}
        />
        <InputBox
          label='RFQ START'
          id='rfq_start_date'
          type='date'
          value={formData.rfq_start_date}
          onChange={(e) => handleInputChange('rfq_start_date', e.target.value)}
        />
        <InputBox
          label='RFQ END'
          id='rfq_end_date'
          type='date'
          value={formData.rfq_end_date}
          onChange={(e) => handleInputChange('rfq_end_date', e.target.value)}
        />
        <InputBox
          label='BUYER'
          id='buyer'
          type='text'
          value={formData.buyer}
          onChange={(e) => handleInputChange('buyer', e.target.value)}
        />
        <InputBox
          label='BUYER NUMBER'
          id='buyer_no'
          type='text'
          value={formData.buyer_no}
          onChange={(e) => handleInputChange('buyer_no', e.target.value)}
        />

        <InputBox
          label='SCOPE'
          id='scope'
          type='text'
          value={formData.scope}
          onChange={(e) => handleInputChange('scope', e.target.value)}
        />
        <InputBox
          label='MATERIALS LINE ITEMS'
          id='material_line_items'
          type='text'
          value={formData.material_line_items}
          onChange={(e) =>
            handleInputChange('material_line_items', e.target.value)
          }
        />
        <div className='rfq_material_series'>
          <label>Material Series</label>
          <div className='rfq_material_series_list'>
            {MATERIAL_SERIES_LIST.map((item, index) => (
              <InputCheckbox
                key={index}
                label={item}
                id='material_series'
                type='checkbox'
                value={item}
                checked={formData.material_series.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
            ))}
          </div>
        </div>
        <InputBox
          label='BASIC VALUE'
          id='basic_value'
          type='text'
          value={formData.basic_value}
          onChange={(e) => handleInputChange('basic_value', e.target.value)}
        />
        <InputBox
          label='DELIVERY PIN CODE'
          id='delivery_pin'
          type='text'
          value={formData.delivery_pin}
          onChange={(e) => handleInputChange('delivery_pin', e.target.value)}
        />
        <InputBox
          label='LANDING COST/PO VALUE'
          id='landing_cost'
          type='text'
          value={formData.landing_cost}
          onChange={(e) => handleInputChange('landing_cost', e.target.value)}
        />
        <InputBox
          label='GST VALUE+INCL FREIGHT(GST)'
          id='gst_freight_tax'
          type='text'
          value={formData.gst_freight_tax}
          onChange={(e) => handleInputChange('gst_freight_tax', e.target.value)}
        />
        <InputSelect
          label='FRIEGHT'
          options={FRIEGHT_OPTION}
          value={formData.frieght}
          onChange={(e) => handleInputChange('frieght', e.target.value)}
        />
        <InputSelect
          label='BID TYPE'
          options={BID_TYPE_OPTION}
          value={formData.bid_type}
          onChange={(e) => handleInputChange('bid_type', e.target.value)}
        />
        <InputSelect
          label='Bid Class'
          options={BID_CLASS_OPTION}
          value={formData.bid_class}
          onChange={(e) => handleInputChange('bid_class', e.target.value)}
        />
        <InputSelect
          label='VENDOR ID'
          options={VENDOR_ID_OPTION}
          value={formData.vendor_id}
          onChange={(e) => handleInputChange('vendor_id', e.target.value)}
        />
        <div className='rfq__submit_button'>
          <button type='submit' className='submit_button'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmitForm;
