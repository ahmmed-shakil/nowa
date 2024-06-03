import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let rrname = data.restaurantRecquisitionName;

  return {
    restaurantRecquisitionName: rrname,
  };
}
}

export function generateRestaurantIssueFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "Restaurant Recquisition Name",
          type: "text",
          placeholder: "Restaurant Recquisition Name",
          required: true,
          defaultValue: initialData?.restaurantRecquisitionName || "",
        },
      ],
    },
  ];
}