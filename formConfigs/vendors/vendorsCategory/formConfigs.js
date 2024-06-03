import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let vcname = data.vendorCategoryName;
    let astatus= data.approvalStatus;
    let cby= data.createdBy;
    let aby= data.approvedBy;
    let uby= data.updatedBy;
    let enable= data.enabled;

  return {
    vendorCategoryName: vcname,
    approvalStatus: astatus,
    createdBy: cby,
    approvedBy: aby,
    updatedBy: uby,
    enabled: enable
  };
}
}

export function generateVendorCategoryFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Vendor Category Name",
          type: "text",
          placeholder: "Vendor Category Name",
          required: true,
          defaultValue: initialData?.vendorCategoryName || "",
        },
        {
          label: "Restaurant Name",
          type: "text",
          placeholder: "Restaurant Name",
          required: true,
          defaultValue: initialData?.restaurantName,
        },
      ],
    },
  ];
}