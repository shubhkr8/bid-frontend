import React, { useEffect, useRef, useState } from 'react';
import './AcknowledgeForm.css';
import axios from 'axios';
import InputBox from '../../components/InputBox/InputBox';
import Loader from '../../loader/Loader';
import { fetchDataFromApi } from '../QueryTable/QueryTable';
import { renderApiAckForm, renderApiFormNo } from '../../utils/apiEndPoints';

const intialFormData = {
  rfq_no: '',
  rfq_start_date: '',
  rfq_end_date: '',
  buyer: '',
  buyer_no: '',
  scope: '',
  material_line_items: '',
  bid_type: '',
  usr_name: '',
  sys_name: '',
};

const AcknowledgeForm = () => {
  const serailNoRef = useRef(0);
  const [formData, setFormData] = useState(intialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add a timestamp property to the form data
    const formDataWithTimestamp = {
      ...formData,
      timestamp: formatTimestamp(new Date()),
      serial_no: serailNoRef.current,
    };
    console.log(formDataWithTimestamp);
    setIsLoading(true);

    try {
      await axios.post(renderApiAckForm, formDataWithTimestamp);
      console.log('Form submitted successfully!');
      serailNoRef.current = serailNoRef.current + 1;
      // Add any additional logic or redirect here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsLoading(false);
    alert(' Acknowledge Form Submitted Successfully');
    setFormData(intialFormData);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi(renderApiFormNo);
        serailNoRef.current = result.nextSerialNo;
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <form onSubmit={handleSubmit} className='Rfq_form'>
      <h1>RFQ Acknowledgement</h1>
      {isLoading && <Loader />}
      <div className='rfq__submit'>
        <div className='form_number'>
          <label>
            FORM NUMBER : <span id='form_number_id'>{serailNoRef.current}</span>
          </label>
        </div>
        <InputBox
          label='USER NAME'
          id='usr_name'
          type='text'
          value={formData.usr_name}
          onChange={(e) => handleInputChange('usr_name', e.target.value)}
        />
        <InputBox
          label='SYSTEM NAME'
          id='sys_name'
          type='text'
          value={formData.sys_name}
          onChange={(e) => handleInputChange('sys_name', e.target.value)}
        />
        <InputBox
          label='RFQ NO'
          id='rfq_no'
          type='text'
          value={formData.rfq_no}
          onChange={(e) => handleInputChange('rfq_no', e.target.value)}
          required
        />
        <InputBox
          label='RFQ START'
          id='rfq_start_date'
          type='text'
          value={formData.rfq_start_date}
          onChange={(e) => handleInputChange('rfq_start_date', e.target.value)}
        />
        <InputBox
          label='RFQ END'
          id='rfq_end_date'
          type='text'
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
        <InputBox
          label='BID TYPE'
          id='bid_type'
          type='text'
          value={formData.bid_type}
          onChange={(e) => handleInputChange('bid_type', e.target.value)}
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

export default AcknowledgeForm;

export const formatTimestamp = (timestamp) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedTime = new Date(timestamp).toLocaleTimeString(
    'en-GB',
    options
  );

  // Remove the comma between date and time
  return `${formattedTime.replace(',', '')}`;
};

// export const handleCheckboxChange = (value) => {
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
