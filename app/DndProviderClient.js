// app/DndProviderClient.js

"use client"; 

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DndProviderClient = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};

export default DndProviderClient;
