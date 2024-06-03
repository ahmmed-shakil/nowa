/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import Wizard from "./Wizard";
import { set } from "immutable";

const MultiStepWizard = ({
  formStepsConfig,
  handleFormSubmit,
  initialData,
  // setInitialData,
  readOnly,
}) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [changed, setChanged] = useState(false);

  // const handleStep = (step) => {
  //   setStep(setp);
  // };

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // useEffect(() => {
  //   setInitialData &&
  //     initialData &&
  //     setInitialData({ ...initialData, readOnly });
  // }, [initialData]);

  const renderField = (fieldConfig) => {
    switch (fieldConfig.type) {
      case "select":
        const options = fieldConfig?.optionsSource(
          formData[fieldConfig.dependsOn]
        );
        return (
          <Select
            options={options}
            value={formData[fieldConfig.label]}
            onChange={(selectedOption) =>
              handleFieldChange(fieldConfig.label, selectedOption)
            }
            classNamePrefix="selectform"
            closeMenuOnSelect={true}
            isMulti={fieldConfig.isMulti}
            isDisabled={
              (fieldConfig.dependsOn && !formData[fieldConfig.dependsOn]) ||
              readOnly
            }
            defaultValue={fieldConfig?.defaultValue}
          />
        );
      case "text":
      case "email":
      case "number":
        return (
          <Form.Control
            type={fieldConfig.type}
            placeholder={fieldConfig.placeholder}
            required={fieldConfig.required}
            onChange={(e) => {
              setChanged(true);
              handleFieldChange(fieldConfig.label, e.target.value);
            }}
            value={
              !changed && fieldConfig.defaultValue
                ? fieldConfig.defaultValue
                : formData[fieldConfig.label]
            }
            // ref={useRef()}
          />
        );
      default:
        return null;
    }
  };

  const Step = useMemo(
    () =>
      ({ children }) =>
        <>{children}</>,
    []
  );

  return (
    <Wizard
      step={step}
      onChange={setStep}
      onSubmit={handleFormSubmit}
      data={formData}
      readOnly={readOnly}
    >
      {formStepsConfig?.map((stepConfig, index) => (
        <Step
          title={stepConfig.stepTitle}
          number={stepConfig.stepNumber}
          key={index}
        >
          <section className="card-body Basicwizard">
            <Row>
              {stepConfig.fields.map((field, fieldIndex) => (
                <Col
                  xs={12}
                  md={stepConfig?.fields?.length > 1 ? 6 : 12}
                  key={fieldIndex}
                >
                  <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      {field.label?.toUpperCase()}
                    </Form.Label>
                    {renderField(field)}
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </section>
        </Step>
      ))}
    </Wizard>
  );
};

export default MultiStepWizard;
