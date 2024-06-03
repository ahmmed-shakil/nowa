import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let recname = data.restaurantExpenseCategoryName;
    let rname = data.restaurantName;
    let amount = data.restaurantExpenseAmount;
    let mode = data.restaurantExpensePaymentMode;

  return {
    restaurantExpenseCategoryName: recname,
    restaurantName: rname,
    restaurantExpenseAmount: amount,
    restaurantExpensePaymentMode: mode,
  };
}
}

export function generateRestaurantExpensesFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Restaurant Expense Category Name",
          type: "text",
          placeholder: "Restaurant Expense Category Name",
          required: true,
          defaultValue: initialData?.restaurantExpenseCategoryName || "",
        },
        {
          label: "Restaurant Name",
          type: "text",
          placeholder: "Restaurant Name",
          required: true,
          defaultValue: initialData?.restaurantName || "",
        },
        {
          label: "Restaurant Expense Amount",
          type: "number",
          placeholder: "Restaurant Expense Amount",
          required: true,
          defaultValue: initialData?.restaurantExpenseAmount || "",
        },
        {
          label: "Restaurant Expense Payment Mode",
          type: "text",
          placeholder: "Restaurant Expense Payment Mode",
          required: true,
          defaultValue: initialData?.restaurantExpensePaymentMode || "",
        },
      ],
    },
  ];
}