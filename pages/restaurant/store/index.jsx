import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import Dashboard_card from "@/components/Dashboard_Card";
import ModalComponent from "@/components/Modal/ModalComponent";
import Seo from "@/components/Seo";
import { tostError } from "@/components/SolidAlerts";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyComponents = () => {
  const storeVendorData = [
    {
      title: "Vendor Categories",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "user",
    },
    {
      title: "Vendors",
      units: "20 vendors",
      creator: "John DOe",
      color: "primary",
      url: "/admin/vendors/vendorsList",
      icon: "user",
    },
    {
      title: "SKU Categories",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "SKU Section",
      units: "12 Sections",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "SKU Items",
      units: "12 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "SKU Item Variants",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "shopping-bag",
    },
    {
      title: "Restaurant Issue",
      units: "10 Issues",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "alert-circle",
    },
    {
      title: "Restaurant Issue Item",
      units: "5 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "alert-circle",
    },
    {
      title: "Store Purchase",
      units: "3 Purchases",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "dollar-sign",
    },
    {
      title: "Store Purchase Item",
      units: "10 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "dollar-sign",
    },
    {
      title: "Store Inventory",
      units: "12 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "box",
    },
    {
      title: "Store Inventory Details",
      units: "12 Items",
      creator: "John doe",
      color: "primary",
      url: "/admin/vendors/vendorsCategory",
      icon: "box",
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
      <Dashboard_card color={"primary"} data={storeVendorData} />
    </>
  );
};
MyComponents.layout = "Contentlayout";

export default MyComponents;
