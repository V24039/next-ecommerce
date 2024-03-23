"use client";

import { Form, Formik } from "formik";
import React, { useContext } from "react";
import Button from "~/app/_components/button";
import { FormInput } from "../_components/formInput";
import Link from "next/link";
import { PasswordInput } from "../_components/passwordInput";
import * as Yup from "yup";
import { type ILogggedUserValues, type ILoginValues } from "../types";
import { AuthContext } from "../auth-provider";
import { useRouter } from "next/navigation";

const loginInitialValue: ILoginValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const router = useRouter();
  const { setAuthValue } = useContext(AuthContext);

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    password: Yup.string().required("Provide a pasword"),
  });

  const handelLogin = async (value: ILoginValues) => {
    const response = await fetch("/data/userDetails.json");
    const userDetails = (await response.json()) as ILogggedUserValues[];
    const userExists = userDetails.some(
      (user) => user.email === value.email && user.password === value.password,
    );
    if (userExists) {
      setAuthValue(true);
      router.push("/category")
    } else {
      console.log("user not present");
    }
  };

  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className="flex w-[567px] flex-col flex-wrap content-center justify-center gap-4 rounded-2xl border-[1px] border-gray-300 px-10 py-8 text-center">
        <span className="text-3xl font-semibold">Login</span>
        <div>
          <p className="text-pretty text-2xl font-medium">
            Welcome back to ECOMMERCE
          </p>
          <p className="text-pretty text-base font-normal">
            The next gen business marketplace
          </p>
        </div>
        <Formik
          initialValues={loginInitialValue}
          validationSchema={loginValidationSchema}
          validateOnBlur={false}
          onSubmit={handelLogin}
        >
          <Form className="flex flex-col gap-6">
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter"
            />
            <PasswordInput
              label="Password"
              name="password"
              type="text"
              placeholder="Enter"
            />
            <Button label="LOGIN" />
          </Form>
        </Formik>
        <hr />
        <p>
          Don&apos;t have an Account?{" "}
          <Link href="/createAccount/userDetails">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
