import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skucname = data.SKUCategoryName;
    let isVeg = data.isVEG;

  return {
    SKUCategoryName: skucname,
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