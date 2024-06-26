"use client";

import React from "react";

type IButtonProps = {
  label: string;
};

export const Button = ({label}:IButtonProps) => {
  return (
    <button
      type="submit"
      className="rounded-md bg-black p-3 font-light text-white"
    >
      {label}
    </button>
  );
};

export default Button;
