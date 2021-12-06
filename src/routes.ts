import { ComponentType, ReactNode } from "react";

import DateRangePage from "./pages/DateRangePage";

export type Route = {
  [key: string]: {
    path: string;
    exact: boolean;
    component: ComponentType<ReactNode>;
  };
};

const routes: Route = {
  homepage: {
    path: "/",
    exact: false,
    component: DateRangePage,
  },
};

export default routes;
