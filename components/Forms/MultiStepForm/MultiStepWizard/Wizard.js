import React from "react";
import { Button } from "react-bootstrap";

const Wizard = ({ step, onChange, onSubmit, data, readOnly, children }) => {
  const steps = React.Children.toArray(children);
  const prevStep = step !== 0 && steps[step - 1].props;
  const nextStep = step !== steps.length - 1 && steps[step + 1].props;

  const isLastStep = step === steps.length - 1;
  const isFirstStep = step === 0;
  function getClsNavBtn(active) {
    return "btn" + (active ? " btn-primary" : "");
  }

  function Button({ visible, ...props }) {
    return (
      <button
        className={visible ? "btn btn-primary " : "invisible"}
        {...props}
      />
    );
  }

  console.log(steps?.length);

  return (
    <div>
      {steps?.length > 1 ? (
        <nav className="btn-group steps basicsteps">
          {steps.map((s, index) => (
            <Button
              key={s.props.number}
              onClick={() => onChange(index)}
              className={getClsNavBtn(index === step)}
            >
              <span className="number me-2 ">{s.props.number}</span>
              <i>{s.props.title}</i>
            </Button>
          ))}
        </nav>
      ) : null}
      <div>{steps[step]}</div>
      {steps?.length === 1 ? (
        <div className=" p-3 d-flex justify-content-center  ">
          <Button
            className={`${!readOnly ? "btn btn-secondary" : "d-none"}`}
            onClick={() => onSubmit && onSubmit(data)}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className=" p-3 d-flex justify-content-between  ">
          <Button
            visible={prevStep}
            onClick={() => onChange(step - 1)}
            title={prevStep.description}
          >
            Back
          </Button>
          <Button
            visible={prevStep}
            className={`${
              prevStep && !readOnly ? "btn btn-secondary" : "d-none"
            }`}
            onClick={() => onSubmit && onSubmit(data)}
          >
            Submit
          </Button>
          <Button
            visible={nextStep}
            onClick={() => onChange(step + 1)}
            title={nextStep.description}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Wizard;
