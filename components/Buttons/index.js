import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ color, message, onClick, children }) => {
  const renderButton = (variant) => (
    <Button variant={variant} className="btn me-2" onClick={onClick}>
      {children}
    </Button>
  );

  const renderButtonsByType = () => {
    switch (color) {
      case "primary":
        return renderButton("primary", message || "Primary");
      case "secondary":
        return renderButton("secondary", message || "Secondary");
      case "success":
        return renderButton("success", message || "Success");
      case "info":
        return renderButton("info", message || "Info");
      case "warning":
        return renderButton("warning", message || "Warning");
      case "danger":
        return renderButton("danger", message || "Danger");
      case "light":
        return renderButton("light", message || "Light");
      case "link":
        return renderButton("link", message || "Link");
      default:
        return null;
    }
  };

  return <>{renderButtonsByType()}</>;
};

export default Buttons;
// example
{
  /* <Buttons
color="success"
onClick={() => {
  buttonHandler("working");
}}
> */
}
