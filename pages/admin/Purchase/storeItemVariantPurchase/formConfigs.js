import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let skuivname = data.SKUItemVariantName;
    let skuivRate = data.SKUItemVariantPurchaseRates;
    let skuivnRate = data.SKUItemVariantNewRate;
    let skuivoRate = data.SKUItemVariantOldRate;

  return {
    SKUItemVariantName: skuivname,
    SKUItemVariantPurchaseRates: skuivRate,
    SKUItemVariantNewRate: skuivnRate,
    SKUItemVariantOldRate: skuivoRate,
  };
}
}

export function generateStorePurchaseFormStepsConfig(initialData) {
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
          label: "SKU Item Variant Purchase Rates",
          type: "number",
          placeholder: "SKU Item Variant Purchase Rates",
          required: true,
          defaultValue: initialData?.SKUItemVariantPurchaseRates || "",
        },
        {
          label: "SKU Item Variant New Rate",
          type: "number",
          placeholder: "SKU Item Variant New Rate",
          required: true,
          defaultValue: initialData?.SKUItemVariantNewRate || "",
        },
        {
          label: "SKU Item Variant Old Rate",
          type: "number",
          placeholder: "SKU Item Variant Old Rate",
          required: true,
          defaultValue: initialData?.SKUItemVariantOldRate || "",
        },
      ],
    },
  ];
}