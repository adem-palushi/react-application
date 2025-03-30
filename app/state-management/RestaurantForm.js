"use client"; 

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addItem } from "../state-management/RestaurantSlice";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({ name: "", price: "", description: "", category: "Pizza", paymentMethod: "", amount: "" });
  const [showModal, setShowModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price && formData.paymentMethod) {
      const id = uuidv4();
      dispatch(addItem({ ...formData, id }));
      setFormData({ name: "", price: "", description: "", category: "Pizza", paymentMethod: "", amount: "" });
    }
  };

  const handlePayment = () => {
    console.log("Payment Info:", cardDetails, formData.amount);
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-purple-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add New Menu Item</h2>

        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="mb-4">
          <label htmlFor="category" className="text-lg text-gray-600 mb-2 block">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Pizza">Pizza</option>
            <option value="Hot Drinks">Hot Dishes</option>
            <option value="Cold Drinks">Cold Drinks</option>
            <option value="Pasta">Pasta</option>
            <option value="Antipasta">Antipasta</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-lg text-gray-600 block mb-2">Payment Method:</label>
          <div className="space-y-2">
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="paymentMethod"
                value="Card"
                checked={formData.paymentMethod === "Card"}
                onChange={handleChange}
                className="mr-2 text-green-600"
                onClick={() => setShowModal(true)}
              />
              Card
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={formData.paymentMethod === "Cash"}
                onChange={handleChange}
                className="mr-2 text-green-600"
              />
              Cash
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Add Item
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Card Details</h2>

            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={handleCardChange}
              className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardChange}
              className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-black rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={handlePayment}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantForm;
