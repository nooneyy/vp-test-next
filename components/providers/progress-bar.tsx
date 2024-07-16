"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = () => {
  return <ProgressBar options={{ showSpinner: false }} color="#29d" />;
};

export default ProgressBarProvider;
