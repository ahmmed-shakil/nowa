import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skuivname = data.SKUItemVariantName;
    let skuiname = data.SKUItemName;
    let Quantity = data.SKUItemVariantQuantity;
    let rate = data.SKUItemVariantRate;
    let astatus= data.approvalStatus;
    let aBy= data.approvedBy;
    let enable= data.enabled;

  return {
    SKUItemVariantName: skuivname,
    SKUItemName: skuiname,
    SKUItemVariantQuantity: Quantity,
    SKUItemVariantRate: rate,
    approvalStatus: astatus,
    approvedBy: aBy,
    enabled: enable,
  };
}
}

export function generateSKUItemVariantFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
            label: "SKU Item Variant Name",
            type: "text",
            placeholder: "SKU Item Variant Name",
            required: true,
            defaultValue: initialData?.SKUItemVariantName || "",
        },
        {
          label: "SKU Item Name",
          type: "text",
          placeholder: "SKU Item Name",
          required: true,
          defaultValue: initialData?.SKUItemName || "",
        },
      ],
    },
    {
      stepTitle: "Specific Information",
      stepNumber: "1",
      fields: [
        {
          label: "IS Non-Chargable",
          type: "text",
          placeholder: "IS Non-Chargable",
          required: true,
          defaultValue: initialData?.isNCItem || "",
        },
        {
          label: "Quantity",
          type: "text",
          placeholder: "Quantity",
          required: true,
          defaultValue: initialData?.SKUItemVariantQuantity || "",
        },
        {
          label: "Rate",
          type: "text",
          placeholder: "Rate",
          required: true,
          defaultValue: initialData?.SKUItemVariantRate || "",
        },
        {
          label: "Expiry Date",
          type: "text",
          placeholder: "Expiration Date",
          required: true,
          defaultValue: initialData?.SKUItemVariantExpirationDate || "",
        },
      ],
    },
  ];
}