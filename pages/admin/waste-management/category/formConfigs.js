import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let wmcname = data.wasteManagementCategoryName;

  return {
    vendorCategoryName: wmcname,
  };
}
}

export function generateWasteManagementCategoryFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Waste Management Category Name",
          type: "text",
          placeholder: "Waste Management Category Name",
          required: true,
          defaultValue: initialData?.wasteManagementCategoryName || "",
        },
      ],
    },
  ];
}