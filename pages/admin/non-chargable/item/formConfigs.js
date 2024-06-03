
export function getInitialValues(data) {

    if (data) {
      
      let skuVariantName = data.SKUItemVariantName;
      let rName = data.restaurantUserName;
      let quantity= data.nonChargableItemQuantity; 
      let nciName = data.nonChargableItemRate;
      let nciamount= data.nonChargableItemAmount;
  

      return {
        SKUItemVariantName: skuVariantName,
        restaurantUserName: rName,
        nonChargableItemQuantity: quantity,
        nonChargableItemRate: nciName,
        nonChargableItemAmount: nciamount,
      };
    }
  }
  
  export function generateNonChargableItemFormStepsConfig(initialData) {
    return [
      {
        stepTitle: "Basic Information",
        stepNumber: "1",
        fields: [
          {
            label: "Non-Chargable Item Name",
            type: "text",
            placeholder: "Non-Chargable Item Name",
            required: true,
            defaultValue: initialData?.wasteManagementItemName,
          },
          {
            label: "Restaurant User Name",
            type: "text",
            placeholder: "Restaurant User Name",
            required: true,
            defaultValue: initialData?.wasteManagementCategoryName,
          },
        ],
      },
      {
        stepTitle: "Specific Information",
        stepNumber: "2",
        fields: [
          {
            label: "Non-Chargable Item Quantity",
            type: "number",
            placeholder: "Non-Chargable Item Quantity",
            required: true,
            defaultValue: initialData?.restaurantUserName,
          },
          {
            label: "Non-Chargable Item Rate",
            type: "number",
            placeholder: "Non-Chargable Item Rate",
            required: true,
            defaultValue: initialData?.SKUVariantItemName,
          },
          {
            label: "Non-Chargable Item Amount",
            type: "number",
            placeholder: "Non-Chargable Item Amount",
            required: true,
            defaultValue: initialData?.wastedItemQuantity,
          },
        ],
      },
    ];
  }
  