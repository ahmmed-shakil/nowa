import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skuiname = data.SKUItemName;
    let unit = data.SKUItemMeasurementUnit;
    let astatus= data.approvalStatus;
    let cby= data.createdBy;
    let aby= data.approvedBy;
    let uby= data.updatedBy;
    let enable= data.enabled;

  return {
    SKUItemName: skuiname,
    SKUItemMeasurementUnit: unit,
    approvalStatus: astatus,
    createdBy: cby,
    approvedBy: aby,
    updatedBy: uby,
    enabled: enable,
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
          defaultValue: initialData?.storeSKUSectionName || "",
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