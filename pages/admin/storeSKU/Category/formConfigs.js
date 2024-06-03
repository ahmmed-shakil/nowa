import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skucname = data.SKUCategoryName;
    let astatus= data.approvalStatus;
    let cby= data.createdBy;
    let aby= data.approvedBy;
    let uby= data.updatedBy;
    let isVeg = data.isVEG;


  return {
    SKUCategoryName: skucname,
    approvalStatus: astatus,
    createdBy: cby,
    approvedBy: aby,
    updatedBy: uby,
    isVEG: isVeg,
  };
}
}

export function generateSKUCategoryFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "SKU Category Name",
          type: "text",
          placeholder: "SKU Category Name",
          required: true,
          defaultValue: initialData?.SKUCategoryName || "",
        },
        {
            label: "isVEG",
            type: "text",
            placeholder: "isVEG",
            required: true,
            defaultValue: initialData?.isVEG || "",
          },
      ],
    },
  ];
}