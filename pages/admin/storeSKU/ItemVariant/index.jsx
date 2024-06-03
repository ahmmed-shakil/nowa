import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateSKUItemVariantFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/storeSKU/ItemVariant/formConfigs";

const tableData = [
  {
    id: 1,
    SKUItemVariantName: "Variant AC2",
    SKUItemName: "Item 1",
    SKUItemVariantQuantity: 250,
    SKUItemVariantRate: 650,
    approvalStatus: true,
    approvedBy: "userC",
    enabled: true,
  },
  {
    id: 2,
    SKUItemVariantName: "Variant AC1",
    SKUItemName: "Item 3",
    SKUItemVariantQuantity: 150,
    SKUItemVariantRate: 550,
    approvalStatus: false,
    approvedBy: "userA",
    enabled: true,
  },
  {
    id: 3,
    SKUItemVariantName: "Variant AC3",
    SKUItemName: "Item 2",
    SKUItemVariantQuantity: 100,
    SKUItemVariantRate: 450,
    approvalStatus: false,
    approvedBy: "userB",
    enabled: false,
  },
];

const tableColumns = [
  { field: "SKUItemVariantName", label: "Variant Name" },
  { field: "SKUItemName", label: "SKU Item" },
  { field: "SKUItemVariantQuantity", label: "Quantity" },
  { field: "SKUItemVariantRate", label: "Rate" },
  { field: "approvalStatus", label: "Approval Status" },
  { field: "approvedBy", label: "ApprovedBy" },
  { field: "enabled", label: "Enabled" },
];

const ItemVariant = () => {
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
    setForm(generateSKUItemVariantFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"SKU Item Variant"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"SKU Item Variant"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My SKU Item Variant Table"
                  addButtonText="Add New Variant"
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

ItemVariant.layout = "Contentlayout";

export default ItemVariant;
