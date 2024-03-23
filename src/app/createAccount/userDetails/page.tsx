"use client";

import { Form, Formik } from "formik";
import { FormInput } from "../../_components/formInput";
import Button from "~/app/_components/button";
import { boxBody, headingStyle } from "~/app/const";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className={boxBody}>
        <span className={headingStyle}>Create your account</span>
        <Formik initialValues={{ userName: "" }} onSubmit={() => console.log()}>
          <Form className="flex flex-col gap-6">
            <FormInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter"
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter"
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter"
            />
            <Button label="Create Account" />
          </Form>
        </Formik>
        <p className="pb-12 pt-4 text-xs">
          Have an Account?{" "}
          <Link href="/login">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
}
