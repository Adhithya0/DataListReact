import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function EditPage() {
  const history = useHistory();
  const location = useLocation();
  const { selectedValue } = location.state || {};

  const handleEdit = () => {
    // Logic to edit the selected value
    console.log('Edit:', selectedValue);
  };

  const handleGoBack = () => {
    history.push('/');
  };


  return (
    <div>
      <h1>Edit Page</h1>
      <p>Selected Value: {selectedValue}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
}

export default EditPage;

