import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300,
          p: 3, // Padding
          border: '1px solid #ccc', // Optional border
          borderRadius: 4, // Optional border radius
          boxShadow: 10, // Optional shadow
        }}
      >
        <Typography variant="h5" component="h1" align="center">
          {initialData ? 'Edit Form' : 'Data Insert Form'}
        </Typography>
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
          <MenuItem value="animals">Animals</MenuItem>
          <MenuItem value="fruits">Fruits</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleSave}>
          {initialData ? 'Update' : 'Save'}
        </Button>
        <Link 
          onClick={() => Show(false)} 
          style={{ 
            textAlign: 'center', 
            marginTop: '16px', 
            color: '#1976d2', 
            textDecoration: 'none' 
          }}
        >
          View Data List
        </Link>
      </Box>
    </Box>
  );
};

export default DropdownForm;
