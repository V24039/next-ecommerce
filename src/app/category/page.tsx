"use client";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "../_components/protectedRoute";
import { type ICategoriesValues } from "../types";
import Pagination from "../_components/pagination";

export default function Category() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [categories, setCategories] = useState<ICategoriesValues[]>([]);

  const getCategories = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: ICategoriesValues[] = await fetch("/data/categories.json")
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void getCategories();
  }, []);

  return (
    <div className="my-10 flex flex-wrap content-center justify-center">
      <div className="flex w-[567px] flex-col flex-wrap content-center justify-center gap-4 rounded-2xl border-[1px] border-gray-300 px-10 py-8 text-center">
        <span className="text-3xl font-semibold">
          Please mark your interests!
        </span>
        <div>
          <p className="text-pretty text-2xl font-medium">
            We will keep you notified.
          </p>
        </div>
        <p className="text-left text-base font-bold">My saved interests!</p>
        <Pagination totalElements={100} elementsPerPage={6} />
      </div>
    </div>
  );
}
