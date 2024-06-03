import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export const Card_F_Width = ({ title, children }) => {
  return (
    <Row>
      <Col sm={12} className="col-12">
        <Card>
          <Card.Header>
            {title ? <h3 className="card-title">{title}</h3> : null}
            <Card.Body className="pt-0 example1-table">{children}</Card.Body>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
};
export const Card_Mid_Width = ({ title, children }) => {
  return (
    <Row>
      <Col xxl={6} xl={12} lg={12} md={12} sm={12}>
        <Card>
          <Card.Header>
            {title ? <h3 className="card-title">{title}</h3> : null}
            <Card.Body className="pt-0 example1-table">{children}</Card.Body>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
};
export const Card_Small_Width = ({ title, children }) => {
  return (
    <Row>
      <Col xl={3} lg={12} md={12} xs={12}>
        <Card>
          <Card.Header>
            {title ? <h3 className="card-title">{title}</h3> : null}
            <Card.Body className="pt-0 example1-table">{children}</Card.Body>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
};
