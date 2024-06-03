import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import { generateRestaurantFormStepsConfig, getInitialValues } from "./formConfigs";

const tableData = [
  {
    id: 1,
    restaurantName: "Restaurant User A",
    emailAddress: "restaurant1@gmail.com",
    // username: "restaurant1",
    // password: "123345",
    phoneNumber: "9541297202",
    gender: "Male",
    // dateOfBirth: "11-02-2022",
    // addressLine1: "H.No-59,Avtar Enclave",
    // addressLine2: "Mumbai",
    // city: "Mumbai",
    // state: "Mumbai",
    // country: "India",
    // zipcode: "148702",
    // countryCode: "+91",
    restaurantRoleName: "roleType A",
    // userImage: "ABC.jpg",
  },
  {
    id: 1,
    restaurantName: "Restaurant User B",
    emailAddress: "restaurant11@gmail.com",
    // username: "restaurant11",
    // password: "123345",
    phoneNumber: "8741297202",
    gender: "Male",
    // dateOfBirth: "31-01-2023",
    // addressLine1: "Street 2,Officers Enclave",
    // addressLine2: "Delhi Cantt.",
    // city: "Delhi",
    // state: "Delhi",
    // country: "India",
    // zipcode: "148702",
    // countryCode: "+91",
    restaurantRoleName: "roleType C",
    // userImage: "ABC1.jpg",
  },
  {
    id: 1,
    restaurantName: "Restaurant User C",
    emailAddress: "restaurant12@gmail.com",
    // username: "restaurant12",
    // password: "123345",
    phoneNumber: "8741297202",
    gender: "Male",
    // dateOfBirth: "31-01-2023",
    // addressLine1: "Street 2,Officers Enclave",
    // addressLine2: "Delhi Cantt.",
    // city: "Delhi",
    // state: "Delhi",
    // country: "India",
    // zipcode: "148702",
    // countryCode: "+91",
    restaurantRoleName: "roleType B",
    // userImage: "ABC2.jpg",
  },
];

const tableColumns = [
  { field: "restaurantName", label: "Restaurant User Name" },
  { field: "emailAddress", label: "Email" },
  // { field: "username", label: "Username" },
  // { field: "password", label: "Password" },
  { field: "phoneNumber", label: "Phone Number" },
  { field: "gender", label: "Gender" },
  // { field: "dateOfBirth", label: "DOB" },
  // { field: "addressLine1", label: "Address Line 1" },
  // { field: "addressLine2", label: "Address Line 2" },
  // { field: "city", label: "City" },
  // { field: "state", label: "State" },
  // { field: "country", label: "Country" },
  // { field: "zipcode", label: "Zip Code" },
  // { field: "countryCode", label: "Country Code" },
  { field: "restaurantRoleName", label: "Restaurant Role Name" },
  // { field: "userImage", label: "User Image" },
];

const RestaurantUser = () => {
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
    setForm(generateRestaurantFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Restaurant User"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Restaurant User List"}>  
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Restaurant Table"
                  addButtonText="Add New Restaurant"
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

RestaurantUser.layout = "Contentlayout";

export default RestaurantUser;
