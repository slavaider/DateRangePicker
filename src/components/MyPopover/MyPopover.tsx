import React, { FC, useCallback, useMemo } from "react";

import { dateOptions } from "@config/constants";
import { IconButton, Popover } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";

import MyPopoverProps from "./MyPopover.model";

const MyPopover: FC<MyPopoverProps> = ({
  children,
  selectedFirstDate,
  selectedSecondDate,
}: MyPopoverProps) => {
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(
    null
  );

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorElement(null);
  }, []);

  const isSameDate = useMemo(
    () => selectedFirstDate?.getTime() === selectedSecondDate?.getTime(),
    [selectedFirstDate, selectedSecondDate]
  );

  return (
    <>
      <div className="handler" onClick={handleClick}>
        <IconButton>
          <EventNoteIcon />
        </IconButton>
        {isSameDate ? (
          selectedFirstDate?.toLocaleDateString("en-US", dateOptions)
        ) : (
          <>
            {selectedFirstDate?.toLocaleDateString("en-US", dateOptions)}
            &nbsp;-&nbsp;
            {selectedSecondDate?.toLocaleDateString("en-US", dateOptions)}
          </>
        )}
      </div>
      <Popover
        open={!!anchorElement}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {children}
      </Popover>
    </>
  );
};

export default MyPopover;
