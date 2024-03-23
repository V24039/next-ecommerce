"use client";

import { Form, Formik } from "formik";
import React from "react";
import Button from "~/app/_components/button";
import * as Yup from "yup";

const VerificationInitailValues = {
  verfiyCode: [],
};

export const Verification = () => {
  const VerificationSchema = Yup.object().shape({
    verfiyCode: Yup.array().required(
      "Enter the verfication to create the account",
    ),
  });

  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className="flex w-[567px] flex-col flex-wrap content-center justify-center gap-4 rounded-2xl border-[1px] border-gray-300 px-10 py-8 text-center">
        <span className="text-3xl font-semibold">Verify your email</span>
        <p className="font-normal text-base text-pretty">
          Enter the 8 digit code you have recevied on anu***gmail.com
        </p>
        <Formik
          initialValues={VerificationInitailValues}
          validationSchema={VerificationSchema}
          validateOnBlur={false}
          onSubmit={(values) => console.log(values)}
        >
          <>
            <Form className="flex flex-col pb-10">
              <label className="w-full text-left text-sm font-medium leading-6 text-gray-900">
                Code
              </label>
              <div className="flex w-full flex-row justify-evenly gap-3">
                {[...Array<number>(8)].map((_, index) => (
                  <input
                    key={`verifyCode${index}`}
                    name={`verfiyCode[${index}]`}
                    type="string"
                    className={`h-10 w-10 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                ))}
              </div>
            </Form>
            <Button label="VERIFY" />
          </>
        </Formik>
      </div>
    </div>
  );
};

export default Verification;
