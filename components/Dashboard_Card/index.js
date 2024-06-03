import Link from "next/link";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
const Dashboard_card = ({ color, data }) => {
  console.log("Dashboard cara - data", data);
  const [hovered, setHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <Row>
      {data?.map((item, index) => (
        <Col key={index} xl={3} md={6} lg={6} sm={6} className=" d-grid p-2">
          <Link href={item.url}>
            <Card
              onMouseEnter={() => {
                setHovered(true);
                setHoveredItem(index);
              }}
              onMouseLeave={() => {
                setHovered(false);
                setHovered(null);
              }}
              className={`h-100 bg-${
                hovered && hoveredItem === index ? "secondary" : item.color
              }-gradient text-white `}
              style={{
                transition: "transform 0.5s ease",
                transform:
                  hovered && hoveredItem === index ? "scale(1.03)" : "",
              }}
            >
              <Card.Header
                className={`bg-${
                  hovered && hoveredItem === index ? "secondary" : item.color
                }-gradient `}
              >
                <div className="text-center my-0">
                  <i
                    className={`fe fe-${item.icon} text-${
                      hovered && hoveredItem === index ? "secondary" : "primary"
                    } plan-icon tx-20`}
                  ></i>
                </div>
              </Card.Header>
              <Card.Body className=" my-0 pb-0 text-center">
                <h4 className="text-drak tx-20">{item?.title}</h4>
              </Card.Body>
              <Card.Footer
                className={`bg-${
                  hovered && hoveredItem === index ? "secondary" : item.color
                }-gradient `}
              >
                <h6 className="mb-2">{item?.units}</h6>
                <span> Created by:{item?.creator}</span>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard_card;
