"use client";

import { Form, Formik } from "formik";
import React from "react";
import Button from "~/app/_components/button";
import { FormInput } from "../_components/formInput";
import Link from "next/link";
import { PasswordInput } from "../_components/passwordInput";
import { boxBody, headingStyle, subHeading } from "../const";

export const Login = () => {
  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className={boxBody}>
        <span className={headingStyle}>Login</span>
        <div>
          <p className="font-medium text-2xl text-pretty">Welcome back to ECOMMERCE</p>
          <p className={subHeading}>The next gen business marketplace</p>
        </div>
        <Formik initialValues={{ userName: "" }} onSubmit={() => console.log()}>
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
          </Form>
        </Formik>
        <Button label="LOGIN" />
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
