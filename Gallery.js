import React from 'react';
import Profile from './Profile';

export default function Gallery() {
  return (
    <section className="py-8 bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Amazing Scientists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
