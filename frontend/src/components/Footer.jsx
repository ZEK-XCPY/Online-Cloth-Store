import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img className="mb-5 w-32 " src={assets.logo} alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Discover styles that move with you. At our online clothing store, we
          bring quality fabrics, modern designs, and everyday comfort together.
          Shop confidently with secure payments, fast delivery, and friendly
          support—because looking good should always feel easy and accessible.
        </p>
      </div>
      <div>
      <p className="text-xl font-medium mb-5">
        COMPANY
      </p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>
      </div>
          <div>
              <p className="text-xl font-medium mb-5">Get In Touch</p>
              <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-212-345-7856</li>
                <li>contact@gmail.com</li>
              </ul>
          </div>
    </div>

        <div>
          <hr />
          <p className="py-5 text-sm text-center">Copyright 2026@ Shopster.com -All Rights Reserved</p>
        </div>

    </div>
  );
};

export default Footer;
