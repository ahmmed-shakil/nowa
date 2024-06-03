import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateStorePurchaseItemFormStepsConfig,
  getInitialValues,
} from "./formConfigs";

const tableData = [
  {
    id: 1,
    restaurandID: "Category AB1",
    vendorName: "Vendor B",
    storeSKUItemVariantName: "Variant A1",
    storePurchaseQuantity: 45,
    storePurcuaseRate: 550,
    storePurchaseAmount: 59010,
    updatedAt: "10/4/24",
  },
  {
    id: 1,
    restaurandID: "Category AB3",
    vendorName: "Vendor A",
    storeSKUItemVariantName: "Variant A3",
    storePurchaseQuantity: 25,
    storePurcuaseRate: 600,
    storePurchaseAmount: 35000,
    updatedAt: "20/6/24",
  },
  {
    id: 1,
    restaurandID: "Category AB2",
    vendorName: "Vendor C",
    storeSKUItemVariantName: "Variant A1",
    storePurchaseQuantity: 30,
    storePurcuaseRate: 350,
    storePurchaseAmount: 60500,
    updatedAt: "12/7/24",
  },
];

const tableColumns = [
  { field: "restaurandID", label: "Store Name" },
  { field: "storeSKUItemVariantName", label: "Item Variant" },
  { field: "vendorName", label: "Vendor" },
  { field: "storePurchaseQuantity", label: "Purchased Quantity" },
  { field: "storePurcuaseRate", label: "Rate" },
  { field: "storePurchaseAmount", label: "Total Amount" },
  { field: "updatedAt", label: "Purchase Date" },
];

const StorePurchase = () => {
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
    setForm(generateStorePurchaseItemFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Store Purchase"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Store Purchase List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Store Purchase Table"
                  addButtonText="Add New Purchase"
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

StorePurchase.layout = "Contentlayout";

export default StorePurchase;
