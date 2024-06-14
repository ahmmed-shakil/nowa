import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateStorePurchaseFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/Purchase/storeItemVariantPurchase/formConfigs";

const tableData = [
  {
    id: 1,
    SKUItemVariantName: "Variant B",
    SKUItemVariantPurchaseRates: 500,
    SKUItemVariantNewRate: 350,
    SKUItemVariantOldRate: 650,
  },
  {
    id: 1,
    SKUItemVariantName: "Variant A",
    SKUItemVariantPurchaseRates: 450,
    SKUItemVariantNewRate: 550,
    SKUItemVariantOldRate: 700,
  },
  {
    id: 1,
    SKUItemVariantName: "Variant A",
    SKUItemVariantPurchaseRates: 600,
    SKUItemVariantNewRate: 250,
    SKUItemVariantOldRate: 750,
  },
];

const tableColumns = [
  { field: "SKUItemVariantName", label: "SKU Variant Name" },
  { field: "SKUItemVariantPurchaseRates", label: "Purchase Rates" },
  { field: "SKUItemVariantNewRate", label: "New Rate" },
  { field: "SKUItemVariantOldRate", label: "Old Rate" },
];

const SKUItemVariantPurchase = () => {
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
    setForm(generateStorePurchaseFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"SKU Item Variant Purchase"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Item Variant Purchase List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Item Variant Purchase Table"
                  addButtonText="Add New Item"
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

SKUItemVariantPurchase.layout = "Contentlayout";

export default SKUItemVariantPurchase;
