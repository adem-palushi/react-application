import React, { useState } from 'react';

export default function Profile() {
  // Përdorimi i useState për të menaxhuar foton dhe tekstin
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/MK3eW3Am.jpg');
  const [imageName, setImageName] = useState('Katherine Johnson');
  
  // Funksioni për të fshirë foton
  const handleDelete = () => {
    setImageUrl(''); // Përdorimi i një URL bosh për të hequr foton
    setImageName('');
  };

  // Funksioni për të ngarkuar një foto të re (simulon procesin e ngarkimit)
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Përdor URL të ngarkuar
      };
      reader.readAsDataURL(file);
    }
  };

  // Funksioni për të edituar emrin e personit
  const handleEdit = () => {
    const newName = prompt('Enter new name:', imageName);
    if (newName) {
      setImageName(newName);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Foto dhe emri */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageName}
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md"
        />
      )}
      <h2 className="text-center text-3xl font-semibold text-white">{imageName || 'No name set'}</h2>
      
      {/* Butona për veprime */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg text-sm transition duration-300"
        >
          Edit Photo
        </button>
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
          id="uploadButton"
        />
        <label
          htmlFor="uploadButton"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg text-sm cursor-pointer transition duration-300"
        >
          Upload Photo
        </label>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg text-sm transition duration-300"
        >
          Delete Photo
        </button>
      </div>
    </div>
  );
}
