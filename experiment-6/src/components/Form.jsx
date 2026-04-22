import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Typography
} from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let temp = {};

    temp.name = formData.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Valid email is required";
    temp.password =
      formData.password.length >= 6
        ? ""
        : "Password must be at least 6 characters";
    temp.gender = formData.gender ? "" : "Select gender";
    temp.course = formData.course ? "" : "Select a course";
    temp.terms = formData.terms ? "" : "Accept terms & conditions";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ");
      console.log(formData);
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <FormControl
          component="fieldset"
          margin="normal"
          error={Boolean(errors.gender)}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
          <Typography color="error" variant="caption">
            {errors.gender}
          </Typography>
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.course)}>
          <Select
            name="course"
            displayEmpty
            value={formData.course}
            onChange={handleChange}
          >
            <MenuItem value="">Select Course</MenuItem>
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="node">Node.js</MenuItem>
            <MenuItem value="python">Python</MenuItem>
          </Select>
          <Typography color="error" variant="caption">
            {errors.course}
          </Typography>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
          }
          label="I accept terms & conditions"
        />
        <Typography color="error" variant="caption" display="block">
          {errors.terms}
        </Typography>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
