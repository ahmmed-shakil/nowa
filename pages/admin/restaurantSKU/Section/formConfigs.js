import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skusname = data.SKUSectionName;
    let skucname = data.SKUCategoryName;

  return {
    SKUSectionName: skusname,
    SKUCategoryName: skucname,
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
            defaultValue: initialData?.SKUSectionName || "",
        },
        {
          label: "SKU Category Name",
          type: "text",
          placeholder: "SKU Category Name",
          required: true,
          defaultValue: initialData?.SKUCategoryName || "",
        },
      ],
    },
  ];
}