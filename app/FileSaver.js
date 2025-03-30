// Importoni funksionin saveAs nga file-saver
import { saveAs } from "file-saver";

const saveEmployeeDataAsFile = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const blob = new Blob([JSON.stringify(employees, null, 2)], { type: "application/json" });
  
  // Krijo dhe shkarko skedarin JSON
  saveAs(blob, "employees.json");
};

export default function DownloadButton() {
  return (
    <div>
      <button onClick={saveEmployeeDataAsFile} className="bg-blue-500 text-white px-4 py-2 rounded">
        Shkarko të Dhënat
      </button>
    </div>
  );
}
