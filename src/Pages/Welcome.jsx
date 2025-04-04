//importing packages and modules to use in app
import React, { useEffect } from "react";

import WelcomeForm from "../Components/Welcome Page/welcome-form";

export default function Welcome() {
  useEffect(() => {
    document.body.classList.add("bg-[#3C3C3C]");

    document.title = "Welcome";
  });

  return (
    <>
      <WelcomeForm />
    </>
  );
}
