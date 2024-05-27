import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownForm from './DropdownForm';

const DisplayPage = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [isShow, setShow] = useState(true);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const handleSubmit = (formData) => {
    if (editIndex !== null) {
      // If editing existing data, replace the old data with the edited data
      const updatedFormDataList = [...formDataList];
      updatedFormDataList[editIndex] = formData;
      setFormDataList(updatedFormDataList);
      setEditIndex(null); // Reset edit index after editing
    } else {
      // If adding new data, simply add it to the list
      setFormDataList([...formDataList, formData]);
    }
  };

  const handleEdit = (index) => {
    // Set the index of the item being edited and switch to edit mode
    setEditIndex(index);
    setShow(true);
  };

  return (
    <div>
      {isShow ? (
        <DropdownForm onSubmit={(data) => handleSubmit(data)} initialData={editIndex !== null ? formDataList[editIndex] : null} Show={setShow} />
      ) : (
        <div>
          <h2>Data List</h2>
          <ul>
            {formDataList.map((formData, index) => (
              <li key={index}>
                Text: {formData.text}, Dropdown: {formData.dropdown}
                <button onClick={() => handleEdit(index)}>Edit</button>
              </li>
            ))}
          </ul>
          <Link onClick={() => setShow(true)}>Add New</Link>
        </div>
      )}
    </div>
  );
};

export default DisplayPage;
