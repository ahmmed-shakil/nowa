import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let rname = data.restaurantName;
    let vname = data.vendorName;
    let sivariant = data.storeSKUItemVariantName;
    let spquantity = data.storePurchaseQuantity;
    let sprate = data.storePurcuaseRate;
    let spAmount = data.storePurchaseAmount;

  return {
    restaurantName: rname,
    vendorName: vname,
    storeSKUItemVariantName: sivariant,
    storePurchaseQuantity: spquantity,
    storePurcuaseRate: sprate,
    storePurchaseAmount: spAmount,
  };
}
}

export function generateStorePurchaseItemFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Restaurant Name",
          type: "text",
          placeholder: "Restaurant Name",
          required: true,
          defaultValue: initialData?.restaurantName || "",
        },
        {
          label: "Vendor Name",
          type: "text",
          placeholder: "Vendor Name",
          required: true,
          defaultValue: initialData?.vendorName || "",
        },
        {
          label: "Store Variant Name",
          type: "text",
          placeholder: "Store Variant Name",
          required: true,
          defaultValue: initialData?.storeSKUItemVariantName || "",
        },
      ],
    },
    {
      stepTitle: "Specific Information",
      stepNumber: "1",
      fields: [
        {
          label: "Store Purchase Quantity",
          type: "number",
          placeholder: "Store Purchase Quantity",
          required: true,
          defaultValue: initialData?.storePurchaseQuantity || "",
        },
        {
          label: "Store Purchase Rate",
          type: "number",
          placeholder: "Store Purchase Rate",
          required: true,
          defaultValue: initialData?.storePurcuaseRate || "",
        },
        {
          label: "Store Purchase Amount",
          type: "number",
          placeholder: "Store Purchase Amount",
          required: true,
          defaultValue: initialData?.storePurchaseAmount || "",
        },
      ],
    },
  ];
}