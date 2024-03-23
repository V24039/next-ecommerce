/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { useField } from "formik";
import { useState } from "react";

interface IPasswordInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const PasswordInput = ({ label, ...props }: IPasswordInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const [field, meta] = useField(props);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="grid grid-flow-row">
      <label className="w-full text-left text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          {...field}
          {...props}
          type={showPassword ? "text" : "password"}
          className={` ${meta.touched && meta.error ? "ring-red-600" : ""} h-12 w-96 rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        <span
          className="absolute right-1 cursor-pointer p-1 pt-3 underline"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          Show
        </span>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-left text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};
