import React, { FC } from "react";

import AngleLeft from "@components/AngleLeft";
import AngleRight from "@components/AngleRight";
import { lifeTimeDate } from "@config/constants";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "@material-ui/pickers";

const MyDatePicker: FC<KeyboardDatePickerProps> = (
  props: KeyboardDatePickerProps
) => {
  return (
    <KeyboardDatePicker
      {...props}
      disableFuture
      disableToolbar
      minDate={lifeTimeDate}
      variant="static"
      margin="normal"
      rightArrowIcon={<AngleRight />}
      leftArrowIcon={<AngleLeft />}
    />
  );
};

export default MyDatePicker;
