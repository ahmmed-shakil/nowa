import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateVendorFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/vendors/vendorsList/formConfigs";

const tableData = [
  {
    id: 1,
    vendorName: "Vendor A",
    vendorCategoryName: "Category AB2",
    email: "vendor1@gmail.com",
    phoneNumber: "8356610115",
  },
  {
    id: 2,
    vendorName: "Vendor B",
    vendorCategoryName: "Category AB1",
    email: "vendor2@gmail.com",
    phoneNumber: "6753220156",
  },
  {
    id: 3,
    vendorName: "Vendor C",
    vendorCategoryName: "Category AB2",
    email: "vendor3@gmail.com",
    phoneNumber: "4552371312",
  },
];

const tableColumns = [
  { field: "vendorName", label: "Name" },
  { field: "vendorCategoryName", label: "Category" },
  { field: "email", label: "Email Address" },
  { field: "phoneNumber", label: "Phone Number" },
];

const Vendors = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});

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
    setForm(generateVendorFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Vendors"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Vendor List"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Vendor Table"
                  addButtonText="Add New Vendor"
                  formStepsConfig={form}
                  setInitialData={setInitialData}
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

Vendors.layout = "Contentlayout";

export default Vendors;
