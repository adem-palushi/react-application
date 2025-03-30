"use client";


import React from "react";
import { useRouter } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Page, Gallery, AvatarProfile } from "../components";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-center text-5xl font-extrabold mt-8 mb-12">
          Welcome to the Gallery
        </h1>

        {/* Buton për të shkuar në faqen e Formës */}
        <button
          onClick={() => router.push("/form")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 mb-6"
        >
          Go to Form Page
        </button>

         {/* Buton për të shkuar te Restaurant Management */}
         <Link href="/restaurant-management" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 mb-6">
          Go to Restaurant Management Page
        </Link>

         {/* Buton për të shkuar te New Components Page */}
         <Link href="/new-components" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 mb-6">
          Employee Management
        </Link>

        {/* Komponenti Page */}
        <div className="mt-8 w-full max-w-md">
          <Page />
        </div>

        {/* Komponenti AvatarProfile */}
        <div className="mt-8">
          <AvatarProfile />
        </div>

        {/* Komponenti Gallery */}
        <div className="mt-8 w-full max-w-5xl">
          <Gallery />
        </div>
      </div>
    </DndProvider>
  );
}
