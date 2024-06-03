import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import Buttons from "@/components/Buttons";
import {
  Card_F_Width,
  Card_Mid_Width,
  Card_Small_Width,
} from "@/components/Cards";
import ModalComponent from "@/components/Modal/ModalComponent";
import Seo from "@/components/Seo";
import { tostError } from "@/components/SolidAlerts";
import Widget_4 from "@/components/Widget_4";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyComponents = () => {
  // Alerts, Other multiple tost are also there check them out
  tostError("Alert Working");
  // MOre type of tost=>  tostSuccess , tostInfo, tostWhite

  //Buttons , Only function to showcase state uplifting is also working
  //Button color=  primary, secondary, info , warning, danger,link
  const buttonOneHandler = (a) => {
    console.log(a);
  };
  const buttonTwoHandler = () => {
    console.log("working");
    setViewModal(true);
  };
  //Modal
  //Title , openModal = true/false, setOpenModal= stateUpdate Function, title, children
  const [viewModal, setViewModal] = useState(false);
  // Widget 4
  const data = [
    { title: "Dishant", value: 21 },
    { title: "Sourabh", value: 27 },
    { title: "Shakil", value: 26 },
  ];

  const storeVendorData = [
    { title: "Vendor Categories", units: "12 categories", creator: "John doe" },
    {
      title: "Vendors",
      units: "20 vendors",
      creator: "John DOe",
    },
  ];
  return (
    <>
      <Seo title={"Store"}></Seo>
      <BreadcrumbCustom />
      <Card_Small_Width title="title">Working</Card_Small_Width>
      <Card_Mid_Width title="title">Working</Card_Mid_Width>
      <Card_F_Width>working</Card_F_Width>
      <Buttons
        color="success"
        onClick={() => {
          buttonOneHandler("button One Working");
        }}
      >
        button One
      </Buttons>
      <Buttons color="success" onClick={buttonTwoHandler}>
        button Two
      </Buttons>
      <ModalComponent
        openModal={viewModal}
        setOpenModal={setViewModal}
        title="Test Modal"
      >
        working
      </ModalComponent>
      <Widget_4 color="primary" data={data} />
    </>
  );
};

MyComponents.layout = "Contentlayout";

export default MyComponents;
