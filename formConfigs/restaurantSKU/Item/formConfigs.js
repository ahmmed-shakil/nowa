import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skuiname = data.SKUItemName;
    let skusname = data.SKUSectionName;
    let unit = data.SKUItemMeasurementUnit;

  return {
    SKUItemName: skuiname,
    SKUSectionName: skusname,
    SKUItemMeasurementUnit: unit,
  };
}
}

export function generateSKUItemFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
            label: "SKU Item Name",
            type: "text",
            placeholder: "SKU Item Name",
            required: true,
            defaultValue: initialData?.SKUItemName || "",
        },
        {
          label: "SKU Section Name",
          type: "text",
          placeholder: "SKU Section Name",
          required: true,
          defaultValue: initialData?.SKUSectionName || "",
        },
        {
          label: "Item Measurement Unit",
          type: "text",
          placeholder: "Item Meaasurement Unit",
          required: true,
          defaultValue: initialData?.SKUItemMeasurementUnit || "",
        },
      ],
    },
  ];
}