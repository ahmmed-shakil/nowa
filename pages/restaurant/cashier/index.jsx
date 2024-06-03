import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import Dashboard_card from "@/components/Dashboard_Card";
import ModalComponent from "@/components/Modal/ModalComponent";
import Seo from "@/components/Seo";
import { tostError } from "@/components/SolidAlerts";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyComponents = () => {
  const cashierData = [
    {
      title: "Expense Category",
      units: "12 categories",
      creator: "John doe",
      color: "primary",
      url: "/admin/restaurantExpense/expenseCategory",
      icon: "dollar-sign",
    },
    {
      title: "Expenses",
      units: "10 Items",
      creator: "John DOe",
      color: "primary",
      url: "/admin/restaurantExpense/expenses",
      icon: "dollar-sign",
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
      <Dashboard_card color={"primary"} data={cashierData} />
    </>
  );
};
MyComponents.layout = "Contentlayout";

export default MyComponents;
