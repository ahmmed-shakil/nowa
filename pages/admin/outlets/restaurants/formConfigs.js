import { City, Country, State } from "country-state-city";

export function getInitialValues(data) {
  // Implement logic to fetch initial values based on the provided data
  // For example, you might use data.restaurantName, data.email, etc.
  if (data) {
    let country = Country.getAllCountries()
      .filter((country) => country.name === data.country)
      .map((c) => ({
        value: c?.isoCode,
        label: c?.name,
      }));

    let state = State.getAllStates()
      .filter((state) => state.name == data.state)
      .map((state) => ({
        value: state?.isoCode,
        label: state?.name,
      }));

    let city = City.getAllCities()
      .filter((city) => city.name === data.city)
      .map((city) => ({
        value: city?.stateCode,
        label: city?.name,
      }));

    let name = data.restaurantName;
    let email = data.email;
    let phone = data.phoneNumber;
    let zip = data.zipCode;

    return {
      restaurantName: name,
      email: email,
      phoneNumber: phone,
      country: country,
      state: state,
      city: city,
      zipCode: zip,
    };
  }
}

const CountryOptionsFetcher = () => {
  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));
  return countries;
};

const StateOptionsFetcher = (selectedCountry) => {
  const states = State.getStatesOfCountry(selectedCountry?.value).map(
    (state) => ({
      value: state.isoCode,
      label: state.name,
    })
  );

  return states || [];
};

const CityOptionsFetcher = (selectedState) => {
  const cities = City.getAllCities();
  const processedCities = cities
    .filter((city) => city.stateCode === selectedState?.value)
    .map((city) => ({
      value: city.stateCode,
      label: city.name,
    }));

  return processedCities || [];
};

export function generateRestaurantFormStepsConfig(initialData) {
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
          defaultValue: initialData?.restaurantName,
        },
        {
          label: "Email",
          type: "email",
          placeholder: "Email Address",
          required: true,
          defaultValue: initialData?.email,
        },
        {
          label: "Phone Number",
          type: "number",
          placeholder: "Phone Number",
          required: true,
          defaultValue: initialData?.phoneNumber,
        },
      ],
    },
    {
      stepTitle: "Location Information",
      stepNumber: "2",
      fields: [
        {
          label: "country",
          type: "select",
          optionsSource: CountryOptionsFetcher,
          defaultValue: getInitialValues(initialData)?.country || null,
        },
        {
          label: "state",
          type: "select",
          optionsSource: StateOptionsFetcher,
          dependsOn: "country",
          defaultValue: getInitialValues(initialData)?.state || null,
        },
        {
          label: "city",
          type: "select",
          optionsSource: CityOptionsFetcher,
          dependsOn: "state",
          defaultValue: getInitialValues(initialData)?.city || null,
        },
        {
          label: "Zip Code",
          type: "number",
          placeholder: "Zip Code",
          required: true,
          defaultValue: initialData?.zipCode || null,
        },
      ],
    },
  ];
}
