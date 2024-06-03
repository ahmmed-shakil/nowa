import React, { useState } from "react";
import Select from "react-select";
import {
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
  Table,
  Card,
} from "react-bootstrap";

//Basic start
const Wizard = ({ step: currentIndex, initialData, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>
      <nav className="btn-group steps basicsteps">
        {steps.map((step, index) => (
          <Button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </Button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn" + (active ? " btn-primary" : "");
}
function Button({ visible, ...props }) {
  return (
    <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
  );
}

export class RestaurantDetailsWizard extends React.Component {
  state = {
    step: 0,
  };
  handleStep = (step) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizard
        step={this.state.step}
        onChange={this.handleStep}
        initialData={this.props.initialData}
      >
        <Step title="Basic Information" number="1">
          <section className="card-body Basicwizard ">
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                disabled
                placeholder="Restaurant Name"
                defaultValue={this.props.initialData.restaurantName}
              />
            </FormGroup>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Email </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    disabled
                    placeholder="Email Address"
                    defaultValue={this.props.initialData.email}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    disabled
                    placeholder="Phone Number"
                    defaultValue={this.props.initialData.phoneNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>

        <Step title="Location Information" number="2">
          <section className="card-body Basicwizard ">
            <Row>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Country</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    disabled
                    placeholder="Email Address"
                    defaultValue={this.props.initialData?.country}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">State</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    disabled
                    placeholder="Email Address"
                    defaultValue={this.props.initialData?.state}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">City</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="City"
                    disabled
                    defaultValue={this.props.initialData.city}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Zip Code</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                    placeholder="Zip Code"
                    disabled
                    defaultValue={this.props.initialData?.zipCode}
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>
      </Wizard>
    );
  }
}
//Basic end
