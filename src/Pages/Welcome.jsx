//importing packages and modules to use in app
import React, { useEffect, useState } from "react";

import WelcomeForm from "../Components/Welcome Page/welcome-form";

export default function Welcome() {
  useEffect(() => {
    document.title = "Welcome";
  });

  return (
    <>
      <WelcomeForm />
    </>
  );
}
