import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
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
    setShow(false); // Hide the form after submitting
  };

  const handleEdit = (index) => {
    // Set the index of the item being edited and switch to edit mode
    setEditIndex(index);
    setShow(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        bgcolor: '#f0f2f5', // Light background color
        p: 2,
      }}
    >
      {isShow ? (
        <DropdownForm onSubmit={handleSubmit} initialData={editIndex !== null ? formDataList[editIndex] : null} Show={setShow} />
      ) : (
        <Paper elevation={3} sx={{ p: 3, width: '80%', maxWidth: 600 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Data List
          </Typography>
          <List>
            {formDataList.map((formData, index) => (
              <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItemText primary={`Text: ${formData.text}`} secondary={`Dropdown: ${formData.dropdown}`} />
                <Button variant="outlined" onClick={() => handleEdit(index)} sx={{ ml: 2 }}>
                  Edit
                </Button>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={() => setShow(true)} sx={{ mt: 2 }}>
            Add New
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default DisplayPage;
