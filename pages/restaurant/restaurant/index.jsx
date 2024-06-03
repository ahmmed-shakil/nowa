import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import Dashboard_card from "@/components/Dashboard_Card";
import ModalComponent from "@/components/Modal/ModalComponent";
import Seo from "@/components/Seo";
import { tostError } from "@/components/SolidAlerts";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyComponents = () => {
  const restaurantData = [
    {
      title: "Waste Category",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/waste-management/category",
      icon: "trash",
    },
    {
      title: "Waste Item",
      units: "10 Item",
      creator: "John DOe",
      color: "primary",
      url: "/admin/waste-management/item",
      icon: "trash",
    },
    {
      title: "Non Chargeable Category",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/non-chargable/category",
      icon: "dollar-sign",
    },
    {
      title: "Non Chargeable Item",
      units: "12 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/non-chargable/item",
      icon: "dollar-sign",
    },
    {
      title: "Restaurant SKU Category",
      units: "12 Categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "Restaurant SKU Group",
      units: "12 Groups",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "Restaurant SKU Item",
      units: "10 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "Restaurant SKU Item Variant",
      units: "5 Item Variants",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "Gas Readings",
      units: "3 readings",
      creator: "John doe",
      color: "primary",
      url: "/admin/Gas/gasReading",
      icon: "zap",
    },
  ];
  return (
    <>
      <Seo title={"Store"}></Seo>
      <BreadcrumbCustom />
      <div className="text-wrap">
        <div className="example">
          <h1 className="text-primary">Dashboard</h1>
        </div>
      </div>
      <Dashboard_card color={"primary"} data={restaurantData} />
    </>
  );
};
MyComponents.layout = "Contentlayout";

export default MyComponents;
