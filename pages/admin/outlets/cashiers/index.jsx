import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateCashierFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/outlets/cashiers/formConfigs";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/shared/redux/actions/authAction";

const tableData = [
  {
    id: 1,
    cashierName: "Cashier A",
    restaurantName: "POG",
    email: "cashier1@gmail.com",
    phoneNumber: "6856210141",
  },
  {
    id: 2,
    cashierName: "Cashier B",
    restaurantName: "POG",
    email: "cashier2@gmail.com",
    phoneNumber: "3853110165",
  },
  {
    id: 3,
    cashierName: "Cashier C",
    restaurantName: "POG",
    email: "cashier3@gmail.com",
    phoneNumber: "3852371324",
  },
];

const tableColumns = [
  { field: "cashierName", label: "Name" },
  { field: "restaurantName", label: "Restaurant Name" },
  { field: "email", label: "Email Address" },
  { field: "phoneNumber", label: "Phone Number" },
];

const Cashiers = () => {
  const dispatch = useDispatch();

  const navigate = useRouter();

  const [cashiersData, setCashiersData] = useState([]);

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  // useEffect(()=>{
  //   const data = dispatch()
  // },[dispatch])

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

  const [form, setForm] = useState([]);

  useMemo(() => {
    setForm(generateCashierFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Cashiers"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Cashier List"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="Add Cashier"
                  addButtonText="Add New Cashier"
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

Cashiers.layout = "Contentlayout";

export default Cashiers;
