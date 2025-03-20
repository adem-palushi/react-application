//Kjo direktivë tregon që ky komponent është një Client Component në Next.js, që do të thotë se do të ekzekutohet në browser, jo në server.
"use client";

//React është libraria kryesore për ndërtimin e komponentëve UI.
//import { useState }: useState është një hook në React që lejon ruajtjen dhe përditësimin e të dhënave brenda një komponenti.
import React, { useState } from "react";

// export default: Eksporton komponentin që mund të përdoret në skedarë të tjerë.
// Page është një komponent funksional që përmban të gjithë kodin tonë.
// React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
export default function Page() {

// message: Variabla që ruan tekstin që do të shfaqet në ekran.
// setMessage: Funksioni që përditëson vlerën e message.
// useState("Hello, React!"): Vendos vlerën fillestare "Hello, React!"
  const [message, setMessage] = useState("Hello, React!");

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-2xl p-4 w-80 text-center z-50">
      <h1 className="text-xl font-bold text-gray-800 mb-4">{message}</h1>

      <div className="flex gap-4 justify-center mb-4">
        <button
          onClick={() => setMessage("You clicked Button 1!")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Button 1
        </button>

        <button
          onClick={() => setMessage("Button 2 was clicked!")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Button 2
        </button>
      </div>

      <button
        onClick={() => setMessage("Hello, React!")}
        className="text-gray-600 underline hover:text-gray-800"
      >
        Reset Message
      </button>
    </div>
  );
}
