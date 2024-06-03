import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
if (data) {

    let lpg = data.LPG;
    let rname = data.restaurantUserName;
    let amount = data.Amount;
    let oreading = data.openingReading;
    let creading = data.closingReading;
    let nreading = data.netReading;
    let tamount = data.totalAmount;
    let cover = data.covers;
    let ppc = data.PPC;

  return {
    LPG: lpg,
    restaurantUserName: rname,
    Amount: amount,
    openingReading: oreading,
    closingReading: creading,
    netReading: nreading,
    totalAmount: tamount,
    covers: cover,
    PPC: ppc,
  };
}
}

export function generateGasReadingFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "LPG",
          type: "number",
          placeholder: "LPG",
          required: true,
          defaultValue: initialData?.LPG || "",
        },
        {
          label: "Restaurant User Name",
          type: "text",
          placeholder: "Restaurant User Name",
          required: true,
          defaultValue: initialData?.restaurantUserName || "",
        },
        {
          label: "Amount",
          type: "number",
          placeholder: "Amount",
          required: true,
          defaultValue: initialData?.Amount || "",
        },
      ],
    },
    {
        stepTitle: "Specific Information",
        stepNumber: "2",
        fields: [
          {
            label: "Opening Reading",
            type: "number",
            placeholder: "Opening Reading",
            required: true,
            defaultValue: initialData?.openingReading || "",
          },
          {
            label: "Closing Reading",
            type: "number",
            placeholder: "Closing Reading",
            required: true,
            defaultValue: initialData?.closingReading || "",
          },
          {
            label: "Net Reading",
            type: "number",
            placeholder: "Net Reading",
            required: true,
            defaultValue: initialData?.netReading || "",
          },
          {
            label: "Total Amount",
            type: "number",
            placeholder: "Total Amount",
            required: true,
            defaultValue: initialData?.totalAmount || "",
          },
          {
            label: "Covers",
            type: "number",
            placeholder: "Covers",
            required: true,
            defaultValue: initialData?.covers || "",
          },
          {
            label: "PPC",
            type: "number",
            placeholder: "PPC",
            required: true,
            defaultValue: initialData?.ppc || "",
          },
        ],
      },
  ];
}