import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skusname = data.storeSKUSectionName;
    let skucname = data.storeSKUCategoryName;
    let astatus= data.approvalStatus;
    let cby= data.createdBy;
    let aby= data.approvedBy;
    let uby= data.updatedBy;
    let enable= data.enabled;

  return {
    storeSKUSectionName: skusname,
    storeSKUCategoryName: skucname,
    approvalStatus: astatus,
    createdBy: cby,
    approvedBy: aby,
    updatedBy: uby,
    enabled: enable
  };
}
}

export function generateSKUSectionFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
            label: "SKU Section Name",
            type: "text",
            placeholder: "SKU Section Name",
            required: true,
            defaultValue: initialData?.storeSKUSectionName || "",
        },
        {
          label: "SKU Category Name",
          type: "text",
          placeholder: "SKU Category Name",
          required: true,
          defaultValue: initialData?.storeSKUCategoryName || "",
        },
      ],
    },
  ];
}