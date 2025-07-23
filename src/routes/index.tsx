import React from "react";

import { PATHS } from "./paths";
import Home from "../pages/home";
import Quiz from "../pages/quiz";
import Results from "../pages/results";

const { HOME, QUIZ, RESULTS } = PATHS;

export interface IRoute {
  path: string;
  component: React.ReactNode;
}

export const ROUTES: IRoute[] = [
  {
    path: HOME,
    component: <Home />,
  },
  {
    path: QUIZ,
    component: <Quiz />,
  },
  {
    path: RESULTS,
    component: <Results />,
  },
];
