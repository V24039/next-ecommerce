"use client";

import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export function NavBar() {
  return (
    <div>
      <div className="flex justify-end gap-3 m-3">
        <span className="text-xs">Help</span>
        <span className="text-xs">Orders & Returns</span>
        <span className="text-xs">Hi, John</span>
      </div>
      <div className="grid grid-cols-3 m-2">
        <div className="font-bold text-4xl pl-4">
          <h1>ECOMMERCE</h1>
        </div>
        <div className="flex justify-center items-end gap-5 font-bold">
          <div>Categories</div>
          <div>Sale</div>
          <div>Clearance</div>
          <div>New stock</div>
          <div>Trending</div>
        </div>
        <div className="flex justify-end items-end gap-5">
          <IoIosSearch size={30}/>
          <PiShoppingCartSimpleLight size={30} />
        </div>
      </div>
      <div className="bg-stone-100 text-center p-1">
        &lt; &nbsp; Get 10% off on business sign up &nbsp; &gt;
      </div>
    </div>
  );
}
