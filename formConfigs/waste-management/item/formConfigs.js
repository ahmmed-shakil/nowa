
export function getInitialValues(data) {

  if (data) {
    
    let wmiName = data.wasteManagementItemName;
    let wmcName = data.wasteManagementCategoryName;
    let rName = data.restaurantUserName;
    let skuVariantName = data.SKUVariantItemName;
    let quantity= data.wastedItemQuantity; 

    return {
      wasteManagementItemName: wmiName,
      wasteManagementCategoryName: wmcName,
      restaurantUserName: rName,
      SKUVariantItemName: skuVariantName,
      wastedItemQuantity: quantity,
    };
  }
}

export function generateWasteManagementItemFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Waste Management Item Name",
          type: "text",
          placeholder: "Waste Management Item Name",
          required: true,
          defaultValue: initialData?.wasteManagementItemName,
        },
        {
          label: "Waste Management Category Name",
          type: "text",
          placeholder: "Waste Management Category Name ",
          required: true,
          defaultValue: initialData?.wasteManagementCategoryName,
        },
        {
          label: "Restaurant User Name ",
          type: "text",
          placeholder: "Restaurant User Name ",
          required: true,
          defaultValue: initialData?.restaurantUserName,
        },
        {
          label: "SKU Variant Item Name",
          type: "text",
          placeholder: "SKU Variant Item Name",
          required: true,
          defaultValue: initialData?.SKUVariantItemName,
        },
        {
          label: "Item Quantity",
          type: "number",
          placeholder: "Item Quantity",
          required: true,
          defaultValue: initialData?.wastedItemQuantity,
        },
      ],
    },
  ];
}
