import React, { FC, memo, useCallback } from "react";

import { lifeTimeDate, listPicker } from "@config/constants";
import { List, ListItem, ListItemText } from "@material-ui/core";

import MenuPickerProps from "./MenuPicker.model";

const MenuPicker: FC<MenuPickerProps> = ({
  selectFirstDate,
  selectSecondDate,
}: MenuPickerProps) => {
  const handleListItemClick = useCallback((mode: string) => {
    const time = new Date()?.getTime() as number;
    const years = new Date()?.getFullYear() as number;
    const months = new Date()?.getMonth() as number;

    switch (mode) {
      case "Today": {
        selectFirstDate(new Date());
        selectSecondDate(new Date());
        break;
      }
      case "Yesterday": {
        const dateOffset = 24 * 60 * 60 * 1000; // 1 day
        selectFirstDate(new Date(time - dateOffset));
        selectSecondDate(new Date());
        break;
      }
      case "Last 7 days": {
        const dateOffset = 24 * 60 * 60 * 1000 * 7; // 7 days
        selectFirstDate(new Date(time - dateOffset));
        selectSecondDate(new Date());
        break;
      }
      case "Last 30 days": {
        const dateOffset = 24 * 60 * 60 * 1000 * 30; // 30 days
        selectFirstDate(new Date(time - dateOffset));
        selectSecondDate(new Date());
        break;
      }
      case "This Month": {
        selectFirstDate(new Date(years, months, 1));
        selectSecondDate(new Date());
        break;
      }
      case "Last Month": {
        const firstDay = new Date(years, months - 1, 1);
        const lastDay = new Date(years, months, 0);
        selectFirstDate(firstDay);
        selectSecondDate(lastDay);
        break;
      }
      case "This Year": {
        selectFirstDate(new Date(years, 0, 1));
        selectSecondDate(new Date());
        break;
      }
      case "Lifetime": {
        selectFirstDate(lifeTimeDate);
        selectSecondDate(new Date());
        break;
      }
      default:
    }
  }, []);

  return (
    <List component="nav" aria-label="secondary mailbox folder">
      {listPicker.map((listItem) => (
        <ListItem
          key={listItem}
          button
          onClick={() => handleListItemClick(listItem)}
        >
          <ListItemText primary={listItem} />
        </ListItem>
      ))}
    </List>
  );
};

export default memo(MenuPicker);
