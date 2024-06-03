import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";
import React, { useEffect, useMemo } from "react";

const animatedComponents = makeAnimated();

export default function AdminPermissionsMultiSelect({ selected }) {
  const options23 = [
    { label: "Create New Cashier", value: "firefox" },
    { label: "Create New Restaurant", value: "chrome " },
    { label: "Update Cashier", value: "safari" },
    { label: "Delete Cashier", value: "operate" },
    { label: "Update Restaurant", value: "internet explore " },
    { label: "Update Restaurant", value: "internet explore " },
  ];

  // Use useMemo to ensure selectedOptions are recreated on selected change
  const selectedOptions = useMemo(() => {
    if (selected?.length) {
      const selectedIndexes = selected.map((selectedItem) => {
        const matchingIndex = options23.findIndex(
          (option) => option.value === selectedItem.slug
        );
        return matchingIndex !== -1 ? matchingIndex : null;
      });

      const filteredOptions = selectedIndexes
        .filter((index) => index !== null)
        .map((index) => options23[index]);

      return filteredOptions;
    }
  }, [selected]);

  return (
    <Select
      classNamePrefix="selectform"
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={options23}
      // Set defaultValue using the updated selectedOptions
      defaultValue={selected?.length ? selectedOptions : []}
    />
  );
}

AdminPermissionsMultiSelect.propTypes = {
  selected: PropTypes.array,
};
