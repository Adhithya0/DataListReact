import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, MenuItem, Button, Box } from '@mui/material';

const DropdownForm = ({ onSubmit, initialData, Show }) => {
  const [formData, setFormData] = useState({
    text: '',
    dropdown: ''
  });

  // Set initial form data when initialData prop changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ // Reset the form after saving
      text: '',
      dropdown: ''
    });
  };

  return (
    <div>
      <h1>{initialData ? 'Edit Form' : 'Data Insert Form'}</h1>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
        <TextField
          label="Text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          select
          label="Dropdown"
          name="dropdown"
          value={formData.dropdown}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="animals">animals</MenuItem>
          <MenuItem value="fruits">fruits</MenuItem>
          <MenuItem value="others">others</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleSave}>
          {initialData ? 'Update' : 'Save'}
        </Button>
      </Box>
      <Link onClick={() => Show(false)}>View Data List</Link>
    </div>
  );
};

export default DropdownForm;
