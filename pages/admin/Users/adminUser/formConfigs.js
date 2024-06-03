import { City, Country, State } from "country-state-city";

const handleDateChange = (event) => {
  const newDate = event.target.value;

  setInitialDate(newDate);
};

const handleImageChange = (event) => {
  const file = event.target.files[0];

  console.log("Selected file:", file);
};

export function getInitialValues(data) {
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

    let fname = data.firstName;
    let lname = data.lastName;
    let mail = data.emailAddress;
    let uname = data.username;
    let pass = data.password;
    let num = data.phoneNumber;
    let gen = data.gender;
    let DOB = data.dateOfBirth;
    let line1 = data.addressLine1;
    let line2 = data.addressLine2;
    let zCode = data.zipcode;
    let cCode = data.countryCode;
    let arType = data.adminRoleName;
    let image = data.userImage;

    return {
      firstName: fname,
      lastName: lname,
      emailAddress: mail,
      username: uname,
      password: pass,
      phoneNumber: num,
      gender: gen,
      dateOfBirth: DOB,
      addressLine1: line1,
      addressLine2: line2,
      city: city,
      state: state,
      country: country,
      zipcode: zCode,
      countryCode: cCode,
      adminRoleName: arType,
      userImage: image,
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

export function generateAdminFormStepsConfig(initialData) {
  return [
    {
      stepTitle: "Basic Information",
      stepNumber: "1",
      fields: [
        {
          label: "First Name",
          type: "text",
          placeholder: "First Name",
          required: true,
          defaultValue: initialData?.firstName || "",
        },
        {
          label: "Last Name",
          type: "text",
          placeholder: "Last Name",
          required: true,
          defaultValue: initialData?.lastName || "",
        },
        {
          label: "Email",
          type: "text",
          placeholder: "Vendor Category Name",
          required: true,
          defaultValue: initialData?.emailAddress || "",
        },
        // {
        //   label: "Username",
        //   type: "text",
        //   placeholder: "Restaurant Name",
        //   required: true,
        //   defaultValue: initialData?.username,
        // },
        // {
        //   label: "Password",
        //   type: "password",
        //   placeholder: "Email Address",
        //   required: true,
        //   defaultValue: initialData?.password,
        // },
        {
          label: "Phone Number",
          type: "number",
          placeholder: "Phone Number",
          required: true,
          defaultValue: initialData?.phoneNumber,
        },
        {
          label: "Gender",
          type: "radio",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ],
          defaultValue: initialData?.gender,
        },
        // (
        //   <input
        //     type="date"
        //     value={date}
        //     onChange={handleDateChange}
        //     placeholder="Select Date of Birth"
        //   />
        // ),
      ],
    },
    {
      stepTitle: "Location Information",
      stepNumber: "2",
      fields: [
        {
          label: "Address Line 1",
          type: "text",
          placeholder: "Address Line 1",
          required: true,
          defaultValue: initialData?.addressLine1,
        },
        {
          label: "Address Line 2",
          type: "text",
          placeholder: "Address Line 2",
          required: true,
          defaultValue: initialData?.addressLine2,
        },
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
          defaultValue: initialData?.zipcode,
        },
      ],
    },
    {
      stepTitle: "Role Information",
      stepNumber: "3",
      fields: [
        {
          label: "Country code",
          type: "number",
          placeholder: "Country Code",
          required: true,
          defaultValue: initialData?.countryCode,
        },
        {
          label: "Admin Role Name",
          type: "text",
          placeholder: "Admin Role Name",
          required: true,
          defaultValue: initialData?.adminRoleName,
        },
        {
          // <input
          type: "file",
          onChange: { handleImageChange },
          accept: "image/*",
          // />
        },
      ],
    },
  ];
}
