import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const Widget_4 = ({ color, data }) => {
  //Color Example  = primary, danger, success, warning
  return (
    <Row className="row-sm" >
      {data.map((card, index) => {
        return (
          <Col key={index} lg={6} xl={3} md={6} className="col-12">
            <Card className={` bg-${color}-gradient text-white `}>
              <Card.Body>
                <Row>
                  <div className="col-6">
                    <div className="icon1 mt-2 text-center">
                      <i className="fe fe-users tx-40"></i>
                    </div>
                  </div>
                  <Col className="col-6">
                    <div className="mt-0 text-center">
                      <span className="text-white">{card.title}</span>
                      <h2 className="text-white mb-0">{card.value}</h2>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Widget_4;
