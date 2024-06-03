import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let recname = data.restaurantExpenseCategoryName;

  return {
    restaurantExpenseCategoryName: recname,
  };
}
}

export function generateRestaurantExpenseCategoryFormStepsConfig(initialData) {
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
      ],
    },
  ];
}