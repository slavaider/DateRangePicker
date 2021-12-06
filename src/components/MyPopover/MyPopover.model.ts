import React from "react";

type MyPopoverProps = React.PropsWithChildren<{
  selectedFirstDate: Date | null;
  selectedSecondDate: Date | null;
}>;

export default MyPopoverProps;
