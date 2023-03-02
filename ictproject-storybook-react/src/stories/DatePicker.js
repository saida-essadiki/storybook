import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

import { PropTypes } from "prop-types";

export function DatePicker() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
DatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func.isRequired,
  mode: PropTypes.string,
};
