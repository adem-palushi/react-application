// app/form/page.js

"use client";  // Mark this file as a Client Component

import DndProviderClient from '../DndProviderClient';  // Import the client component
import FormPage from "@/components/FormPage";  // Component that uses drag-and-drop

const FormPageWithDnd = () => {
  return (
    <DndProviderClient>  {/* Wrap FormPage with DndProviderClient */}
      <FormPage />
    </DndProviderClient>
  );
};

export default FormPageWithDnd;
