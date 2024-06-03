import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateRestaurantExpensesFormStepsConfig,
  getInitialValues,
} from "./formConfigs";

const tableData = [
  {
    id: 1,
    restaurantExpenseCategoryName: "Category AB1",
    restaurantName: "Restaurant B",
    restaurantExpenseAmount: 5500,
    restaurantExpensePaymentMode: "Cash",
  },
  {
    id: 1,
    restaurantExpenseCategoryName: "Category AB1",
    restaurantName: "Restaurant C",
    restaurantExpenseAmount: 4500,
    restaurantExpensePaymentMode: "Card",
  },
  {
    id: 1,
    restaurantExpenseCategoryName: "Category AB1",
    restaurantName: "Restaurant B",
    restaurantExpenseAmount: 4000,
    restaurantExpensePaymentMode: "Cash",
  },
];

const tableColumns = [
  { field: "restaurantExpenseCategoryName", label: "Restaurant Expense Category Name" },
  { field: "restaurantName", label: "Restaurant Name" },
  { field: "restaurantExpenseAmount", label: "Restaurant Expense Amount" },
  { field: "restaurantExpensePaymentMode", label: "Restaurant Expense Payment Mode" },
];

const restaurantExpenses = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  const { status } = useSession();

  useEffect(() => {
    if (status && status === "unauthenticated") {
      navigate.push("/");
    }
  }, [status]);

  const [form, setForm] = useState([]);

  useMemo(() => {
    setForm(generateRestaurantExpensesFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Restaurant Expenses"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Restaurant Expenses List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Restaurant Expenses Table"
                  addButtonText="Add New Expense"
                  formStepsConfig={form}
                  setInitialData={setInitialData}
                  setEditItemID={setEditItemID}
                  handleAddRowFormSubmit={handleAddRowFormSubmit}
                  handleEditRowFormSubmit={handleEditRowFormSubmit}
                  handleDeleteRowData={handleDeleteRowData}
                />
              </div>
            </Card_F_Width>
          </Col>
        </Row>
        {/* <!-- row closed --> */}
      </React.Fragment>
    </>
  );
};

restaurantExpenses.layout = "Contentlayout";

export default restaurantExpenses;
