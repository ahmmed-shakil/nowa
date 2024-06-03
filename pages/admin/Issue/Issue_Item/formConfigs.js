import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let rrname = data.restaurantRecquisitionName;
    let qIssued= data.quantityIssued;
    let remark= data.remarks;
    let rIssue= data.restaurant_issuesName;

  return {
    restaurantRecquisitionName: rrname,
    quantityIssued: qIssued,
    remarks: remark,
    restaurant_issuesName: rIssue,
  };
}
}

export function generateRestaurantIssueItemFormStepsConfig(initialData) {
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
        {
          label: "Quantity Issued",
          type: "number",
          placeholder: "Quantity Issued",
          required: true,
          defaultValue: initialData?.quantityIssued || "",
        },
        {
          label: "Remarks",
          type: "text",
          placeholder: "Remarks",
          required: true,
          defaultValue: initialData?.remarks || "",
        },
        {
          label: "Restaurant Issued Name",
          type: "text",
          placeholder: "Restaurant Issued Name",
          required: true,
          defaultValue: initialData?.restaurant_issuesName || "",
        },
      ],
    },
  ];
}