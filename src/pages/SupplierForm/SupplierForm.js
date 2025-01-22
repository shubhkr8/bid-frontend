import React, { useEffect, useRef, useState } from 'react';
import './SupplierForm.css';
import axios from 'axios';
import InputBox from '../../components/InputBox/InputBox';
import Loader from '../../loader/Loader';
import { fetchDataFromApi } from '../QueryTable/QueryTable';
import { renderApiSupplier, renderApiSupplierFormNo } from '../../utils/apiEndPoints';
import { SUBMITTED_BY } from '../../utils/Constant';
import InputSelect from '../../components/InputSelect/InputSelect';

const intialFormData = {
  supplier_name: '',
  phone_no: '',
  address: '',
  materail_1: '',
  materail_2: '',
  materail_3: '',
  email: '',
  tag: '',
  gst: '',
  attachment_link: '',
  submitted_by: '',
};

const SupplierForm = () => {
  const serailNoRef = useRef(0);
  const formref = useRef();
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
    console.log('form data', formDataWithTimestamp);
    setIsLoading(true);

    try {
      await axios.post(renderApiSupplier, formDataWithTimestamp);
      console.log('Form submitted successfully!');
      serailNoRef.current = serailNoRef.current + 1;
      // Add any additional logic or redirect here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsLoading(false);
    alert(' Supplier Form Submitted Successfully');
    setFormData(intialFormData);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi(renderApiSupplierFormNo);
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
    <form ref={formref} onSubmit={handleSubmit} className='Supplier_form'>
      <h1>Supplier Details</h1>
      {isLoading && <Loader />}
      <div className='rfq__submit'>
        <div className='form_number'>
          <label>
            FORM NUMBER : <span id='form_number_id' name='sr_number'>{serailNoRef.current}</span>
          </label>
        </div>
        <InputBox
          label='SUPPLIER NAME'
          id='supplier_name'
          name='supplier_name'
          type='text'
          value={formData.supplier_name}
          onChange={(e) => handleInputChange('supplier_name', e.target.value)}
        />
        <InputBox
          label='PHONE NO'
          id='phone_no'
          type='text'
          name='phone_number'
          value={formData.phone_no}
          onChange={(e) => handleInputChange('phone_no', e.target.value)}
          required
        />
        <InputBox
          label='ADDRESS'
          id='address'
          type='text'
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />
        <InputBox
          label='MATERIAL 1'
          id='materail_1'
          type='text'
          value={formData.materail_1}
          onChange={(e) => handleInputChange('materail_1', e.target.value)}
        />
        <InputBox
          label='MATERIAL 2'
          id='materail_2'
          type='text'
          name='materail_2'
          value={formData.materail_2}
          onChange={(e) => handleInputChange('materail_2', e.target.value)}
        />
        <InputBox
          label='MATERIAL 3'
          id='materail_3'
          type='text'
          value={formData.materail_3}
          onChange={(e) => handleInputChange('materail_3', e.target.value)}
        />
        <InputBox
          label='EMAIL'
          id='email'
          type='text'
          name='email'
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <InputBox
          label='TAG'
          id='tag'
          type='text'
          value={formData.tag}
          onChange={(e) =>
            handleInputChange('tag', e.target.value)
          }
        />
        <InputBox
          label='GST'
          id='gst'
          type='text'
          value={formData.gst}
          onChange={(e) =>
            handleInputChange('gst', e.target.value)
          }
        />
        <InputBox
          label='ATTACHMENT LINK'
          id='attachment_link'
          type='text'
          value={formData.attachment_link}
          onChange={(e) =>
            handleInputChange('attachment_link', e.target.value)
          }
        />
        <InputSelect
          label='Submitted By'
          options={SUBMITTED_BY}
          value={formData.submitted_by}
          onChange={(e) => handleInputChange('submitted_by', e.target.value)}
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

export default SupplierForm;

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
