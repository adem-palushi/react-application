"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearOrder,
  removeFromOrder,
  updateQuantity,
  addComment,
  addRating,
} from "../state-management/RestaurantSlice";

const OrderManagement = () => {
  const orderItems = useSelector((state) => state.restaurant.orderItems);
  const dispatch = useDispatch();
  const [comments, setComments] = useState({});
  const [ratings, setRatings] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null); // Track selected item for comments and ratings

  const handleClearOrder = () => {
    dispatch(clearOrder());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromOrder(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ itemId, quantity }));
    }
  };

  const handleAddComment = (itemId) => {
    if (comments[itemId]?.trim()) {
      dispatch(addComment({ itemId, comment: comments[itemId] }));
      setComments((prev) => ({ ...prev, [itemId]: "" }));
    }
  };

  const handleAddRating = (itemId) => {
    if (ratings[itemId] > 0) {
      dispatch(addRating({ itemId, rating: ratings[itemId] }));
      setRatings((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  const calculateItemTotal = (item) => item.price * item.quantity;

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  return (
    <div className="max-w-4xl mx-auto bg-blue-100 shadow-sm rounded-lg p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Your Order</h2>

      {orderItems.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-600 text-white text-sm">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-center">Actions</th>
                <th className="p-3 text-center">Comments & Rating</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition-all duration-200">
                  <td className="p-3 text-sm text-gray-800">{item.name}</td>
                  <td className="p-3 text-center text-sm text-green-600">${item.price}</td>
                  <td className="p-3 text-center text-sm">
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 text-center text-sm text-green-600">${calculateItemTotal(item)}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 text-sm"
                    >
                      Remove
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => setSelectedItemId(item.id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      {selectedItemId === item.id ? "Hide Comments & Rating" : "Add Comment & Rating"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-sm">No items in the order.</p>
      )}

      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold text-gray-800">Total: ${calculateTotal()}</p>
        <button
          onClick={handleClearOrder}
          className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 text-sm"
        >
          Clear Order
        </button>
      </div>

      {/* Show Comments & Ratings for the selected item */}
      {selectedItemId && orderItems.map((item) => {
        if (item.id === selectedItemId) {
          return (
            <div key={item.id} className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              
              {/* Comment Input */}
              <textarea
                className="w-full p-2 mt-2 border text-black rounded-lg bg-white text-sm"
                placeholder="Write a comment..."
                value={comments[item.id] || ""}
                onChange={(e) => setComments({ ...comments, [item.id]: e.target.value })}
              />
              <button
                onClick={() => handleAddComment(item.id)}
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Add Comment
              </button>

              {/* Rating Input */}
              <div className="flex items-center text-black mt-4 space-x-3">
                <label htmlFor={`rating-${item.id}`} className="text-sm text-black text-gray-600">Rating:</label>
                <input
                  type="number"
                  id={`rating-${item.id}`}
                  className="w-12 p-1 text-center text-black border rounded-lg bg-white"
                  min="1"
                  max="5"
                  value={ratings[item.id] || ""}
                  onChange={(e) => setRatings({ ...ratings, [item.id]: Number(e.target.value) })}
                />
                <button
                  onClick={() => handleAddRating(item.id)}
                  className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  Submit Rating
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default OrderManagement;
