import React, { FC, useCallback } from "react";

import MyDatePicker from "@components/MyDatePicker";
import MyPopover from "@components/MyPopover";
import { Divider, Grid } from "@material-ui/core";

import MenuPicker from "./components/MenuPicker";

const DateRangePage: FC = () => {
  const [selectedFirstDate, setFirstDate] = React.useState<Date | null>(
    new Date()
  );
  const [selectedSecondDate, setSecondDate] = React.useState<Date | null>(
    new Date()
  );

  const handleFirstDateChange = useCallback((date: Date | null) => {
    setFirstDate(date);
  }, []);

  const handleSecondDateChange = useCallback((date: Date | null) => {
    setFirstDate(date);
    setSecondDate(date);
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <MyPopover
        selectedFirstDate={selectedFirstDate}
        selectedSecondDate={selectedSecondDate}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <MyDatePicker
            value={selectedFirstDate}
            maxDate={selectedSecondDate}
            onChange={handleFirstDateChange}
          />
          <MyDatePicker
            value={selectedSecondDate}
            onChange={handleSecondDateChange}
          />
          <Divider orientation="vertical" flexItem />
          <MenuPicker
            selectFirstDate={setFirstDate}
            selectSecondDate={setSecondDate}
          />
        </Grid>
      </MyPopover>
    </Grid>
  );
};

export default DateRangePage;
