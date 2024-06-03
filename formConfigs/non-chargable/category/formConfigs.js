import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let ncnname = data.nonChargableCategoryName;

  return {
    nonChargableCategoryName: ncnname,
  };
}
}

export function generateNonChargableCategoryFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Non-Chargable Category Name",
          type: "text",
          placeholder: "Non-Chargable Category Name",
          required: true,
          defaultValue: initialData?.nonChargableCategoryName || "",
        },
      ],
    },
  ];
}