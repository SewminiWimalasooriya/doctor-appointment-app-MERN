import React from "react";
import { assets } from "../assets/assets";

const Footor = () => {
  return (
    <div className="md:mx-1px bg-blue-50 px-5 ">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-30 text-sm pt-5">
        {/* ---Left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 text-justify">
            Easily book appointments with trusted doctors anytime, anywhere.
            Manage your schedule, get reminders, and stay on top of your
            healthcare. Connecting you with the care you need, when you need it.
          </p>
        </div>

        {/* ---center section */}
        <div>
            <p className="text-xl font-medium mb-5" >COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>

        {/* ---right section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+11-254-2548</li>
                <li>greathospitildev@gmail.com</li>

            </ul>
        </div>
      </div>

      {/* ----copy right text---------- */}
      <div className="py-5 text-sm text-center">
            <hr/>
            <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footor;
