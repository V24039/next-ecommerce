/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useField } from "formik";

interface IFormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const FormInput = ({ label, ...props }: IFormInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const [field, meta] = useField(props);

  return (
    <div className="grid grid-flow-row">
        <label className="text-left w-full text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <input
          {...field}
          {...props}
          className={` ${meta.touched && meta.error ? "ring-red-600" : ""} w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
