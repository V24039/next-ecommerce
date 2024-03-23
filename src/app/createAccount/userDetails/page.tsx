"use client";

import { Form, Formik } from "formik";
import { FormInput } from "../../_components/formInput";
import Button from "~/app/_components/button";
import Link from "next/link";
import * as Yup from "yup";

const UserInitialValues: IUserVaues = {
  name: "",
  email: "",
  password: "",
};

type IUserVaues = {
  name: string;
  email: string;
  password: string;
};

export default function CreateAccount() {
  const userSchema = Yup.object().shape({
    name: Yup.string().required("Please Enter your name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    password: Yup.string().required("Provide a pasword"),
  });

  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className="flex w-[567px] flex-col flex-wrap content-center justify-center gap-4 rounded-2xl border-[1px] border-gray-300 px-10 py-8 text-center">
        <span className="text-3xl font-semibold">Create your account</span>
        <Formik
          initialValues={UserInitialValues}
          validationSchema={userSchema}
          validateOnBlur={false}
          onSubmit={(values) => console.log(values)}
        >
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
          Have an Account? <Link href="/login">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
}
