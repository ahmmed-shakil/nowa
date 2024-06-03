import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

const FormField = ({ type, options, onChange, ...props }) => {
  switch (type) {
    case "select":
      return (
        <Select
          options={options}
          onChange={(selected) => onChange(selected.value)}
          {...props}
        />
      );
    case "text":
    case "email":
    case "number":
    default:
      return (
        <Form.Control
          type={type}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      );
  }
};

export default FormField;
