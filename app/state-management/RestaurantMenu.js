"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addToOrder, removeItem } from "../state-management/RestaurantSlice";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [menuItemsWithKeys, setMenuItemsWithKeys] = useState([]);
  const [showComments, setShowComments] = useState({}); // State for showing comments
  const [selectedCategory, setSelectedCategory] = useState("All"); // Added selectedCategory state

  const menuItems = useSelector((state) => state.restaurant.menuItems);
  const orderItems = useSelector((state) => state.restaurant.orderItems);

  useEffect(() => {
    const itemsWithUUID = menuItems.map((item) => ({
      ...item,
      uuid: uuidv4(),
    }));
    setMenuItemsWithKeys(itemsWithUUID);
  }, [menuItems]);

  const categories = ["All", "Pizza", "Hot Drinks", "Cold Drinks", "Pasta", "Antipasta"];

  const filteredMenuItems = selectedCategory === "All"
    ? menuItemsWithKeys
    : menuItemsWithKeys.filter(item => item.category === selectedCategory);

  const handleAddItem = (item) => {
    dispatch(addToOrder(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const toggleComments = (itemId) => {
    setShowComments((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  return (
    <div className="max-w-5xl mx-auto bg-yellow-100 shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Restaurant Menu</h2>

      <div className="flex justify-end mb-4">
        <label htmlFor="category" className="text-sm text-gray-600 mr-2">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 text-sm border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-green-500 shadow-md rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 text-left text-sm border-b-2 border-green-500">Name</th>
              <th className="p-3 text-left text-sm border-b-2 border-green-500">Description</th>
              <th className="p-3 text-center text-sm border-b-2 border-green-500">Price</th>
              <th className="p-3 text-center text-sm border-b-2 border-green-500">Actions</th>
              <th className="p-3 text-center text-sm border-b-2 border-green-500">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredMenuItems.map((item) => (
              <tr key={item.uuid} className="border-b-2 border-green-500 hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="p-3 font-semibold text-gray-800 text-sm">{item.name}</td>
                <td className="p-3 text-gray-600 text-sm">{item.description}</td>
                <td className="p-3 text-center text-green-600 font-semibold text-sm">${item.price}</td>
                <td className="p-3 text-center space-x-3">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAddItem(item)}
                      className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out text-sm"
                    >
                      Add To Order
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td className="p-3 text-center text-gray-600">
                  {orderItems.find((orderItem) => orderItem.id === item.id)?.rating || "No rating"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comments for each item directly below it */}
      {filteredMenuItems.map((item) => (
        <div key={item.uuid} className="mt-4">
          {/* Show Comments button for each item */}
          <button
            onClick={() => toggleComments(item.id)}
            className="text-blue-600 hover:underline"
          >
            {showComments[item.id] ? "Hide Comments" : "Show Comments"}
          </button>

          {/* Comments directly below the item */}
          {showComments[item.id] && (
            <div className="mt-2">
              {orderItems
                .filter((orderItem) => orderItem.id === item.id && orderItem.comment)
                .map((orderItem) => (
                  <p key={orderItem.id} className="text-sm text-gray-600">{orderItem.comment}</p>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
