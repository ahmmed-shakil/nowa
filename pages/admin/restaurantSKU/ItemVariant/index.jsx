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
} from "../../../../formConfigs/restaurantSKU/ItemVariant/formConfigs";

const tableData = [
  {
    id: 1,
    SKUItemVariantName: "Section AC2",
    SKUItemName: "Category 1",
    isNCItem: "No",
    SKUItemVariantQuantity: 250,
    SKUItemVariantRate: 650,
    SKUItemVariantExpirationDate: Date,
  },
  {
    id: 2,
    SKUItemVariantName: "Section AC1",
    SKUItemName: "Category 3",
    isNCItem: "No",
    SKUItemVariantQuantity: 150,
    SKUItemVariantRate: 550,
    SKUItemVariantExpirationDate: Date,
  },
  {
    id: 3,
    SKUItemVariantName: "Section AC3",
    SKUItemName: "Category 2",
    isNCItem: "No",
    SKUItemVariantQuantity: 100,
    SKUItemVariantRate: 450,
    SKUItemVariantExpirationDate: Date,
  },
];

const tableColumns = [
  { field: "SKUItemVariantName", label: "ItemVariant" },
  { field: "SKUItemName", label: "Item" },
  { field: "isNCItem", label: "isNC" },
  { field: "SKUItemVariantQuantity", label: "Quantity" },
  { field: "SKUItemVariantRate", label: "Rate" },
  // { field: "SKUItemVariantExpirationDate", label: "Date" },
];

const ItemVariant = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  const { status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

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
