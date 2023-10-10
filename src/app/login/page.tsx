import LoginPage from "@/components/login/Login";
import { Metadata } from "next";
import React from "react";

export const metaData: Metadata = {
  title: "UMS | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
