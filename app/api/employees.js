// "use client"; 

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "employees.json");

    // Ensure the employees.json file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Data file not found" });
    }

    const employees = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const { id, screenshot, video } = req.body;
    const index = employees.findIndex((e) => e.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Employee not found" });
    }

    employees[index] = { ...employees[index], screenshot, video };

    fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
    return res.status(200).json({ message: "Employee data saved!" });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
