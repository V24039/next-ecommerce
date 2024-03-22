"use client";

import { Form, Formik } from "formik";
import { FormInput } from "../_components/formInput";

export default function CreateAccount() {
  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className="text-center flex flex-col flex-wrap content-center justify-center gap-4 rounded-2xl border-[1px] border-gray-300 px-10 py-8">
        <span className="text-2xl font-bold">
          Create your account
        </span>
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
            <button type="submit" className="bg-black text-white p-3 rounded-md font-light">
              Create Account
            </button>
          </Form>
        </Formik>
        <p className="text-xs pt-4 pb-12">Have an Account? <b>LOGIN</b></p>
      </div>
    </div>
  );
}
