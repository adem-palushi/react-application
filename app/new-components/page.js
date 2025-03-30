"use client";

import React, { useState, useEffect } from "react";
import EmployeeCard from "../../components/EmployeeCard";
import EmployeeManagement from "../../components/EmployeeManagement";
import ScreenshotButton from "../../components/ScreenshotButton";
import VideoRecorder from "../../components/VideoRecorder";

export default function NewComponentsPage() {
  const [employees, setEmployees] = useState([
    { id: "1", name: "Adem Palushi", entrance: "08:00", leave: "16:00", screenshot: null, video: null },
    { id: "2", name: "John Doe", entrance: "09:00", leave: "17:00", screenshot: null, video: null },
  ]);

  const handleSave = (id, screenshot, video, entrance, leave) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { ...emp, screenshot, video, entrance, leave }
          : emp
      )
    );
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-600 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Employee Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Employee Directory</h2>
          <EmployeeManagement />
        </div>

       {/* Employee Section */}
       <div className="flex flex-wrap justify-start gap-6">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onSave={handleSave}
          />
        ))}
      </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Capture Screenshots</h2>
          {employees.map((employee) => (
            <ScreenshotButton
              key={employee.id}
              employee={employee}
              onCapture={(screenshot) =>
                handleSave(employee.id, screenshot, employee.video, employee.entrance, employee.leave)
              }
            />
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Record Video</h2>
          {employees.map((employee) => (
            <VideoRecorder
              key={employee.id}
              employee={employee}
              onRecord={(video) =>
                handleSave(employee.id, employee.screenshot, video, employee.entrance, employee.leave)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
