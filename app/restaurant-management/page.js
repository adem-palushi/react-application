"use client"; 

import React from "react";
import RestaurantForm from "../state-management/RestaurantForm";
import RestaurantMenu from "../state-management/RestaurantMenu";
import OrderManagement from "../state-management/OrderManagement";

const RestaurantManagement = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-indigo-700 to-purple-800 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Restaurant Management</h1>

      {/* Përmbajtja kryesore e menaxhimit të restorantit */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
        
        {/* Forma për të shtuar artikuj të rinj në menu */}
        <div className="w-full md:w-1/3">
          <RestaurantForm />
        </div>

        {/* Shfaqja e menysë së restorantit */}
        <div className="w-full md:w-1/3">
          <RestaurantMenu />
        </div>

        {/* Menaxhimi i porosive të klientëve */}
        <div className="w-full md:w-1/3">
          <OrderManagement />
        </div>

      </div>
    </div>
  );
};

export default RestaurantManagement;
